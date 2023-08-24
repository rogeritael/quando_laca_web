import { NotificationProps } from "@/hooks/useNotifications";
        
    export function groupNotifications(notifications: NotificationProps[]) {
        function groupBy(array: NotificationProps[], property: keyof NotificationProps) {
            return array.reduce((result, obj) => {
                if (obj[property] instanceof Date) {
                    const date = obj[property] as Date;  // Cast to Date object
                    const key = date.toISOString().split('T')[0];
                    if (!result[key]) {
                        result[key] = [];
                    }
                    result[key].push(obj);
                }
                return result;
            }, {} as Record<string, NotificationProps[]>);
        }
    

        const groupedByDate = groupBy(notifications, 'created_at');
        return groupedByDate;
    }
