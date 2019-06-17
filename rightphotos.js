import React from 'react';

const rightphotos=(props)=>{

    return(
    <div className="rightphotos">
        <span className="rightphotos--img1"><img src={props.img1} alt={props.img1}/></span>
        <span className="rightphotos--img2"><img src={props.img2} alt={props.img2}/></span>
        <span className="rightphotos--img3"><img src={props.img3} alt={props.img3}/></span>
        <span className="rightphotos--img4"><img src={props.img4} alt={props.img4}/></span>

    </div>)
    
};
export default rightphotos;