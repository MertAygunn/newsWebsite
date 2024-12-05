import React from 'react';
import Image from 'next/image';

interface CategoryProps {
  title: string;
  logo?: string;
}

function Category({ title, logo }: CategoryProps) {
  return (
    <div className="flex items-center mb-4 p-4 cursor-pointer hover:bg-gray-200 rounded-xl">
      {logo && (
        <div className="relative w-6 h-6 mr-2">
          <Image 
            src={logo} 
            alt={title} 
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 600px) 25vw, 6rem"
          />
        </div>
      )}
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  );
}

export default Category;
