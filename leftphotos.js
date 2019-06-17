import React from 'react';

const leftphotos=(props)=>{
    return(
        <div className="leftphotos">
            <span className="leftphotos_img1"><img src={props.img1} alt={props.img1}/></span>
            <span className="leftphotos_img2"><img src={props.img2} alt={props.img2}/></span>
            <span className="leftphotos_img3"><img src={props.img3} alt={props.img3}/></span>

        </div>
    );

};
export default leftphotos;