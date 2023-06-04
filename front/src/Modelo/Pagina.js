import { propTypes } from "react-bootstrap/esm/Image";
import Menu from "./Menu";
import "../fonte/fundo.css"




export default function Pagina(props)
{
//'col-8 mx-auto fundoresto mb-1'


  const coluna = (props.coluna)? props.coluna: 'col-8'
    return(
        <>
        <Menu  tituloPagina={props.tituloPagina} className=""/>
        <div className=  {coluna + ' mx-auto fundoresto mb-1'}>
        <section className="bg-secondary border m-2 p-3">
          {props.children}  
        </section>
        
        </div>
        </>
        
        
        )



}