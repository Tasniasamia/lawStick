
import  { useState, useRef, useEffect } from "react";
import { FiSend, FiChevronLeft, FiPaperclip } from "react-icons/fi";
import MultipleImageInput from '../../../components/common/form/multipleImge';
import UploadFileComponent from '../../../components/common/form/fileUpload';
// import {
//   useAction,
//   useActionConfirm,
//   useFetch,
// } from "../../../../../helpers/hooks";
// import {
//   deleteMessage,
//   fetchUser,
//   messageList,
//   pdfFileUpload,
//   postMessage,
//   postSingleImage,
//   userListMessaged,
// } from "../../../../../helpers/backend";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import { initializeSocket } from '../../../../../helpers/socket'
import { MdDelete } from "react-icons/md";
import { FaRegImages } from "react-icons/fa6";
import { Form, Modal, Image as AntImage } from "antd";
// import MultipleImageInput from '../../../../../(dashboard)/components/form/multiImage'
// import UploadFileComponent from '../../../../../(dashboard)/components/form/pdfUpload'
dayjs.extend(relativeTime);
import { Loader } from "../../../components/common/loader";
import { chatList, users } from "../../user/message/chartList";
import messageImge from "../../../../public/images/message.png";
import { AiOutlineDownload } from "react-icons/ai";
export default function MedicalChat() {
  const [imageForm] = Form.useForm();
  // const [users, getUsers] = useFetch(userListMessaged)
//   const [messageLists, getmessageList, { loading }] = useFetch(
//     messageList,
//     {},
//     false
//   );
  const [pdfUpload, setPdfUpload] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [activeChatId, setActiveChatId] = useState(null);
  const [message, setMessage] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [memberRole, setMemberRole] = useState(null);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
    }
  }, [
    //   chartList,
      activeChatId
    // messageLists,
]);

