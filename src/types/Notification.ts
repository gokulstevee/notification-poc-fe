export enum NotificationTypes {
  LIKE_NOTIFICATION = "LIKE_NOTIFICATION",
}

export type BellNotificationType = {
  id: string;
  content: string;
  createdAt: string;
  type: NotificationTypes;
};
