import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Device from './device'

class Home extends Component{

    state = {
        users: [],
        value: ''
    };

    componentDidMount(){
        axios.get(`http://localhost:9000/`).then(
            res => {
                this.setState({users: res.data})
            }
        );
    };

    /*handleChange = filterParam => {
        axios.get(`http://localhost:3000/devices`).then(
            res => {
                this.setState({devices: res.data})
                console.log("filter by ", filterParam);

                let devices = this.state.devices.filter(device => {
                    return device.type === filterParam;

                });
                if (filterParam === 'ALL'){
                    // eslint-disable-next-line no-restricted-globals
                    location.reload()
                }

                console.log(devices)
                this.setState({devices: devices})
            }
        );
    };*/

    render(){
        console.log(this.state.users)
        return (
            <div className="dash">
                <div className="sort">
                    <Link to="/add"><button className="add__device">Add Device</button></Link>
                </div>
                {this.state.users.map(user => (
                    <Device 
                        key = {user._id}
                        pk = {user._id}
                        firstname = {user.firstname}
                        lastname = {user.lastname}
                        email = {user.email}
                        idnumber = {user.idnumber}
                    />
                ))}
            </div>
        )
    }
}

export default Home;