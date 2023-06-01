import {Nav,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../fonte/addFont.css'
import '../fonte/fundo.css'
import Image from 'react-bootstrap/Image'
import imagehotel from './imagemhotel.png'
import logo from './logo.png'

//import teacher1 from "./images/teacher1.jpg"



export default function Menu(props)
{

    
    return(
        
            <div className="fundologo">
            <div className='row fonteItim mt-1'>
                <div className='col-2'>
                <img src={logo}width="100%" className='mx-auto d-block'/>

                </div>
            

        <Nav defaultActiveKey="/home" as="ul" className='justify-content-center col align-items-center' >
        

            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/" style={{textDecoration: 'none'}} >Home</Link>
                </Nav.Link>
            </Nav.Item>

            
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/cadastros" style={{textDecoration: 'none'}}>Cadastros</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/reserva" style={{textDecoration: 'none'}}>Reservas</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link  style={{textDecoration: 'none'}}>Check-out</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link  style={{textDecoration: 'none'}}>Relatorios</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link  style={{textDecoration: 'none'}}>Login</Link>
                </Nav.Link>
            </Nav.Item>

     
        
        </Nav>
        <div class="col-2 mt-1">
            <img src={imagehotel} width="50%" className="mx-auto d-block" />
        </div>

        </div>
        
        <div className='text-center'>{props.tituloPagina}</div>

        </div>
        )




}