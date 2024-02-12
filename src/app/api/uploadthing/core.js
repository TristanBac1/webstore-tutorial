import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  categoryImageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("Category file URL", file.url, metadata);
      return { uploadedBy: metadata.userId };
    }
  ),
  bannerImageUploader: f({ image: { maxFileSize: "2MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("Banner file URL", file.url, metadata);
      return { uploadedBy: metadata.userId };
    }
  ),
  productImageUploader: f({
    image: { maxFileSize: "1MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("Product file URL", file.url, metadata);
    return { uploadedBy: metadata.userId };
  }),
};
