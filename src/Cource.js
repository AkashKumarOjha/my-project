import React from 'react'
import {useContext} from "react";
import { counterContext } from './counterContext';
import './index.css' ;

export default function Cource() {

    const { cname,cdure,cfee } = useContext(counterContext);

    const corclick = () =>{
        document.getElementById('corid').innerHTML = `Course Details </br> Name :${cname} </br> Duretion :${cdure} </br> Fee :${cfee}`
    }
    
    return (
        <div>
            <div className=" col-lg-12">
                <h1 className='text-center' id='corid'></h1>
            </div>
            <div>
            <button onClick={corclick} class="btn btn-primary" >
               <span class="spinner-grow spinner-grow-sm"></span>
                 Course
            </button>
            </div>
        </div>
    )
}
