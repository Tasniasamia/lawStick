import { useState } from "react";
import { Upload, message } from "antd";
import { AiOutlineDownload } from "react-icons/ai";

const { Dragger } = Upload;

function FileUploader() {
  const [fileList, setFileList] = useState([]);

  const props = {
    name: "file",
    multiple: true,
    fileList,
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        const formData = new FormData();
        formData.append("file", file); // ✅ Ensure file is appended properly

        console.log("Uploading file:", file);
        console.log("FormData contents:", formData.get("file")); // Check if file is added

        // API call simulation (Uncomment when backend is ready)
        // const response = await fetch("/api/upload", {
        //   method: "POST",
        //   body: formData,
        // });

        // if (!response.ok) throw new Error("Upload failed");

        // const data = await response.json();
        onSuccess("Success", file);
        message.success(`${file.name} uploaded successfully.`);
      } catch (err) {
        onError(new Error("Upload failed"));
        message.error(`${file.name} upload failed.`);
      }
    },
    onChange(info) {
      setFileList(info.fileList);
    },
  };

  const additionalProps = {
    accept: ".pdf,.doc,.docx,.txt,image/*", // ✅ Restrict file types
    maxCount: 5, // ✅ Limit number of files
    beforeUpload: (file) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("File must be smaller than 2MB!");
        return false;
      }
      return true;
    },
  };

  return (
    <div className="w-full upload-file">
      <Dragger {...props} {...additionalProps}>
        <div className="flex gap-2 items-center">
          <AiOutlineDownload className="ant-upload-text" />
          <p className="ant-upload-text">Upload Your File</p>
        </div>
      </Dragger>
    </div>
  );
}

export default FileUploader;
