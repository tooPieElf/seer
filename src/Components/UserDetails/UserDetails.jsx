import React, {Component} from 'react';
import CardHeader from '../CardHeader/CardHeader'
import './UserDetails.scss'
import CardUserProfile from "../CardUserProfile/CardUserProfile";


class UserDetails extends Component {

    render() {
        const {nextStep,handleChange, values} = this.props
        return (
            <div className="card-container">
                <CardHeader />
                <div className = "container-bottom">
                    <div className = "title">
                        <h2 >enter personal information</h2>
                    </div>
                    <form className= "form-container">
                        <div className="info-field">
                            <label  className="input-label"> Full Name</label>
                            <input   className="form-input" type="text" name="fullName" placeholder="Full name"
                                     onChange ={handleChange}
                                     defaultValue = {values.fullName}
                            />
                        </div>
                        <div className="info-field">
                            <label  className="input-label"> Email</label>
                            <input  className="form-input" type="text" name="email" placeholder="Email"/>
                        </div>
                        <div className="info-field">
                            <label  className="input-label"> Phone Number</label>
                            <input   className="form-input" type="text" name="phoneNumber" placeholder="Phone Number"/>
                        </div>
                        <div className= "button-container">
                            <button className = "button-primary" onClick = {this.continue}>continue</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default UserDetails;