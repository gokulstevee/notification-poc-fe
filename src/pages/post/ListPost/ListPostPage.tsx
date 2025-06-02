import PrimaryButton from "@components/Button/PrimaryButton";
import ContainerWrapper from "@components/ContainerWrapper/ContainerWrapper";
import HeaderWrapper from "@components/HeaderWrapper/HeaderWrapper";
import { PlusIcon } from "@heroicons/react/24/outline";
import PostList from "../components/List/PostList";
import CreatePostModal from "../components/Modal/CreatePostModal";
import { useState } from "react";
import BellNotification from "@components/ui/BellNotification/BellNotification";

const ListPostPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderWrapper className={"flex justify-between"}>
        <p className="text-[1.2rem]">Posts</p>

        <div className="flex items-center gap-4">
          <PrimaryButton
            className="px-[0.8rem] py-[0.3rem] rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex flex-row items-center">
              <PlusIcon className="w-[1.2rem] mr-[0.6rem] font-bold" />
              Create
            </div>
          </PrimaryButton>

          <div>
            <BellNotification />
          </div>
        </div>
      </HeaderWrapper>

      <CreatePostModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />

      <ContainerWrapper>
        <PostList />
      </ContainerWrapper>
    </>
  );
};

export default ListPostPage;
