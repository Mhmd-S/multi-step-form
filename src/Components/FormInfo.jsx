import React from 'react'
import "./Styles/FormInfo.css"

const FormInfo = ({onChangeName, name, email, phone, onChangeEmail, onChangePhone,  errors}) => {

  return (
    <form className='FormInfo-container'>

        <div className='FormInfo-header'>
          <h1>Personal Info</h1>
          <h5>Please provide your name, email address, and phone number.</h5>
        </div>

        <div className="FormInfo-input-container">
          <label>Name</label>
          <span className="error-field">{errors.includes("name") ? "Name Required" : undefined}</span>
          <input 
          className={errors.includes("name") ? "invalid-input" : undefined}
          placeholder="e.g Stephen King" value={name} onChange={(e)=>onChangeName(e)}></input>
        </div>

        <div className="FormInfo-input-container">
          <label>Email Address</label>
          <span className="error-field">{errors.includes("email")? "Email Required" : undefined}</span>
          <input  className={errors.includes("email") ? "invalid-input" : undefined} 
          placeholder="e.g stephenking@email.com" value={email} onChange={(e)=>onChangeEmail(e)}></input>
        </div>

        <div className="FormInfo-input-container">
          <label>Phone Number</label>
          <span className="error-field">{errors.includes("phone") ? "Phone Required" : undefined}</span>
          <input  className={errors.includes("phone") ? "invalid-input" : undefined} 
          placeholder="e.g +1 234 567 890"  value={phone}  onChange={(e)=>onChangePhone(e)}></input>
        </div>
    </form>
  )
}

export default FormInfo