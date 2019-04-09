export default price =>
  Number(price).toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' });
