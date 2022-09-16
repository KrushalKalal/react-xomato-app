import React,{Component} from 'react';
import './Option.css';

class Option extends Component{
    render(){
        return(
            <section class="order_content">
            <div class="row">
               <div class="order_card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <a href="listing.html">
                        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="food_item"/>
                    <div class="order_text">
                       <h2>Order Online</h2>
                       <h4>Stay home and order to your door step</h4>
                    </div>
                   </a>
                </div>
   
                <div class="order_card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                       <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Dining Out"/>
                   <div class="order_text">
                      <h2>Dining Out</h2>
                      <h4>View the city's favourite dining venues</h4>
                   </div>
               </div>
   
               <div class="order_card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                       <img src="https://b.zmtcdn.com/webFrontend/7c5da5fa471e5e5f26745709f60498a71647365004.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="pro plus"/>
   
                   <div class="order_text">
                      <h2>Pro and Pro Plus</h2>
                      <h4>Enjoy limitless dining privileges</h4>
                   </div>
               </div>
            </div>
         
          
            
       </section>
        )
    }
}

export default Option