import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/Listing/ListingComponent'
import Explore from './Explore';
import Footer from './Footer';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/listing/:optionId" component={Listing}/>
                <Explore/>
                <Footer/>
            </div>
            </BrowserRouter>
          
        )
    }
}

export default Routing;