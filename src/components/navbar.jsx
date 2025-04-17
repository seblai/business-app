import Logo from "./logo";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-light shadow-sm mb-4"
      aria-label="Fourth navbar example"
    >
      <div className="container-md">
        <a className="navbar-brand" href="#">
<Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
</li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sign-in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Sign-Up
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
