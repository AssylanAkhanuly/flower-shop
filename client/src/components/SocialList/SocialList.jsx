import React from 'react'
import "./socialList.css"
function SocialList() {
  return (
    <ul className="social-list">
        <li className="social-list-item">
            <ion-icon size="large" name="logo-instagram"></ion-icon>
        </li>
        <li className="social-list-item">
            <ion-icon size="large" name="logo-facebook"></ion-icon>
        </li>
        <li className="social-list-item">
            <ion-icon size="large" name="logo-twitter"></ion-icon>
        </li>
        <li className="social-list-item">
            <ion-icon size="large" name="logo-whatsapp"></ion-icon>
        </li>
    </ul>
  )
}

export default SocialList