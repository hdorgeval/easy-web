import { FC } from 'react';
import { Description } from '../components/Description';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';

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
          <SemiTransparentTile
            background="linear-gradient(rgb(75, 117, 125, 0.0), rgba(79, 79, 93, 0.0))"
            className="card card-xl text-start text-light fs-5 font-monserrat m-2"
          >
            <div id="plan-essentiel" className="card-header py-3 px-4">
              <h5 className="card-title fs-3 fw-bolder mb-0">
                <div className="d-flex flex-row justify-content-between">
                  <span>Plan Essentiel</span>
                  <div>
                    <span className="">47€</span>
                    <span className="px-2">/</span>
                    <span className="">mois</span>
                  </div>
                </div>
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion01"
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
                      data-bs-target="#collapse01"
                      aria-expanded="false"
                      aria-controls="collapse01"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>
                      Nombre de pages &lt;= 10
                    </button>
                    <div
                      id="collapse01"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion01"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          Il s'agit des pages principales de votre site, sans compter la page
                          “mentions légales”. La page d'acceuil de votre site compte pour une page.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion01a"
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
                      data-bs-target="#collapse01a"
                      aria-expanded="false"
                      aria-controls="collapse01a"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>
                      Mise à jour du site
                    </button>
                    <div
                      id="collapse01a"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion01a"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          En tant qu'interlocuteur unique dédié, je vous fournis un site clés en
                          main et assure ensuite sa gestion complète, vous permettant ainsi de vous
                          concentrer sur ce que vous faites de mieux : exercer votre expertise et
                          offrir le meilleur de vous-même à vos clients.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion02"
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
                      data-bs-target="#collapse02"
                      aria-expanded="false"
                      aria-controls="collapse02"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>
                      Site optimisé pour les mobiles, tablettes et ordinateurs
                    </button>
                    <div
                      id="collapse02"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion02"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          Votre site est optimisé pour garantir la meilleur expérience utilisateur
                          sur mobile, sur tablette, sur laptop et sur grand écran. Il est aussi
                          optimisé pour fonctionner aussi bien sur un environnement Windows,
                          Android, IOS, MacOs. Toutes les images utilisées dans votre site seront
                          compressées pour garantir un temps de chargement le plus rapide possible
                          pour chacune des pages de votre site web.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion03"
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
                      data-bs-target="#collapse03"
                      aria-expanded="false"
                      aria-controls="collapse03"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>
                      Création personnalisée du nom de domaine
                    </button>
                    <div
                      id="collapse03"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion03"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          Trouver un nom de domaine qui reflète qui vous êtes et ce que vous
                          proposez n'est pas une chose facile. Je vous aide à trouver un nom de
                          domaine qui n'existe pas encore. Le nom de domaine sera sous la forme
                          https://mon-site-web.com. Il est enregistré pour une durée de un an.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion04"
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
                      data-bs-target="#collapse04"
                      aria-expanded="false"
                      aria-controls="collapse04"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>Renouvellement du nom de domaine
                    </button>
                    <div
                      id="collapse04"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion04"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          Votre nom de domaine est enregistré pour un an au moment de son dépot la
                          première année. Après la première année, votre nom de domaine sera de
                          nouveau automatiquement prolongé de un an si vous prolongez aussi de un an
                          l'abonnement au plan Essentiel.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion04a"
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
                      data-bs-target="#collapse04a"
                      aria-expanded="false"
                      aria-controls="collapse04a"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>Référencement sur Google (SEO)
                    </button>
                    <div
                      id="collapse04a"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion04a"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          Le référencement sur les moteurs de recherche (SEO) nécessite de faire des
                          actions spécifiques auprès de Google, de façon à déclencher le
                          référencement du site dès sa création. Pour être visible sur Google, un
                          site doit respecter certaines normes techniques et des bonnes pratiques au
                          niveau des contenus des pages. Je fournis un rapport mensuel, similaire su
                          screenshot ci-dessous, sur le nombre de clicks et le nombre d'impressions
                          de votre site dans la recherche google.
                        </Description>
                        <div className="card text-bg-dark">
                          <img
                            src="/images/seo/sample-report-performances.webp"
                            className="card-img"
                            alt="Exemple de rapport SEO mensuel"
                          />
                        </div>
                        <Description>
                          Je fourni également un rapport mensuel sur les requêtes faites par les
                          utilisateurs dans Google et le positionnement de votre site pour chacune
                          de ces requêtes.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion05b"
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
                      data-bs-target="#collapse05b"
                      aria-expanded="false"
                      aria-controls="collapse05b"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>Statistiques d'usage du site (Google
                      Analytics)
                    </button>
                    <div
                      id="collapse05b"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion05b"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <p>
                          Je fournis un rapport mensuel qui contient la réponse aux questions
                          suivantes:
                        </p>
                        <p className="mb-0">
                          <i className="bi bi-dot fs-4 fw-bolder"></i>Combien de nouveaux
                          utilisateurs obtenus cette année ?
                        </p>
                        <p className="mb-0">
                          <i className="bi bi-dot fs-4 fw-bolder"></i>
                          Quels sont mes pages et écrans les plus consultés cette année ?
                        </p>
                        <p className="mb-0">
                          <i className="bi bi-dot fs-4 fw-bolder"></i>
                          De quelles villes proviennent mes utilisateurs cette année ?
                        </p>
                        <p className="">
                          <i className="bi bi-dot fs-4 fw-bolder"></i>
                          Depuis quels périphériques mes utilisateurs accèdent à mon site cette
                          année (smartphone : android/iPhone, laptop ou autre) ?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion05"
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
                      data-bs-target="#collapse05"
                      aria-expanded="false"
                      aria-controls="collapse05"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>Intégration avec Calendly
                    </button>
                    <div
                      id="collapse05"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion05"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold ">
                        <Description>
                          Si vous utilisez Calendly pour gérer vos rendez-vous, vos pages Calendly
                          pourront être intégrées sur votre site web.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div
                  id="accordion06"
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
                      data-bs-target="#collapse06"
                      aria-expanded="false"
                      aria-controls="collapse06"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <i className="bi bi-check-lg me-2"></i>Intégration avec Google Form
                    </button>
                    <div
                      id="collapse06"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion06"
                    >
                      <div className="accordion-body fs-6 fw-semi-bold">
                        <Description>
                          Si vous utilisez Google Form pour gérer vos inscriptions, vos formulaires
                          Google Form pourront être intégrés sur votre site web.
                        </Description>
                      </div>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Tarifs.displayName = 'Tarifs';
