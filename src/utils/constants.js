import {
  faHouse,
  faHistory,
  faVideo,
  faClock,
  faUserCircle,
  faArrowTrendUp,
  faMusic,
  faFilm,
  faSignal,
  faSailboat,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

const GOOGLE_API_KEY ="AIzaSyBYjDH_bwUC2aTL7qd8n0v_NmoKolyXRGg"

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_PROFILE = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=UCoRTboOd171AXF2ys7p3gkg&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBYjDH_bwUC2aTL7qd8n0v_NmoKolyXRGg"


export function getTimeSinceUpload(publishedAt) {
    const now = new Date();
    const uploadDate = new Date(publishedAt);
  
    const timeDifferenceInSeconds = Math.floor((now - uploadDate) / 1000);
  
    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 2592000) {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 31536000) {
      const months = Math.floor(timeDifferenceInSeconds / 2592000);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(timeDifferenceInSeconds / 31536000);
      return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
  }
  
  
  export function getViews(viewCount) {
    if (viewCount < 1000) {
      return viewCount.toString(); // Less than 1K, no abbreviation
    } else if (viewCount < 1000000) {
      return (viewCount / 1000).toFixed(1) + 'K'; // Thousands
    } else if (viewCount < 1000000000) {
      return (viewCount / 1000000).toFixed(1) + 'M'; // Millions
    } else {
      return (viewCount / 1000000000).toFixed(1) + 'B'; // Billions
    }
  }

  export const homelist = [
    {
      logo: faHouse,
      title: "Home",
    },
    {
      logo: faVideoCamera,
      title: "Shorts",
    },
    {
      logo: faSailboat,
      title: "Subscriptions",
    },
  ];
  export const yourlist = [
    {
      logo: faHouse,
      title: "Your Channel",
    },
    {
      logo: faHistory,
      title: "History",
    },
    {
      logo: faVideo,
      title: "Your Videos",
    },
    {
      logo: faClock,
      title: "Watch Later",
    },
  ];
  export const subscription = [
    {
      logo: faUserCircle,
      title: "Aman Wilson",
    },
    {
      logo: faUserCircle,
      title: "ZemTV",
    },
    {
      logo: faUserCircle,
      title: "EduPoint",
    },
    {
      logo: faUserCircle,
      title: "MrBeast",
    },
  ];
  
  export const explore = [
    {
      logo: faArrowTrendUp,
      title: "Trending",
    },
    {
      logo: faMusic,
      title: "Music",
    },
    {
      logo: faFilm,
      title: "Movies",
    },
    {
      logo: faSignal,
      title: "Live",
    },
  ];
  
  