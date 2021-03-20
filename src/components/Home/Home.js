import React from 'react';
import Background from '../../imgaes/Bg.png'
import Frame from '../../imgaes/Frame.png'
import Frame1 from '../../imgaes/Frame-1.png'
import Frame2 from '../../imgaes/Frame-2.png'
import Group from '../../imgaes/Group.png'

const Home = () => {
    return (
        <div>
        <div className="row col-md-12 mt-5 mx-5 d-flex justify-content-center" >
            <div class="card"  style={{width: '18rem'}} >
                <img class="card-img-top" src={Frame} alt="Card image cap" /> 
                    <div class="card-body">
                        
                        <a href="#" class="btn btn-primary">BIKE</a>
                    </div>
                </div>

                <div class="card"  style={{width: '18rem'}} >
                <img class="card-img-top" src={Frame1} alt="Card image cap" /> 
                    <div class="card-body">
                        
                        <a href="#" class="btn btn-primary">BUS</a>
                    </div>
                </div>

                <div class="card"  style={{width: '18rem'}} >
                <img class="card-img-top" src={Frame2} alt="Card image cap" /> 
                    <div class="card-body">
                        
                        <a href="#" class="btn btn-primary">CAR</a>
                    </div>
                </div>

                <div class="card"  style={{width: '18rem'}} >
                <img class="card-img-top" src={Group} alt="Card image cap" /> 
                    <div class="card-body">
                        
                        <a href="#" class="btn btn-primary">TRAIN</a>
                    </div>
                </div>
                
            </div>
            {/* <div className="row col-md-3 mt-5 mx-5 d-flex justify-content-center" >
            <div class="card"  style={{width: '18rem'}} >
                <img class="card-img-top" src={Frame} alt="Card image cap" /> 
                    <div class="card-body">
                        
                        <a href="#" class="btn btn-primary">BIKE</a>
                    </div>
                </div>
                
            </div> */}
            </div>

            
    );
};

export default Home;