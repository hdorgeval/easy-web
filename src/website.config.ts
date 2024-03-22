import { MyAnalyticsEvent } from './hooks/useAnalytics';

export interface WebSiteConfig {
  copyrightOwner: string;
  hamburgerMenuPosition: 'left' | 'right';
  socialLinksMenuPosition: 'left' | 'right' | 'bottom';
  websiteSubTitle: string;
  websiteTitle: string;
  websiteShortTitle: string;
  websiteUrl: string;
  legalNotice: LegalNotice;
  links: Links;
  displayGuidedTour: boolean;
  displaySocialLinksInFooter: boolean;
  displaySocialLinksViaButton: boolean;
  displayAccountButtons: boolean;
  recaptchaV2: RecaptchaV2;
  selectOptions: Record<string, SelectOptions[]>;
}

export interface SelectOptions {
  label: string;
  value?: string;
}

export interface RecaptchaV2 {
  sitekey: string;
  theme: 'dark' | 'light';
  size: 'normal' | 'compact';
}

export interface LegalNotice {
  lastUpdate: string; // date in ISO format : yyyy/mm/dd
  editor: string;
}

export interface Link {
  show: boolean;
  url: string;
  title: string;
  label: string;
  analyticEvent: MyAnalyticsEvent;
}
export interface Links {
  facebook: Link;
  instagram: Link;
  whatsApp: Link;
  youtube: Link;
  email: Link;
  phone: Link;
  linkedin: Link;
  calendly: Link;
  contactForm: Link;
  googleMaps: Link;
  waze: Link;
}

export const websiteConfig: WebSiteConfig = {
  copyrightOwner: "Henri d'Orgeval",
  hamburgerMenuPosition: 'left',
  socialLinksMenuPosition: 'bottom',
  websiteSubTitle: 'Lorem ipsum dolor sit amet',
  websiteTitle: 'Création Web',
  websiteShortTitle: 'SmartWeb Design',
  websiteUrl: 'https://smartweb-design.com',
  legalNotice: {
    lastUpdate: '2024/03/21',
    editor: "Henri d'Orgeval",
  },
  displayGuidedTour: true,
  displaySocialLinksInFooter: true,
  displaySocialLinksViaButton: true,
  displayAccountButtons: false,
  links: {
    phone: {
      url: '0614763770',
      title: "M'appeler au téléphone",
      label: 'Phone',
      show: true,
      analyticEvent: 'appel-telephone',
    },
    email: {
      url: 'henri.dorgeval@outlook.fr',
      title: "M'envoyer un e-mail",
      label: 'Email',
      show: true,
      analyticEvent: 'envoie-mail',
    },
    youtube: {
      url: 'https://www.youtube.com/channel/0123456789',
      title: 'Voir mes vidéos sur Youtube',
      label: 'Youtube',
      show: false,
      analyticEvent: 'open-my-youtube',
    },
    instagram: {
      url: 'https://www.instagram.com/isabelle.hervouet92/?hl=fr',
      title: 'Me contacter sur Instagram',
      label: 'Instagram',
      show: false,
      analyticEvent: 'open-my-instagram',
    },
    facebook: {
      url: 'https://www.facebook.com/profile.php?id=100081612311209',
      title: 'Me contacter sur Facebook',
      label: 'Facebook',
      show: true,
      analyticEvent: 'open-my-facebook',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/john-doe/',
      title: 'Me contacter sur Linkedin',
      label: 'Linkedin',
      show: false,
      analyticEvent: 'open-my-linkedin',
    },
    whatsApp: {
      url: 'https://wa.me/33614763770',
      title: 'Me contacter sur WhatsApp',
      label: 'WhatsApp',
      show: true,
      analyticEvent: 'open-my-whatsapp',
    },
    calendly: {
      url: 'https://calendly.com/fr',
      title: 'Me contacter ou prendre un rendez-vous',
      label: 'Prendre un rendez-vous',
      show: false,
      analyticEvent: 'open-my-calendly',
    },
    contactForm: {
      url: '/contact',
      title: 'Me contacter',
      label: 'Me contacter',
      show: true,
      analyticEvent: 'open-contact-form',
    },
    googleMaps: {
      url: 'https://goo.gl/maps/UBKeixobxevtXr9X9',
      title: 'Itinéraire via Google Maps',
      label: 'Itinéraire via G. Maps',
      show: false,
      analyticEvent: 'open-google-maps',
    },
    waze: {
      url: 'https://ul.waze.com/ul?ll=47.17886960%2C-1.67614460&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
      title: 'Itinéraire via Waze',
      label: 'Itinéraire via Waze',
      show: false,
      analyticEvent: 'open-waze',
    },
  },
  recaptchaV2: {
    sitekey: '6LeGmIYpAAAAADiTPzIerxVlDXkAF6WjDbY_ahM-',
    theme: 'dark',
    size: 'normal',
  },
  selectOptions: {
    'contact-form-subjects': [{ label: 'Sujet 1' }, { label: 'Sujet 2' }, { label: 'Autre' }],
  },
};
