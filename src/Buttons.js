import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function Buttons() {
  const [compteur, setCompteur] = useState(0);
  return (
    <div>
      <h1>{compteur}</h1>
      <Button variant="primary" onClick={() => setCompteur(compteur + 1)}>Incrementer</Button>
      <Button variant="success" onClick={() => setCompteur(compteur > 0 ? compteur - 1 : 0)}>Decrementer</Button>
      <Button variant="warning" onClick={() => setCompteur(0)}>Remise a zero</Button>
    </div>
  );
}
