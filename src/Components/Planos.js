import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import BulletMais from '../images/home/bullet_mais.svg'
import PlanoEssencial from '../images/home/Plano_essencial.svg'
import PlanoPremium from '../images/home/Plano_Premium.svg'
import PlanoSaude from '../images/home/Plano_saude+.svg'

export default function Planos(){
    return(
        <div id="planos">
        <div className="content">
            <div className="row">
                <div className="col-12">
                    <p className="font-25 cl-purple title" align="center">
                        Temos um <b>Cartão Live Saúde</b> perfeito para você e sua família. <b>Escolha o seu!</b>
                    </p>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-4 col-md-12">
                    <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce >
                    <div className="box">
                        <div className="topo bg-green">
                            <img src={PlanoEssencial} />
                        </div>
                        <div className="list">
                            <span className="cl-gray"><img src={BulletMais} />Descontos de até 70% em consultas médicas (clínico e especialidades)</span>
                            <span className="cl-gray"><img src={BulletMais} />Rede de descontos em diversos estabelecimentos, incluindo farmácias.</span>
                            <span className="cl-gray"><img src={BulletMais} />Assistência odontológica</span>
                            <span className="cl-gray"><img src={BulletMais} />Orientação médica por telefone</span>
                            <span className="cl-gray"><img src={BulletMais} />Assistência funeral</span>
                        </div>
                        <div className="footer">
                            <p className="font-14 cl-green f-wheight-700">Economia e tranquilidade por apenas</p>
                            <span className="cl-green font-35 f-wheight-700 valor">R$ 23,90<span className="font-28 f-wheight-500">/mês</span></span>
                            <Link to="checkout" className="bt bg-green f-wheight-600 cl-white font-18">Solicitar Cartão</Link>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>

                <div className="col-lg-4 col-md-12">
                    <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce >
                    <div className="box">
                        <div className="topo bg-purple">
                            <img src={PlanoSaude} />
                        </div>
                        <div className="list">
                            <span className="cl-gray"><img src={BulletMais} />Descontos de até 70% em consultas médicas (clínico e especialidades)</span>
                            <span className="cl-gray"><img src={BulletMais} />Rede de descontos em diversos estabelecimentos, incluindo farmácias.</span>
                            <span className="cl-gray"><img src={BulletMais} />Assistência odontológica</span>
                            <span className="cl-gray"><img src={BulletMais} />Orientação médica por telefone</span>
                            <span className="cl-gray"><img src={BulletMais} />Assistência funeral</span>
                            <span className="cl-gray"><img src={BulletMais} /><b>Leva e traz em caso de emergência</b></span>
                            <span className="cl-gray"><img src={BulletMais} /><b>Check-up Médico anual</b></span>
                        </div>
                        <div className="footer">
                            <p className="font-14 cl-green f-wheight-700">Economia e tranquilidade por apenas</p>
                            <span className="cl-green font-35 f-wheight-700 valor">R$ 29,90<span className="font-28 f-wheight-500">/mês</span></span>
                            <Link to="checkout" className="bt bg-purple f-wheight-600 cl-white font-18">Solicitar Cartão</Link>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>

                <div className="col-lg-4 col-md-12">
                <ScrollAnimation animateIn="fadeIn" delay={800} animateOnce >
                    <div className="box last-box">
                        <div className="topo bg-purple-2">
                            <img src={PlanoPremium} />
                        </div>
                        <div className="list">
                            <span className="cl-gray"><img src={BulletMais} />Descontos de até 70% em consultas médicas (clínico e especialidades)</span>
                            <span className="cl-gray"><img src={BulletMais} />Rede de descontos em diversos estabelecimentos, incluindo farmácias.</span>
                            <span className="cl-gray"><img src={BulletMais} />Assistência odontológica</span>
                            <span className="cl-gray"><img src={BulletMais} />Orientação médica por telefone</span>
                            <span className="cl-gray"><img src={BulletMais} />Assistência funeral</span>
                            <span className="cl-gray"><img src={BulletMais} /><b>Leva e traz em caso de emergência</b></span>
                            <span className="cl-gray"><img src={BulletMais} /><b>Check-up Médico anual</b></span>
                            <span className="cl-gray"><img src={BulletMais} /><b>Orientação Nutricional</b></span>
                            <span className="cl-gray"><img src={BulletMais} /><b>Orientação Fitness</b></span>
                        </div>
                        <div className="footer">
                            <p className="font-14 cl-green f-wheight-700">Economia e tranquilidade por apenas</p>
                            <span className="cl-green font-35 f-wheight-700 valor">R$ 34,90<span className="font-28 f-wheight-500">/mês</span></span>
                            <Link to="checkout" className="bt bg-purple-2 f-wheight-600 cl-white font-18">Solicitar Cartão</Link>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
                
                <span className="obs-planos cl-gray font-13">*Consulte condições do plano escolhido.</span>

            </div>
        </div>
    </div>
    );
}
