import React from 'react';
import { useState, useEffect } from 'react';
import NativeSelect from '@mui/material/NativeSelect';


function CustomSelect(props) {
  const [listeAcc, setlisteAcc] = useState([]);

  

    return(props.trigger) ? (
        <NativeSelect value="accomodation" >

              <option value = "option"> sahar </option>
              <option value = "option"> zeineb </option>

      </NativeSelect>
    ) : "";
        
}

export default CustomSelect 
