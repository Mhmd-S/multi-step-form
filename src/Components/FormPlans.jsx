import React from 'react'
import './Styles/FormPlans.css'

const FormPlans = ({payTime, setPayTime, planType, setPlanType}) => {
  return (
    <div className="FormPlans-container">
        <div className='FormPlans-header'>
            <h1>Select your plan</h1>
            <h5>You have the option of monthly or yearly billing.</h5>
        </div>

        <div className="FormPlans-plans">
            <div onClick={()=>{setPlanType(1)}} className={planType == 1 ? "FormPlans-plans-planContainer FormPlans-plans-planContainer-active": "FormPlans-plans-planContainer"}>
                <img id="img-arcade" src="./Misc/joystick.svg" alt="arcade"/>
                <h5>Arcade</h5>
                <h6>{payTime ? "$90/yr":"$9/mo"}</h6>
                {payTime ? <span>2 months free</span> : ""}
            </div>

            <div onClick={()=>{setPlanType(2)}} className={planType == 2 ? "FormPlans-plans-planContainer FormPlans-plans-planContainer-active": "FormPlans-plans-planContainer"}>
                <img id="img-adv" src="./Misc/controller.svg" alt="advanced"/>
                <h5>Advanced</h5>
                <h6>{payTime ? "$120/yr":"$12/mo"}</h6>
                {payTime ? <span>2 months free</span> : ""}
            </div>

            <div onClick={()=>{setPlanType(3)}} className={planType == 3 ? "FormPlans-plans-planContainer FormPlans-plans-planContainer-active": "FormPlans-plans-planContainer"}>
                <img id="img-pro" src="./Misc/bullseye.svg" alt="pro"/>
                <h5>Pro</h5>
                <h6>{payTime ? "$150/yr":"$15/mo"}</h6>
                {payTime ? <span>2 months free</span> : ""}
            </div>
        </div>
        
        <div className="FormPlans-toggle-container">
            <span className={payTime ? undefined : "active-span"}>Monthly</span>
            <div  onClick={()=>setPayTime(!payTime)} className={payTime ? "active-slider slider":"slider"}></div>
            <span className={payTime ? "active-span" : undefined}>Yearly</span>            
        </div>

        <div className="FormPlans-footer">
            <button className="FormPlans-button back">Go Back</button>
            <button className="FormPlans-button next">Next Step</button>
        </div>
        
    </div>
  )
}

export default FormPlans