import React from 'react';
import './index.css';

function Resultadosfinales(props){

    return (
        <div class="pt-10 pb-10">
            <div class="table w-full bg-rose-300 border-sky-500 divide-y divide-red-700 shadow-md">
                
                <div class="table-header-group">
                    <div class="table-row divide-x divide-y divide-slate-700 ">
                        <div class="table-cell ">Cantidad de años</div>
                        <div class="table-cell ">Cantidad de gobiernos</div>
                        <div class="table-cell ">Cantidad de politicas</div>
                        <div class="table-cell ">Cantidad de protestas</div>
                    </div>
                </div>

                <div class="table-row-group">
                    <div class="table-row divide-x divide-slate-700">
                        <div class="table-cell ">{props.year}</div>
                        <div class="table-cell">{props.cantGobiernos}</div>
                        <div class="table-cell">{props.cantPoliticas}</div>
                        <div class="table-cell">{props.cantProtestas}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Resultadosfinales;