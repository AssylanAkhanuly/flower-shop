import "./navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <NotificationsIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          
          <div className="item avatar-wrapper">
            <img src="./assets/Bunny.png" alt="avatar" className="avatar" />
            <span className="user-name">Kayrat Nurtas</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar