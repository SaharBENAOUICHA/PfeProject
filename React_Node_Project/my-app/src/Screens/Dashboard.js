import Switch from '@mui/material/Switch';
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div style = {{display : 'flex' , flexDirection :  'row' ,alignItems:'center' ,height : 60 , backgroundColor : 'green'}}>
            <div style = {{ color:'white', flex:4 , margin:20, fontSize:20}}> Affichage du dashboard </div>
            <div style = {{ color:'white'}}> Campings </div>
            <Switch onClick={() => navigate('/home')}  style = {{ flex : 1 }} defaultChecked color="default" />
            
        </div>
    )
}