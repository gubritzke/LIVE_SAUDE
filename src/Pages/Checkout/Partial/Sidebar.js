
import React from 'react';
import { Link } from 'react-router-dom';

import BulletMais from '../../../images/home/bullet_mais.svg'
import { FaCaretRight } from 'react-icons/fa'

export default function Sidebar() {
    return (
        <div id="sidebar">
            <div className="row no-gutters">
                <div className="col-12">
                    <p className="font-40 f-weight-700 cl-purple title-side">Escolha sua assinatura.</p>
                    <p className="font-16 cl-purple sub-side">Um pequeno valor mensal para uma vida com muito mais saúde. </p>
                    <Link className="font-15 bt cl-purple border-purple escolha f-weight-700">Escolha seu plano Live Saúde <FaCaretRight className="icon" /></Link>
                    <span className="font-15 cl-gray vc-escolheu">Você escolheu</span>
                    <span className="font-18 cl-white bt bg-green f-weight-700">Plano Live Essencial</span>
                    <ul>
                        <li className="cl-gray font-14"><img src={BulletMais} /> Descontos de até 70% em consultas médicas (clínico e especialidades)</li>
                        <li className="cl-gray font-14"><img src={BulletMais} /> Rede de descontos em diversos estabelecimentos, incluindo farmácias.</li>
                        <li className="cl-gray font-14"><img src={BulletMais} /> Assistência odontológica</li>
                        <li className="cl-gray font-14"><img src={BulletMais} /> Orientação médica por telefone</li>
                        <li className="cl-gray font-14"><img src={BulletMais} /> Assistência funeral</li>
                    </ul>
                    <Link className="border-green bt bg-white font-18 cl-green f-weight-700">Valor: R$23,90/mês</Link>
                    <span class="termos cl-gray font-13">Acessar termos de associação</span>
                </div>
            </div>
        </div>
    );
}
