import React from 'react'
import "./Styles/Summary.css"

const Summary = ({addOns, planType, payTime}) => {

    let totalPrice = 0;

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
                price = 0
        }
        totalPrice += price;
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
                price = 0
        }
        totalPrice += price;
    }

    const getAddOnPrice = (addOnName) => {
        if(payTime) {
            switch(addOnName){
                case "Online Services":
                    totalPrice += 10;
                    return 10;

                case "Large Storage":
                    totalPrice += 20;
                    return 20;

                case "Customizable Profile":
                    totalPrice += 20;
                    return 20;

                default:
                    return 0;
            }
            
        } else {
            switch(addOnName){
                case "Online Services":
                    totalPrice += 1;
                    return 1;
 
                case "Large Storage":
                    totalPrice += 2;
                    return 2;

                case "Customizable Profile":
                    totalPrice += 2;
                    return 2;
                default:
                    return 0;
            }
        }
    }

    const addOnEle = addOns.map(addOn => <div className="Summary-desc-extra-addon"><span className="Summary-desc-extra-addon-name">{addOn}</span><span className="Summary-desc-extra-addon-price">+${getAddOnPrice(addOn)}{payTime ? "/yr" : "/mo"}</span></div>)

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
                <span>${price}{payTime ? "/yr" : "/mo"}</span>
            </div>
            <div className="Summary-desc-extra"> {/* Addons */}
                {addOnEle}
            </div>
        </div>

        <div className="Summary-total-container">
            <span className="Summary-total-heading">Total (per {payTime ? "year" : "month"})</span>
            <span className="Summary-total-price">${totalPrice}{payTime? "/yr" : "/mo"}</span>
        </div>
    
     </div>
  )
}

export default Summary