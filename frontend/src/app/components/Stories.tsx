import React, { useState, useRef, useEffect } from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Yalova",
    story: "https://i.ytimg.com/vi/sph6U1b1EgQ/oar2.jpg",
    profile: "/images/yalova.jpg",
    videoUrl: "https://www.youtube.com/embed/sph6U1b1EgQ?autoplay=1&playsinline=1",
  },
  {
    name: "Armutlu",
    story: "https://i.ytimg.com/vi/dbIFOscD7Ow/oar2.jpg",
    profile: "/images/armutlu.jpg",
    videoUrl: "https://www.youtube.com/embed/dbIFOscD7Ow?autoplay=1&playsinline=1",
  },
  {
    name: "Termal",
    story: "https://i.ytimg.com/vi/JFhU3pxz0Ig/oar2.jpg",
    profile: "/images/termal.jpg",
    videoUrl: "https://www.youtube.com/embed/JFhU3pxz0Ig?autoplay=1&playsinline=1",
  },
  {
    name: "Altınova",
    story: "https://i.ytimg.com/vi/2CfwIhG7DnM/oar2.jpg",
    profile: "/images/altinova.jpg",
    videoUrl: "https://www.youtube.com/embed/2CfwIhG7DnM?autoplay=1&playsinline=1",
  },
  {
    name: "Çınarcık",
    story: "https://i.ytimg.com/vi/5Ly8_6e0V_M/oar2.jpg",
    profile: "/images/cinarcik.jpg",
    videoUrl: "https://www.youtube.com/embed/5Ly8_6e0V_M?autoplay=1&playsinline=1",
  },
];

const Stories: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const openFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null); // Videoyu kapat
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        closeVideo(); // Tam ekrandan çıkıldığında video kapanır
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          story={story.story}
          profile={story.profile}
          onClick={() => {
            setSelectedVideo(story.videoUrl); // Video URL'sini ayarla
            setTimeout(openFullscreen, 100); // Tam ekran açma işlemi
          }} 
          videoUrl={story.videoUrl} // videoUrl prop'unu geçiyoruz
        />
      ))}

{selectedVideo && (
  <div className="fixed inset-0 bg-black z-50"> {/* Tam ekran arka planı */}
    <iframe
      ref={videoRef}
      width="100%"
      height="100%"
      src={selectedVideo}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
    <button 
      onClick={closeVideo} 
      className="absolute top-2 right-2 z-60 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center" // z-60 ile z-index artırıldı
    >
      <span className="text-xl font-bold">&times;</span>
    </button>
  </div>
)}
    </div>
  );
};

export default Stories;