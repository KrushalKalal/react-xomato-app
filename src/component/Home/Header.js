import React,{Component} from 'react';
import './Header.css';

const cityUrl = "https://xomato-api.herokuapp.com/api/cityList";
let restaurantUrl = "https://xomato-api.herokuapp.com/api/restaurantList?cityId="

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) =>{
        if(data){
            console.log(data)
            return data.map((item)=>{
                return(
                    <option value={item.city_id} key={item.city_id}>{item.city_name}</option>
                   
                )
            })
        }
      
    }

    handleCity = (event) => {
        let city_id = event.target.value;
        console.log(city_id);
        fetch(`${restaurantUrl}${city_id}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })

        
    }

    renderRestaurant=(data)=>{
        if(data){
            console.log(data)
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }


    render(){
        return(
            <section class="header_section">
            <div class="navigation">
                <div>
                    <h4>Get the App</h4>
                </div>
                <ul class="xomato_nav">
                    <li><a href="#">Add restaurant</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
            <div class="zomato_head">
                 <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato logo"/>
                 <h3>Discover the best food & drinks in Ahmedabad</h3>
                 <div class="search">
                     <i class="fas fa-map-marker-alt"></i>
                     <select onChange={this.handleCity}>
                        <option>Select Your City</option>
                        {this.renderCity(this.state.location)}
                    </select>
                     {/* <i class="fas fa-search"></i> */}
                     <select>
                     <option>Search for restaurant, cuisine or a dish</option>
                     {this.renderRestaurant(this.state.restaurant)}
                     </select>
                     {/* <input type="text" placeholder="Search for restaurant, cuisine or a dish"/> */}
                 </div>
            </div>
            <div class="zomato_background">
               <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="xomato"/>
            </div>
        </section>
        )
    }

    componentDidMount(){
        fetch(cityUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({location:data})
        })
    }
}

export default Header