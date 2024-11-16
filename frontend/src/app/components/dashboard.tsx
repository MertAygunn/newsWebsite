// frontend/src/app/dashboard.tsx

"use client";

import React from 'react';
import axios from 'axios';

const Dashboard = () => {
    const handleVideoSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const videoData = {
            title: formData.get('videoTitle'),
            url: formData.get('videoUrl'),
            description: formData.get('videoDescription'),
        };

        try {
            const response = await axios.post('/api/videos', videoData);
            console.log('Video eklendi:', response.data);
            event.target.reset(); // Formu sıfırla
        } catch (error) {
            console.error('Video eklenirken hata oluştu:', error);
        }
    };

    const handlePostSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const postData = {
            title: formData.get('postTitle'),
            content: formData.get('postContent'),
            image: formData.get('postImage'),
        };

        try {
            const response = await axios.post('/api/posts', postData);
            console.log('Yazı eklendi:', response.data);
            event.target.reset(); // Formu sıfırla
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
                <form id="videoForm" onSubmit={handleVideoSubmit}>
                    <div className="mb-4">
                        <label htmlFor="videoTitle" className="block text-gray-700 text-sm font-bold mb-2">Başlık:</label>
                        <input type="text" id="videoTitle" name="videoTitle" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="videoUrl" className="block text-gray-700 text-sm font-bold mb-2">Video URL'si:</label>
                        <input type="url" id="videoUrl" name="videoUrl" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="videoDescription" className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
                        <textarea id="videoDescription" name="videoDescription" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Video Ekle</button>
                </form>
            </div>

            {/* Yazı ve Görsel Ekleme Formu */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Yazı ve Görsel Ekle</h2>
                <form id="postForm" onSubmit={handlePostSubmit}>
                    <div className="mb-4">
                        <label htmlFor="postTitle" className="block text-gray-700 text-sm font-bold mb-2">Başlık:</label>
                        <input type="text" id="postTitle" name="postTitle" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">İçer ik:</label>
                        <textarea id="postContent" name="postContent" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postImage" className="block text-gray-700 text-sm font-bold mb-2">Görsel Yükle:</label>
                        <input type="file" id="postImage" name="postImage" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" accept="image/*" required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Yazı Ekle</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;