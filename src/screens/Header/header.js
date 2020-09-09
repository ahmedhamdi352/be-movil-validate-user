import React from 'react'
import logo1 from '../../assest/images/Group5216.png'
import logo2 from '../../assest/images/Group5032.png'
import './style.scss';

export const Header = () => {
    return (
        <div className='container'>
           <img className='logo1' src={logo1} alt='logo1'/>
           <img className='logo2' src={logo2} alt='logo2'/>
        </div>
    )
}



export default Header
