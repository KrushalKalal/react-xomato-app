import React,{Component} from 'react';
import axios from 'axios';
import Filter from './Filter'
import RestaurantList from './RestaurantList';
import Header from './Header'
import './RestaurantList.css'

const optionList = "https://xomato-api.herokuapp.com/api/restaurantList?optionId="

class ListingComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            options:''
        }
    }

    render(){
        return(
         <>
          <Header/>
          <section class="container-fluid">
             <div class="row">
                <Filter/>
                 <div class="col-lg-9 content">
                   <div class="content_block">
                     <h2>Order food online in Ahmedabad</h2>
                     <div class="row order_cardmargin">
                       <RestaurantList optionData={this.state.options}/>
                    </div>
                   </div>
                 </div> 
            </div>
          </section> 
         </> 
           
        )
    }

    componentDidMount(){
        let optionId = this.props.match.params.optionId;
        axios.get(`${optionList}${optionId}`)
        .then((res) => {this.setState({options:res.data})})
    }
}

export default ListingComponent