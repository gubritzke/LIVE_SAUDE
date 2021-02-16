﻿import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from "./Components/Layout/Layout";

import Index from './Pages/Index/Index';
import Faq from './Pages/Faq/Faq';
import Consulta from './Pages/Consulta/Consulta';
import Checkout from './Pages/Checkout/Step1';
import Checkout2 from './Pages/Checkout/Step2';
import Checkout3 from './Pages/Checkout/Step3';
import Checkout4 from './Pages/Checkout/Step4';
import Contato from './Pages/Contato/Contato';
import Beneficios from './Pages/Beneficios/Beneficios';
import Essencial from './Pages/Lp/Essencial';
import Premium from './Pages/Lp/premium';
import Login from './Pages/Login/Login';
import MinhaConta from './Pages/MinhaConta/MinhaConta';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path="/" exact component={Index} />
                    <Route path="/faq" exact component={Faq} />
                    <Route path="/consulta" exact component={Consulta} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/minha-conta" exact component={MinhaConta} />
                    <Route path="/checkout/passo-2/:id" exact component={Checkout2} />
                    <Route path="/checkout/passo-3" exact component={Checkout3} />
                    <Route path="/checkout/passo-4" exact component={Checkout4} />
                    <Route path="/contato" exact component={Contato} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/beneficios" exact component={Beneficios} />
                    <Route path="/lp/essencial" exact component={Essencial} />
                    <Route path="/lp/premium" exact component={Premium} />
                </Layout>
                
            </Switch>
        </BrowserRouter>
    );
}
