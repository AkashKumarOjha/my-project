import React from 'react'
import {useContext} from "react";
import { counterContext } from './counterContext';
import './index.css' ;

export default function Department() {

    const { bname,bidn,badds } = useContext(counterContext);

    const bclick = () =>{
        document.getElementById('branid').innerHTML = `Branch Details </br> Name :${bname} </br> ID :${bidn} </br> Address :${badds}`
    }
    
    return (
        <div>
            <div className="col-lg-12">
                <h1 id='branid'></h1>
            </div>
            <div>
            <button onClick={bclick} class="btn btn-primary" >
               <span class="spinner-grow spinner-grow-sm"></span>
                 Department
            </button>
            </div>
        </div>
    )
}
