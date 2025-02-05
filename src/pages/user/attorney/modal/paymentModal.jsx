import { Form, Grid, Modal, Radio } from "antd";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import stripe from "./../../../../../public/images/stripe.png";
import molie from "./../../../../../public/images/molie.png";
import ray from "./../../../../../public/images/ray.png";
import payoner from "./../../../../../public/images/payoner.png";

const PaymentModal = ({
  isPaymentModal,
  setIsPaymentModal,
  setPaymentValue,
  setIsRecommended,
  setIsSuccessModal
}) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };
  const [tab, setTab] = useState("card");
  const paymentMethods = [
    {
      name: "stripe",
      image: stripe,
    },
    {
      name: "mollie",
      image: molie,
    },
    {
      name: "Razorpay",
      image: ray,
    },
    {
      name: "Payoneer",
      image: payoner,
    },
  ];
  const handleFinish = async (values) => {
    console.log("values", values);
    if (tab === "card" || tab === "paypal") {
      setPaymentValue(values);
      // setIsRecommended(true);
      setIsPaymentModal(false);
      setIsSuccessModal(true);
    }
  };
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint(); // Use the hook correctly
  const getModalWidth = () => {
    if (screens.xxl) {
      return 792;
    } else if (screens.xl) {
      return 792;
    } else if (screens.lg) {
      return 600;
    } else if (screens.md) {
      return 650;
    } else if (screens.sm) {
      return 500;
    } else {
      return "100%";
    }
  };
  return (
    <Modal
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isPaymentModal}
      onCancel={() => setIsPaymentModal(false)}
      style={{ position: "relative", zIndex: "200" }}
      width={getModalWidth()}
    >
      <div className="lg:max-w-[872px] w-full mx-auto bg-white rounded-[20px] p-[10px] relative ">
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute sm:top-0 top-[2px] sm:right-0 right-[2px] inline-flex justify-center items-center"
          onClick={() => {
            setIsPaymentModal(false);
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>

        <h3 className="font-medium leading-[23.46px] text-[20px] pb-[24px] text-[#191930] font-ebgramond  ">
          Payment Details
        </h3>
        <div className="flex gap-x-8 items-center border-b border-b-[#E0E0E0] mb-[44px]">
          <button
            className={`text-base font-medium font-sans pb-[10px]   ${
              tab === "card"
                ? "text-primary border-b-primary  border-b-2"
                : "text-textColor border-b-transparent"
            }`}
            onClick={() => {
              setTab("card");
            }}
          >
            Card
          </button>
          <button
            className={`text-base font-medium font-sans border-b-2 pb-[10px]  ${
              tab === "paypal"
                ? "text-primary border-b-primary  border-b-2"
                : "text-textColor border-b-transparent"
            }`}
            onClick={() => {
              setTab("paypal");
            }}
          >
            Paypal
          </button>
          <button
            className={`text-base font-medium font-sans border-b-2 pb-[10px]   ${
              tab === "other"
                ? "text-primary border-b-primary  border-b-2"
                : "text-textColor border-b-transparent"
            }`}
            onClick={() => {
              setTab("other");
            }}
          >
            Other
          </button>
        </div>
        {tab === "card" && <CardForm handleFinish={handleFinish} />}
        {tab === "paypal" && <CardForm handleFinish={handleFinish} />}
        {tab === "other" && (
          <div>
            <Radio.Group
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "24px",
              }}
              onChange={(e) => {
                setPaymentValue(e.target.value);
              }}
            >
              {paymentMethods?.map((method, index) => {
                return (
                  <Radio key={index} value={method.name}>
                    <div className="flex gap-[12px] items-center ">
                      <img
                        src={method?.image}
                        className="h-[24px] w-[34px] object-cover"
                        alt="image"
                      />
                      <span className="text-[18px] font-medium leading-[21.78px] text-[#191930] capitalize">
                        {method.name}
                      </span>
                    </div>
                  </Radio>
                );
              })}
            </Radio.Group>
            <div className="md:w-[355px] m-auto">
              <button
                type="submit"
                className={`border-2 bg-primary  button text-white hover:bg-transparent hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-fit py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm w-full  mt-[24px]`}
                onClick={() => {
                  setIsPaymentModal(false);
                  // setIsRecommended(true);
                  setIsSuccessModal(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PaymentModal;

export const CardForm = ({ handleFinish }) => {
  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[24px] pt-[24px]">
        <Form.Item
          label={
            <p className="text-base font-medium text-[#242628] ">Card Number</p>
          }
          name="card-number"
          className="!w-full"
          rules={[
            { required: true, message: "Please enter your card number!" },
          ]}
        >
          <input
            placeholder="Card Number"
            type="number"
            className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-base font-medium text-[#242628] ">
              Cardholder Name
            </p>
          }
          name="cardholder"
          className="!w-full"
          rules={[
            {
              required: true,
              message: "Please enter your cardholder name!",
            },
          ]}
        >
          <input
            placeholder="Cardholder Name"
            type="text"
            className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-base font-medium text-[#242628] ">Expire Date</p>
          }
          name="expire_date"
          rules={[
            { required: true, message: "Please enter your expire date!" },
          ]}
        >
          <input
            type="date"
            className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
          />
        </Form.Item>
        <Form.Item
          label={<p className="text-base font-medium text-[#242628] ">CVV</p>}
          name="cvv"
          className="!w-full"
          rules={[
            { required: true, message: "Please enter your card number!" },
          ]}
        >
          <input
            placeholder="CVV"
            type="number"
            className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
          />
        </Form.Item>
      </div>
      <button
        type="submit"
        className={`border-2 bg-primary  button text-white hover:bg-transparent hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-fit py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm `}
      >
        Continue
      </button>
    </Form>
  );
};
