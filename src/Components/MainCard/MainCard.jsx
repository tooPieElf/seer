import React, {Component} from 'react';
import CardUserProfile from '../CardUserProfile/CardUserProfile'
import UserDetails from '../UserDetails/UserDetails'
import CardSuccess from '../CardSuccess/CardSuccess'
import CardBankList from "../CardBankList/CardBankList";
import CardPin from "../CardPIn/CardPin";
import CardInput from "../CardInput/CardInput";
import CardSummary from "../CardSummary/CardSummary";

class Card extends Component {

    state = {
        step: 1,
        fullName: '',
        email:'',
        amount:'',
        cardNumber:'',
        month:'',
        year:'',
        cvv:'',
        pin:''
    };
    nextStep = () =>{
        const { step }=this.state;
        this.setState({
            step: step+1
        });
    };

    handleChange =input=> e =>{
        this.setState({[input]: e.target.value});
        console.log(this.state);
    };

    //  paywithSeerbit=()=> {
    //     SeerbitPay({
    //             "tranref": new Date().getTime(),
    //             "currency": "NGN",
    //             "description": "TEST",
    //             "country": "NG",
    //             "amount": "100.00",
    //             "callbackurl": "https://compassionate-lamarr-d5b41e.netlify.app/",
    //             "public_key":"SBTESTPUBK_TMuGegIWWQdEM0OsUrNcoUIfLIfDViD0", //replace this with your own public key
    //         },
    //         function callback(response) {
    //             console.log(response) /*response of transaction*/
    //         },
    //         function close(close) {
    //             console.log(close) /*transaction close*/
    //         })
    // }


    render() {
        const{ step }=this.state;
        const{ fullName, email, amount, cardNumber, month, year, cvv, pin} = this.state;
        const values = { fullName,email,amount,cardNumber,month,year,cvv,pin};
        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />

                );
            case 2:
                return(
                    <CardBankList
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                    />
                );
            case 3:
                return(
                    <CardInput
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                    />
                );
            case 4:
                return(
                    <CardPin
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                    />
                );
            // case 5:
            //     return(
            //         <CardSummary
            //             nextStep = {this.nextStep}
            //             handleChange = {this.handleChange}
            //         />
            //     );
        }
    }
}

export default Card;