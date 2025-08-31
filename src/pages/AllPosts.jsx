import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import PostCardSkeleton from "../components/PostCardSkeleton";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((res) => {
        if (res) setPosts(res.documents);
      })
      .finally(() => setLoading(false));
  }, []);

  // Number of skeleton cards to display while loading
  const skeletonCount = 8;

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-10">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-gray-800">All Posts</h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array(skeletonCount)
                .fill(0)
                .map((_, idx) => <PostCardSkeleton key={idx} />)
            : posts.map((post) => <PostCard key={post.$id} {...post} />)}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
