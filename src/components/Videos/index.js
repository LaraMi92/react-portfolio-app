// == Import npm
import React from 'react';
import ReactPlayer from 'react-player';
// == Import
import './videos.scss';

// == Composant
const Videos = () => (

  <div className="videos">
    <div className="player-wrapper">
      <ReactPlayer
        url="https://youtu.be/VDs9MecxDG0"
        controls
        width="100%"
        height="100%"
      />
    </div>
    <div> <span className="bold">Le lieu du retour</span>, 2016.
      <p className="smaller">Vidéo exposée lors de Metasporas, au PointCulture de Bruxelles, 2020.</p>
    </div>
    <div className="player-wrapper">
      <ReactPlayer
        url="https://youtu.be/3wEWla-6aEc"
        controls
        width="100%"
        height="100%"
      />
    </div>
    <div><span className="bold">Josée</span>, 2014. </div>
    <div className="player-wrapper">
      <ReactPlayer
        url="https://youtu.be/hea1ehhdk7U"
        controls
        width="100%"
        height="100%"
      />
    </div>
    <div><span className="bold">Champ du signe</span>, 2016. </div>
    <div className="player-wrapper">
      <ReactPlayer
        url="https://youtu.be/oCJk3_uCv0E"
        controls
        width="100%"
        height="100%"
      />
    </div>
    <div><span className="bold">Kacper - Au même endroit</span>, 2015.
      <p className="smaller">Vidéo réalisée à l'occasion de l'exposition Atelier with a view (musée Art&marges, Bruxelles)
        en partenariat avec le centre Sésame.
      </p>
    </div>
  </div>
);

// == Export
export default Videos;
