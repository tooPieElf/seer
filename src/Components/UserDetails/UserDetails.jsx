import React, {Component} from 'react';
import CardHeader from '../CardHeader/CardHeader'
import './UserDetails.scss'
import CardFooter from "../CardFooter/CardFooter";


class UserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {handleChange} = this.props;
        return (
            <>
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
                                     onChange ={handleChange('fullName')}

                            />
                        </div>
                        <div className="info-field">
                            <label  className="input-label"> Email</label>
                            <input  className="form-input" type="text" name="email" placeholder="Email"
                                    onChange={handleChange('email')}

                            />
                        </div>
                        <div className="info-field">
                            <label  className="input-label"> Phone Number</label>
                            <input   className="form-input" type="text" name="phoneNumber" placeholder="Phone Number"
                                     onChange={handleChange('phoneNumber')}

                            />
                        </div>
                        <div className= "button-container">
                            <button className = "button-primary" onClick = {this.continue}>continue</button>
                        </div>
                    </form>

                </div>
            </div>
            <CardFooter />
                </>
        );
    }
}

export default UserDetails;