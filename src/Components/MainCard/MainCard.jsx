import React, {Component} from 'react';
import CardUserProfile from '../CardUserProfile/CardUserProfile'
import UserDetails from '../UserDetails/UserDetails'
import CardSuccess from '../CardSuccess/CardSuccess'

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
    }
    nextStep = () =>{
        const { step }=this.state;
        this.setState({
            step: step+1
        });
    }

    handleChange = input=> e =>{
        this.setState({[input]: e.target.value});
    }
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
                    <CardUserProfile />
                );
            case 3:
                return(
                    <CardUserProfile />
                );
            case 4:
                return(
                    <CardSuccess />
                );
        }
    }
}

export default Card;