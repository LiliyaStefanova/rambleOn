import React from 'react';
import '../App.css';

const CreateWalk = () =>
    <div>
        <span>Create Walk</span>
        <Button onClick={this.onClick}>Create Walk</Button>
    </div>



const Button = ({className='', onClick, children})=>{
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
};

export default CreateWalk;