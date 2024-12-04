// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'; 
import LoginRegisterForm from './components/LoginRegisterForm'; 
import Modal from './components/Modal'; 
//import VideoSection from "./components/VideoSection";
import PostaIcerik from "./components/PostaIcerik";
import CategoryColumn from "./components/CategoryColumn";
import AdColumn from "./components/AdColumn";
import Stories from "./components/Stories";
import Carousel from "./components/Carousel";

// Post arayüzü
interface Post {
  id: number; 
  title: string; 
  content: string; 
  image: string | null; 
  created_at: string; 
}

export default function HomePage() {
  const [postTitle, setPostTitle] = useState<string>(""); 
  const [postContent, setPostContent] = useState<string>(""); 
  const [postImage, setPostImage] = useState<File | null>(null); 
  const [posts, setPosts] = useState<Post[]>([]); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Kullanıcı giriş durumu
  const API_URL = 'http://localhost:8000/api/posts'; 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(API_URL); 
        setPosts(response.data); 
      } catch (error) {
        console.error('Gönderiler alınırken hata oluştu:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postTitle.trim() && postContent.trim()) {
      const formData = new FormData();
      formData.append('title', postTitle);
      formData.append('content', postContent);
      if (postImage) {
        formData.append('image', postImage);
      }

      try {
        const response = await axios.post<Post>(API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setPosts((prevPosts) => [...prevPosts, response.data]); 
        setPostTitle(""); 
        setPostContent(""); 
        setPostImage(null); 
      } catch (error) {
        console.error('Gönderi eklenirken hata oluştu:', error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {
      <div className="w-1/6 p-4">
        <AdColumn title={""} />
      </div>
      } 
      {/* Kategori Sütunu */}
      <div className="w-1/8 p-4">
        <CategoryColumn />
      </div>
  
      {/* Ana İçerik Alanı */}
      <div className="flex flex-col items-center justify-start w-3/4 p-4">
  
        {/* VideoSection Bileşeni */}
        <div className="w-full flex justify-center mb-6">
          <Stories />
        </div>
        
        <div className="flex flex-col max-w-3xl mx-auto">
        <div className="border-b border-gray-300 mb-6"></div> {/* Çizgi */}
        <Carousel/>
        <div className="border-b border-gray-300 mt-8"></div> {/* Çizgi */}
        </div>

        <PostaIcerik />
  
        {/* Kullanıcı Giriş Durumu Kontrolü */}
        {isLoggedIn ? (
          <>
            {/* Gönderi Paylaşım Formu */}
            <form onSubmit={handlePostSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                placeholder="Başlık"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                required
              />
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                rows={4}
                placeholder="İçerik"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPostImage(e.target.files ? e.target.files[0] : null)}
                className="mb-4"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Gönder
              </button>
            </form>
  
            {/* Gönderi Listesi */}
            <div className="w-full max-w-xl">
              {posts.map((post) => (
                <div key={post.id} className="bg-white shadow-md rounded px-4 py-2 mb-4">
                  <h2 className="font-bold">{post.title}</h2>
                  <p>{post.content}</p>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="mt-2"
                    />
                  ) : (
                    <p className="text-gray-500">Görsel mevcut değil.</p>
                  )}
                  <small className="text-gray-500">{new Date(post.created_at).toLocaleString()}</small>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">Devamını Görmek İçin Lütfen Giriş Yapın!</p>
        )}
  
        {/* Modal Bileşeni */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <LoginRegisterForm onClose={() => setIsModalOpen(false)} setIsLoggedIn={setIsLoggedIn} />
        </Modal>
      </div>
      <div className="w-1/6 p-4">
        <AdColumn title={""} />
      </div>
    </div>
  );
}