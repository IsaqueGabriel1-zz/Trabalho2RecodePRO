import React, { Component } from 'react';

const Card = () =>{
    const [users, setUsers] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost:4000/usuario";

        const response = await fetch(url);
        setUsers(await response.json());
    }, [users])

    return (
        <div id="div" className="mt-5">
            {users.map((element)=>{
            return(
                <div id={element.categoria}  key={element.idproduto} className="Conteiner">
                    <div className="card-body">
                        <img id="teste" className="card-img-top" src={require(`./img/${element.imagem}`).default} alt="Imagem de capa do card" />
                        <p className="card-text">{element.descricao}</p>
                        <p className="card-text"><b>R$ {element.preco}</b></p>
                        <p className="card-text">R$ {element.preco_venda}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Card;