import React, {Component} from 'react';
import CardHeader from "../CardHeader/CardHeader";
import './CardPin.scss'
import CardBankdetails from "../CardBankdetails/CardBankdetails";
import CardFooter from "../CardFooter/CardFooter";
import { AiTwotoneBank } from "react-icons/ai";
import { BsCreditCard, BsArrowLeftRight} from "react-icons/bs";
import { RiWallet2Line } from "react-icons/ri";


class CardPin extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const {handleChange} = this.props;
        return (
            <>
                <div className="card-container2">
                    <CardHeader />
                    <div className = "container-bottom">
                        <form className= "form-container">
                            <div className="info-field">
                                <input   className="form-input" type="text" name="pin" placeholder="Pin"
                                         onChange ={handleChange('pin')}
                                />
                            </div>
                            <div className= "button-container">
                                <button className = "button-primary2" onClick = {this.continue}>pay</button>
                            </div>
                        </form>
                    </div>
                </div>
                <CardBankdetails labelText="Pay with Bank"/>
                <CardBankdetails labelText="Pay with Bank Transfer" icon = <BsArrowLeftRight />/>
                <CardBankdetails labelText="Pay with Bank Wallet" icon = <RiWallet2Line /> />
                <CardFooter />
            </>
        );
    }
}
export default CardPin;