import "./Header.css";

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <nav className="navbar">
        <div className="logo">Jadoo</div>
        <div className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#hotels">Hotels</a>
          <a href="#flights">Flights</a>
          <a href="#bookings">Bookings</a>
          <a href="#login">Login</a>
          <button className="signup-btn">Sign up</button>
          <select className="language-select">
            <option value="en">EN</option>
            <option value="fa">FA</option>
          </select>
          <button
            className="dark-mode-btn"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
