// App.js
// App.js
/*import Voiture from './Voiture';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Nos voitures</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" image="/toyota.jpg" />
        <Voiture marque="BMW" modele="X5" couleur="Bleu" image="/bmw.jpg" />
        <Voiture marque="Peugeot" modele="208" couleur="Vert" image="/peugeot.jpg" />
      </div>
    </div>
  );
}

export default App;*/

import ListeCourses from './ListeCourses';

function App() {
  const fruits = ['Pommes', 'Bananes', 'Fraises', 'Oranges'];
  const legumes = ['Carottes', 'Tomates', 'Courgettes', 'Pommes de terre'];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🛒 Mes listes de courses</h1>

      <h2>Fruits</h2>
      <ListeCourses elements={fruits} />

      <h2>Légumes</h2>
      <ListeCourses elements={legumes} />
    </div>
  );
}

export default App;
