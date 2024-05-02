import { FC } from 'react';
import { Description } from '../components/Description';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';

export const PlanPro: FC = () => {
  return (
    <SemiTransparentTile
      background="linear-gradient(rgb(75, 117, 125, 0.0), rgba(79, 79, 93, 0.0))"
      className="card card-xl text-start text-light fs-5 font-monserrat m-2"
    >
      <div id="plan-pro" className="card-header py-3 px-4">
        <h5 className="card-title fs-3 fw-bolder mb-0">
          <div className="d-flex flex-row justify-content-between">
            <span>Plan Pro</span>
            <div>
              <span className="">137€</span>
              <span className="px-2">/</span>
              <span className="">mois</span>
            </div>
          </div>
        </h5>
      </div>
      <ul className="list-group list-group-flush mt-0 pt-0">
        <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
          <div
            id="accordion-plan-pro"
            className="accordion card-subtitle pt-1"
            style={{ backgroundColor: 'transparent' }}
          >
            <div
              className="accordion-item border-0 border-bottom-1"
              style={{ backgroundColor: 'transparent' }}
            >
              <button
                className="accordion-button collapsed fs-5 fw-semi-bold py-0 px-0 align-items-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-plan-pro"
                aria-expanded="false"
                aria-controls="collapse-plan-pro"
                style={{ backgroundColor: 'transparent' }}
              >
                <i className="bi bi-check-lg me-2"></i>
                Plan Essentiel inclus
              </button>
              <div
                id="collapse-plan-pro"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-plan-pro"
              >
                <div className="accordion-body fs-6 fw-semi-bold">
                  <Description>
                    Le plan Premium inclus tous les services du plan Essentiel.
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </TransparentListGroupItem>
        <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
          <div
            id="accordion-plan-pro-max-number-of-pages"
            className="accordion card-subtitle pt-1"
            style={{ backgroundColor: 'transparent' }}
          >
            <div
              className="accordion-item border-0 border-bottom-1"
              style={{ backgroundColor: 'transparent' }}
            >
              <button
                className="accordion-button collapsed fs-5 fw-semi-bold py-0 px-0 align-items-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-plan-pro-max-number-of-pages"
                aria-expanded="false"
                aria-controls="collapse-plan-pro-max-number-of-pages"
                style={{ backgroundColor: 'transparent' }}
              >
                <i className="bi bi-check-lg me-2"></i>
                Nombre de pages &lt;= 50
              </button>
              <div
                id="collapse-plan-pro-max-number-of-pages"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-plan-pro-max-number-of-pages"
              >
                <div className="accordion-body fs-6 fw-semi-bold">
                  <Description>
                    Il s'agit des pages principales de votre site, sans compter la page “mentions
                    légales”. La page d'acceuil de votre site compte pour une page.
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </TransparentListGroupItem>

        <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
          <div
            id="accordion-plan-pro-max-number-of-forms"
            className="accordion card-subtitle pt-1"
            style={{ backgroundColor: 'transparent' }}
          >
            <div
              className="accordion-item border-0 border-bottom-1"
              style={{ backgroundColor: 'transparent' }}
            >
              <button
                className="accordion-button collapsed fs-5 fw-semi-bold py-0 px-0 align-items-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-plan-pro-max-number-of-forms"
                aria-expanded="false"
                aria-controls="collapse-plan-pro-max-number-of-forms"
                style={{ backgroundColor: 'transparent' }}
              >
                <i className="bi bi-check-lg me-2"></i>
                Nombre d'envoi de formulaires &lt;= 1400 / mois
              </button>
              <div
                id="collapse-plan-pro-max-number-of-forms"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-plan-pro-max-number-of-forms"
              >
                <div className="accordion-body fs-6 fw-semi-bold">
                  <Description>
                    Il s'agit des formulaires envoyés par les utilisateurs de votre site web pour
                    une prise de rendez-vous, une inscription, un contact ou tout autre demande. Au
                    delà de 1400 formulaires envoyés dans le mois, l'envoi de formulaires
                    additionnels sera automatiquement désactivé jusqu'au début du mois suivant.
                    Chaque formulaire envoyé par un utilisateur vous est transféré automatiquement à
                    l'adresse mail de votre choix.
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </TransparentListGroupItem>
      </ul>
    </SemiTransparentTile>
  );
};

PlanPro.displayName = 'PlanPro';
