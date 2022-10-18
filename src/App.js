import React, {useState, useEffect} from "react";
import Fecha from "./fecha";
import Gobierno from './gobierno';
import Pueblo from './pueblo';
import Resultadosfinales from "./resultadosfinales";

function App() {

    const MES = 3000
    const YEAR = 6000

    const [partido, setpartido] = useState('Ninguno');
    const [politica, setpolitica] = useState('Ninguna');
    const [contienda, setcontienda] = useState('Baja');
    const [year, setyear] = useState(0);
    const [mes, setmes] = useState('Enero');
    const [cantGobiernos, setcantGobiernos] = useState(0);
    const [cantPoliticas, setcantPoliticas] = useState(0);
    const [cantProtestas, setcantProtestas] = useState(0);
    


    //La simulacion se podra visualizar en peridos de 6 mese los cuales iran aumentando cada 3000 milisegundos
    //El periodo de un año se dividira en 2 periodos de 6 meses


    //Realizar un cambio de gobierno basado en el gobierno o no
    function handlePoliticaChange(status) {
        if (partido === "Conservador") {
            //Se cambia la politica del gobierno dentro de un año
            setInterval(() => {
                politicaContraria();
            }, YEAR); 
        }
    }
    
    //Funcion que obtiene un partido al azar
    function handlePartidoChange(status) {
        setpartido(getRandomPartido);
        aumentarCantGobiernos();
        setcontienda("Baja");
    }

    //Funcion que genera un partido al azar
    function getRandomPartido() {
        var partidos = ["Conservador", "Liberal"];
        var num = partidos[Math.floor(Math.random() * partidos.length)];
        return num;
    }

    //Funcion que genera una politica al azar
    function getRandomPolitica() {
        var politica = ["Permisiva", "Coercitiva"];
        var num = politica[Math.floor(Math.random() * politica.length)];
        return num;
    }
  
    //Funcion que monitorea el tipo de politica y cambia el nivel de contienda
    function handlePoliticaCoercitiva(){
        if(politica === "Coercitiva"){
            setcontienda("Alta");
            aumentarCantProtestas();
        }
        else if(politica === "Permisiva"){
            setcontienda("Baja");
            setInterval(() => {
                setcontienda("Alta");
                aumentarCantProtestas();
            }, YEAR);
        }
    }

    //Si la contienda es alta se cambia el partido el año siguiente
    function handleContiendaCivil(){
            if(contienda === "Alta" && year > 0){
            //Implementar que se cambie el siguiente "Year"
            setInterval(() => {
                partidoContrario();
            }, YEAR);
            
        }
    }

    function partidoContrario(){
        if (partido === "Conservador") {
            setpartido("Liberal");
            aumentarCantGobiernos();   
        }else if(partido === "Liberal"){
            setpartido("Conservador");
            aumentarCantGobiernos();   
        }
    }

    //Funcion para cambiar la politica a la contraria
    function politicaContraria(){
        if(politica === "Permisiva"){
            setpolitica("Coercitiva");
            aumentarCantPoliticas();
        }
        else if(politica === "Coercitiva"){
            setpolitica("Permisiva");
            aumentarCantPoliticas();
        }
    }

    //Funcion para el mandato del gobierno liberal
    function gobiernoLiberal(){
        if (contienda === "Alta" && partido === "Liberal") {
            setpolitica("Permisiva");
            aumentarCantGobiernos();
            //Un year despues
            setInterval(() => {
                setpolitica("Coercitiva");
                aumentarCantGobiernos();
            }, YEAR);
        }
    }

    function updateMonth(){
        if (mes === "Enero")
            setmes("Junio");
        else if (mes === "Junio")
            setmes("Enero");
            setyear(year + 1);
    }

    
    function aumentarCantGobiernos() {
        setcantGobiernos(cantGobiernos + 1);
    }

    function aumentarCantPoliticas() {
        setcantPoliticas(cantPoliticas + 1);
    }

    function aumentarCantProtestas() {
        setcantProtestas(cantProtestas + 1);
    }

    //Cambios relacionados con el componente de gobierno
    
    useEffect(() => {
        startSimulation();
    },[]);

    // useEffect(() => {
    
    // },[mes]); 
   
    //startSimulation();

    setInterval(() => {
        updateMonth();
        controlSimulation();
    }, MES);

    function startSimulation(){
        handlePartidoChange();
        setpolitica(getRandomPolitica);
        handlePoliticaCoercitiva();
        //handleContiendaChange();
    }

    // function startSimulation() {
    //     setpartido(getRandomPartido);
    //     setpolitica(getRandomPolitica);
    //     setInterval(() => {
    //         setcontienda("Alta");
    //     }, YEAR); 
    // }

    function controlSimulation(){
        handlePoliticaCoercitiva();
        gobiernoLiberal();
        handlePoliticaChange();
        handleContiendaCivil();
        //handleContiendaChange();
    }

    function endSimulation() {
        setpartido("Ninguno");
        setpolitica("Ninguna");
        setcontienda("Ninguno");
        setyear(0);
        setmes("Enero");
        console.log("La simulacion ha terminado");
        console.log("Cantidad de años: " + year);
        console.log("Cantidad de gobiernos: " + cantGobiernos);
        console.log("Cantidad de cambios de politica: " + cantPoliticas);
        console.log("Cantidad de protestas: " + cantProtestas);
        document.getElementsByClassName("contenidop")
    }

    return (
        <div >
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    {/* 
                    <h2 class="text-2xl font-bold text-center text-gray-800">Año: {year} - Mes: {mes}</h2>
                    <h2 class="text-2xl font-bold text-center text-gray-800">Partido: {partido}</h2>
                    <h2 class="text-2xl font-bold text-center text-gray-800">Politica: {politica}</h2>
                    <h2 class="text-2xl font-bold text-center text-gray-800">Contienda: {contienda}</h2>
                    <button class="" onClick={endSimulation}>Terminar Simulacion</button> */}
                    <h1 class="text-4xl font-bold text-center text-gray-800">Simulador de Gobierno</h1>
                    <div className="contenidop">
                        <Gobierno partido={partido} politica={politica} />
                        <Pueblo contienda={contienda} partido={partido} politica={politica} />
                        <Fecha year={year} mes={mes}/>
                    </div>
                    <Resultadosfinales year={year} cantGobiernos={cantGobiernos} cantPoliticas={cantPoliticas} cantProtestas={cantProtestas}/>
                    <button onClick={endSimulation} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Terminar</button>
                </div>
            </div>
        </div>
    );


}

export default App;