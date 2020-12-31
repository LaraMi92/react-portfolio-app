// == Import npm
import React, { useState } from 'react';

// == Import
import './home.scss';

// == Composant
const Home = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <div
      className="home"
      onMouseOver={() => setIsShown(false)}
      /* onMouseLeave={() => setIsShown(true)} */
    >

      {isShown
        ? (
          <img
            className="lieu-retour"
            alt="lieu du retour"
            src="https://db3pap004files.storage.live.com/y4msnzVm-3szm85ChF94zQUhjZ7_f4YmckwDvznV0-NheCKMHI70QE9_DghyHD1pAxXQdYHBc59rH5Wzu9lJvMycAzh0q8iaZB0cBKk25GMOci1GhfarecRhAS90JJr7FF4-AQrJpPFtV4HgQUZVfGEywCep3r1QIt4Rql9Kpaw8e-GcJwJmCcL6Kxz9m7REpHX?width=1748&height=1240&cropmode=none"
          />
        )
        : (
          <div className="texte">

            <p>La citation appelle le mot par son nom, </p>
            <p>l’arrache à son contexte en le détruisant, </p>
            <p>mais par là même le rappelle aussi à son origine.</p>
            <p>Le mot est sonore ainsi, cohérent, dans le cadre d’un texte nouveau ; </p>
            <p>on ne peut pas dire qu’il ne rime à rien.</p>
            <div className="auteur">Walter Benjamin</div>
          </div>
        )}
    </div>
  );
};

// == Export
export default Home;
