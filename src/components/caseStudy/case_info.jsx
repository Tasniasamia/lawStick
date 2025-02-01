
const Case_Info = ({ data }) => {


  return (
    <div className="flex md:flex-row flex-col justify-between items-start md:items-center md:mt-[40px] mt-[18px]">
      <div className="pl-2">
        <h1 className="header-2 mb-[0.75rem] md:mb-[1.5rem]">
          {data?.number}. {data?.title}
        </h1>
        <ul class="list-disc pl-6 space-y-2 work-sans text-base">
          <li>{data?.description1}</li>
          <li>{data?.description2}</li>
        </ul>
      </div>
    </div>
  );
};

export default Case_Info;
