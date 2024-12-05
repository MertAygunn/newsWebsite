import Image from "next/image";

interface PostDetailViewProps {
  title: string;
  description: string;
  profile: string;
  timestamp: string;
  media?: string;
}

const PostDetailView: React.FC<PostDetailViewProps> = ({
  title,
  description,
  profile,
  timestamp,
  media,
}) => {
  return (
    <div className="flex flex-col items-center justify-start p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <div className="flex items-center space-x-4 mb-2 w-full">
        <Image
          src={profile}
          width={50}
          height={50}
          className="rounded-full"
          alt={title}
        />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="w-full text-left mb-2">
        <p className="text-sm text-gray-500">{timestamp}</p>
      </div>

      <hr className="border-gray-300 w-full mb-4" />

      <h3 className="text-3xl font-bold mb-2">{description}</h3>

      {media && media.includes("embed") ? (
        <iframe
          src={media}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="relative w-full h-64 mb-4 rounded-lg"
        ></iframe>
      ) : media ? (
        <div className="relative w-full h-64 mb-4">
          <Image
            src={media}
            alt={description}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : null}

      <p className="text-xl font-bold mb-2 text-left">
        Konuyu açıklayan önemli ilk yazı.
      </p>

      <p className="text-base text-gray-700 text-left">
        Haberin geri kalanı ve daha ufak ayrıntılı verilen olması gereken bölge.
      </p>
      {media && media.includes("embed") ? (
        <iframe
          src={media}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="relative w-full h-64 mb-4 rounded-lg"
        ></iframe>
      ) : media ? (
        <div className="relative w-full h-64 mb-4">
          <Image
            src={media}
            alt={description}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : null}
    </div>
  );
};

export default PostDetailView;
