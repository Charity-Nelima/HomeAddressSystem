import React, {Component} from 'react'
import {Navigate, Link} from 'react-router-dom'

class Add extends Component{

    state = {
        details: {
            firstname: '',
            lastname: '',
            address: '',
            email: ''
        },
    }

    submit = event => {
        event.preventDefault();
        fetch(`http://localhost:9000/`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.details)
        }).then(
            alert("device added")
        ).then(
            () => this.setState({redirect: true})
        )
    };

    inputChange = event => {
        const detail = this.state.details;
        detail[event.target.name] = event.target.value;
        this.setState({details : detail})
    }

    handleChange = event => {
        const det = this.state.details;
        det.type = event.target.value
        this.setState({details: det})
        console.log(this.state)
    }

    render(){
        const {redirect} = this.state;
        if (redirect) {
            return <Navigate replace to="/" />
        }
        return (
            <div>
                <div className="add">
                    <h3>Enter Details</h3>
                    <form>
                        <div className="fields">
                            <h4>First Name *</h4>
                            <input 
                                type="text"
                                name="firstname"
                                value={this.state.details.firstname}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Last Name *</h4>
                            <input 
                                type="text"
                                name="lastname"
                                value={this.state.details.lastname}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Email *</h4>
                            <input 
                                type="text"
                                name="email"
                                value={this.state.details.email}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Address Location *</h4>
                            <input 
                                type="text"
                                name="address"
                                value={this.state.details.addresslocation}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="buttons">
                            <Link to="/" ><button className="close">Close</button></Link>
                            <button className="save" onClick={this.submit}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Add;