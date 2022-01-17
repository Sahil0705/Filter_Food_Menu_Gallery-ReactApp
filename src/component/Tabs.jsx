import React, {useState} from 'react'
import Menu from './Api_Menu'
import './index.css';
import { NavLink } from 'react-router-dom';



const Tabs = ({filterItem,setItems,selectedBtn}) => {

    return(
        <>
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-primary isactive" name='all' id='all' onClick={(events) => {
                        selectedBtn(events.target.name);
                        setItems(Menu)
                    }}>All</button>
            </div>
            <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-danger" name='veg' id='veg' onClick={(events) => {
                        selectedBtn(events.target.name)
                    }}>Veg</button>
                    <button className="btn btn-success" name='non_veg' id='non_veg' onClick={(events) => {
                        selectedBtn(events.target.name);
                    }}>Non-Veg</button>
                </div><br/><br/>
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" name='bf' id='bf' onClick={(events) => {
                        selectedBtn(events.target.name);
                    }}>Breakfast</button>
                    <button className="btn btn-warning" name='lc' id='lc' onClick={(events) => {
                        selectedBtn(events.target.name);
                    }}>Lunch</button>
                    <button className="btn btn-warning" name='ev' id='ev' onClick={(events) => {
                        selectedBtn(events.target.name);
                    }}>Snacks</button>
                    <button className="btn btn-warning" name='dn' id='dn' onClick={(events) => {
                        selectedBtn(events.target.name);
                    }}>Dinner</button>
                </div>
            </div>
    </>
    )
}

export default Tabs