const abreviarNomes = (nomes) => nomes.map((nome, index, array) => {
  const partesNome = nome.split(' ');
  if (index < array.length - 1) {
    return partesNome.map((parte, i) => (i === 0 ? parte[0] + '.' : parte)).join(' ');
  }
  return nome;
});

const nomesExemplo = ['Carlos Alberto Silva', 'Julia Pereira Gomes', 'Lucas Alves'];
console.log(abreviarNomes(nomesExemplo));

