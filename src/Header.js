import React from 'react'
import "./Header.css"
//import SearchIcon from '@material-ui/icons/Search';
import { FaSearch } from 'react-icons/fa';
import { BsCart } from "react-icons/bs"
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
        <img
         className='header_logo' src="https://th.bing.com/th/id/R.8686d45049ad64ead94866b93abbd4ef?rik=KshYmXFM7JN2oQ&riu=http%3a%2f%2fwww.bizmonthly.com%2fwp-content%2fuploads%2f2020%2f04%2fAmazon-logo-black-template.png&ehk=YSOt1FBVTSDifvm%2fht3SvgMsEPiOyM19r3Y3EQdIKP0%3d&risl=&pid=ImgRaw&r=0" alt='amazon'/>
        </Link>
       
         <div className='header_search'>
             <input 
             className='header_searchInput'
             type="text" />
             <FaSearch className='fasearch'/>
         </div>
         <div className='header_nav'>
             <div className='header_option'>
                 <span 
                 className='header_optionOne'>
                     Hello guest
                 </span>
                 <span 
                 className='header_optionTwo'>
                     Sign in
                 </span>
             </div>            
              <div className='header_option'>
                 <span 
                 className='header_optionOne'>
                   Return 
                 </span>
                 <span 
                 className='header_optionTwo'>
                    &Orders
                 </span>
             </div>
             <div className='header_option'>
                 <span 
                 className='header_optionOne'>
                    Your
                 </span>
                 <span 
                 className='header_optionTwo'>
                    Prime
                 </span>
             </div>
             <Link to="/checkout">

          <div className='header_basket'>
          <BsCart className='basket' />
          <span className='header_optionTwo header_baketCount'>0
          </span>
          </div>
          </Link>



         </div>
    </div>
  )
}
