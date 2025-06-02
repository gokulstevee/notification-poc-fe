import {
  BellIcon,
  ChatBubbleLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BellNotificationType } from "@typees/Notification";
import { api } from "@utils/apis";
import { fireToastSuccess } from "@utils/toaster";
import { useEffect, useState } from "react";
import useOutSideClick from "src/hooks/useOutSideClick";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL || "";

const BellNotification = () => {
  const [isNotificationOpened, setIsNotificationOpened] =
    useState<boolean>(false);

  const [notificationList, setNotificationList] = useState<
    BellNotificationType[]
  >([]);

  const [selectedNotificationIds, setSelectedNotificationIds] = useState<
    string[]
  >([]);

  useEffect(() => {
    const fetchNotifications = () => {
      const listenerUrl = api.post.notificationListener();
      const token = localStorage.getItem("token");

      fetchEventSource(`${baseUrl}/${listenerUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        onmessage(msg) {
          try {
            const data = JSON.parse(msg.data);
            if (data) {
              setNotificationList((prev) => [data, ...prev]);
              fireToastSuccess(`You've got a new notification.`);
            }
          } catch (error) {
            console.error("Failed to parse SSE notification:", error);
          }
        },
        onerror(error) {
          console.error("SSE connection error:", error);
        },
      });
    };

    fetchNotifications();
  }, []);

  const handleOpenNotification = () => {
    setIsNotificationOpened(!isNotificationOpened);
  };

  const handleCloseNotification = () => {
    setIsNotificationOpened(false);
  };

  useOutSideClick({
    targetClassName: ".notification_bar",
    actionState: isNotificationOpened,
    outSideClickCallback: handleCloseNotification,
  });

  const handleRemoveNotification = (id: string) => {
    setSelectedNotificationIds([...selectedNotificationIds, id]);

    const notificationIds = [...selectedNotificationIds, id];

    const filteredNotificationList = notificationList.filter(
      (item) => !notificationIds.includes(item.id)
    );

    setNotificationList([...filteredNotificationList!]);
  };

  console.log("notificationList...", notificationList);

  return (
    <div className="relative z-[999]">
      <div
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleOpenNotification();
        }}
      >
        <BellIcon className="w-[1.5rem] text-[#475569]" />

        {notificationList.length >= 1 && (
          <div className="absolute top-[-7px] right-[-5px] rounded-full bg-orange-notify">
            <span className="text-[#ffffff] text-[0.6rem] w-[1.1rem] h-[1.1rem] leading-none flex items-center justify-center">
              {notificationList.length}
            </span>
          </div>
        )}
      </div>

      {isNotificationOpened && (
        <div className="notification_bar no-scrollbar absolute max-h-[25rem] top-[2rem] right-[-3.5rem] w-[20rem] sm:top-[2rem] sm:right-[0rem] sm:w-[22rem] overflow-x-scroll rounded-lg bg-[#ffffff] border-[#E4E4E7] border-[1.5px] py-2">
          <>
            <div>
              {notificationList.map((item, index) => (
                <div
                  key={item.content}
                  className={`${
                    index != notificationList.length - 1 &&
                    "border-b border-gray-300"
                  }`}
                >
                  <div className="cursor-default py-3 px-4 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-2">
                      <ChatBubbleLeftIcon className="mt-[0.15rem] min-w-[1.2rem] max-w-[1.2rem] text-primary" />
                      <p className="text-[#27272A] text-[0.9rem]">
                        {item.content}
                      </p>
                    </div>
                    <button onClick={() => handleRemoveNotification(item.id)}>
                      <XMarkIcon className="w-[1.3rem] cursor-pointer text-[#777879] font-extrabold" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {notificationList.length <= 0 && (
              <p className="w-full py-[1rem] text-center text-[#838383]">
                No new notification
              </p>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default BellNotification;
