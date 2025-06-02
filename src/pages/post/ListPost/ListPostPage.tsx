import PrimaryButton from "@components/Button/PrimaryButton";
import ContainerWrapper from "@components/ContainerWrapper/ContainerWrapper";
import HeaderWrapper from "@components/HeaderWrapper/HeaderWrapper";
import { PlusIcon } from "@heroicons/react/24/outline";
import PostList from "../components/List/PostList";
import CreatePostModal from "../components/Modal/CreatePostModal";
import { useState } from "react";
import BellNotification from "@components/ui/BellNotification/BellNotification";
import SecondaryButton from "@components/Button/SecondaryButton";
import { getUserFromLocalStorage } from "@utils/main";

const ListPostPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const data = getUserFromLocalStorage();

  return (
    <>
      <HeaderWrapper className={"flex justify-between"}>
        <p className="text-[1.2rem]">Posts</p>

        <div className="flex items-center gap-4">
          <p>Hi, {data?.user.name}...</p>
          <SecondaryButton
            className="px-[0.8rem] py-[0.3rem] rounded-md"
            onClick={() => handleLogout()}
          >
            Logout
          </SecondaryButton>

          <div>
            <BellNotification />
          </div>
        </div>
      </HeaderWrapper>

      {isModalOpen && (
        <CreatePostModal
          isOpen={isModalOpen}
          close={() => setIsModalOpen(false)}
        />
      )}

      <ContainerWrapper>
        <div className="flex items-center justify-end">
          <PrimaryButton
            className="px-[0.8rem] py-[0.3rem] rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex flex-row items-center">
              <PlusIcon className="w-[1.2rem] mr-[0.6rem] font-bold" />
              Create
            </div>
          </PrimaryButton>
        </div>

        <PostList />
      </ContainerWrapper>
    </>
  );
};

export default ListPostPage;
