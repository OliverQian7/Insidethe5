import pic1 from './Images/pic1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

/*import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';*/
function Home() {
    return (
        <div id = "home">
            <h1>Welcome to Inside the Five</h1>
            <img src={pic1} id="pic1"></img> <br/>
            <Button color="danger">Danger!</Button>
        </div>
        
    )
}

//ReactDOM.render(<Home />)
export default Home