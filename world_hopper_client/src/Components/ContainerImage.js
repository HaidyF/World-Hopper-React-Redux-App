import React, { Component } from 'react';

class ContainerImage extends Component {
    render() {
        return (
            <div style={imageStyle}>
                 <img alt="containerImage" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ008AhAvCLgSJ2ALf164PmVNdRPpshQPmNEJMKc1Hv5Tw-4Ik-NZ5rOPTZfhhqzGiPQG4&usqp=CAU"></img>
                           
            </div>
        );
    }
}
const imageStyle = {
    img: 'border-radius: 8px',
    opacity: '0.5'  
}
export default ContainerImage;
