import React from 'react'
import "./Styles/Summary.css"

const Summary = ({addOns, planType, payTime}) => {

    let planName;
    switch(planType){
        case 1:
            planName = "Arcade"
            break;
        case 2:
            planName = "Advanced"
            break;
        case 3:
            planName = "Pro"
            break;
        default:
            planName = "NULL"
    }

    let price;
    if(payTime) {
        switch(planType){
            case 1:
                price = 90
                break;
            case 2:
                price = 120
                break;
            case 3:
                price = 150
                break;
            default:
                price = "NULL"
        }
    } else {
        switch(planType){
            case 1:
                price = 9
                break;
            case 2:
                price = 12
                break;
            case 3:
                price = 15
                break;
            default:
        }
    }

    const getAddOnPrice = (addOnName) => {
        console.log(123)
        if(payTime) {
            switch(addOnName){
                case "Online Services":
                    return 10;

                case "Large Storage":
                    return 20

                case "Customizable Profile":
                    return 20

                default:
                    return "NULL"
            }
        } else {
            switch(addOnName){
                case "Online Services":
                    return 1
 
                case "Large Storage":
                    return 2

                case "Customizable Profile":
                    return 2
                default:
                    return "NULL"
            }
        }
    }

    const addOnEle = addOns.forEach(addOn => {<div><span>{addOn}</span>{getAddOnPrice(addOn)}<span></span></div>})

  return (
    <div className="Summary-container">
        <div className="Summary-header">
            <h1>Finishing Up</h1>
            <h5>Summary of your cart.</h5>
        </div>
        <div className="Summary-desc-container">
            <div className="Summary-desc-cart">
                <h4>{planName}({payTime ? "Yearly" : "Monthly"})</h4>
                <button>Change</button>
                <span>${price}/{payTime ? "/yr" : "/mo"}</span>
            </div>
            <div className="Summary-desc-extra"> {/* Addons */}
                {addOnEle}
            </div>
        </div>
        <div className="Summary-total-container">
            <span>Total(per {})</span>
            <span>{}</span>
        </div>
    </div>
  )
}

export default Summary