import './App.css';
const therain = require('../src/rain.js');

therain.makeItRain();

function App() {
  return (
    <body class="back-row-toggle splat-toggle">
      <div className="App">
        <div class="bg"></div>
        <div class="rain front-row"></div>
        <div class="lightning flashit"></div>
        <div class="rain back-row"></div>
      </div>
    </body>
  );
}

export default App;
