import React from 'react'
import {useContext} from "react";
import { counterContext } from './counterContext';
import './index.css' ;

export default function Teachname() {

    const { tname,tid,tadds } = useContext(counterContext);

    const tclick = () =>{
        document.getElementById('tchid').innerHTML = `Teacher Details </br> Name :${tname} </br> ID :${tid} </br> Address :${tadds}`
    }
    
    return (
        <div>
            <div className=" col-lg-12">
                <h1 id='tchid'></h1>
            </div>
            <div>
            <button onClick={tclick} class="btn btn-primary" >
               <span class="spinner-grow spinner-grow-sm"></span>
                 Teacher
            </button>
            </div>
        </div>
    )
}
