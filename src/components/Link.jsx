const Link = ({ to }) => {
  const handleClick = (event) => {
    event.preventDefault();

    console.log("User navigating to: ", to);
  };

  return (
    <a onClick={handleClick} href="to">
      Click me!
    </a>
  );
};

export default Link;
