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
        history.push('/destination/bike');
    }
    return (
        // <div>
        //     <div className="row col-md-12 mt-5 mx-5 d-flex justify-content-center" >
        //         <div class="card" style={{ width: '18rem' }} >
        //             <img class="card-img-top" src={Frame} alt="Card image cap" />
        //             <div class="card-body">

        //                 <p onClick={handleRouteChange} class="btn btn-primary">BIKE</p>
        //             </div>
        //         </div>

        //         <div class="card" style={{ width: '18rem' }} >
        //             <img class="card-img-top" src={Frame1} alt="Card image cap" />
        //             <div class="card-body">

        //                 <p href="#" class="btn btn-primary">BUS</p>
        //             </div>
        //         </div>

        //         <div class="card" style={{ width: '18rem' }} >
        //             <img class="card-img-top" src={Frame2} alt="Card image cap" />
        //             <div class="card-body">

        //                 <p href="#" class="btn btn-primary">CAR</p>
        //             </div>
        //         </div>

        //         <div class="card" style={{ width: '18rem' }} >
        //             <img class="card-img-top" src={Group} alt="Card image cap" />
        //             <div class="card-body">

        //                 <p href="#" class="btn btn-primary">TRAIN</p>
        //             </div>
        //         </div>

        //     </div>
        //     {/* <div className="row col-md-3 mt-5 mx-5 d-flex justify-content-center" >
        //     <div class="card"  style={{width: '18rem'}} >
        //         <img class="card-img-top" src={Frame} alt="Card image cap" /> 
        //             <div class="card-body">
                        
        //                 <a href="#" class="btn btn-primary">BIKE</a>
        //             </div>
        //         </div>
                
        //     </div> */}



            <section className="col-md-8 border-end">
                <div className="row row-cols-4 gx-3 gy-3 ml-5">
                    {
                        transport.map(transport => <Transport  key={transport.id} transport={transport} />)
                    }
                </div>
            </section>


        // </div>


    );
};

export default Home;