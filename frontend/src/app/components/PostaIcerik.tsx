import Postalar from "./Postalar";

export function getPosts() {
  return [
    {
      title: "Yalova",
      profile: "/images/yalova.jpg",
      description: "Armutlu Belediyesi'nin esnaflar için daha fazla destek sağlaması gerektiğini düşünüyor musunuz ?",
      timestamp: "1s",
      media: "https://www.youtube.com/embed/9Rq2ByguKyQ",
      slug: "gonderiBir",
    },
    {
      title: "Taskopru",
      profile: "/images/taskopru.jpg",
      description: "Ölen bir müzisyenin konserine gitmek isteseydiniz hangisine giderdiniz?",
      timestamp: "3s",
      media: "/images/news.jpg",
      slug: "gonderiIki",
    },
    {
      title: "Armutlu",
      profile: "/images/armutlu.jpg",
      description: "Bize bir soğuk espiri yapar mısınız?",
      timestamp: "5s",
      media: "https://img.youtube.com/vi/Zko1CH5FE00/maxresdefault.jpg",
      slug: "gonderiUc",
    },
    {
      title: "Altınova",
      profile: "/images/altinova.jpg",
      description: "Erkekler 24 saatliğine yok olsa ne olurdu?",
      timestamp: "Dün 14:31",
      media: "https://img.youtube.com/vi/kTk0Go-y00c/maxresdefault.jpg",
      slug: "gonderiDort",
    },
    {
      title: "Termal",
      profile: "/images/termal.jpg",
      description: "Bu hayatta sahip olduğunuz en değerli şey nedir?",
      timestamp: "Dün 11:49",
      media: "https://img.youtube.com/vi/DuNu6AxnhtM/maxresdefault.jpg",
      slug: "gonderiBes",
    },
  ];
}

function PostaIcerik() {
  const posts = getPosts();

  return (
    <div className="min-w-[800px] p-4">
      {posts.map((post, index) => (
        <Postalar
          key={index}
          title={post.title}
          profile={post.profile}
          description={post.description}
          timestamp={post.timestamp}
          media={post.media}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export default PostaIcerik;
