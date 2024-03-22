import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
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
              <div className="w-100 ms-4">Je suis Christina Evangelica</div>
            </div>
            <Description>
              Je vous reçois dans mon cabinet situé au sud-ouest de Nantes du lundi au samedi de 9h
              à 19h. Ma pratique repose sur une approche holistique, prenant en compte tous les
              aspects de votre être. Que vous cherchiez à surmonter le stress, à gérer l'anxiété, à
              améliorer vos relations ou à vous reconnecter avec vous-même, je suis là pour vous
              soutenir. Grâce à des techniques variées telles que l'énergétique traditionnelle
              chinoise, la méditation, la relaxation profonde, le massage tantrique, je vous
              guiderai avec bienveillance et respect vers la réalisation de vos objectifs de
              bien-être. Chaque parcours est unique, c'est pourquoi je m'engage à créer un espace
              sécurisé et accueillant où vous pourrez vous exprimer librement.
            </Description>
            <Link
              to="/qui-suis-je"
              className="text-decoration-none text-light"
              title="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
              aria-label="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
            >
              <span className="btn btn-outline-light fw-bolder my-4 font-playfair">
                En savoir plus
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="temoignages"
        data-bs-target="#navbarSupportedContent"
        className="w-100"
        style={{
          backgroundImage: 'url(/images/backgrounds/section-testimonies.jpg)',
          minHeight: '100vh',
          backgroundPositionX: '29%',
          backgroundPositionY: '29%',
          backgroundSize: 'cover',
          position: 'relative',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      >
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                <div
                  className="rounded-circle d-flex flex-column align-items-center"
                  style={{
                    backgroundColor: '#4f46e5',
                    width: '3.4rem',
                    minWidth: '3.4rem',
                  }}
                >
                  <span className="fs-1 fw-bolder px-3 py-1">C</span>
                </div>
                <div className="d-flex flex-column align-items-start ms-4">
                  <div className="card-title fs-5">Carole J.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                </div>
              </div>
              <div className="pt-4 w-100" style={{ maxWidth: '360px' }}>
                <Description>
                  Je tiens à remercier Véronica tant pour son écoute que pour son professionnalisme.
                  Je l'ai consultée pour une problématique récurrente qui enfin, est en passe d'être
                  réglée définitivement. Et j'ai pu également expérimenter les massages qu'elle
                  propose... que de la douceur.... du pur bonheur ! Un grand Merci
                </Description>
              </div>
            </div>
          </div>

          <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                <div
                  className="rounded-circle d-flex flex-column align-items-center"
                  style={{
                    backgroundColor: '#4f46e5',
                    width: '3.4rem',
                    minWidth: '3.4rem',
                  }}
                >
                  <span className="fs-1 fw-bolder px-3 py-1">L</span>
                </div>
                <div className="d-flex flex-column align-items-start ms-4">
                  <div className="card-title fs-5">Lolote F.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                </div>
              </div>
              <div className="pt-4 w-100" style={{ maxWidth: '360px' }}>
                <Description>
                  J'ai pu essayé le massage qui est extraordinaire au niveau des sensations...plein
                  d'émotions Un lâcher prise d'une heure et demi !!!
                </Description>
              </div>
            </div>
          </div>

          <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                <div
                  className="rounded-circle d-flex flex-column align-items-center"
                  style={{
                    backgroundColor: '#4f46e5',
                    width: '3.4rem',
                    minWidth: '3.4rem',
                  }}
                >
                  <span className="fs-1 fw-bolder px-3 py-1">C</span>
                </div>
                <div className="d-flex flex-column align-items-start ms-4">
                  <div className="card-title fs-5">Carole G.</div>
                  <div>
                    <FiveStarRating />
                  </div>
                </div>
              </div>
              <div className="pt-4 w-100" style={{ maxWidth: '360px' }}>
                <Description>
                  Christina m'a accompagné dans une constellation familiale en individuel. Je me
                  suis sentie écoutée et en sécurité tout le long. Merci pour ta douceur et ton
                  professionnalisme 🙏.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-bs-target="#navbarSupportedContent"
        className="w-100"
        style={{
          backgroundImage: 'url(/images/backgrounds/section-contact.jpg)',
          minHeight: '100vh',
          backgroundPositionX: '29%',
          backgroundPositionY: '29%',
          backgroundSize: 'cover',
          position: 'relative',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      >
        <div className="container-fluid py-2 px-0 pb-0">
          <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
            <div className="card-body">
              <ContactForm analyticsEvent="send-contact-form" />
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
};

LandingPage.displayName = 'LandingPage';
