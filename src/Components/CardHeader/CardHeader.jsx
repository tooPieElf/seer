import React, {Component} from 'react';
import logo from '../../Assets/logo.png'
import './CardHeader.scss'

class CardHeader extends Component {
    render() {
        return (
            <div className = "container-top">
                <img className = "logo" src={logo} alt= "Logo"/>
            </div>
        );
    }
}

export default CardHeader;