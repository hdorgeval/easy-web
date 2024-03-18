import { FC } from 'react';
import { usePublicPage } from '../../contexts/userContext';
import { useGuidedTour } from '../../hooks/useGuidedTour';
import { useMetaDescription } from '../../hooks/useMetaDescription';
import { useOffCanvasBackdropRemover } from '../../hooks/useOffCanvasBackdropRemover';
import { useTitle } from '../../hooks/useTitle';
import { Footer } from './Footer';
import { HambugerMenu } from './HamburgerMenu';

export interface PageLayoutWithBackgroundGradientOwnProps {
  backgroundOverlay?: string;
  children: React.ReactNode;
  htmlTitle: string;
}
export const PublicPageLayoutWithFixedBackgroundGradient: FC<
  PageLayoutWithBackgroundGradientOwnProps
> = ({ backgroundOverlay, children, htmlTitle }) => {
  useOffCanvasBackdropRemover();
  usePublicPage();
  useGuidedTour();
  useTitle(htmlTitle);
  useMetaDescription(htmlTitle);

  const defaultBackgroundOverlay =
    'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))';

  return (
    <>
      <HambugerMenu />
      <div
        className=""
        style={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: `${backgroundOverlay ?? defaultBackgroundOverlay}`,
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column align-items-center overflow-y-scroll">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

PublicPageLayoutWithFixedBackgroundGradient.displayName =
  'PublicPageLayoutWithFixedBackgroundGradient';
