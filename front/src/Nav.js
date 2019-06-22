import React, {Component} from 'react';
import './Nav.css';

class Nav extends React.Component{

    render(){
        function showInfo(){
            if(document.getElementById("accountInfo").style.visibility=="visible"){
                document.getElementById("accountInfo").style.visibility="hidden";
                document.getElementById("accountInfo").style.opacity=0;
                document.getElementById("accountInfo").style.height="0px";
                document.getElementById("accountInfo").style.width="200px";
            } else {
                document.getElementById("accountInfo").style.visibility="visible";
                document.getElementById("accountInfo").style.opacity=1;
                document.getElementById("accountInfo").style.height="200px";
                document.getElementById("accountInfo").style.width="200px";
            }
        }
            return(
            <div>
                <nav className="nav">
                    <div className="logo"><i className="fa fa-heart"></i> Like!</div>
                    <input placeholder="Type here.." className="search"></input>
                    <div className="account" onClick={showInfo}><i className="fa fa-bars"></i></div>
                </nav>
                <div id="accountInfo" className="accountInfo">
                    <h2>
                        Foo Bar
                    </h2>
                    <br/>
                    <ul>
                        <li>Stats: Cool dude</li>
                        <li>Stuffs: 100%</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Nav;