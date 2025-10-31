import React, { useEffect, useState } from 'react';
import './Footer.css'
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png'
import baseURL from '../url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const [tienda, setTienda] = useState([]);
    //const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        //cargarCategorias();
        cargarTienda();
    }, []);

    const cargarTienda = () => {
        fetch(`${baseURL}/tiendaGet.php`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setTienda(data.tienda.reverse()[0] || []);
            })
            .catch(error => console.error('Error al cargar datos:', error));
    };

    return (
        <div className='FooterContain'>
            <div className='footerText' id='footerText'>
                <Anchor to='/'>
                    {tienda?.imagen1 ? (
                        <img src={tienda?.imagen1} alt="logo" />
                    ) : (
                        <img src={logo} alt="logo" />
                    )}
                </Anchor>

                {tienda?.nombre ? (
                    <h2>{tienda?.nombre}</h2>
                ) : (
                    <h2>Mi Tienda</h2>
                )}
            </div>

            <div className='footerText'>
                <h3>Contacto Sucursal</h3>
                <Anchor to={`https://www.google.com/maps?q=${encodeURIComponent(tienda.direccion)}`} target="_blank">{tienda.direccion}</Anchor>
                <Anchor to={`mailto:${tienda.email}`} target="_blank">{tienda.email}</Anchor>
                <div className='socials'>
                    <Anchor to={tienda.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={`tel:${tienda.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                    <Anchor to={tienda.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                </div>
            </div>


            <div className='footerText'>
                <h3>Navegación</h3>
                <Anchor to={`/productos`}>
                <FontAwesomeIcon icon={faShoppingBag} />
                
                <span> Ver Todos los Productos</span>
                </Anchor>
            </div>

            <div className='footerText'>
                <h3>Acceso</h3>
                <Anchor to={`/dashboard`} className='btnAnch'>
                    <FontAwesomeIcon icon={faUser} /> Panel De Admin
                </Anchor>
            </div>
        </div>
    );
}
