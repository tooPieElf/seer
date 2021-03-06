import React, {Component} from 'react';
import CardHeader from "../CardHeader/CardHeader";
import './CardUSerProfile.scss'
import CardBankdetails from "../CardBankdetails/CardBankdetails";
import CardFooter from "../CardFooter/CardFooter";
import { BsArrowLeftRight} from "react-icons/bs";
import { RiWallet2Line } from "react-icons/ri";
import CardInput from "../CardInput/CardInput";


class CardUserProfile extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const {handleChange} = this.props;
        return (
            <>
                <div className="card-container3">
                    <CardHeader />
                    <div className = "container-bottom">
                    <CardInput
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                    />
                    </div>
                </div>
                <div className="card-group">
                <CardBankdetails labelText="Pay with Bank"/>
                <CardBankdetails labelText="Pay with Bank Transfer" icon = <BsArrowLeftRight />/>
                <CardBankdetails labelText="Pay with Bank Wallet" icon = <RiWallet2Line /> />
                </div>
                <CardFooter />
            </>
        );
    }
}
export default CardUserProfile;