import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((res) => {
        if (res) setPost(res);
        else navigate("/");
      }).finally(() => setLoading(false));
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (loading) {
    // Skeleton loader
    return (
      <div className="bg-[#F9FAFB] min-h-screen py-12">
        <Container>
          <div className="animate-pulse space-y-6">
            <div className="w-full h-96 bg-gray-300 rounded-xl"></div>
            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12">
      <Container>
        {/* Featured Image */}
        <div className="w-full relative mb-6 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover"
          />

          {/* Edit/Delete Buttons */}
          {isAuthor && (
            <div className="absolute top-4 right-4 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="hover:bg-green-600 transition">
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                className="hover:bg-red-600 transition"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          {post.title}
        </h1>

        {/* Content */}
        <div className="browser-css">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  );
}
