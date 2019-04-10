export default price =>
  Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
