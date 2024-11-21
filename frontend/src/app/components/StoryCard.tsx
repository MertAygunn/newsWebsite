import Image from "next/image";

interface StoryCardProps {
  name: string; // name prop'u string olmalı
  story: string; // story prop'u string olmalı
  profile: string; // profile prop'u string olmalı
  videoUrl: string; // videoUrl prop'u ekleniyor
  onClick: (url: string) => void; // videoUrl'u parametre olarak alan onClick fonksiyonu
}

function StoryCard({ name, story, profile, videoUrl, onClick }: StoryCardProps) {
  return (
    <div 
      className="relative h-14 w-14 md:h-20 md:w-20 cursor-pointer lg:h-56 lg:w-36 overflow-hidden p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse" 
      onClick={() => onClick(videoUrl)} // Tıklama olayında videoUrl'u geçiriyoruz
    >
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        alt={name} // Alt metni isme göre güncellendi
        style={{ objectFit: 'cover' }} // Resmin kesilmeden görünmesini sağlar
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={story}
        fill // Resmin kapsayıcı alanını doldurmasını sağlar
        alt={name} // Alt metni isme göre güncellendi
      />
      <p className="absolute opacity-0 lg:opacity-100 z-50 text-white font-semibold bottom-5">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;