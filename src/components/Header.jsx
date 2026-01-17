function Header({ name, image }) {
  return (
    <header>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
