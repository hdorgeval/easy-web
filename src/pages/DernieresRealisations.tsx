import { FC } from 'react';
import { OpenExternalLink } from '../components/OpenExternalLink';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';

export const DernieresRealisations: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/recent-works.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.0), rgba(79, 79, 93, 0.0))"
      backgroundPositionX="90%"
      backgroundPositionY="35%"
      htmlTitle={`Dernières réalisations | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-4 p-4">
          <PageTitle>Dernières réalisations</PageTitle>
        </div>
        <div className="" style={{ minHeight: '1vh' }}></div>
        <div className="container-fluid d-flex flex-row flex-wrap justify-content-center align-items-stretch  py-2 px-0 py-4">
          <div className="d-flex d-flex-lg flex-column justify-content-center align-items-center p-2">
            <OpenExternalLink
              className="nav-link"
              link="https://marie-anne-sevin.com"
              relationship="nofollow"
              aria-label="Site web de Marie Anne Sévin"
              title="Site web de Marie Anne Sévin"
              analyticsEvent="open-external-link"
            >
              <div className="card card-xl">
                <img
                  src="/images/screenshots/marie-anne-sevin.webp"
                  className="card-img"
                  alt="Marie-Anne Sévin"
                />
              </div>
              <div className="figure-caption fs-4 text-light fw-medium">
                <span>https://marie-anne-sevin.com</span>
                <i className="bi bi-box-arrow-up-right ms-3"></i>
              </div>
            </OpenExternalLink>
          </div>

          <div className="d-flex d-flex-lg flex-column justify-content-center align-items-center p-2 mt-4">
            <OpenExternalLink
              className="nav-link"
              link="https://sandra-giraudeau.com/"
              relationship="nofollow"
              aria-label="Site web de Sandra Giraudeau"
              title="Site web de Sandra Giraudeau"
              analyticsEvent="open-external-link"
            >
              <div className="card card-xl">
                <img
                  src="/images/screenshots/sandra-giraudeau.webp"
                  className="card-img"
                  alt="Sandra Giraudeau"
                />
              </div>
              <div className="figure-caption fs-4 text-light fw-medium">
                <span>https://sandra-giraudeau.com</span>
                <i className="bi bi-box-arrow-up-right ms-3"></i>
              </div>
            </OpenExternalLink>
          </div>

          <div className="d-flex d-flex-lg flex-column justify-content-center align-items-center p-2 mt-4">
            <OpenExternalLink
              className="nav-link"
              link="https://spirale-interieure.com/"
              relationship="nofollow"
              aria-label="Site web d'Isabelle Hervouet"
              title="Site web d'Isabelle Hervouet"
              analyticsEvent="open-external-link"
            >
              <div className="card card-xl">
                <img
                  src="/images/screenshots/spirale-interieure.webp"
                  className="card-img"
                  alt="Spirale intérieure"
                />
              </div>
              <div className="figure-caption fs-4 text-light fw-medium">
                <span>https://spirale-interieure.com</span>
                <i className="bi bi-box-arrow-up-right ms-3"></i>
              </div>
            </OpenExternalLink>
          </div>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

DernieresRealisations.displayName = 'DernieresRealisations';
