import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="container is-max-desktop">
          <div className="navbar-brand">
            {/* <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a> */}

            <a role="button" className={`navbar-burger ${isMenuOpen && 'is-active'}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className={`navbar-menu has-text-weight-medium ${isMenuOpen && 'is-active'}`}>
            <div className="navbar-end">
              <a className="navbar-item" href="/work">
                Things I do
              </a>

              <a className="navbar-item" href="/blog">
                Writing
              </a>

              <a className="navbar-item" href="/cool-stuff">
                Explorations
              </a>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}
