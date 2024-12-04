// app/components/VideoSection.tsx

"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

interface ExtendedHTMLIFrameElement extends HTMLIFrameElement {
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<ExtendedHTMLIFrameElement | null>(null);

  const videos: Video[] = [
    {
      id: "TMPmAHgy-wM",
      title: "Kısa Video - YouTube Shorts",
      thumbnail: "https://img.youtube.com/vi/TMPmAHgy-wM/0.jpg",
      url: "https://www.youtube.com/embed/sph6U1b1EgQ?autoplay=1&playsinline=1", // Sadece autoplay parametresi eklendi
    },
    {
      id: "VPzFzDjHhFI",
      title: "Diğer Kısa Video - YouTube Shorts",
      thumbnail: "https://img.youtube.com/vi/VPzFzDjHhFI/0.jpg",
      url: "https://www.youtube.com/embed/VPzFzDjHhFI?autoplay=1&playsinline=1", // Sadece autoplay parametresi eklendi
    }
  ];

  const openFullscreen = () => {
    if (videoRef.current) {
      const iframe = videoRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 overflow-x-auto p-4 bg-gray-100 rounded-lg shadow-md">
        {videos.map(video => (
          <div key={video.id} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill"
                className="rounded-full cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => {
                  setSelectedVideo(video.url); // Sadece tıklanınca video URL'sini ayarla
                  // Burada tam ekran açma işlemini video açılmadan önce yapıyoruz
                  setTimeout(openFullscreen, 100); // iframe'in render edilmesi için kısa bir bekleme süresi
                }}
              />
            </div>
            <span className="text-xs text-center mt-1">{video.title}</span>
          </div>
        ))}
      </div>
  
      {selectedVideo && (
        <div className="mt-4 w-full h-screen relative"> {/* Tam ekran için h-screen kullanıldı */}
          <iframe
            ref={videoRef}
            width="100%"
            height="100%"
            src={selectedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute top-0 left-0"
          ></iframe>
          <button 
            onClick={() => setSelectedVideo(null)} 
            className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <span className="text-xl font-bold">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoSection;