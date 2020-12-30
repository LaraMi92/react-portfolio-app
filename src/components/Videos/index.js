// == Import npm
import React from 'react';
import ReactPlayer from 'react-player';
// == Import
import './videos.scss';

// == Composant
const Videos = () => (

  <div className="videos">
    <ReactPlayer
      url="https://youtu.be/VDs9MecxDG0"
      controls
      width="400px"
      height="300px"
    />
    <div> <span className="bold">Le lieu du retour</span>, 2016. Vidéo exposée lors de Metasporas, au PointCulture de Bruxelles, 2020. </div>
    <ReactPlayer
      url="https://youtu.be/3wEWla-6aEc"
      controls
      width="400px"
      height="300px"
    />
    <div><span className="bold">Josée</span>, 2014. </div>
    <ReactPlayer
      url="https://youtu.be/hea1ehhdk7U"
      controls
      width="400px"
      height="300px"
    />
    <div><span className="bold">Champ du signe</span>, 2016. </div>
    <ReactPlayer
      url="https://youtu.be/oCJk3_uCv0E"
      controls
      width="400px"
      height="300px"
    />
    <div><span className="bold">Kacper - Au même endroit</span>, 2015. Vidéo réalisée à l'occasion de l'exposition Atelier with a view (musée Art&marges, Bruxelles) en partenariat avec le centre Sésame.  </div>
  </div>
);

// == Export
export default Videos;
