//const velocidad = 100;
//const tiempo = 3
//const metrica = 4

//CALCULA LA CANTIDAD DE COMPACES NECESARIOS

function calcularCompaces() {
  const tempo = document.getElementById("tempo");
  const tempoValue = tempo.value;
  const length = document.getElementById("length");
  const lengthValue = length.value;
  const beatsPerMeasure = document.getElementById("beatsPerMeasure");
  const beatsPerMeasureValue = beatsPerMeasure.value;

  const cantidadDeCompaces = (lengthValue * tempoValue) / beatsPerMeasureValue;

  const result = document.getElementById("result");
  result.innerText = "Necesitas " + cantidadDeCompaces + " compaces";
}
