import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello from Hello component!</h1>
    //     </div>
    // )
    return React.createElement('div', 
        null, 
        React.createElement('h1', null, 'Hello from Hello component!')
    );
}

export default Hello;