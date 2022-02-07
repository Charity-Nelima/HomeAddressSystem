import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Device = ({firstname, lastname, email, idnumber, pk}) => {

    const [user, setUser] = useState([]);
    const [item, setItem] = useState([]);

    const handleClick = () => {
        fetch(`http://localhost:9000/${pk}/`,{
            method: 'DELETE'
        }).then(
            res => {
                setUser({user: res.data})
            }
        ).then(
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        )
        console.log(user)
    };

    console.log(item)
    console.log(user)
    return (
        <div>
            <div className="home">
                <ul>
                    <li>
                        <div className='details'>
                            <h4>{firstname}</h4>
                            <h4>{lastname}</h4>
                            <h4>{email}</h4>
                            <h4>{idnumber}</h4>
                        </div>
                        <div className="edit__device">
                            <Link to={`/update/${pk}`}><button className="edit">Edit</button></Link>
                            <button className="delete" onClick={handleClick}>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Device;