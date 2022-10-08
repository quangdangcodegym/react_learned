import React, { Component } from 'react';
import loading from '../asset/images/loading.gif'
const Spinner = ()=>{
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img className='loading' src={loading} alt="" />
        </div>
    );
}
export default Spinner;