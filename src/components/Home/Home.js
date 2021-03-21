import React, { useEffect, useState } from 'react';
import Background from '../../imgaes/Bg.png'
import Frame from '../../imgaes/Frame.png'
import Frame1 from '../../imgaes/Frame-1.png'
import Frame2 from '../../imgaes/Frame-2.png'
import Group from '../../imgaes/Group.png'
import { useHistory } from 'react-router';
import transports from '../../fakeData/fakeData.json';
import Transport from '../Transports/Transport'

const Home = (props) => {

    const [transport,setTransport] = useState([]);
    useEffect(() =>{
        setTransport(transports);
    },[]);


    const history = useHistory()
    const handleRouteChange = () => {
        history.push('/destination/RouteSearch');
    }
    return (
            <section className="col-md-9 border-end">
                <div className="row row-cols-4 gx-3 gy-3 ml-5">
                    {
                        transport.map(transport => <Transport  key={transport.id} transport={transport} />)
                    }
                </div>
            </section>
    );
};

export default Home;