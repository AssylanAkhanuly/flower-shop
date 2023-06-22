import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import "./home.scss";
import DataGrid from "../../components/table/Table";

export const Home = (props) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar /> 
         <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="products" />
          <Widget type="balance" />
        </div> 
        
         <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="list-container box-shadow">
          <h1 className="title">Orders Today</h1>
          <DataGrid />
        </div>
      </div>
    </div>
  );
};

export default Home;
