import { FC } from 'react';
import { usePublicPage } from '../../contexts/userContext';
import { useGuidedTour } from '../../hooks/useGuidedTour';
import { useMetaDescription } from '../../hooks/useMetaDescription';
import { useOffCanvasBackdropRemover } from '../../hooks/useOffCanvasBackdropRemover';
import { useTitle } from '../../hooks/useTitle';
import { Footer } from './Footer';
import { HambugerMenu } from './HamburgerMenu';

export interface PublicPageLayoutOwnProps {
  children: React.ReactNode;
  htmlTitle: string;
}
export const PublicPageLayout: FC<PublicPageLayoutOwnProps> = ({ children, htmlTitle }) => {
  useOffCanvasBackdropRemover();
  usePublicPage();
  useGuidedTour();
  useTitle(htmlTitle);
  useMetaDescription(htmlTitle);
  return (
    <>
      <HambugerMenu />
      {children}
      <Footer />
    </>
  );
};

PublicPageLayout.displayName = 'PublicPageLayout';
