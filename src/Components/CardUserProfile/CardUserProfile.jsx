import React, {Component} from 'react';
import './CardUSerProfile.scss'


class CardUserProfile extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const{ values,handleChange } = this.props;
        return (
            <div>
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

export default CardUserProfile;