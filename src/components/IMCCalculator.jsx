import { useState } from 'react';
import  "./IMCCalculator.css";

const IMCCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = (event) => {
    event.preventDefault();
    if (!weight || !height) {
      alert('Por favor, preencha peso e altura.');
      return;
    }

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      alert('Por favor, insira valores numéricos válidos e maiores que zero.');
      return;
    }

    const imcResult = weightValue / (heightValue * heightValue);
    setIMC(imcResult.toFixed(2));

    if (imcResult < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imcResult < 25) {
      setClassification('Peso normal');
    } else if (imcResult < 30) {
      setClassification('Sobrepeso');
    } else {
      setClassification('Obesidade');
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calculateIMC}>
        <div>
          <label htmlFor="weight">Peso (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="any"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="height">Altura (m):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step="any"
            autoComplete="off"
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (
        <div>
          <h3>Resultado:</h3>
          <p>IMC: {imc}</p>
          <p>Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;