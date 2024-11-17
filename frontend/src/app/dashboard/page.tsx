// app/dashboard.tsx

"use client";

import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    // YouTube Videosu Ekleme Formu için state
    const [videoTitle, setVideoTitle] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [videoDescription, setVideoDescription] = useState("");

    // Yazı ve Görsel Ekleme Formu için state
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postImage, setPostImage] = useState<File | null>(null);

    // YouTube Videosu Ekleme işlemi
    const handleVideoSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const videoData = {
            title: videoTitle,
            url: videoUrl,
            description: videoDescription,
        };

        try {
            const response = await axios.post('/api/videos', videoData);
            console.log('Video eklendi:', response.data);
            // Formu sıfırla
            setVideoTitle("");
            setVideoUrl("");
            setVideoDescription("");
        } catch (error) {
            console.error('Video eklenirken hata oluştu:', error);
        }
    };

    // Yazı ve Görsel Ekleme işlemi
    const handlePostSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', postTitle);
        formData.append('content', postContent);
        if (postImage) {
            formData.append('image', postImage);
        }

        try {
            const response = await axios.post('/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Yazı eklendi:', response.data);
            // Formu sıfırla
            setPostTitle("");
            setPostContent("");
            setPostImage(null);
        } catch (error) {
            console.error('Yazı eklenirken hata oluştu:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {/* YouTube Videosu Ekleme Formu */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">YouTube Videosu Ekle</h2>
                <form onSubmit={handleVideoSubmit}>
                    <div className="mb-4">
                        <label htmlFor="videoTitle" className="block text-gray-700 text-sm font-bold mb-2">Başlık:</label>
                        <input
                            type="text"
                            id="videoTitle"
                            value={videoTitle}
                            onChange={(e) => setVideoTitle(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="videoUrl" className="block text-gray-700 text-sm font-bold mb-2">Video URL:</label>
                        <input
                            type="url"
                            id="videoUrl"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="videoDescription" className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
                        <textarea
                            id="videoDescription"
                            value={videoDescription}
                            onChange={(e) => setVideoDescription(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
 required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Video Ekle
                    </button>
                </form>
            </div>

            {/* Yazı ve Görsel Ekleme Formu */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Yazı ve Görsel Ekle</h2>
                <form onSubmit={handlePostSubmit}>
                    <div className="mb-4">
                        <label htmlFor="postTitle" className="block text-gray-700 text-sm font-bold mb-2">Başlık:</label>
                        <input
                            type="text"
                            id="postTitle"
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">İçerik:</label>
                        <textarea
                            id="postContent"
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postImage" className="block text-gray-700 text-sm font-bold mb-2">Görsel Yükle:</label>
                        <input
                            type="file"
                            id="postImage"
                            onChange={(e) => setPostImage(e.target.files ? e.target.files[0] : null)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Yazı Ekle
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;