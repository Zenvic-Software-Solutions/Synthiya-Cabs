import React, { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import { DashboardModal } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const ImageUpload = ({ setImageIds }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uppy = new Uppy({
    restrictions: { maxNumberOfFiles: 5, allowedFileTypes: ["image/*"] },
    autoProceed: true,
  }).use(XHRUpload, {
    endpoint: "https://your-api.com/upload",
    fieldName: "file",
    headers: {
      Authorization: "Bearer YOUR_TOKEN",
    },
  });

  useEffect(() => {
    uppy.on("complete", (result) => {
      if (result.successful.length > 0) {
        const uploadedImageIds = result.successful.map(
          (file) => file.response.body.image_id
        );
        setImageIds(uploadedImageIds);
        setIsModalOpen(false);
      }
    });

    return () => uppy.destroy();
  }, [uppy, setImageIds]);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Upload Your Images</button>
      <DashboardModal
        uppy={uppy}
        open={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        proudlyDisplayPoweredByUppy={false}
      />
    </>
  );
};

export default ImageUpload;
