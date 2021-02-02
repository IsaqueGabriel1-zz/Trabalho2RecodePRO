import React, { Component, lazy, Suspense } from 'react';
import {Nav, Pagamento} from './index';
import './css/produtos.css';
const Card = lazy(() => import('./Card'))
const Drop = lazy(() => import('./Drop'))

class Produtos extends Component{
    render(){
        return(
            <div>
                <Nav />
                <div id="texto" className="p-4 text-center">
                    <h1>Produtos</h1>
                </div>
                <hr></hr>
                <Suspense fallback={<p>Carregando...</p>}>
                    <div id="drop">
                        <Drop />
                    </div>
                    <div className="container text-center">
                        <Card />
                    </div>
                </Suspense>
                <div id="Pagamentos" className="row justify-content-center text-center p-4">
                    <Pagamento />
                </div>
            </div>
        )
    }
}
export default Produtos;
