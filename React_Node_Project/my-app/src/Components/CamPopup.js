import React, { useState, useEffect } from 'react';
import './CamPopup.css'

function CamPopup(props) {

    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                {props.children}
            </div>
        
        </div>
    ) : "";
        
}

export default CamPopup
