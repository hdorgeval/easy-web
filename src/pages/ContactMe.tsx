import { FC } from 'react';
import { ContactForm } from '../components/ContactForm';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const ContactMe: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/contact-me.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
      backgroundPositionX="95%"
      backgroundPositionY="35%"
      htmlTitle={`Contact | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Contactez-moi</PageTitle>
        </div>
        <div className="" style={{ minHeight: '1vh' }}></div>
        <SemiTransparentTile
          background="linear-gradient(rgb(75, 117, 125, 0.48), rgba(79, 79, 93, 0.2))"
          className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-bolder"
        >
          <ContactForm
            analyticsEvent="send-contact-form"
            displayFormLabel={false}
            invalidFeedbackClassName="text-light"
            formBackgroundClassName="form-contact fw-medium text-light placeholder-text-light"
          />
        </SemiTransparentTile>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

ContactMe.displayName = 'ContactMe';
