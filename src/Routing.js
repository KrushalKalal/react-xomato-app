import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './Footer';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <Route exact path="/" component={Home}/>
                <Footer/>
            </div>
            </BrowserRouter>
          
        )
    }
}

export default Routing;