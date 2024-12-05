import React from 'react';

interface Ads {
  title: string;
}

function AdColumn({ title }: Ads) {
  return (
    <div className="flex items-center mb-4 p-4">
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  );
}

export default AdColumn;