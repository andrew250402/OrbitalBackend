import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="" alt="" />
        </a>
      </div>
      <div className="navbar-search">
        {/* Your search bar component goes here */}
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/portfolio">My Portfolio</a>
        </li>
        <li>
          <a href="/chats">Chats</a>
        </li>
        <li>
          <a href="/logout">Log Out</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
