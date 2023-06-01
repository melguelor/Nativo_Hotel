import { Button, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Pagina from "../../Modelo/Pagina";
import Rodape from "../../Modelo/Rodape";





export default function Cadastros()
{
    return(
        
        <>
            <Pagina>
                
                <p className="text-center">Cadastros</p>
                <Row className="text-center col-10 mx-auto">
                    
                    

                    <div className="col mt-3">
                    <Link to="/pessoa" ><Button>Pessoa</Button></Link>
                    </div>

                    <div className="col mt-3">
                    <Link to="/atividadecamareira"><Button>Atividade Camareira</Button></Link>
                    </div>

                    
                </Row>

                <p className="text-center mt-5">Visualização de Registros</p>
                <Row className="text-center col-10 mx-auto">
                    
                    <div className="col mt-3">
                    <Link to="/reg_pessoa" ><Button>Pessoa</Button></Link>
                    </div>
                    <div className="col mt-3">
                    <Link to="/reg_atividade" ><Button>Atividade Camareira</Button></Link>
                    </div>
                    
                </Row>

               
               

            </Pagina>
            <Rodape/>

        </>
        
        )




}