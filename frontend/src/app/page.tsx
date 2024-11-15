"use client";

import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const API_URL = 'http://localhost:8000/api'; // Laravel API URL'si

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Formun varsayılan davranışını engelle

    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
      });
      console.log("Kayıt başarılı:", response.data);
      setSuccess('Kayıt başarılı!');
      setError('');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // err.response mevcutsa güvenle erişebilirsiniz
        console.error("Kayıt hatası:", err.response?.data || err.message);
        setError('Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.');
      } else {
        console.error("Beklenmeyen bir hata oluştu:", err);
        setError('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
      }
      setSuccess('');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log("Giriş başarılı:", response.data);
      setSuccess('Giriş başarılı!');
      setError('');
      // Başarılı giriş sonrası yönlendirme yapabilirsiniz
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // err.response mevcutsa güvenle erişebilirsiniz
        console.error("Giriş hatası:", err.response?.data || err.message);
        setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
      } else {
        console.error("Beklenmeyen bir hata oluştu:", err);
        setError('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
      }
      setSuccess('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Ana Sayfa</h1>

      {/* Kayıt Formu */}
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Ad:</label>
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
          <label htmlFor="register-email" className="block text-gray-700 text-sm font-bold mb-2">E-posta:</label>
          <input
            type="email"
            id="register-email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Şifre:</label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Kayıt Ol
        </button>
      </form>

      {/* Giriş Formu */}
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Giriş Yap</h2>
        <div className="mb-4">
          <label htmlFor="login-email" className="block text-gray-700 text-sm font-bold mb-2">E-posta:</label>
          <input
            type="email"
            id="login-email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="login-password" className="block text-gray-700 text-sm font-bold mb-2">Şifre:</label>
          <input
            type="password"
            id="login-password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Giriş Yap
        </button>
      </form>

      {/* Hata ve Başarı Mesajları */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}
