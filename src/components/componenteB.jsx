import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class.js'


const ComponenteB = ({ contacto }) => {

    const [stateConectado, setContacto] = useState(contacto.Conectado);

    const cambiarConectado = () => {
        setContacto(!stateConectado);
    }

    return (
        <div>
            <h2>Componente B</h2>
            <p>Nombre {contacto.Nombre} {contacto.Apellido}</p>
            <p>Email {contacto.Email}</p>
            <p>{stateConectado === true ? 'Contacto En línea' : 'Contacto no Disponible'}</p>
            <button onClick={cambiarConectado}>Cambiar Conectado</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ComponenteB;
