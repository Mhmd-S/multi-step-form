import React from 'react'
import "./Styles/Confirmation.css"

const Confirmation = () => {
  return (
    <div className="Confirmation-container">
        <img src="/misc/checkMark.svg" alt="Check Mark Icon" className="Confirmation-img"></img>
        <h1 className="Confirmation-title">Thank you!</h1>
        <h5 className="Confirmation-subTitle">Thanks you for choosing us. We strive to provide the best services for our customers across the globe. If you need support please contact us through our email at support@supporter.com.</h5>
    </div>
  )
}

export default Confirmation