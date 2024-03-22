import { FC } from 'react';
import { useDate } from '../hooks/useCalendar';
import { websiteConfig } from '../website.config';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundGradient } from './page-layout/PublicPageLayoutWithFixedBackgroundGradient';

// content provided through :
//  https://www.legalplace.fr/contrats/mentions-legales/creer/
//  https://www.netlify.com/trust-center/

export const MentionsLegales: FC = () => {
  const dateInfos = useDate(websiteConfig.legalNotice.lastUpdate);
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundGradient
        htmlTitle={`Mentions légales | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Mentions légales</PageTitle>
          </div>
          <div>
            {dateInfos && (
              <PageSubTitle className="fs-6">{`En vigueur au ${dateInfos.longDate}`}</PageSubTitle>
            )}
          </div>
          <div className="fs-6 mt-4 mx-4 text-start text-light">
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin
              2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la
              connaissance des utilisateurs et visiteurs, ci-après l' "Utilisateur", du site{' '}
              {websiteConfig.websiteUrl} , ci-après le "Site", les présentes mentions légales.
            </p>
            <p>
              La connexion et la navigation sur le Site par l'Utilisateur implique acceptation
              intégrale et sans réserve des présentes mentions légales.
            </p>
            <p> Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
            <h3 className="fs-5 text-emphasize pt-2 fw-bolder border-bottom border-bottom-1 pb-1 text-uppercase">
              ARTICLE 1 - l'éditeur
            </h3>
            <p className="mt-3">
              L'édition du Site est assurée par {`${websiteConfig.legalNotice.editor}`}.
            </p>
            <p>Numéro de téléphone : {`${websiteConfig.links.phone.url}`}</p>
            <p>Adresse e-mail : {`${websiteConfig.links.email.url}`}.</p>
            {/* <p>N° de TVA intracommunautaire : FR0123456789 </p> */}
            <p>
              Le Directeur de la publication est {`${websiteConfig.legalNotice.editor}`} ci-après
              l'"Editeur".
            </p>
            <h3 className="fs-5 text-emphasize pt-2 fw-bolder border-bottom border-bottom-1 pb-1 text-uppercase">
              ARTICLE 2 - l'hébergeur
            </h3>
            <p className="mt-3">
              L'hébergeur du Site est la société Netlify Inc, dont le siège social est situé au 44
              Montgomery Street, Suite 300, San Francisco, California 94104
            </p>
            <p> Adresse mail de contact : support@netlify.com</p>
            <h3 className="fs-5 text-emphasize pt-2 fw-bolder border-bottom border-bottom-1 pb-1 text-uppercase">
              ARTICLE 3 - accès au site
            </h3>
            <p className="mt-3">
              Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure,
              interruption programmée ou non et pouvant découlant d'une nécessité de maintenance.
            </p>
            <h3 className="fs-5 text-emphasize pt-2 fw-bolder border-bottom border-bottom-1 pb-1 text-uppercase">
              ARTICLE 4 - collecte des données
            </h3>
            <p className="mt-3">
              Le Site assure à l'Utilisateur une collecte et un traitement d'informations
              personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6
              janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
            </p>
            <p>
              En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur
              dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses
              données personnelles.
            </p>
            <p>L'Utilisateur exerce ce droit via son espace personnel ;</p>
            <p>
              Toute utilisation, reproduction, diffusion, commercialisation, modification de toute
              ou partie du Site, sans autorisation de l'Editeur est prohibée et pourra entraînée des
              actions et poursuites judiciaires telles que notamment prévues par le Code de la
              propriété intellectuelle et le Code civil.
            </p>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundGradient>
    </>
  );
};

MentionsLegales.displayName = 'MentionsLegales';
