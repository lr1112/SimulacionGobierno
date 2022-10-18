import React from 'react';

function Pueblo(props){
    
      return (
        <div class="pt-4">
            <h1 class="text-2xl font-bold text-center text-gray-800">Pueblo</h1>
            <h2 class="text-2md font-bold text-center text-gray-800">Nivel de contienda: {props.contienda}</h2>
        </div>
      );

}

export default Pueblo;