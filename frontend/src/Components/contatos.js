import React, { Component, lazy, Suspense } from 'react';
import {Nav, Pagamento} from './index';
import './css/contatos.css';
const Form = lazy(() => import('./Form'))




class contatos extends Component{
    render(){
        return(
            <div>
                <Nav />
                <div className="p-4 text-center"><h1>Contatos</h1><hr /></div>
                <Suspense fallback={<p>Carregando...</p>}>
                    <div>
                        <Form />
                    </div>
                </Suspense>
                <div>
                </div>
                <div id="Pagamentos3" className="container-fluid ">
                    <div className="row justify-content-center text-center p-3 mt-4">
                        <Pagamento />
                    </div>
                    <div className="row justify-content-center text-center mt-4">
                         <p>© 2020 - Isaque Gabriel</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default contatos;