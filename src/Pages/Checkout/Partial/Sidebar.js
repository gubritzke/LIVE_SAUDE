
import React from 'react';
import { Link } from 'react-router-dom';


import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../../Api/app'

import BulletMais from '../../../images/home/bullet_mais.svg'
import { FaCaretRight } from 'react-icons/fa'

export default function Sidebar() {

    const [planoSelecionado, setPlanoSelecionado] = useState('')
    const [bullet, setBullet] = useState([])
    const [planos, setPlanos] = useState([])
    const [PlanoSave, setPlanoSave] = useState(false);

    useEffect(() => {

        getPlanos();

    }, [])

    async function getPlanos(){       
        let list = await api.get('/planos');
        setPlanos(list.data);
    }

    async function getPlanoSelecionado(planoSelecionado){       

        let list = await api.get('/planos/' + planoSelecionado)
        let bullets = await api.get('/planos/itens/' + planoSelecionado )

        
        if(!window.localStorage.getItem('plano')){
            setPlanoSave('planoSelecionado')
            window.localStorage.setItem('plano', planoSelecionado)
        }
        
        setPlanoSelecionado(list.data[0])
        setBullet(bullets.data)

    }

    return (
        <div id="sidebar">
            <div className="row no-gutters">
                <div className="col-12">
                    <p className="font-40 f-weight-700 cl-purple title-side">Escolha sua assinatura.</p>
                    <p className="font-16 cl-purple sub-side">Um pequeno valor mensal para uma vida com muito mais saúde. </p>
                    <select className="font-15 bt cl-purple border-purple escolha f-weight-700" name="planoselecionado"
                            onChange={e => setPlanoSelecionado(e.target.value), e => getPlanoSelecionado(e.target.value)} >
                        <option value="">Escolha seu plano Live Saúde</option>
                        { planos.map((row) => 
                            <option value={row.id}>{row.titulo}</option>
                        )}
                    </select>
                    
                    <span className="font-15 cl-gray vc-escolheu">Você escolheu</span>
                    <span className="font-18 cl-white bt bg-green f-weight-700">{planoSelecionado.titulo}</span>
                  
                    <ul>
                        { bullet.map((row) => 
                            <li className="cl-gray font-14"><img src={BulletMais} />{row.titulo}</li>
                        )}
                    </ul>
                  
                    <Link to="" className="border-green bt bg-white font-18 cl-green f-weight-700">Valor: R${planoSelecionado.valor}/mês</Link>
                    <span className="termos cl-gray font-13">Acessar termos de associação</span>

                </div>
            </div>
        </div>
    );
}


