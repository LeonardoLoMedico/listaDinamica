import listaOggetti from "./ListaOggetti";
function Lista(){
    const array = [1,2,3,4,5,6,7,8,9,10];
    const array1 =array.map((numero)=> numero * 2);
    console.log(array1);
    console.log(listaOggetti);
    return (
        <ul>
           {listaOggetti.map((elemento)=><li>{elemento.nome}</li>)}
            
        </ul>
    );

}
export default Lista;