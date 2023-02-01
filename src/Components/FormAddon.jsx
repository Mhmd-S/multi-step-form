import React from 'react'
import './Styles/FormAddons.css'


export const FormAddon = ({payTime, addOns, onChangeAddon}) => {
  return (
    <div className="FormAddon-container">
        
        <div className="FormAddon-header">
            <h1>Pick add-ons</h1>
            <h5>Add-ons to customize your experience.</h5>
        </div>

        <div className="FormAddon-addons">

            <label className={addOns.includes("Online Services") ? "FormAddon-addons-addon FormAddon-addons-addon-active" : "FormAddon-addons-addon"}>
                <input type="checkbox" onClick={ e=>onChangeAddon(e)} value="Online Services"></input>                
                <h6>Online Services</h6>
                <p>Access to multiplayer games</p>
                <span>{payTime ? "+$1/mo" : "+$10/yr"}</span>
            </label>
            
            <label className={addOns.includes("Large Storage") ? "FormAddon-addons-addon FormAddon-addons-addon-active" : "FormAddon-addons-addon"}>
                <input type="checkbox" onClick={ e=>onChangeAddon(e)} value="Large Storage"></input>        
                <h6>Large Storage</h6>
                <p>Access to multiplayer games</p>
                <span>{payTime ? "+$2/mo" : "+$20/yr"}</span>
            </label>
            
            <label className={addOns.includes("Customizable Profile") ? "FormAddon-addons-addon FormAddon-addons-addon-active" : "FormAddon-addons-addon"}>
                <input type="checkbox" onClick={ e=>onChangeAddon(e)} value="Customizable Profile"></input>        
                <h6>Customizable Profile</h6>
                <p>Cutom theme for your profile</p>
                <span>{payTime ? "+$3/mo" : "+$30/yr"}</span>
            </label>
        
        </div>
    </div>
  )
}
