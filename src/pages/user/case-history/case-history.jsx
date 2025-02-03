import PageTitle from "../../../components/common/title/pageTitle";

const CaseHistory = () => {
  return (
    <div>
      <PageTitle>
        <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-6">
          <h1 className="dashboard-title">Case History</h1>
          <div>
            <select
              id="casetype"
              className=" sm:px-4 sm:py-4 px-2 py-2 w-[220px]  sm:h-[56px] h-[46px] border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
      <div className="pt-[40px] px-[24px]">

      </div>
    </div>
  );
};

export default CaseHistory;
