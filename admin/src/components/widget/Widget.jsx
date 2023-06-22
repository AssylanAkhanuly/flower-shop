import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
function Widget({ type }) {
  let data;
  //temp 
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        icon: <PersonOutlineIcon className="icon" />,
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        icon: <ShoppingCartOutlinedIcon className="icon" />,
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        icon: <LocalFloristOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        icon: <CurrencyExchangeOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget box-shadow">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}  {data.isMoney && <span className="unit">KZT</span>}</span>
        <span className="link">See all</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon className="indicator" />
          <span className="number">{diff}%</span>
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
