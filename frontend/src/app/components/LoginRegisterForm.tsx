// app/components/LoginRegisterForm.tsx

"use client";

import { useState } from "react";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";

interface LoginRegisterFormProps {
  onClose: () => void; // onClose fonksiyonunun türü
  setIsLoggedIn: (value: boolean) => void; // Giriş durumu güncelleme fonksiyonu
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({
  onClose,
  setIsLoggedIn,
}) => {
  const [isLogin, setIsLogin] = useState(true); // Varsayılan olarak giriş formu açık
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_LOGIN_URL = "http://localhost:8000/api/login"; // Giriş API URL'si
  const API_REGISTER_URL = "http://localhost:8000/api/register"; // Kayıt API URL'si

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(""); // Önceki hata mesajını temizle

    try {
      const response = await axios.post(API_LOGIN_URL, {
        email,
        password,
      });

      const token = response.data.token;
      console.log("Giriş başarılı, token:", token);
      setIsLoggedIn(true); // Giriş durumu güncelle
      alert("Başarıyla giriş yaptınız!"); // Başarı mesajı
      onClose(); // Form başarılıysa modalı kapat
    } catch (error) {
      console.error("Giriş sırasında hata oluştu:", error);
      setErrorMessage("Yanlış e-posta veya şifre."); // Hata mesajını ayarla
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
      setIsLogin(true); // Kayıt başarılı olduğunda giriş formuna geç
      alert("Başarıyla kayıt oldunuz!"); // Başarı mesajı
      onClose(); // Kayıt başarılıysa modalı kapat
    } catch (error) {
      console.error("Kayıt sırasında hata oluştu:", error);
      setErrorMessage("Kayıt işlemi sırasında bir hata oluştu."); // Hata mesajını ayarla
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-4xl">
      {/* Sol Taraf */}
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </h2>
        <p className="text-gray-600 mb-4">
          {isLogin
            ? "Hesabınıza giriş yapın veya yeni bir hesap oluşturun."
            : "Hesabınızı oluşturmak için gerekli bilgileri doldurun."}
        </p>
        <button
          className="flex items-center bg-white border border-gray-300 py-2 px-4 rounded hover:shadow-lg"
          onClick={onClose}
        >
          <FaGoogle className="mr-2" size={24} /> {/* Google logosu */}
          <span className="text-gray-800">Google ile Giriş Yap / Kayıt Ol</span>
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Üye olarak / giriş yaparak Yalova Konusuyor un Kullanım Koşulları ve Gizlilik Politikasını kabul etmiş olursunuz.
        </p>
      </div>

      {/* Sağ Taraf */}
      <div className="md:w-1/2 p-8 border-l border-gray-300">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <div className=" mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
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
                Giriş Yap
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
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
            onClick={() => setIsLogin(!isLogin)} // Burada form geçişini sağlıyoruz
          >
            {isLogin ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegisterForm;