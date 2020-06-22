import React, {Component} from 'react';
import CardHeader from "../CardHeader/CardHeader";
import './CardPin.scss'
import CardBankdetails from "../CardBankdetails/CardBankdetails";
import CardFooter from "../CardFooter/CardFooter";
import { AiTwotoneBank } from "react-icons/ai";
import { BsCreditCard, BsArrowLeftRight} from "react-icons/bs";
import { RiWallet2Line } from "react-icons/ri";
import SeerbitPay from "react-seerbit";


 class CardPin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        public_key: "SBTESTPUBK_TMuGegIWWQdEM0OsUrNcoUIfLIfDViD0",
        amount: 100,
        tranref: "Pg5" + new Date().getTime(),
        
      };
    }
  
    close = close => {
      console.log(close);
    };
    callback = response => {
      console.log(response);
    };
    render() {
      return (
        <div>
          <SeerbitPay
            className="btn btn-success"
            tranref={this.state.tranref}
            currency={"NGN"}
            description={"test"}
            country={"NG"}
            clientappcode="app1"
            public_key={this.state.public_key}
            callback={this.callback}
            close={this.close}
            amount={this.state.amount}
          />
        </div>
      );
    }
  }

export default CardPin;