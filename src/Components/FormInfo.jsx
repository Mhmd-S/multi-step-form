import React from 'react'
import "./Styles/FormInfo.css"
import { useForm } from "react-hook-form"

const FormInfo = ({hoistDataForm}) => {

  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className='FormInfo-container' onSubmit={handleSubmit(onSubmit)}>

        <div className='FormInfo-header'>
          <h1>Personal Info</h1>
          <h5>Please provide your name, email address, and phone number.</h5>
        </div>

        <div className="FormInfo-input-container">
          <label>Name</label>
          <span className="error-field">{errors.name?.type == 'required' ? "Name Required" : undefined}</span>
          <input 
          className={errors.name?.type == 'required' ? "invalid-input" : undefined}
          placeholder="e.g Stephen King" 
          {...register("name", { required:true })}></input>
        </div>

        <div className="FormInfo-input-container">
          <label>Email Address</label>
          <span className="error-field">{errors.name?.type == 'required' ? "Email Required" : undefined}</span>
          <input  className={errors.email?.type == 'required' ? "invalid-input" : undefined} 
          placeholder="e.g stephenking@email.com" 
          {...register("email", { required:true })}></input>
        </div>

        <div className="FormInfo-input-container">
          <label>Phone Number</label>
          <span className="error-field">{errors.name?.type == 'required' ? "Phone Required" : undefined}</span>
          <input  className={errors.phone?.type == 'required' ? "invalid-input" : undefined} 
          placeholder="e.g +1 234 567 890" 
          {...register("phone", { required:true })}></input>
        </div>

        <button className="FormInfo-button">Next Step</button>
    </form>
  )
}

export default FormInfo