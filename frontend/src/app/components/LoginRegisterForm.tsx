// app/components/LoginRegisterForm.tsx

"use client";

import { useState } from "react";
import axios from "axios";

interface LoginRegisterFormProps {
  onClose: () => void; // onClose fonksiyonunun türü
  setIsLoggedIn: (value: boolean) => void; // Giriş durumu güncelleme fonksiyonu
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({ onClose, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true); // Varsayılan olarak giriş formu açık
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_LOGIN_URL = 'http://localhost:8000/api/login'; // Giriş API URL'si
  const API_REGISTER_URL = 'http://localhost:8000/api/register'; // Kayıt API URL'si

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(""); // Önceki hata mesajını temizle

    try {
      const response = await axios.post(API_LOGIN_URL, {
        email,
        password,
      });

      // Başarılı girişte token'ı saklayabilirsiniz
      const token = response.data.token;
      console.log("Giriş başarılı, token:", token);
      // Burada token'ı saklamak için bir yöntem ekleyebilirsiniz (örneğin, localStorage)

      setIsLoggedIn(true); // Giriş durumu güncelle
      onClose(); // Form başarılıysa modalı kapat
    } catch (error) {
      console.error('Giriş sırasında hata oluştu:', error);
      setErrorMessage('Yanlış e-posta veya şifre.'); // Hata mesajını ayarla
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(""); // Önceki hata mesajını temizle

    try {
      const response = await axios.post(API_REGISTER_URL, {
        name,
        email,
        password,
      });

      console.log("Kayıt başarılı:", response.data);
      // Kayıt başarılı olduğunda, giriş formuna geçebilirsiniz
      setIsLogin(true);
      onClose(); // Kayıt başarılıysa modalı kapat
    } catch (error) {
      console.error('Kayıt sırasında hata oluştu:', error);
      setErrorMessage('Kayıt işlemi sırasında bir hata oluştu.'); // Hata mesajını ayarla
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</h2>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={onClose}>
          &times; {/* Kapatma butonu */}
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus :shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Ad
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kayıt Ol
            </button>
          </div>
        </form>
      )}
      <p className="mt-4 text-center text-gray-600">
        Hesabınız yok mu?{" "}
        <button
          className="text-blue-500 hover:underline"
          onClick={() => setIsLogin(false)}
        >
          Kayıt Ol
        </button>
      </p>
    </div>
  );
};

export default LoginRegisterForm;