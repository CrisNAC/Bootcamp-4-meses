import React, { Component } from 'react';
import './PersonCard.css'


// constructor(props){
//     super(props);
//     this.state ={
//         age: this.props.age
//     };
// }

const PersonCard = props => {
    return (
        <div className='prin'>
            <div className='contenido'>
                <h1>{props.lastName}, {props.name}</h1>
                <p>Age: {props.age}</p>
                <p>Hair color: {props.hair}</p>
            </div>
            {/* <div className='btn'>
                <button onClick={addAge}>Birthday Button for {props.name}{props.lastName}</button>
            </div> */}
        </div>
    );
}

// addAge=()=>{
//     this.setState({age:this.state.age+1});
// }


export default PersonCard;
