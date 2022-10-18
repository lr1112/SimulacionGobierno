import React from 'react';

function Gobierno(props){

      return (
        <div class="pt-4">
            <h1 class="text-2xl font-bold text-center text-gray-800">Gobierno</h1>
            <h2 class="text-2md font-bold text-center text-gray-800">Partido: {props.partido}</h2>
            <h2 class="text-2md font-bold text-center text-gray-800">Politica: {props.politica}</h2>
        </div>
      );
}

export default Gobierno;