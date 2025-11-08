// Voiture.js
import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur, image }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '10px', textAlign: 'center', width: '250px' }}>
      <img
        src={image}
        alt={`${marque} ${modele}`}
        width="200"
        style={{ borderRadius: '8px' }}
      />
      <p>
        <strong>Voiture :</strong> {marque} {modele}
      </p>
      <p>
        <strong>Couleur :</strong> {couleur}
      </p>
    </div>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Voiture;
