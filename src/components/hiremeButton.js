import React from 'react';

const Style = {
    textAlign: 'center',
    border: 'none',
    outline: 'none',
    backgroundColor: '#6cd206',
    color: 'white',
    padding: '3px 30px',
    borderRadius: '3px',
}

function Hireme(){
    return(
        <button style={Style}>Hire me</button>
    )
};
export default Hireme;