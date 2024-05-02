import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PlanEssentiel } from './TarifsPlanEssentiel';
import { PlanPremium } from './TarifsPlanPremium';
import { PlanPro } from './TarifsPlanPro';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';

export const Tarifs: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/contact-me.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.0), rgba(79, 79, 93, 0.0))"
      backgroundPositionX="90%"
      backgroundPositionY="35%"
      htmlTitle={`Tarifs | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Tarifs</PageTitle>
        </div>
        <div className="" style={{ minHeight: '1vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <PlanEssentiel />
          <PlanPremium />
          <PlanPro />
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Tarifs.displayName = 'Tarifs';
