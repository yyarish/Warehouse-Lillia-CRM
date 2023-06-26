import { Link } from "react-router-dom";

import "./CostomersHeader.css";

const CostomersHeader = () => {
  return (
    <div className="costomer_header">
      <h1 className="header_title">покупці </h1>

      <h2>
        {" "}
        <Link to="/SuppliersPage" className="header_link">
          постачальники
        </Link>{" "}
      </h2>
    </div>
  );
};
export default CostomersHeader;
