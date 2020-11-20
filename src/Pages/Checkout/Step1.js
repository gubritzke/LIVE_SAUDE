import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Checkout.scss';
import { FiLoader } from 'react-icons/fi'
import swal from 'sweetalert';
import { api } from '../../Api/app'

import Sidebar from './Partial/Sidebar'

export default function Step1() {
    const [stepLoad, setstepLoad] = useState(false)
    const [camposFormulario, setCamposFormularios] = useState({
        nome: '',
        email: '',
        telefone: '',
        dataNascimento: '',
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
        <div id="checkout">
            <div className="content">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <Sidebar />
                    </div>    
                    <div className="col-lg-9 col-md-12">
                        <div id="box-form">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="steps" align="center">
                                        <span className="border-purple font-16 pass-1 st-pass active">1</span>
                                        <span className="dashed-bar"></span>
                                        <span className="border-purple font-16 pass-2 st-pass ">2</span>
                                        <span className="dashed-bar"></span>
                                        <span className="border-purple font-16 pass-3 st-pass ">3</span>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <span className="font-40 cl-purple f-weight-700">Informe seus dados pessoais.</span>
                                    <p className="font-16 cl-purple">Criaremos um cadastro para que você tenha acesso ao seu plano.</p>
                                </div>

                                <form className="row" method="post" onSubmit={handleSend}>
                                    <label className="col-lg-8 col-md-12">
                                        <span className="cl-purple font-16">Seu nome completo*</span>
                                        <input className="border-purple" type="text" value={camposFormulario.nome} onChange={(e) => changeInputMult(e)} name="nome" placeholder="" />
                                    </label>

                                    <label className="col-lg-4 col-md-12">
                                        <span className="cl-purple font-16">Data de nascimento*</span>
                                        <input  className="border-purple" type="text" value={camposFormulario.dataNascimento} onChange={(e) => changeInputMult(e)} name="dataNascimento" placeholder="" />
                                    </label>

                                    <label className="col-lg-8 col-md-12">
                                        <span className="cl-purple font-16">E-mail*</span>
                                        <input  className="border-purple" type="text" value={camposFormulario.email} onChange={(e) => changeInputMult(e)} name="email" placeholder="" />
                                    </label>
                                    
                                    <label className="col-lg-4 col-md-12">
                                        <span className="cl-purple font-16">Telefone para contato*</span>
                                        <input  className="border-purple" type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="" />
                                    </label>

                                    <label className="col-lg-8 col-md-12">
                                        <span className="cl-purple font-16">CPF*</span>
                                        <input  className="border-purple" type="text" value={camposFormulario.cpf} onChange={(e) => changeInputMult(e)} name="cpf" placeholder="" />
                                    </label>
                                    
                                    <label className="col-lg-4 col-md-12">
                                        <span className="cl-purple font-16">RG*</span>
                                        <input  className="border-purple" type="text" value={camposFormulario.rg} onChange={(e) => changeInputMult(e)} name="rg" placeholder="" />
                                    </label>

                                    <Link to="/checkout/passo-2" className="font-15 bg-purple cl-white bt" type="submit">{stepLoad === true ? <FiLoader /> : "Próximo"}</Link>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
