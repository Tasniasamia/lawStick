import AttorneyCard from "../../../components/common/card/attorneyCard";
import PageTitle from "../../../components/common/title/pageTitle";
import SearchBar from "../../../components/common/searchBar";
const Attorney = () => {
const data = [
    {
      name: "Alina Gain",
      designation: "Criminal Lawyer",
      experience: "4 Years",
      qualification: "Juris Doctor JD: Oxford University",
      price: 120.00,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"
    },
    {
      name: "Michael Brown",
      designation: "Corporate Lawyer",
      experience: "6 Years",
      qualification: "LL.M in Business Law: Harvard University",
      price: 150.00,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"
    },
    {
      name: "Sophia Clarke",
      designation: "Family Lawyer",
      experience: "5 Years",
      qualification: "LL.B: Yale University",
      price: 130.00,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"
    },
    {
      name: "Daniel Evans",
      designation: "Intellectual Property Lawyer",
      experience: "7 Years",
      qualification: "LL.M in IP Law: Stanford University",
      price: 160.00,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"
    },
    {
      name: "Emma White",
      designation: "Immigration Lawyer",
      experience: "3 Years",
      qualification: "Juris Doctor JD: Cambridge University",
      price: 110.00,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"
    },
    {
      name: "William Scott",
      designation: "Tax Lawyer",
      experience: "8 Years",
      qualification: "LL.M in Taxation: Columbia University",
      price: 170.00,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"
    }
  ];
  
   
  return (
    <div >
       <PageTitle>
        <div className="flex sm:flex-row flex-col justify-between  items-center sm:gap-0 gap-6 lg:h-[56px] h-auto">
          <h1 className="dashboard-title ">Attorney</h1>
          <div className="flex gap-6 md:flex-row flex-col ">
            <SearchBar placeholder={'Search Attorney...'} wrapperClassName={'sm:w-[293px] w-full'} className={''} style={{marginBottom:"-1px"}}/>
            <select
              id="casetype"
              className=" sm:px-4 sm:py-4 px-2 py-2 w-[220px]  h-full border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Case Type"
              name="caseType"
              required
            >
              <option value="ongoin">ongoing</option>
              <option value="criminal" selected>
                Crimial
              </option>
            </select>
          </div>
        </div>
      </PageTitle>
      <div className="py-[40px] px-[24px]">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 ">
              {data.map((attorney, idx) => (
                <AttorneyCard key={idx} data={attorney}></AttorneyCard>
              ))}
            </div>
            </div>
        </div>
  
  );
};
export default Attorney;
