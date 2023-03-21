import React, { useState} from 'react'
import "./destinations.scss";
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';

 const DestinationSelectDropdown = (props) => {

  const [isOpen, setIsOpen] = useState(false);
 
  return (
<>
  <button className='destinations-drop-down-button' onClick={ () => setIsOpen((prev) => !prev) }>

    <p className='destinations-drop-down-select'>Select destinations</p>
    {!isOpen ? ( 
      <RiArrowDownSLine className='destinations-drop-down-arrow' /> )  : (  <RiArrowUpSLine className='destinations-drop-down-arrow' /> )}

      {isOpen && <div className='destinations-drop-down-options'>
      <div className='destinations-drop-down-options-body' onClick={ (e) => props.onClick({ latitude: '34.052235', longitude: '-118.243683'}) }> <h4>LA</h4> </div>
      <div className='destinations-drop-down-options-body' onClick={ (e) => props.onClick({ latitude: '40.712776', longitude: '-74.005974'}) }> <h4>New York</h4> </div>
      <div className='destinations-drop-down-options-body' onClick={ (e) => props.onClick({ latitude: '37.774929', longitude: '-122.419418'}) }> <h4>San Francisco</h4> </div>
      </div>}
    
  </button>
 
</>
  )
}

export default DestinationSelectDropdown;