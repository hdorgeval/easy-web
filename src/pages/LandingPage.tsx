import { FC, useCallback } from 'react';
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
            backgroundImage: 'url(/images/backgrounds/landing-page.webp)',
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
                className="font-montserrat btn btn-outline-light btn-outline-light-custom fs-1 fw-bolder w-50 mt-auto mb-auto"
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
        style={{ backgroundColor: 'rgb(50 96 92)' }}
      >
        <div
          className=""
          style={{
            backgroundImage: 'url(/images/backgrounds/section-qui-suis-je.webp)',
            minHeight: '100vh',
            backgroundPositionX: '17%',
            backgroundPositionY: '98%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div className="container">
            <div className="d-flex flex-column text-start text-light font-raleway fs-3 fw-medium py-4">
              <div className="d-flex flex-row justify-content-center align-items-center mb-3 mt-2">
                <div className="border-photo">
                  <img
                    width="128px"
                    height="180px"
                    className="object-fit-fill rounded-circle img-thumbnail p-0 border-0 "
                    src="/images/portraits/portrait.webp"
                    alt="portrait d'Henri d'Orgeval"
                    style={{ width: '8rem', minWidth: '8rem', opacity: '0.9' }}
                  />
                </div>
                <div className="w-100 ms-4">Je suis Henri d'Orgeval</div>
              </div>
              <Description>
                Je développe des sites web pour les professionnels du bien-être et du développement
                personnel, qu'ils débutent dans leur domaine ou qu'ils cherchent à renouveler leur
                présence en ligne. Fondé sur une approche de co-création, mon processus consiste à
                vous écouter de manière proactive et à prendre en compte chaque idée que vous
                apportez. Je mets ensuite ma créativité et mon expertise à votre service pour donner
                vie à un site web qui reflète votre essence et vos valeurs. En tant qu'interlocuteur
                unique dédié, je vous fournis un site clés en main et assure ensuite sa gestion
                complète, vous permettant ainsi de vous concentrer sur ce que vous faites de mieux :
                exercer votre expertise et offrir le meilleur de vous-même à vos clients. Grâce à
                cette approche, vous pourrez offrir à vos visiteurs une expérience en ligne qui
                inspire la paix et le bien-être, renforçant ainsi votre impact et votre présence sur
                le web.
              </Description>
              {/* <Link
                to="/qui-suis-je"
                className="text-decoration-none text-light"
                title="En savoir plus sur qui je suis"
                aria-label="En savoir plus sur qui je suis"
              >
                <span className="btn btn-outline-light btn-outline-light-custom fw-bolder my-4 font-raleway">
                  En savoir plus
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
};

LandingPage.displayName = 'LandingPage';
