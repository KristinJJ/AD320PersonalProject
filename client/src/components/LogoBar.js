import { React } from 'react';
import logo from '../images/picture.png';
import './LogoBar.css';

export default function LogoBar(props) {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Home Page logo"/>
            <h2 className="title">This is my Home Page</h2>
        </div>
    )
}