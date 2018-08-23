import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// import Saudacao from './componentes/Saudacao'
// import Multi, {BoaNoite} from './componentes/Multiplos'
// import BomDia from './componentes/BomDia'
// import Primeiro from './componentes/Primeiro'

// const elemento = <h1>React</h1>

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes. */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))