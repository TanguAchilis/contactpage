import React from 'react';

const headerBar=(props)=>{

    return(
        <div className='headerbar'>
            
            <span className="logo">
                <img src={props.link4} alt={props.link4}/>
                <span>{props.logoName}</span>
            </span>
            
            <span className="aholder">
                <a href='#'> {props.link1}</a>
                <a href='#'> {props.link2}</a>
                <a href='#'> {props.link3}</a>
            </span>
            
            
        </div>
    );

};
export default headerBar;