import React from 'react';
import { useHistory } from 'react-router';

const Transport = (props) => {

    const history = useHistory()
    const handleRouteChange = () => {
        history.push(`/destination/${name}`);
    }


    const {name, image} = props.transport;
    return (
        <div className="col text-center">
            <div className="card border-3">
                <img src={image} alt="..." />
                <div className="card-body">
                    
                   
                    <button onClick={handleRouteChange} className="btn btn-success">{name}</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Transport;