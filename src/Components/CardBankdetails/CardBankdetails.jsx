import React from 'react';
import './CardBankdetails.scss'
import { RiBankLine } from "react-icons/ri";





const CardBankdetails =props =>{
    return (
        <div role="button" className="payment-button">
            <a href="#">
                <span className="icon">{props.icon}</span>
                <span className="label-text">{props.labelText}</span>
            </a>
        </div>
    );

} ;

CardBankdetails.defaultProps = {
    icon: <RiBankLine />,
    labelText: "some text"
};

export default CardBankdetails;
