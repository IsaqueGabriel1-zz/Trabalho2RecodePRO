import React, { Component } from 'react';

class Input extends Component{
    render(){
        return(
            <input className="form-control mt-2" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
        )
    }
}


const Form = () => {
    return (
        <div className="container justify-content-center mt-5">
            <h4 id="p">Faça o seu cadastro, e aproveite e faça já o seu pedido!</h4>
            <div id="container" className="row justify-content-center">
                <form action="http://localhost:4000/usuario" method="POST" className="w-50">
                    <Input type="text" name="cliente" placeholder="Nome"/>
                    <Input type="text" name="endereco" placeholder="Endereco"/>
                    <Input type="number" name="telefone" placeholder="Telefone"/>
                    <Input type="text" name="produto" placeholder="Produto"/>
                    <Input type="number" name="valor" placeholder="Valor unitario"/>
                    <button id="btn1" className="btn w-100 mb-2 mt-2">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Form