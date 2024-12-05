import Image from "next/image";
import Link from "next/link";
import { HiOutlineThumbUp, HiChatAlt, HiShare } from "react-icons/hi";
import { useState } from "react";

interface PostProps {
  title: string;
  description: string;
  profile: string;
  timestamp: string;
  media?: string;
  slug: string;
}

function Postalar({
  title,
  description,
  profile,
  timestamp,
  media,
  slug,
}: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  const handleToggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto">
      <Link href={`/gonderi/${slug}`} passHref>
        <div className="p-5 bg-white mt-5 rounded-t-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-2">
            <Image
              src={profile}
              width={40}
              height={40}
              className="rounded-full"
              alt={title}
            />
            <div>
              <p className="font-medium text-lg">{title}</p>
              <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
          </div>
          <p className="pt-4 text-gray-700">{description}</p>
        </div>
      </Link>

      {media && (
        <div className="relative h-56 md:h-96 bg-white">
          {media.includes("embed") ? (
            <iframe
              src={media}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={media}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                alt={title}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-lg bg-white shadow-md text-gray-500 p-3 mt-3 border-t">
        <div className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
          <HiOutlineThumbUp className="h-5 w-5" />
          <p className="text-xs sm:text-base">Beğen</p>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
          onClick={handleToggleCommentForm}
        >
          <HiChatAlt className="h-5 w-5" />
          <p className="text-xs sm:text-base">Yorum</p>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
          onClick={handleToggleModal}
        >
          <HiShare className="h-5 w-5" />
          <p className="text-xs sm:text-base">Paylaş</p>
        </div>
      </div>

      {showCommentForm && (
        <form
          onSubmit={handleCommentSubmit}
          className="mt-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="w-full flex items-start space-x-4">
            <Image
              className="w-10 h-10 object-cover rounded-full"
              src="https://pagedone.io/asset/uploads/1710225753.png"
              alt="John smith image"
            />
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              rows={5}
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg font-normal leading-7"
              placeholder="Yorumunuzu yazın...."
            />
          </div>
          <button
            type="submit"
            className="mt-3 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
          >
            <span className="text-white font-semibold text-lg">
              Yorum Gönder
            </span>
          </button>
        </form>
      )}

      <div className="mt-4 px-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-4 border-b py-4">
            <Image
              className="w-10 h-10 object-cover rounded-full"
              src="https://pagedone.io/asset/uploads/1710225753.png"
              alt="Yorum sahibi profil resmi"
            />
            <div className="flex flex-col w-full">
              <p className="text-gray-900 font-semibold">Kemal Hakan</p>
              <p className="text-gray-700">{comment}</p>
              <div className="border-t mt-2 pt-2"></div>{" "}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 relative">
            <div className="flex items-center pb-3 border-b border-gray-300">
              <h3 className="text-xl font-bold flex-1 text-gray-800">Paylaş</h3>
              <svg
                onClick={handleToggleModal}
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </div>

            <div className="my-8">
              <h6 className="text-base text-gray-800">Bu Linki Paylaş</h6>
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  type="button"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#fff"
                    viewBox="0 0 155.139 155.139"
                  >
                    <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h6 className="text-base text-gray-800">Veya Linki Kopyala</h6>
              <div className="w-full rounded-lg overflow-hidden border border-gray-300 flex items-center mt-4">
                <p className="text-sm text-gray-500 flex-1 ml-4">
                  https://link.com
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm text-white">
                  Kopyala
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Postalar;
