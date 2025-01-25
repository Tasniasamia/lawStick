import FAQ from "../common/faq";

const Faq = () => {
  const data = [
    {
      question: "What services does Lawstick provide",
      answer:
        "We offer expertise across a broad range of legal areas, including civil law for disputes and rights protection, criminal law for strong defense, real estate law for secure transactions, and corporate law for business support. Our dedicated team delivers tailored legal solutions with integrity.",
    },
    {
      question: "What services does Lawstick provide",
      answer:
        "We offer expertise across a broad range of legal areas, including civil law for disputes and rights protection, criminal law for strong defense, real estate law for secure transactions, and corporate law for business support. Our dedicated team delivers tailored legal solutions with integrity.",
    },
    {
      question: "What services does Lawstick provide",
      answer:
        "We offer expertise across a broad range of legal areas, including civil law for disputes and rights protection, criminal law for strong defense, real estate law for secure transactions, and corporate law for business support. Our dedicated team delivers tailored legal solutions with integrity.",
    },
    {
      question: "What services does Lawstick provide",
      answer:
        "We offer expertise across a broad range of legal areas, including civil law for disputes and rights protection, criminal law for strong defense, real estate law for secure transactions, and corporate law for business support. Our dedicated team delivers tailored legal solutions with integrity.",
    },
  ];

  return (
    <div className=" text-black ">
      <div className="custom-container lg:py-[75px] md:py-[64px] py-[27px] ">
        <div className=" text-center">
          <p className="section-subtitle">FAQ’S</p>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-description ">
            Find answers to common questions about our services and processes.
          </p>
        </div>
        <div>
          <FAQ data={data} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
