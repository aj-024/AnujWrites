import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



export default function PostForm({ post }) {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
  try {
    setLoading(true);

    if (!userData) {
      console.error("User not logged in. Cannot create post.");
      return;
    }

    if (post) {
      const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,  // ✅ keep old image if no new one
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        const fileId = file.$id;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
          featuredImage: fileId,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    }
  } catch (error) {
    console.error("Error while submitting post:", error);
  } finally {
    setLoading(false);
  }
};


    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap -mx-2">
  {/* Left side: Title, Slug, Content */}
  <div className="w-full md:w-2/3 px-2 mb-4 md:mb-0">
    <Input
      label="Title :"
      placeholder="Enter post title"
      className="mb-4 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      {...register("title", { required: true })}
    />
    <Input
      label="Slug :"
      placeholder="Auto-generated slug"
      className="mb-4 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      {...register("slug", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
      }}
    />
    <RTE
      label="Content :"
      name="content"
      control={control}
      defaultValue={getValues("content")}
      className="mb-4 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  </div>

  {/* Right side: Image, Status, Submit */}
  <div className="w-full md:w-1/3 px-2">
    <Input
      label="Featured Image :"
      type="file"
      className="mb-4"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      {...register("image", { required: !post })}
    />
    {post && (
      <div className="w-full mb-4">
        <img
          src={appwriteService.getFileView(post.featuredImage)}
          alt={post.title}
          className="rounded-lg w-full object-cover border border-gray-200 shadow-sm"
        />
      </div>
    )}
    <Select
      options={["active", "inactive"]}
      label="Status"
      className="mb-4 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
      {...register("status", { required: true })}
    />
    <Button
      type="submit"
      bgColor={post ? "bg-green-500" : "bg-blue-500"}
      className="w-full py-2 rounded-lg text-white font-semibold hover:brightness-110 transition"
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
          {post ? "Updating..." : "Submitting..."}
        </div>
      ) : post ? (
        "Update"
      ) : (
        "Submit"
      )}
    </Button>
  </div>
</form>

    );
}
