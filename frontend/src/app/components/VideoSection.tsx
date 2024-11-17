// app/components/VideoSection.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Video {
  id: string;
  title: string;
  thumbnail: string; // Video için küçük resim URL'si
  url: string; // Video URL'si
}

const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Seçilen video URL'si
  const [videos, setVideos] = useState<Video[]>([]); // Tüm videolar

  // YouTube Shorts videosu
  const shortsVideo: Video = {
    id: "TMPmAHgy-wM", // YouTube video ID'si
    title: "Kısa Video - YouTube Shorts",
    thumbnail: "https://img.youtube.com/vi/TMPmAHgy-wM/0.jpg", // Thumbnail URL'si
    url: "https://www.youtube.com/embed/TMPmAHgy-wM", // Video URL'si
  };

  // Videoları ayarlamak için useEffect
  useEffect(() => {
    // Shorts videosunu başlangıçta ekle
    setVideos([shortsVideo]);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 overflow-x-auto p-4 bg-gray-100 rounded-lg shadow-md">
        {videos.map(video => (
          <div key={video.id} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill" // Görselin alanı doldurmasını sağlar
                className="rounded-full cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedVideo(video.url)} // Video tıklandığında URL'yi ayarla
              />
            </div>
            <span className="text-xs text-center mt-1">{video.title}</span>
          </div>
        ))}
      </div>

      {/* Seçilen video için iframe */}
      {selectedVideo && (
        <div className="mt-4 w-full max-w-xs h-96 relative">
          <iframe
            width="100%"
            height="100%"
            src={selectedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0"
          ></iframe>
          <button onClick={() => setSelectedVideo(null)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
            Kapat
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoSection;