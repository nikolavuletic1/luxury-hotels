import React from 'react'
import { Link} from "react-router-dom";

const HotelsNavigation = () => {
  return (
    <>
    <div className='hotels-navigation-wrapper'>

        <ul className='hotels-navigation-container'>
      
        <li className='nav-link nav-link-hotels'> <Link to=''> Destination general info </Link></li>
        <li className='nav-link nav-link-hotels'> <Link to='howtogetthere'>How to get there</Link></li>
        <li className='nav-link nav-link-hotels'> <Link to='whattosee'>What to see</Link></li>  
        <li className='nav-link nav-link-hotels'> <Link to='wheretoeat'>Where to eat</Link></li>  
      
        </ul>
       
        <div className='line'></div>
    
        </div> 
    </>
    
  )
}

export default HotelsNavigation


