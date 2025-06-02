import { Formik } from "formik";
import * as Yup from "yup";
import { fireToastError, fireToastSuccess } from "@utils/toaster";
import PrimaryButton from "@components/Button/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@utils/apis";
import FormRequiredLabel from "@components/FormRequiredLabel/FormRequiredLabel";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="text-[#000000] w-[65%] mx-auto">
      <div>
        <p className="mt-4 text-[1.2rem] font-semibold text-[#4a4a4a] text-center">
          Login
        </p>
        <div className="mt-[2rem]">
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              try {
                const resp = await api.user.loginUser({
                  email: values.email,
                  password: values.password,
                });

                console.log("resp...", resp);

                if (!resp.data?.user || !resp.data?.token) {
                  return fireToastError("Something went wrong");
                }

                localStorage.setItem("user", JSON.stringify(resp.data?.user));
                localStorage.setItem("token", resp.data.token);
                fireToastSuccess("Login successful");
                navigate("/post");
              } catch (error: any) {
                fireToastError(
                  error?.response?.data?.message ?? "Failed to update banner"
                );
                console.log("Error: ", error);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <div className="flex flex-row justify-center">
                <form noValidate onSubmit={handleSubmit} className="w-[100%]">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[0.9rem] font-medium text-[#4a4a4a]"
                    >
                      {"Email"}
                      <FormRequiredLabel />
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        required
                        className="text-[#000000] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                      />
                    </div>
                    <p className="error text-[0.8rem] text-danger">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>

                  <div className="mt-[2rem]">
                    <label
                      htmlFor="password"
                      className="block text-[0.9rem] font-medium text-[#4a4a4a]"
                    >
                      {"Password"}
                      <FormRequiredLabel />
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        required
                        className="text-[#000000] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                      />
                    </div>
                    <p className="error text-[0.8rem] text-danger">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>

                  <div className="mt-[2rem]">
                    <PrimaryButton disabled={isSubmitting} className="w-full">
                      {isSubmitting ? `${"Login"}...` : "Login"}
                    </PrimaryButton>
                  </div>
                  <div className="mt-2 w-full flex justify-end">
                    <span className="text-smoke-grey">
                      Don't have an account?
                    </span>
                    &nbsp;{" "}
                    <Link
                      to={"/signup"}
                      className="text-primary hover:underline"
                    >
                      {" "}
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
