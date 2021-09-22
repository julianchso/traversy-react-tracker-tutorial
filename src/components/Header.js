import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};


Header.propTypes = {
  title: PropTypes.string,
};
// This is to define a type so you can catch errors before they happen.
// ie. if you enter a number when type is string.

export default Header;
