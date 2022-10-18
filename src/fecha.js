import React from 'react';

function Fecha(props){

      return (
        <div class="pt-4">
            <h2 class="text-2md font-bold text-center text-gray-800">Año actual: {props.year}</h2>
            <h2 class="text-2md font-bold text-center text-gray-800">Mes actual: {props.mes}</h2>
        </div>
      );
}

export default Fecha;