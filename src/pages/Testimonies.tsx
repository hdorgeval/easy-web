import { FC } from 'react';
import { Description } from '../components/Description';
import { OpenExternalLink } from '../components/OpenExternalLink';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';

export const Testimonies: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/testimonies.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.0), rgba(79, 79, 93, 0.0))"
      backgroundPositionX="24%"
      backgroundPositionY="35%"
      htmlTitle={`Témoignages | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Témoignages</PageTitle>
        </div>
        <div className="" style={{ minHeight: '1vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <div
            className="card card-xl"
            style={{
              backgroundColor: 'rgb(28 50 61 / 49%)',
            }}
          >
            <div
              className="card-up"
              style={{
                backgroundColor: 'rgb(23 59 77 / 48%)',
                minHeight: '120px',
                height: '120px',
                overflow: 'hidden',
              }}
            ></div>
            <div className="avatar mx-auto" style={{ marginTop: '-90px' }}>
              <img
                src="images/portraits/marie-anne-sevin.webp"
                className="rounded-circle img-fluid"
              ></img>
            </div>
            <div className="card-body">
              <h4 className="mb-1">Marie-Anne Sévin</h4>
              <OpenExternalLink
                className="nav-link"
                link="https://marie-anne-sevin.com"
                relationship="nofollow"
                aria-label="Site web de Marie Anne Sévin"
                title="Site web de Marie Anne Sévin"
                analyticsEvent="open-external-link"
              >
                <div className="figure-caption fs-6 text-light fw-medium">
                  <span>https://marie-anne-sevin.com</span>
                  <i className="bi bi-box-arrow-up-right ms-3"></i>
                </div>
              </OpenExternalLink>
              <hr />
              <div className="text-start fw-medium">
                <Description>
                  Sur la toile depuis de nombreuses années, je me suis décidée à faire appel à un
                  pro pour refondre totalement mon site internet dédié au stages, massages et
                  constellations familiales. Henri a été très à l'écoute et m'a permis de clarifier
                  et orienter mon offre qui était peu lisible avant nots échanges étant donné le
                  foisonnement des accompagnements que je propose et des publics auprès desquels
                  j'interviens. Etant acteur et consommateur de développement personnel, il comprend
                  les enjeux d'un site efficace en se mettant tour à tour dans la peau du
                  professionnel ou des clients. Le grand plus : un contact direct pour une
                  réactivité permettant des mises à jour régulières et une gestion de la partie
                  administrative allégeant considérablement ma charge mentale. Je peux ainsi me
                  consacrer pleinement à mon métier et aux personnes que j'accompagne
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Testimonies.displayName = 'Testimonies';
