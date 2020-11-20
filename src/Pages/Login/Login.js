import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss'

import { FiLoader } from 'react-icons/fi'
import swal from 'sweetalert';
import { api } from '../../Api/app'


export default function Login() {
    const [stepLoad, setstepLoad] = useState(false)
    const [camposFormulario, setCamposFormularios] = useState({
        nome: '',
        email: '',
        telefone: '',
        nascimento: '',
        cpf: '',
        rg: '',
    })

    async function handleSend(event)
    {

        event.preventDefault()

        var data = camposFormulario

        setstepLoad(true)

             var response =  await api.post('/clientes', data)

            if  ( response.data.error == true){
                alert( response.data.message )
            }  else {
                swal("Enviado com sucesso!");
            }

            setTimeout(function(){
                setstepLoad(false)
            })

        

        console.log( response )

    }

    function changeInputMult(e)
    {

        var meusdados = camposFormulario
        meusdados[e.target.name] = e.target.value
        setCamposFormularios({...meusdados})

        console.log( meusdados )

    }

    return (
        <div id="Login">
            <div className="content">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div id="box-login">
                            <form className="row" method="post" onSubmit={handleSend}>
                                <label className="col-lg-12 col-md-12">
                                    <span className="cl-purple font-16">Login</span>
                                    <input  className="border-purple" type="text" value={camposFormulario.cpf} onChange={(e) => changeInputMult(e)} name="cpf" placeholder="" />
                                </label>
                                
                                <label className="col-lg-12 col-md-12">
                                    <span className="cl-purple font-16">Senha</span>
                                    <input  className="border-purple" type="text" value={camposFormulario.rg} onChange={(e) => changeInputMult(e)} name="rg" placeholder="" />
                                </label>
                                <Link to="/minha-conta" className="font-15 bg-purple cl-white bt" type="submit">{stepLoad === true ? <FiLoader /> : "Login"}</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
