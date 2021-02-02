import React, { Component, lazy, Suspense } from 'react';
import {Nav, Pagamento} from './index';
import './css/lojas.css';
const Local = lazy(() => import('./Local'))


class lojas extends Component{
    render(){
        return(
            <div className="">
                <Nav />
                <div className="p-4 text-center">
                    <h1>Nossas Lojas</h1>
                    <hr/>
                </div>
                <Suspense fallback={<p>Carregando...</p>}>
                    <div className="row ">
                        <Local 
                        text="São Paulo" 
                        name="Avenida Paulista,985 3º andar Jardins (11) 44444-44444"
                        />
                        <Local 
                        text="Rio de Janeiro"
                        name="
                        Avenida PResidente Vargas, 5000
                        10º andar
                        centro
                        (21) 333333 33333
                        "
                        />
                        <Local 
                        text="Santa Catarina"
                        name="
                        Rua Major Avila, 370
                        Vila Mariana
                        (47) 55555-55555
                        "
                        />
                    </div>
                </Suspense>
                <div id="Pagamentos5" className="row justify-content-center p-4">
                    <Pagamento />
                </div>          
            </div>
        )
    }
}
export default lojas;




