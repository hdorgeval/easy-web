import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Description } from '../components/Description';
import { useAnalytics } from '../hooks/useAnalytics';
import { useHashToScrollIfNeeded } from '../hooks/useHashToScrollIfNeeded';
import { websiteConfig } from '../website.config';
import { PublicPageLayout } from './page-layout/PublicPageLayout';

export const LandingPage: FC = () => {
  useHashToScrollIfNeeded('nearest');
  const { trackSimpleEvent } = useAnalytics();

  const handleClickOnBienvenue = useCallback(() => {
    trackSimpleEvent('bienvenue');
  }, [trackSimpleEvent]);

  return (
    <PublicPageLayout htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}>
      <section
        id="home"
        className="w-100"
        data-bs-target="#navbarSupportedContent"
        style={{ maxHeight: '100vh', maxWidth: '100vw' }}
      >
        <div
          className=""
          style={{
            backgroundImage: 'url(/images/backgrounds/landing-page.jpg)',
            minHeight: '100vh',
            maxHeight: '100vh',
            backgroundPositionX: '17%',
            backgroundPositionY: '98%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to bottom,rgba(63 87 132 / 97%), rgba(31 72 90 / 0%))',
              height: '100vh',
            }}
          >
            <div
              className="d-flex flex-column justify-content-start align-items-center"
              style={{ height: '100vh' }}
            >
              <div className="flex-grow-half"></div>
              <h1 className="font-montserrat text-light fw-bolder fs-big-1">Création Web</h1>
              <div className="container row justify-content-center">
                <div className="col-lg-8 col-md-10 text-center">
                  <p className="text-light font-montserrat mt-4 fs-2">
                    Votre site web sur mesure pour briller dans le monde du bien-être et du
                    développement personnel.
                  </p>
                </div>
              </div>

              <a
                className="font-montserrat btn btn-outline-light fs-1 fw-bolder w-50 mt-auto mb-auto"
                href="#bienvenue"
                onClick={handleClickOnBienvenue}
              >
                Découvrir
              </a>
              <div className="" style={{ minHeight: '5vh' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="bienvenue"
        data-bs-target="#navbarSupportedContent"
        className="w-100"
        style={{ backgroundColor: '#4f46e5' }}
      >
        <div className="container">
          <div className="d-flex flex-column text-start text-light font-dancing-script fs-3 py-4">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="border-photo">
                <img
                  className="object-fit-fill rounded-circle img-thumbnail p-0 border-0 "
                  src="/images/portraits/portrait.png"
                  alt="Logo"
                  style={{ width: '8rem', minWidth: '8rem' }}
                />
              </div>
              <div className="w-100 ms-4">Je suis Henri d'Orgeval</div>
            </div>
            <Description>
              Je suis là pour soutenir ceux qui travaillent dans le domaine du bien-être et du
              développement personnel, et qui désirent un site web rapide, original, efficace et
              personnalisé. En tant qu'interface dédiée proactive, je prends en charge la gestion
              clés-en-main de votre site web pour votre confort.
            </Description>
            <Link
              to="/qui-suis-je"
              className="text-decoration-none text-light"
              title="En savoir plus sur qui je suis"
              aria-label="En savoir plus sur qui je suis"
            >
              <span className="btn btn-outline-light fw-bolder my-4 font-playfair">
                En savoir plus
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
};

LandingPage.displayName = 'LandingPage';
