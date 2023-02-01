import React from 'react'
import { useState } from 'react'
import "./Styles/Form.css"
import Tracker from "./Tracker.jsx"
import FormInfo from "./FormInfo.jsx"
import FormPlans from "./FormPlans.jsx"

const Form = () => {

  const [currentTab, setCurrentTab] = useState(0);
  const [payTime, setPayTime] = useState(false);
  const [planType, setPlanType] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [stepOneErrors, setStepOneErros] = useState([]);

  const onChangeName = (e) =>{
    setName(e.target.value);
  }

  const onChangeEmail = (e) =>{
    setEmail( e.target.value);
  }

  const onChangePhone = (e) =>{
    setPhone(e.target.value);
   }

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
    
    setStepOneErros(errors);

    if(currentTab < 3 && errors.length === 0){
      
        setCurrentTab(currentTab+1)
        console.log(currentTab)
      }

  }

  const getCurrentTab = () => {
    switch(currentTab){
      case 0:
        return <FormInfo setCurrentTab={setCurrentTab} name={name} email={email} phone={phone} onChangeName={onChangeName}  onChangeEmail={onChangeEmail}  onChangePhone={onChangePhone} errors={stepOneErrors}/>
      case 1:
        return <FormPlans  payTime={payTime} setPayTime={setPayTime} planType={planType} setPlanType={setPlanType} setCurrentTab={setCurrentTab}/>
      default:
        return <FormInfo setCurrentTab={setCurrentTab} name={name} onChangeName={onChangeName} errors={stepOneErrors}/>
    }
  }

  return (
    <div className="Form-container">
        <div className="App-tracker"><Tracker/></div>
        <div className="App-main">{getCurrentTab()}</div>
        <div className="App-footer">
            {currentTab == 0 ? "" : <button onClick={()=>setCurrentTab(currentTab-1)} className="App-button back">Go Back</button>}
            <button onClick={checkFields} className="App-button next">Next Step</button>
        </div>
    </div>
  )
}

export default Form