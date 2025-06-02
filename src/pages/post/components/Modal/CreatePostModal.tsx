import PrimaryButton from "@components/Button/PrimaryButton";
import FormRequiredLabel from "@components/FormRequiredLabel/FormRequiredLabel";
import Modal from "@components/Modal/Modal";
import { api } from "@utils/apis";
import { fireToastError } from "@utils/toaster";
import { useFormik } from "formik";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "src/state/hooks";
import { setIsFixedLoading } from "src/state/reducers/layout";
import { setRefreshToPullUpdateList } from "src/state/reducers/post";
import * as Yup from "yup";

const schema = Yup.object().shape({
  content: Yup.string().trim().required("Content is required"),
});

const CreatePostModal = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { isFixedLoading } = useAppSelector((state) => state.layout);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(setIsFixedLoading(true));
        const resp = await api.post.createPost({ content: values.content });

        if (resp.status != 201) return fireToastError("Something went wrong");

        resetForm();
        dispatch(setRefreshToPullUpdateList(true));
        close();
      } catch (error: any) {
        console.log("Error: ", error);
        fireToastError(
          error?.response?.data?.message ?? "Couldn't create post"
        );
      } finally {
        dispatch(setIsFixedLoading(false));
      }
    },
  });

  const handleClose = () => {
    formik.resetForm();
    close();
  };

  return (
    <Modal
      isOpen={isOpen}
      close={handleClose}
      modalHeader="Add Post"
      isClosable={true}
      isOutSideClosable={false}
    >
      <form noValidate onSubmit={formik.handleSubmit} className="w-[100%]">
        <div className="mt-[2rem]">
          <label
            htmlFor="content"
            className="block text-[0.9rem] font-medium text-[#4a4a4a]"
          >
            Content
            <FormRequiredLabel />
          </label>
          <div className="mt-1">
            <textarea
              id="content"
              name="content"
              rows={4}
              placeholder="Enter content"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
              required
              className="text-[#000000] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
            />
          </div>
          <p className="error text-[0.8rem] text-[#ff2424]">
            {formik.errors.content &&
              formik.touched.content &&
              formik.errors.content}
          </p>
        </div>

        <div className="mt-[2rem] flex justify-end">
          <PrimaryButton
            type="submit"
            className="flex justify-end"
            disabled={isFixedLoading}
          >
            Create
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
};

export default memo(CreatePostModal);
