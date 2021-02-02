import React, { Component } from 'react';

const Drop = () =>{
    function exibir_categorias(event){
        let elementos = document.getElementsByClassName('Conteiner');
        for(var i = 0; i < elementos.length; i++){
            if(event == elementos[i].id){
                elementos[i].style = "display:inline-block"
            }else{
                elementos[i].style = "display:none"
            }
        }
    }
    let exibir_todos = () => {
        let elementos = document.getElementsByClassName('Conteiner');
        for(var i = 0; i < elementos.length; i++){
            elementos[i].style = "display:inline-block"
        }       
    }
    return(
        <div>
            <div className="row">
                <div className="dropdown ml-5">
                    <button className="btn dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={() => exibir_todos('Todos')}>Todos</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Geladeira')}>Geladeira</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Fogao')}>Fogao</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Micro-ondas')}>Micro-ondas</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Lava-roupa')}>Maquina de lavar louça</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Lava-louca')}>Maquina de lavar Roupa</a>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Drop