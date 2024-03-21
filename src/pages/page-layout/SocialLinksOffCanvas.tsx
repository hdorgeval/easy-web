import { FC } from 'react';
import { Link } from 'react-router-dom';
import { OpenExternalLinkButton } from '../../components/OpenExternalLinkButton';
import { websiteConfig } from '../../website.config';
import { SocialLinksHorizontalBar } from './SocialLinksHorizontalBar';

export const SocialLinksOffCanvas: FC = () => {
  return (
    <>
      <button
        className="btn btn-dark badge rounded-pill navbar-toggler border border-0 position-absolute bottom-0 end-0 me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSocialLinks"
        aria-controls="offcanvasSocialLinks"
        style={{ marginBottom: '30vh' }}
        title="Me contacter"
        aria-label="Me contacter"
      >
        <i className="bi bi-three-dots text-white fs-navbar-toggler-3"></i>
      </button>
      <div
        className="offcanvas offcanvas-bottom"
        tabIndex={-1}
        id="offcanvasSocialLinks"
        aria-labelledby="offcanvasSocialLinksLabel"
        style={{ minHeight: '50vh' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title ms-1" id="offcanvasSocialLinksLabel">
            Contact
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white me-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small d-flex flex-column align-items-center pt-0">
          <SocialLinksHorizontalBar />
          {websiteConfig.links.calendly.show && (
            <OpenExternalLinkButton
              className="btn btn-outline-light fw-bolder w-75 mt-4 text-nowrap"
              link={websiteConfig.links.calendly.url}
              title={websiteConfig.links.calendly.title}
              analyticsEvent={websiteConfig.links.calendly.analyticEvent}
            >
              <div className="d-flex flex-column align-items-center">
                <span className="">{websiteConfig.links.calendly.label}</span>
              </div>
            </OpenExternalLinkButton>
          )}
          {websiteConfig.links.contactForm.show && (
            <Link
              className="btn btn-outline-light fw-bolder w-75 mt-4 text-nowrap"
              to={websiteConfig.links.contactForm.url}
              title={websiteConfig.links.contactForm.title}
            >
              <div className="d-flex flex-column align-items-center">
                <span className="">{websiteConfig.links.contactForm.label}</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

SocialLinksOffCanvas.displayName = 'SocialLinksOffCanvas';
