
import { Contacto } from '../models/contacto.class'
import ComponenteB from './componenteB';

const ComponenteA = () => {
    const contacto = new Contacto('Juan', 'Perez', 'juan@perez.com', true);
    return (
        <div>
            <h1>Componente A</h1>
            <ComponenteB contacto={contacto}></ComponenteB>
        </div>
    )
}

export default ComponenteA;
