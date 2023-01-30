import React from 'react'
import { useState } from 'react'
import "./Styles/Form.css"
import Tracker from "./Tracker.jsx"
import FormInfo from "./FormInfo.jsx"
import FormPlans from "./FormPlans.jsx"

const Form = () => {

  const [payTime, setPayTime] = useState(false);
  const [planType, setPlanType] = useState(0);

  return (
    <div className="Form-container">
        <Tracker />
        <FormPlans payTime={payTime} setPayTime={setPayTime} planType={planType} setPlanType={setPlanType}/>
    </div>
  )
}

export default Form