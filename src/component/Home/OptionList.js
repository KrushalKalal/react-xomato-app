import React from 'react';
import {Link} from 'react-router-dom';

const OptionList = (props)=>{
    const listOption = ({optionType}) =>{
       if(optionType){
        console.log(optionType)
        return optionType.map((item)=>{
            return(
                <Link to={`/listing/${item.option_id}`} key={item._id}>
                        <img src={item.option_img} alt={item.option_img_alt}/>
                        <div class="order_text">
                          <h2>{item.type}</h2>
                          <h4>{item.content}</h4>
                       </div>
                </Link>
                
            )
        })
       }
    }

    return(
        <>
           {listOption(props)}
        </>
    )
}

export default OptionList




