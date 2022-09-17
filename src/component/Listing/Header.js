import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <section>
            <div class="row listing_header_section">
                <div class="col-md-2 zomato_logo">
                   <a href="index.html"> <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato"/></a>
                </div>
                <div class="col-md-7 search">
                    <i class="fas fa-map-marker-alt"></i>
                    <select name="Ahmedabad" id="city">
                       <option value="ahmedabad">Ahmedabad</option>
                       <option value="mumbai">Mumbai</option>
                       <option value="delhi">Delhi</option>
                       <option value="chennai">Chennai</option>
                       
                     </select>
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                </div>
                <div class="col-md-3">
                <ul class="listing_nav">
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
            </div>
        </section>
        )
    }
}

export default Header