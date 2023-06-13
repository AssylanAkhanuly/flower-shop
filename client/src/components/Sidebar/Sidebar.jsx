import React from 'react'
import "./sidebar.css"
function Sidebar({selectedItems, setTrayVisible}) {
  return (
    <div className="sidebar">
        <div className="sidebar-up">
            <div className="main-logo">
                <img className='main-logo-img' src='./assets/bunny.png' alt='error'/>
            </div>
            <ul className="sidebar-list">
                
                <li className="sidebar-list-item">
                    <div onClick={() => setTrayVisible(true)} className="sidebar-list-item-wrapper">
                        <ion-icon size="large" name="file-tray-outline"></ion-icon>
                        <span className="sidebar-list-item-topper">{selectedItems.length}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="sidebar-bottom">
            <div className="sidebar-list-item-wrapper">
                <ion-icon size="large" name="person-circle-outline"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default Sidebar