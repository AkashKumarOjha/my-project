import React from 'react'
import {useContext} from "react";
import { counterContext } from './counterContext';
import './index.css' ;

export default function Stdname() {

    const { sname, sroll, saddr } = useContext(counterContext);
    let count=1
    const sclick=() =>{
        if(count === 1)
        {
        document.getElementById('snamid').innerHTML = `Student details </br> Name :${sname} </br> Roll no :${sroll} </br>Address :${saddr}`;
        count++;
        }else if(count === 2){
            document.getElementById('snamid').innerHTML = "";
            count--;
        }
    } 


    return (
        <div>
            <div className="text-center">
                <h1 id='snamid'></h1>
            </div>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={sclick} class="btn btn-primary" >
               <span class="spinner-grow spinner-grow-sm"></span>
                 Student
            </button>
            </div>
        </div>
    )
}
