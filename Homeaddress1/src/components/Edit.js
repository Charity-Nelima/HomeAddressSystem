import React, {Component} from 'react'
import {Navigate, Link} from 'react-router-dom'
import axios from 'axios'

class Edit extends Component{

    state = {
        dets: {
            lastname: '',
            firstname: '',
            email: '',
            address: ''
        },
        redirect: false,
        id: ''
    }

    componentDidMount(){
        const id = window.location.pathname
        const field = id.split('/')
        const pk = field[2]
        this.setState({id: pk})

        axios.get(`http://localhost:9000/${pk}`).then (
            res => {
                this.setState({dets: res.data})
                console.log(this.state.dets)
            }
        )

    }

    handleClick = (event) => {
        let userId = this.state.id
        event.preventDefault();
        fetch(`http://localhost:9000/${userId}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.dets)
        }).then (
            alert("Device has been updated")
        ).then(
            () => this.setState({redirect: true})
        )
    };


    inputChange = event => {
        const det = this.state.dets;
        det[event.target.name] = event.target.value;
        this.setState({dets : det})
    }

    handleChange = event => {
        const detail = this.state.dets;
        detail.type = event.target.value
        this.setState({dets: detail})
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
                    <h3>Edit Home Address</h3>
                    <form>
                        <div className="fields">
                            <h4>First Name *</h4>
                            <input 
                                type="text"
                                name="firstname"
                                value={this.state.dets.firstname}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Last name *</h4>
                            <input 
                                type="text"
                                name="lastname"
                                value={this.state.dets.lastname}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Email *</h4>
                            <input 
                                type="number"
                                name="email"
                                value={this.state.dets.email}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Address Location *</h4>
                            <input 
                                type="text"
                                name="address"
                                value={this.state.dets.AddressLocation}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="buttons">
                            <Link to="/"><button className="close">Close</button></Link>
                            <button className="save" onClick={this.handleClick}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit;