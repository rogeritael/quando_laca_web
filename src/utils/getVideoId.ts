export function getVideoId(url: string): string {
    const videoIdMatch = url.match(/(?:\?v=|\/embed\/|\/\d{1,2}\/|\/v\/|\.be\/)([\w\d]+)/i);
  
    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    } else {
      return ''
    }
  }