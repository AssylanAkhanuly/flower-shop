import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-circular-progressbar/dist/styles.css";
function Featured() {
  return (
    <div className="featured box-shadow">
      <div className="top">
        <h1 className="title">Total Revenues</h1>
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text="70%" />
        </div>
        <p className="title">Sales made today</p>
        <p className="amount">10500 <span className="unit">KZT</span></p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">12.5k </div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">12.5k </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
