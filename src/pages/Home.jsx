import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import PostCardSkeleton from "../components/PostCardSkeleton";

function Home() {
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

  // Show login prompt if user is not logged in or no posts
  if (!loading && posts.length === 0) {
    return (
      <div className="bg-[#F9FAFB] min-h-screen py-16 flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-4">
              Login to read posts
            </h1>
            <p className="text-gray-500">
              Create an account to access all blog posts and features.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-10">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Latest Posts</h1>

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

export default Home;
