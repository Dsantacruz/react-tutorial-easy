import React, {Component} from 'react';

import VarPrincipalData from './PrincipalData';

class MasUno extends Component
{
    {/*otraFuncion()
    {
        console.log(VarPrincipalData);
    }*/}

    render()
    {
        return(
            <div>
                {/*guarde el contexto y el entorno para a ejecucion
                this.otraFuncion se refiere a la instancia de onclick, hay que bindearlo a la instancia de la clase, por eso se utiliza .bind(this)*/}
                {/*<button onClick={this.otraFuncion.bind(this)}>otraFuncion</button>*/}
                {/*cuando la funcion no esta dentro de este componente, no necesita referirse a la instancia de esta clase, */}
                <button onClick={function(){VarPrincipalData.aumentarNumero()}}>Aumentar</button>
            </div>
        )
    }
}

export default MasUno;