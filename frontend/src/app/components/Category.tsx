import React from 'react';
import Image from 'next/image';

interface CategoryProps {
  title: string; // title prop'unun tipi string
  logo?: string; // logo prop'unun tipi string (opsiyonel)
}

function Category({ title, logo }: CategoryProps) {
  return (
    <div className="flex items-center mb-4 p-4 cursor-pointer hover:bg-gray-200 rounded-xl">
      {logo && (
        <div className="relative w-6 h-6 mr-2"> {/* Boyutları ayarlamak için bir kapsayıcı div */}
          <Image 
            src={logo} 
            alt={title} 
            fill // Resmin kapsayıcı alanını doldurmasını sağlar
            style={{ objectFit: 'cover' }} // Resmin kesilmeden görünmesini sağlar
            sizes="(max-width: 600px) 25vw, 6rem" // Ekran genişliğine göre görsel boyutunu belirleyin
          />
        </div>
      )}
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  );
}

export default Category;