//   useEffect(() => {
//     if (activeChatId != null) {
//       getmessageList({ to: activeChatId, activeId: activeChatId });
//     } else {
//     }
//   }, [activeChatId]);

  const handleSendMessage = (e) => {
    if (message == null) {
      return;
    }
    e.preventDefault();
    // useAction(postMessage, {
    //     to: activeChatId,
    //     message: message
    // }, () => {
    //     setMessage('')
    //     getmessageList({
    //         to: activeChatId
    //     })
    //     getUsers()
    // })
  };

  // useEffect(() => {
  //     const socket = initializeSocket()
  //     socket.on("newMessage", (message) => {
  //         fetchUser().then(({ error, data }) => {
  //             if (error === false) {
  //                 if (data?._id === message?.to) {
  //                     getmessageList({
  //                         to: message?.from
  //                     })
  //                     getUsers()
  //                 }
  //             }
  //         });
  //     });
  // }, [])

  const handleChatClick = (id, name, role) => {
    setActiveChat(null);
    setActiveChatId(null);
    setMemberRole(null);
    setMemberRole(role);
    setActiveChat(name);
    setActiveChatId(id);
  };
  const renderChatList = () => (
    <div
      className={`w-full md:w-[40%] md:border-r border-r-none ${
        activeChat ? "hidden lg:block" : "block"
      } bg-white shadow-lg`}
    >
      {/* Header Section */}
      <div className="px-6 py-4 border-b bg-gray-50">
        <h1 className="text-lg font-semibold text-gray-800 font-poppins">
          Message
        </h1>
      </div>
      <div className="px-6 py-4 border-b bg-white">
        <input
          type="text"
          placeholder="Search chats..."
          onChange={(e) => {
            console.log(e.target.value);
            // getUsers({ search: e.target.value })
          }}
          className="w-full px-4 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      {/* Chat List Section */}
      <div className="overflow-y-auto hide-scrollbar h-[calc(80vh-73px)] space-y-2">
        {users?.data?.map((item, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer transition-all duration-300 ${
              activeChatId === item?.chatUser?._id
                ? "bg-orange-100 border border-orange-300"
                : "hover:bg-orange-50"
            }`}
            onClick={() =>
              handleChatClick(
                item?.chatUser?._id,
                item?.chatUser?.name,
                item?.chatUser?.role
              )
            }
          >
            <div className="flex gap-4 items-center">
              {/* Profile Image */}
              <img
                width={48}
                height={48}
                src={
                  item?.chatUser?.image
                    ? item?.chatUser?.image
                    : "/defaultimg.jpg"
                }
                alt="User"
                className="h-12 w-12 rounded-full border border-gray-200 object-cover"
              />
              {/* Chat Details */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  {/* Name */}
                  <h3 className="font-semibold text-gray-900 text-sm font-poppins capitalize">
                    {item?.chatUser?.name}
                  </h3>
                  {/* Unseen Count & Last Message Time */}
                  <div className="flex items-center gap-2">
                    {item?.unseenCount > 0 && (
                      <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold">
                        {item?.unseenCount}
                      </span>
                    )}
                    <p className="text-xs text-gray-500 font-poppins">
                      {dayjs(item?.lastMessage?.createdAt).fromNow()}
                    </p>
                  </div>
                </div>
                {/* Role */}
                <p className="text-xs text-gray-500 font-poppins capitalize mb-1">
                  {item?.chatUser?.role}
                </p>
                {/* Last Message Preview */}
                {item?.lastMessage?.message && (
                  <p
                    className={`text-xs ${
                      item?.unseenCount > 0
                        ? "text-gray-700 font-medium"
                        : "text-gray-400"
                    } font-poppins line-clamp-1`}
                  >
                    {item?.lastMessage?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderChatArea = () => (
    <div
      className={`flex-1 flex flex-col w-full md:w-[60%]  ${
        activeChat ? "block" : "hidden lg:flex"
      }`}
    >
      {/* Chat Header */}
      <div className="py-4 md:px-4 px-0 border-b flex items-center gap-3">
        <button
          className="lg:hidden"
          onClick={() => {
            setActiveChat(null);
            setActiveChatId(null);
            // getmessageList();
          }}
        >
          <FiChevronLeft className="h-6 w-6" />
        </button>
        <img
          width={48}
          height={48}
          src="https://i.ibb.co.com/zWk3yb0m/image.png"
          alt="Dr. Noura"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold">
            {activeChat || "Dr. Noura Bin Maha"}
          </h2>
          <p className="text-sm text-gray-600 capitalize">{memberRole}</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="flex-1 p-4 overflow-y-auto hide-scrollbar h-[calc(100vh-200px)]"
        ref={chatEndRef}
      >
        {/* {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        ) : ( */}
          <div className="flex flex-col-reverse gap-6">
            {chatList?.docs?.map((msg) => (
              <div
                key={msg?._id}
                className={`flex ${
                  msg?.to !== activeChatId ? "justify-start" : "justify-end"
                }`}
              >
                {/* Image Message */}
                {msg?.image ? (
                  <div className="relative w-fit rounded-lg overflow-hidden bg-gray-50 shadow-md">
                    {/* Delete Button */}
                    <div
                      className={`absolute top-2 right-2 z-10 ${
                        msg?.to !== activeChatId ? "hidden" : "flex justify-end"
                      }`}
                    >
                      <MdDelete
                        onClick={() =>{
                        //   useActionConfirm(
                        //     deleteMessage,
                        //     { _id: msg?._id },
                        //     getmessageList,
                        //     "Are you sure you want to delete this message?",
                        //     "warning",
                        //     false
                        //   )
                        }}
                        size={20}
                        className="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200"
                      />
                    </div>
                    <div className="w-full h-fit overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <AntImage
                        alt="message-img"
                        src={msg?.image}
                        width={200}
                        className="h-[200px] w-[200px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ) : msg?.file ? (
                  // File Message
                  <div
                    className={`rounded-lg p-4 max-w-[75%] break-words shadow-md 
        ${msg?.to !== activeChatId ? "bg-blue-50" : "bg-gray-100"}`}
                  >
                    {/* Delete Button */}
                    {msg?.to === activeChatId && (
                      <div className="flex justify-end mb-2">
                        <MdDelete
                          onClick={() =>{
                            // useActionConfirm(
                            //   deleteMessage,
                            //   { _id: msg?._id },
                            //   getmessageList,
                            //   "Are you sure you want to delete this message?",
                            //   "warning",
                            //   false
                            // )
                          }}
                          size={20}
                          className="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200"
                        />
                      </div>
                    )}

                    {/* File Link */}
                    {msg?.file && (
                      <a
                        href={msg.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium underline break-words hover:text-blue-800"
                      >
                        {msg.file.split("/").pop()}
                      </a>
                    )}

                    {/* Timestamp */}
                    <div className="flex justify-end items-center mt-2">
                      <p className="text-xs text-gray-500 font-medium">
                        {dayjs(msg?.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`rounded-lg p-4 max-w-[75%] break-words ${
                      msg?.to !== activeChatId ? "bg-blue-50" : "bg-gray-100"
                    } shadow-md`}
                  >
                    <div
                      className={`${
                        msg?.to !== activeChatId
                          ? "hidden"
                          : "flex justify-end mb-2"
                      }`}
                    >
                      <MdDelete
                        onClick={() =>{
                        //   useActionConfirm(
                        //     deleteMessage,
                        //     { _id: msg?._id },
                        //     getmessageList,
                        //     "Are you sure you want to delete this message?",
                        //     "warning",
                        //     false
                        //   )
                        }}
                        size={20}
                        className="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200"
                      />
                    </div>
                    <p className="text-base text-gray-800 font-medium">
                      {msg?.message}
                    </p>
                    <div className="flex justify-end items-center mt-2">
                      <p className="text-xs text-gray-500 font-medium">
                        {dayjs(msg?.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        {/* )} */}
      </div>

      {/* Message Input */}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-3 border-t border-gray-300 p-4 bg-white shadow-sm rounded-lg"
      >
        <input
          required
          type="text"
          placeholder="Write a message..."
          className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setImageModal(!imageModal)}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg focus:outline-none"
        >
          <FaRegImages size={24} />
        </button>
        <button
          type="button"
          onClick={() => {
            setImageModal(!pdfUpload);
            setPdfUpload(!pdfUpload);
          }}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg focus:outline-none"
        >
          <FiPaperclip size={24} />
        </button>
        <button
          type="submit"
          className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
        >
          <FiSend className="h-5 w-5" />
        </button>
      </form>
      <Modal
        visible={imageModal}
        onCancel={() => {
          setImageModal(false);
          setPdfUpload(false);
        }}
        maskClosable={false}
        footer={null}
      >
        <Form
          form={imageForm}
          onFinish={async (values) => {
            console.log("🚀 ~ onFinish={ ~ values:", values);
            // if (!pdfUpload && values?.image[0]?.originFileObj) {
            //   const { error, data } = await postSingleImage({
            //     image: values?.image[0]?.originFileObj,
            //     image_name: "message",
            //   });
            //   if (!error) {
            //     await useAction(
            //       postMessage,
            //       {
            //         to: activeChatId,
            //         message: "",
            //         image: data,
            //       },
            //       () => {
            //         setMessage("");
            //         getmessageList({
            //           to: activeChatId,
            //         });
            //         getUsers();
            //         setImageModal(false);
            //         imageForm.resetFields();
            //       }
            //     );
            //   }
            // } else if (values?.pdf?.file?.originFileObj) {
            //   const { error, data } = await pdfFileUpload({
            //     files: values?.pdf?.file?.originFileObj,
            //     pdf_name: "message",
            //   });
            //   if (!error) {
            //     await useAction(
            //       postMessage,
            //       {
            //         to: activeChatId,
            //         message: "",
            //         file: data,
            //       },
            //       () => {
            //         setMessage("");
            //         getmessageList({
            //           to: activeChatId,
            //         });
            //         getUsers();
            //         setPdfUpload(false);
            //         setImageModal(false);
            //         imageForm.resetFields();
            //       }
            //     );
            //   }
            // }
          }}
        >
          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-700">
              {pdfUpload
                ? "Upload PDF (Max length: 6 MB)"
                : "Upload Image (Max length: 6 MB)"}
            </div>
            {pdfUpload ? (
              <UploadFileComponent
                label="Choose PDF file"
                name="pdf"
                required
                className="w-full"
              >
                  <AiOutlineDownload />
                  <p>Upload Your File</p>
              </UploadFileComponent>
            ) : (
              <MultipleImageInput
                label="Choose Image"
                name="image"
                required
                className="w-full"
              />
            )}
            <button className="bg-primary text-white py-2 px-4 rounded-md mt-2">
              Send
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );

  return (
    <div className="flex h-full w-full  overflow-hidden">
      {renderChatList()}
      {activeChat ? (
        renderChatArea()
      ) : (
        <div className="flex-1 md:flex hidden items-center justify-center flex-col text-center p-4">
          <img
            width={200}
            height={200}
            src={messageImge}
            alt="Empty Inbox"
            className="w-52 h-52 object-fill"
          />
          <p className="text-lg font-medium font-poppins text-textMain mt-10">
            Click an inbox card to view the message.
          </p>
        </div>
      )}
    </div>
  );
}
