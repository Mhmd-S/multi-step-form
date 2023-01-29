import React from 'react'
import './Styles/FormPlans.css'

const FormPlans = ({payTime, setpayTime}) => {
  return (
    <div>
        <div className='FormPlans-header'>
            <h1>Select your plan</h1>
            <h5>You have the option of monthly or yearly billing.</h5>
        </div>

        <div className="FormPlans-plans">
            <div className="FormPlans-plans-planContainer">
                <img src="./Misc/joystick.svg" alt="arcade"/>
                <h5>Arcade</h5>
                <h6>$9/mo</h6>
            </div>

            <div className="FormPlans-plans-planContainer">
                <img src="./Misc/controller.svg" alt="advanced"/>
                <h5>Advanced</h5>
                <h6>$12/mo</h6>
            </div>

            <div className="FormPlans-plans-planContainer">
                <img src="./Misc/bullseye.svg" alt="pro"/>
                <h5>Pro</h5>
                <h6>$15/mo</h6>
            </div>
        </div>
        
        <div>
            <button className="FormInfo-button">Go Back</button>
            <button className="FormInfo-button">Next Step</button>
        </div>
        
    </div>
  )
}

export default FormPlans