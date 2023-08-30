import React, { useState, useEffect, useMemo, useCallback} from 'react';
import Switch from '@mui/material/Switch';
import {useNavigate} from "react-router-dom";
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import icon1 from '../images/green-marker.webp';
import icon2 from '../images/blue-marker.png'
import shadow from '../images/marker-shadow.png';
import Rating from '@mui/material/Rating';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useMap } from 'react-leaflet';
import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
import { Popup } from 'react-leaflet';
import CamPopup from '../Components/CamPopup';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css';
import CustomSelect from '../Components/CustomSelect';
import AddButton from '../Components/AddButton';


export const Home = ()  => {
    const navigate = useNavigate();
    const mapRef = useRef();
    const gridRef = useRef();

    const [listeMarker, setlisteMarker] = useState([]);
    const [lat, setLat] = useState(43.84223557);
    const [lng, setLng] = useState(3.26910448);
    const [ButtonPopup, setButtonPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [dataSelect , setDataSelect] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [checked, setChecked] = useState([]);

    //useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {  'Content-Type': 'application/json' },
            mode : 'cors',
            body: JSON.stringify({ "extractDate": "24-06-2023" })
        };
        fetch('http://localhost:5000/api/getAllCampings', requestOptions)
        .then(response => response.json())
        .then(data => { 
            data.result.map(item => {
                item.selected = false
            })
            setlisteMarker(data.result) })
        .catch((error) => { console.log(JSON.stringify(error) )});

        
    //}, [])
    
    var greenIcon = Leaflet.icon({
        iconUrl: icon1,
        shadowUrl: shadow,
        iconSize:     [20, 45], 
        shadowSize:   [40, 55], 
        iconAnchor:   [5, 45], 
        shadowAnchor: [4, 62], 
        popupAnchor:  [-3, -76] 
    });

    var blueIcon = Leaflet.icon({
        iconUrl: icon2,
        shadowUrl: shadow,
        iconSize:     [20, 45],
        shadowSize:   [40, 55], 
        iconAnchor:   [5, 45], 
        shadowAnchor: [4, 62],  
        popupAnchor:  [-3, -76] 
    });
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const checkCamping = (camping) => {
        listeMarker.map(item => {
                if( item.name === camping.name ) {
                    item.selected = !item.selected
                }      
            }  
        )
        setlisteMarker(listeMarker)
    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

    const ChangeView = (camping) => {
        setLat(camping.position.lat)
        setLng(camping.position.lng)
        mapRef.current.flyTo([lat,lng]);
        setIsOpenPopup(true)
        //mapRef.setView([lat, lng]);
    }

    const addRow = () => {
        this.setState(prevState => ({
          rowData: [...prevState.rowData, {addButton : "", dataSelect: "hhhh", ...checked.map(colName => (
            {colName : "ddd"}
        ))
        }],
        }));
    };

    function MyRenderer(params) {
        return (
            <span className="my-renderer">
                <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif"  />
                {params.value}
            </span>
        );
    }

    const ListColumn = [
        {
            headerName: '+',
            field: 'addButton',
            cellRendererParams: {
              onClick: addRow,
            }
        },
        {   
            headerName: dataSelect, 
            field: dataSelect ,
        },
        ...checked.map(colName => (
            { 
                headerName: colName, 
                field: colName, 
                
            })),
        {   
            headerName: 'model', 
            field: 'model' ,
            cellRenderer: params => {
                return <NativeSelect value="accomodation" >

                <option value = "option"> sahar </option>
                <option value = "option"> zeineb </option>
  
                </NativeSelect>;
            }
        },    
    ]
    
    const [columnDefs, setColumnDefs] = useState(ListColumn)

    const ListValue = [ { model : ""}]
    const [rowData, setRowData] = useState(ListValue)

    const onGridReady = useCallback((params) => {
        setColumnDefs(ListColumn)
        setRowData(ListValue)
        console.log(dataSelect)
    }, []);

    const gridOptions = {
        defaultColDef: {
        sortable: true,
        editable: false,
        filter: true
        }
    };

    const defaultColDef = useMemo(() => {
        return {
          flex: 1,
          sortable: true,
        };
      }, []);

      const columnTypes = useMemo(() => {
        return {
          valueColumn: {
            editable: true,
            valueParser: 'Number(newValue)',
            filter: 'agNumberColumnFilter',
          },
        };
      }, []);

    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);


    return (
        <div style={{display : 'flex', flexDirection : 'column', height : '100vh', backgroundColor : '#ccc'}}>
            <div style = {{display : 'flex' , flexDirection :  'row' ,alignItems:'center', height : 60 , backgroundColor : 'green', zIndex:1}}>
                <div style = {{ color:'white', flex : 4, margin:20, fontSize:20}} > Choix des campings </div> 
                <div style = {{ color:'white'}}> Dashboard </div>
                <Switch onClick={() => navigate('dashboard')} style = {{ flex : 1 }} notchecked = "ture" color="default" label="Dashboard" ></Switch>
            </div> 
            <div style = {{display : 'flex' ,flex : 1, margin : 10, borderRadius :20, backgroundColor : 'white'}}>
                <MapContainer center={[lat, lng]}  zoom={8} ref={mapRef} scrollWheelZoom={true} style = {{display : 'flex', flexDirection: 'row' , justifyContent :'flex-end', alignItems :'center', borderRadius : 20, }}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {
                        listeMarker.map(item => 
                            item.selected ?
                            <Marker position={[item.position.lat, item.position.lng]} icon = {blueIcon} >
                                <Popup > <div style = {{fontWeight:'bold', marginBottom:-10}}>{item.name }</div>  <br />  {item.siteName} <br /> 
                                    <Rating name="read-only" value={item.stars} readOnly /> 
                                </Popup>
                            </Marker>
                            :
                            <Marker position={[item.position.lat, item.position.lng]} icon = {greenIcon} >
                                <Popup trigger={ButtonPopup}> <div style = {{fontWeight:'bold', marginBottom:-10}}>{item.name }</div>  <br />  {item.siteName} <br /> 
                                    <Rating name="read-only" value={item.stars} readOnly /> 
                                </Popup>
                            </Marker>
                            )
                    }
                    
                </MapContainer>
                <div style = {{display : 'flex' , flexDirection : 'column' , alignItems :'center' ,  backgroundColor : 'white' , zIndex : 1, height : '85vh' , width :350, opacity:0.8, marginRight : 20}} >
                    <div style = {{fontSize:'20px', color : 'green' , marginTop : 10, marginBottom : 10}}> Liste des campings </div>
                    <FormControl >
                        <NativeSelect onChange={e => setDataSelect(e.target.value)}>
                            {
                                listeMarker.map(item => 
                                    item.selected ? 
                                    <option selected value={item.name}> {item.name} </option>
                                    :
                                    <option value={item.name}> {item.name} </option>
                                    )
                            }
                        </NativeSelect>
                    </FormControl>

                    <div style={{display: "flex",alignSelf: "center",justifyContent: "center",flexDirection: "column",padding: 20}}>
                        <TextField
                            id="search"
                            type="search"
                            label="Search"
                            value={searchTerm}
                            onChange={handleChange}
                            sx={{ width: 310 }}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>

                    <FormGroup style = {{overflowY: 'scroll' , scrollBehavior : 'auto', display : 'flex' , flexDirection : 'row',flexWrap : 'wrap', alignItems :'center' , marginLeft : 20}}>
                            {
                                listeMarker.map(item => 
                                    <div  onClick={() =>  ChangeView(item)}  style={{ display:'flex', flexDirection:'column', backgroundColor:'#D4EFDF', width:280, marginBottom:10, borderRadius:10, margin:10, padding:10}}>
                                            <FormControlLabel control={<Checkbox onClick={() => checkCamping(item) } onChange={handleCheck} value={item.name} />} color="success" label={<Typography fontSize={13} fontWeight={'bold'}> {item.name}</Typography>} /> 
                                            {item.siteName} <br /> <Rating name="read-only" value={item.stars} readOnly /> 
                                    </div> 
                                )
                            }
                            
                    </FormGroup>
                    <div>
                        <Button onClick={() => {console.log(dataSelect)
                            setIsOpen(true)}} type="submit" variant="contained" color="success" fullWidth style = {{display :'flex' , alignItems : 'center',marginTop:20}}>
                            Valider
                        </Button>
                    </div>
                </div>
                {isOpen ? <div style ={{ position : 'absolute', width:'90%', height:'70%', backgroundColor:'white', zIndex:9999, margin:'5%'}}>
                <div style={containerStyle}>
                            <div style={{ height: '100%', boxSizing: 'border-box' }}>
                                <div style={gridStyle} className="ag-theme-alpine">
                                    <AgGridReact style={{width:600, height:350}}
                                    rowData={rowData}
                                    columnDefs={columnDefs}
                                    defaultColDef={defaultColDef}
                                    columnTypes={columnTypes}
                                    groupDefaultExpanded={1}
                                    suppressAggFuncInHeader={true}
                                    enableCellChangeFlash={true}
                                    animateRows={true}
                                    onGridReady={onGridReady}
                                    />
                                </div>
                            </div>
                        </div>
                                        <div onClick={() => setIsOpen(false)} style={{top:5, left:'98%', zIndex:9999, position:'absolute'}}>
                                            X
                                        </div>
                                   
                </div> : <div></div>
            }
            </div>
        </div>
    )
}


