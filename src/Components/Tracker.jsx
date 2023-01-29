import React from 'react'
import "./Styles/Tracker.css"

const Tracker = () => {
  return (
    <ul className="Tracker-container">
        <li className="Tracker-subContainer">
            <div className="Tracker-subContainer-stepNumber">1</div>
            <h4 className="Tracker-subContainer-step">Step 1</h4>
            <div className="Tracker-subContainer-stepName">Your Info</div>
        </li>

        <li  className="Tracker-subContainer">
            <div className="Tracker-subContainer-stepNumber">2</div>
            <h4 className="Tracker-subContainer-step">Step 2</h4>
            <div className="Tracker-subContainer-stepName">Select Plan</div>
        </li>

        <li  className="Tracker-subContainer">
            <div className="Tracker-subContainer-stepNumber">3</div>
            <h4 className="Tracker-subContainer-step">Step 3</h4>
            <div className="Tracker-subContainer-stepName">Add-On</div>
        </li>

        <li  className="Tracker-subContainer">
            <div className="Tracker-subContainer-stepNumber">4</div>
            <h4 className="Tracker-subContainer-step">Step 4</h4>
            <div className="Tracker-subContainer-stepName">Summary</div>
        </li>
    </ul>
  )
}

export default Tracker