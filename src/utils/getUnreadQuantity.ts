import { NotificationProps } from "@/hooks/useNotifications"

export function getUnreadQuantity(notifications: NotificationProps[]){
    const unreadNotifications = notifications.filter((notification) => !notification.isRead);
    return unreadNotifications.length
}