import React, {Component} from 'react';
import './Nav2.css';

class Nav2 extends React.Component{
    render(){
        return(
                <nav className="nav">
                    <div className="logo">logo</div>
                    <input className="search"></input>
                    <div className="menu">menu</div>
                </nav>
         
        )
    }

}

export default Nav2;