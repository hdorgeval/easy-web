import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCalendar } from '../../hooks/useCalendar';
import { websiteConfig } from '../../website.config';
import { SocialLinksHorizontalBar } from './SocialLinksHorizontalBar';
import { SocialLinksOffCanvas } from './SocialLinksOffCanvas';
export const Footer: FC = () => {
  const { currentYear } = useCalendar();

  return (
    <footer className="p-4">
      <div className="d-flex flex-column align-items-center">
        {websiteConfig.displaySocialLinksInFooter && <SocialLinksHorizontalBar />}
        {websiteConfig.displaySocialLinksViaButton && <SocialLinksOffCanvas />}

        <span className="fs-7 fw-lighter mb-1">
          <i className="bi bi-c-circle me-2"></i>
          {`tous droits réservés ${websiteConfig.copyrightOwner} - ${currentYear}`}
        </span>
        <span className="fs-7 mb-2">
          <Link to="/mentions-legales" className="nav-link">
            <span className="">Mentions légales</span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
