import listaOggetti from "./ListaOggetti";
function Lista(){
    console.log(listaOggetti);
    return (
        <ul>
           {listaOggetti.map((elemento)=><li>{elemento.nome}</li>)}
            
        </ul>
    );

}
export default Lista;