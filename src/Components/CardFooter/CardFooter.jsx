import React, {Component} from 'react';
import logo from '../../Assets/logo.png'
import './CardFooter.scss'

class CardFooter extends Component {
    render() {
        return (
            <div className="buttom-sign">
            <span>
              <p className = "buttom-logo-sign"> Powered by</p>
            </span>
                <span>
            <img className = "logo2" src={logo} alt= "Logo"/>
            </span>
            </div>
        );
    }
}

export default CardFooter;