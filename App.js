import React, { Component } from 'react';
import HeaderBar from './headerbar';
import ContactUs from './contactUs';
import RightPhotos from './rightphotos';
import LeftPhotos from './leftphotos';
import './App.css';
/*** this is the section for importing images since they cannot be used directly in react. we most first import them***/
/** importing of photoes in the left. l stands for left **/
import photol1 from './images/left1.png';
import photol2 from './images/left2.png';
import photol3 from './images/left3.png';

/*** importing photoes in the right. r stands for right***/
import photor1 from './images/right1.png';
import photor2 from './images/right2.png';
import photor3 from './images/right3.png';
import photor4 from './images/special.png';
/** the next import is the logo**/
import logo from './images/iconnew.png';





class App extends Component{

    state={
        linkForHeader:[
            {
             link1:"Contact Us", link2:"Sign Up", link3:"Sign In", link4:logo, link5:"Ayushi"}],

        leftpics:[
            {pic1:photol1, pic2:photol2, pic3:photol3}],

        rightpics:[
            {pic1:photor1,pic2:photor2,pic3:photor3 , pic4:photor4}
        ]
    }



    render(){
/***************************making the content for the header bar to be dynamic********************************** */
        let HeadB=(
            <div>
                {this.state.linkForHeader.map(h=>{return(
                    <HeaderBar 
                    link1={h.link1}
                    link2={h.link2}
                    link3={h.link3}
                    link4={h.link4}
                    logoName={h.link5}/>
                );})}
            </div>
        );


    /*************this is the section for making the content of rightphotoes to be rendered dynamically************ */

    let RightP=(

        <div>
            {this.state.rightpics.map(p=>{
                return(
                    <RightPhotos
                    img1={p.pic1}
                    img2={p.pic2}
                    img3={p.pic3}
                    img4={p.pic4}/>
                )
            })}
        </div>
    );



/********this is the section for making the content of the leftphotos to be rendered dynamically********** */

let LeftP=(
    <div>
        {this.state.leftpics.map(p=>{
            return(
                <LeftPhotos
                img1={p.pic1}
                img2={p.pic2}
                img3={p.pic3}/>
            )
        })}
    </div>
);
/*************************************************************************************************** */




        return( 
        
        <div className="App">
            {HeadB}
           <div className="middlbody"> 
                {RightP}
                <ContactUs/>
                {LeftP}
            </div>
        </div>);

    }

};
export default App;
