export const formatDate = (dateInput: string | number) => {
    const modifiedDate = new Date(dateInput);
    const now = new Date();

    const diffMs = now.getTime() - modifiedDate.getTime();

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 31);

    const year = modifiedDate.getUTCFullYear();
    const month = (modifiedDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = modifiedDate.getUTCDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    let message = '';
    if (diffMinutes < 60) {
        message = diffMinutes <= 1 
            ? ' 1 minute ago' 
            : ` ${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
        message = diffHours === 1 
            ? '1 hour ago' 
            : `${diffHours} hours ago`;
    } else if (diffDays < 31) {
        message = diffDays === 1 
            ? '1 day ago' 
            : `${diffDays} days ago`;
    } else {
        message = diffMonths === 1 
            ? '1 month ago' 
            : `${diffMonths} months ago`;
    }

    return {
        message
    };
};
