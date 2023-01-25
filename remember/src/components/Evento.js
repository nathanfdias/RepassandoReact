function Evento({ numero }){
    
    function ativate(){
        console.log(`To dentro ${numero}`);
    }
    
    return(
        <div>
            <p>Clique para acionar o evento:</p>
            <button onClick={ativate}>Ativar</button>
        </div>
    )
}

export default Evento;