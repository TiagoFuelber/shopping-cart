export default seconds =>
  `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)}`;
