import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log("Image failed:", featuredImage);
            }}
          />
        </div>

        {/* Title */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
