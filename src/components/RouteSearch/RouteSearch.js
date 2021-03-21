import React from 'react';
import { useParams } from 'react-router-dom';
import Map from '../../imgaes/Map.png'

const RouteSearch = () => {
    const {transportType} = useParams();
    return (
        <section className="container row d-flex justify-content-around">
            {/* <h1>This is bike</h1> */}
            <div className="col-md-6">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">From</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="From"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">To</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="To"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Search</button>
</form>
            </div>
            <div>
                <img src={Map} ></img>
            </div>
        </section>
    );
};

export default RouteSearch;