import Picture from "./Picture";

const Header = (props) => {
  return (
    <header>
      <Picture pic={props.pic} />
    </header>
  );
};

export default Header;
