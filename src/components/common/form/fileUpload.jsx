import { Upload } from "antd";
import { AiOutlineDownload } from "react-icons/ai";

const UploadFileComponent = ({ className,max = 1, name = "file" ,childClassName}) => {
  const props = {
    name: name,
    accept: ".pdf",
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        alert("Only PDF files are allowed!");
      }
      return isPDF || Upload.LIST_IGNORE;
    },
    multiple: max > 1,
    maxCount: max,
  };

  return (
    <Upload {...props} className={className}>
      <div className={`flex gap-2 items-center text-base font-sans border w-full ${childClassName}`}>
        <AiOutlineDownload />
        <p>Upload Your File</p>
      </div>
    </Upload>
  );
};

export default UploadFileComponent;
