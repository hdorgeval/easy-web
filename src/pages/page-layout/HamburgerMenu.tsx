import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { websiteConfig } from '../../website.config';

export const HambugerMenu: FC = () => {
  const location = useLocation();
  const isOnHomePage = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);
  const backgroundImageUrl = '/images/backgrounds/burger-menu-01.webp';
  const computedBackgroundPositionX = -220;
  const computedBackgroundPositionY = 0;
  const defaultBackgroundOverlay =
    'linear-gradient(to bottom,rgba(0, 0, 0, 0.3), rgba(79, 79, 93, 0.10))';

  return (
    <>
      <nav className="navbar navbar-dark sticky-top position-absolute top-0 end-0 w-100">
        <div
          className={`container-fluid pe-0 me-1 d-flex flex-row ${
            websiteConfig.hamburgerMenuPosition === 'left' ? 'flex-row-reverse' : ''
          }`}
        >
          {isOnHomePage ? (
            <div className="flex-grow-1"></div>
          ) : (
            <Link to="/" className="navbar-brand text-reset" aria-label="Accueil" title="Accueil">
              <i className="bi bi-house-up text-white fs-navbar-toggler-3"></i>
            </Link>
          )}
          <button
            className="navbar-toggler pt-1-half border border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            title="Menu"
            aria-label="Menu"
            data-tour-id="step-1"
          >
            <i className="bi bi-list text-white fs-navbar-toggler-2"></i>
          </button>
        </div>
      </nav>
      <div
        className={`offcanvas position-absolute text-bg-badge-burger-menu ${
          websiteConfig.hamburgerMenuPosition === 'left' ? 'offcanvas-start' : 'offcanvas-end'
        }`}
        tabIndex={-1}
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
          height: '100vh',
          backgroundPositionX: computedBackgroundPositionX,
          backgroundPositionY: computedBackgroundPositionY,
          backgroundSize: 'cover',
          position: 'relative',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            background: `${defaultBackgroundOverlay}`,
            height: '100vh',
          }}
        >
          <div className="container h-100 overflow-y-scroll">
            <div className="offcanvas-header">
              <h4 className="offcanvas-title text-light fw-bolder" id="offcanvasDarkNavbarLabel">
                {websiteConfig.websiteShortTitle}
              </h4>
              <button
                id="hamburger-close-button"
                type="button"
                className="btn border border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Fermer le menu"
                title="Fermer le menu"
              >
                <span className="btn-close-thick-3 text-white"></span>
              </button>
            </div>
            <div className="offcanvas-body fs-6 pt-0">
              <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
                <li className="nav-item w-100 text-start">
                  <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                    <Link
                      to="/"
                      className="text-decoration-none text-light"
                      aria-current="page"
                      title="Accueil"
                      aria-label="Accueil"
                    >
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Accueil
                      </span>
                    </Link>
                    <Link
                      to="/qui-suis-je"
                      className="text-decoration-none text-light"
                      title="Qui suis-je ?"
                      aria-label="Qui suis-je ?"
                    >
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Qui suis-je ?
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="text-decoration-none text-light"
                      title="Contact"
                      aria-label="Contact"
                    >
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Contact
                      </span>
                    </Link>
                    {/* <Link to="/temoignages" className="text-decoration-none text-light">
                    <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                      Témoignages
                    </span>
                  </Link> */}
                  </div>
                </li>
                <li className="nav-item w-100 text-start mt-3">
                  <div className=" w-100 border-bottom border-secondary fs-5 text-light fw-bolder">
                    Mes offres
                  </div>
                  <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                    <Link to="/theme-de-naissance-par-le-tarot-de-marseille">
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Thème de naissance par le tarot de Marseille
                      </span>
                    </Link>
                    <Link to="/la-trame">
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        La Trame
                      </span>
                    </Link>
                    <Link to="/massage-tantrique-tao">
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Massage Tantrique - Tao
                      </span>
                    </Link>
                    <Link to="/sophrologie">
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Sophrologie
                      </span>
                    </Link>
                    <Link to="/constellations-familiales-et-systemiques">
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Constellations familiales et systémiques
                      </span>
                    </Link>
                  </div>
                </li>

                {/* <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Mon espace client</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <AccountFullNameBadge />
                  <CreateAccountBadge />
                  <LoginAccountBadge />
                  <LogoutAccountBadge />
                </div>
              </li> */}
                <li className="nav-item w-100 text-start mt-3">
                  <div className="w-100 border-bottom border-secondary fs-6 text-light fw-bolder d-flex p-1 flex-row flex-wrap align-items-center">
                    <span>Crédits</span>
                  </div>
                  <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                    <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                      web design: Henri d'Orgeval
                    </span>
                  </div>
                </li>
                <li className="nav-item w-100 text-start mt-3">
                  <div className="w-100 border-bottom border-secondary fs-6 text-light fw-bolder d-flex p-1 flex-row flex-wrap align-items-center">
                    <span>Confiance numérique</span>
                  </div>
                  <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                    <Link to="/mentions-legales">
                      <span className="badge rounded-pill text-bg-badge-burger-menu fs-7 border border-secondary m-1">
                        Mentions légales
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HambugerMenu.displayName = 'HambugerMenu';
