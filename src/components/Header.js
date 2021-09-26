import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button color="green" text="Add" onClick={onClick} />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// This is to define a type so you can catch errors before they happen.
// ie. if you enter a number when type is string.

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
