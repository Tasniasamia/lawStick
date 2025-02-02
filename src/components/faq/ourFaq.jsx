import React from 'react';
import FAQ from '../common/faq';

const OurFaq = () => {
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
        <div className='custom-container  xl:pb-[150px] md:pb-14 pb-[29px] '>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-description ">
            Find answers to common questions about our services and processes.
          </p>
          <FAQ data={data}/>
        </div>
    );
};

export default OurFaq;
