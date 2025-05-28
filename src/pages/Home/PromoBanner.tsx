import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-blue-600 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mb-4">
          MỚI CỰC HOT!
        </div>
        <h2 className="text-3xl font-bold mb-2">TẢI APP NHẬN QUÀ</h2>
        <p className="text-xl mb-4">Tích điểm ngay trên app SUNFIL</p>
        <p className="text-lg">*100k = 10 điểm</p>
      </div>
      {/* Hiệu ứng dầu loang (dùng div giả lập) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute w-1/2 h-1/2 bg-yellow-400 rounded-full filter blur-2xl -top-20 -left-20 transform rotate-45"></div>
        <div className="absolute w-1/3 h-1/3 bg-yellow-500 rounded-full filter blur-2xl -bottom-10 -right-10 transform -rotate-30"></div>
      </div>
    </div>
  );
};

export default PromoBanner;