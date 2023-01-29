import React from 'react'
import "./Styles/FormInfo.css"

const FormInfo = () => {
  return (
    <form className='FormInfo-container'>

        <div className='FormInfo-header'>
          <h1>Personal Info</h1>
          <h5>Please provide your name, email address, and phone number.</h5>
        </div>

        <div className="FormInfo-input-container">
          <label>Name</label>
          <input placeholder="e.g Stephen King"></input>
        </div>

        <div className="FormInfo-input-container">
          <label>Email Address</label>
          <input placeholder="e.g Stephen King"></input>
        </div>

        <div className="FormInfo-input-container">
          <label>Phone Number</label>
          <input placeholder="e.g Stephen King"></input>
        </div>

        <button className="FormInfo-button">Next Step</button>
    </form>
  )
}

export default FormInfo