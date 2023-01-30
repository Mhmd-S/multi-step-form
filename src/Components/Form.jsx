import React from 'react'
import { useState } from 'react'
import "./Styles/Form.css"
import Tracker from "./Tracker.jsx"
import FormInfo from "./FormInfo.jsx"
import FormPlans from "./FormPlans.jsx"

const Form = () => {

  const [payTime, setPayTime] = useState(false);

  return (
    <div className="Form-container">
        <Tracker />
        <FormPlans payTime={payTime} setPayTime={setPayTime}/>
    </div>
  )
}

export default Form