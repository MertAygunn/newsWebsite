import React from 'react';

// Props tipini tanımlayın
interface Ads {
  title: string; // title prop'unun tipi string
}

function AdColumn({ title }: Ads) {
  return (
    <div className="flex items-center mb-4 p-4">
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  );
}

export default AdColumn;