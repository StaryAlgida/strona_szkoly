import React from 'react';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Nav(){
    return(
        <div>
            <nav>
                <ul class="d-flex justify-content-center">
                    <li className='nav_style'><a href='#'>Szkoła</a></li>
                    
                    <li className='nav_style'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" class="drop_down">
                                Strefa ucznia <i className='arrow'></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Dokumenty</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Podręczniki</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Regulamin biblioteki</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className='nav_style'><a href='#'>Strefa rodzica</a></li>
                    <li className='nav_style'><a href='#'>Kontakt</a></li>
                    <li className='nav_style'><a href='#'>Plan zajęć</a></li>
                </ul>
            </nav>
        </div>
    )
}