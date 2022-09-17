import React,{Component} from 'react';
import Filter from './Filter'
import RestaurantList from './RestaurantList';
import './ListingComponent.css'

class ListingComponent extends Component{
    render(){
        return(
          <section class="container-fluid">
             <div class="row">
                <Filter/>
                <RestaurantList/>
             </div>
          </section>  
           
        )
    }
}

export default ListingComponent