import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12">
      <Container>
        <div className=" mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">
            Add New Post
          </h1>

          {/* Add spacing between form fields */}
          <div className="space-y-6">
            <PostForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
