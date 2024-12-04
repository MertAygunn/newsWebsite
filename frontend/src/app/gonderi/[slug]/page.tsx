// app/gonderi/[slug]/page.tsx

"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPosts } from '@/app/components/PostaIcerik';
import PostDetailView from '@/app/components/PostDetailView';

interface Post {
  title: string;
  profile: string;
  description: string;
  timestamp: string;
  media?: string;
  slug: string;
}

const PostDetail: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const posts = getPosts();
    const foundPost = posts.find(p => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  if (!post) {
    return <p>Post bulunamadı.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PostDetailView
        title={post.title}
        profile={post.profile}
        description={post.description}
        timestamp={post.timestamp}
        media={post.media}
      />
    </div>
  );
}

export default PostDetail;