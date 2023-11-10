import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Buttons} from './Buttons';
import {Ampoule} from './Ampoule';
import { ConfirmezMotDePasse } from './ConfirmezMotDePasse';

export function AfficherMotDePasse(motDePasse) {
  alert(`Le mot de passe est ${motDePasse}`)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Buttons />
    <Ampoule />
    <ConfirmezMotDePasse />
  </React.StrictMode>
);

