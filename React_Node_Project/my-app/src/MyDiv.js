import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MyDiv(props) {
    return (
        <div style = {{ backgroundColor : props.color, borderRadius : 5 , flex : 1 , display : 'flex' ,justifyContent : 'center', alignItems : 'center' , margin : 5}}> <div style = {{display : 'flex' , width : 50 , height : 50 , backgroundColor : 'rgba(255, 255, 255, .5)' , borderRadius : 50 , justifyContent : 'center', alignItems : 'center'}}> {props.ziwziw} </div> 
            <Button variant="contained" href = "Screens\Login.js">Contained</Button>
            <Checkbox {...label} defaultChecked />
        </div>
        );
    }
    
export default MyDiv;