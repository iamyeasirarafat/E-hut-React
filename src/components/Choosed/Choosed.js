import React from 'react';

const Choosed = ({item}) => {
    if (item === undefined || item === null) {
        return;
    }
    else{
        return (
            <div>
    
              <img src={item.picture} alt="" />
                <h6>{item.name}</h6>
                <h6>{item.price}</h6>
                            
            </div>
        );
    }
};

export default Choosed;