import React, {Component} from 'react';
import './CardInput.scss'
import CardHeader from "../CardHeader/CardHeader";
import CardBankdetails from "../CardBankdetails/CardBankdetails";
import { BsArrowLeftRight} from "react-icons/bs";
import { RiWallet2Line } from "react-icons/ri";

class CardInput extends Component {
    constructor(props) {
        super(props);
    }

    continue = e =>{
        e.preventDefault();
       this.props.nextStep();
    };

    render() {
        return (
            <>
            <div className="card-container2">
                <CardHeader />
                <div className="center">
                <form className="card-input">
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        className="custom-card-input c-100"
                    />
                    <input
                        type="text"
                        name="month"
                        placeholder="MM"
                        className="custom-card-input c-25"
                        pattern="\d{2}"
                    />
                    <input
                        type="text"
                        name="year"
                        placeholder="YY"
                        className="custom-card-input c-26"
                        pattern="\d{2}"
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        className="custom-card-input c-50"
                        pattern="\d{3}"
                    />
                    <button className="form-btn" onClick = {this.continue}>
                        Pay</button>
                </form>
                </div>
            </div>
            <div className="card-group">
            <CardBankdetails labelText="Pay with Bank"/>
            <CardBankdetails labelText="Pay with Bank Transfer" icon = <BsArrowLeftRight />/>
            <CardBankdetails labelText="Pay with Bank Wallet" icon = <RiWallet2Line /> />
            </div>
        </>
        );
    }
}

export default CardInput;

