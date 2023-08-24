import { useState } from "react";

export interface NotificationProps {
    image: string;
    title: string;
    description: string;
    created_at: Date;
}

export function useNotifications(){
    const [userNotifications, setUserNotifications] = useState<NotificationProps[]>([])
}