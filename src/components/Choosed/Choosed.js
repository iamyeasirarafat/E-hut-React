import React from 'react';
import './Choosed.css'
const Choosed = ({item}) => {
    if (item === undefined || item === null) {
        return;
    }
    else{
        return (
            <div className="choosedItem">
    
              <img src={item.picture} alt="" />
                <h6> {item.name}</h6>
                <h6>{item.price}</h6>
                            
            </div>
        );
    }
};

export default Choosed;