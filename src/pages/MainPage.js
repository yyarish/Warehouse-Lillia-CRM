import AppBanner from "../components/appBanner/AppBanner";
import CostomerTable from "../components/costomerTable/CostomerTable";
import CostomersList from "../components/costomersList/CostomersList";
import CostomerPanel from "../components/costomerPanel/CostomerPanel";
import CostomersHeader from "../components/costomersHeader/CostomersHeader";

import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="header_conrtent">
        <AppBanner />
        <CostomersHeader />
      </div>
      <div className="main_content">
        <CostomersList />
        <div>
          <CostomerPanel />
          <CostomerTable />
        </div>
      </div>
    </>
  );
};
export default MainPage;
