import { useState } from "react";

import { useModal } from "../../../context/modalContext";
import CalendarModal from "./modal/calendermodal";
import CaseDetailsModal from "./modal/casedetailsModal";
import PaymentModal from "./modal/paymentModal";
import RecommendAttorney from "./modal/recommendedModal";

const Appointment = () => {
  const { isAppointmentOpen, setIsAppointmentOpen } = useModal();
  const [selectDate, setselectDate] = useState("");
  const [selectSlot, setSelectSlot] = useState("");
  const [casedetailsValue, setCasedetailsValue] = useState({});
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [paymentValue, setPaymentValue] = useState({});
  const [isCaseDetaiOpen, setIsCaseDetailsOpen] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const slotTime = [
    {
      date: "04/02/2025",
      slot: [
        "6.00PM",
        "7.00PM",
        "8.00AM",
        "9.00PM",
        "7.00PM",
        "8.00PM",
        "9.00AM",
        "10.00AM",
        "12.00PM",
        "1.00PM",
        "2.00PM",
        "10.00PM",
      ],
    },
    {
      date: "05/02/2025",
      slot: [
        "6.00PM",
        "7.00PM",
        "8.00AM",
        "9.00PM",
        "7.00PM",
        "8.00PM",
        "9.00AM",
        "10.00AM",
      ],
    },
    {
      date: "06/02/2025",
      slot: [
        "6.00PM",
        "7.00PM",
        "8.00AM",
        "9.00PM",
        "7.00PM",
        "8.00PM",
        "9.00AM",
        "10.00AM",
        "12.00PM",
        "1.00PM",
        "2.00PM",
        "10.00PM",
      ],
    },
  ];
  console.log(
    "selectdate selectSlot",
    selectDate,
    selectSlot,
    casedetailsValue,
    paymentValue
  );

  return (
    <div>
      {isAppointmentOpen && (
        <CalendarModal
          slotTime={slotTime}
          selectDate={selectDate}
          setselectDate={setselectDate}
          selectSlot={selectSlot}
          setSelectSlot={setSelectSlot}
          setIsCaseDetailsOpen={setIsCaseDetailsOpen}
        />
      )}
      {isCaseDetaiOpen && selectDate && selectSlot && (
        <CaseDetailsModal
          isCaseDetaiOpen={isCaseDetaiOpen}
          setIsCaseDetailsOpen={setIsCaseDetailsOpen}
          setCasedetailsValue={setCasedetailsValue}
          setselectDate={setselectDate}
          setSelectSlot={setSelectSlot}
          setIsPaymentModal={setIsPaymentModal}
        />
      )}
      {isPaymentModal && (
        <PaymentModal
          setPaymentValue={setPaymentValue}
          isPaymentModal={isPaymentModal}
          setIsPaymentModal={setIsPaymentModal}
          setIsRecommended={setIsRecommended}

        />
      )}
      {isRecommended && (
        <RecommendAttorney
          isRecommended={isRecommended}
          setIsRecommended={setIsRecommended}
        />
      )}
    </div>
  );
};
export default Appointment;
