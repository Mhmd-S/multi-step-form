import React from 'react'
import { useState } from 'react'
import "./Styles/Form.css"
import Tracker from "./Tracker.jsx"
import FormInfo from "./FormInfo.jsx"
import FormPlans from "./FormPlans.jsx"
import { FormAddon } from './FormAddon'

const Form = () => {

  // Current tab regarding which step to show
  const [currentTab, setCurrentTab] = useState(0);

  // Plan time (monthly[false], yearly[true]) and planType. 1 = arcade, 2 = advanced, 3 = pro
  const [payTime, setPayTime] = useState(false);
  const [planType, setPlanType] = useState(0);
  
  // Users Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation errors in first form
  const [formErrors, setStepOneErros] = useState([]);

  // Addons the user choose. 0 = Online services, 1 = Larger storage, 2 = Customizable profile
  const [addOns, setAddOns] = useState([]);

  // On change events for the form
  const onChangeName = (e) =>{
    setName(e.target.value);
  }

  const onChangeEmail = (e) =>{
    setEmail( e.target.value);
  }

  const onChangePhone = (e) =>{
    setPhone(e.target.value);
   }


   // Habdle addon on change
   const onChangeAddon = (e) => {
    let addOnValue = e.target.value;
    if (addOns.includes(addOnValue)){
      let newAddons = addOns.filter(x => x != addOnValue)
      console.log(newAddons)
      setAddOns(newAddons)
    } else {
      setAddOns([...addOns, addOnValue])
    }
   }
   
   // Checks the form fields for empty inputs and adds the corresponding input name to the error state
  const checkFields = () => {

    let errors = [];

    if(name.length == 0 ){
        errors.push("name")
    } 

    if(email.length == 0 ) {
      errors.push("email")
    } 

    if(phone.length == 0 ) {
        errors.push("phone")
    }

    if(planType == 0 && currentTab == 1){
      errors.push("Please choose a plan")
    } 
    
    setStepOneErros(errors);

    if(currentTab < 3 && errors.length === 0){
        setCurrentTab(currentTab+1)
        console.log(currentTab)
      }

  }

  // Returns the the components according to the currentTab state
  const getCurrentTab = () => {
    switch(currentTab){
      case 0:
        return <FormInfo setCurrentTab={setCurrentTab} name={name} email={email} phone={phone} onChangeName={onChangeName}  onChangeEmail={onChangeEmail}  onChangePhone={onChangePhone} errors={formErrors}/>
      case 1:
        return <FormPlans  payTime={payTime} setPayTime={setPayTime} planType={planType} setPlanType={setPlanType} setCurrentTab={setCurrentTab} errors={formErrors}/>
      case 2:
        return <FormAddon planType={planType} addOns={addOns} setAddOns={setAddOns}/>
      default:
        return <FormInfo setCurrentTab={setCurrentTab} name={name} onChangeName={onChangeName} errors={formErrors}/>
    }
  }

  return (
    <div className="Form-container">
        <div className="App-tracker"><Tracker/></div>
        <div className="App-main">
        <FormAddon planType={planType} addOns={addOns} setAddOns={setAddOns} onChangeAddon={onChangeAddon}/></div>
        <div className="App-footer">
            {currentTab == 0 ? "" : <button onClick={()=>setCurrentTab(currentTab-1)} className="App-button back">Go Back</button>}
            <button onClick={checkFields} className="App-button next">Next Step</button>
        </div>
    </div>
  )
}

export default Form