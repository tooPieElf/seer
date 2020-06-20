import React, {Component} from 'react';
import CardBankList from "../CardBankList/CardBankList";
import CardBankdetails from "../CardBankdetails/CardBankdetails";
import { BsCreditCard, BsArrowLeftRight} from "react-icons/bs";
import { RiWallet2Line } from "react-icons/ri";
import CardHeader from "../CardHeader/CardHeader";
import CardFooter from "../CardFooter/CardFooter";

class CardSummary extends Component {
    render() {
        return (
            <>
            <CardBankdetails labelText="Pay with Bank"/>
            <div className="card-container">
                <CardHeader />

            </div>
                <CardBankdetails labelText="Pay with Card" icon = <BsCreditCard />/>
                <CardBankdetails labelText="Pay with Wallet" icon = <RiWallet2Line />/>
                <CardFooter />
        </>
        );
    }
}

export default CardSummary;