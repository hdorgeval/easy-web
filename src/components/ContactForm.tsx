import { FC, FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';
import { SelectOptions, websiteConfig } from '../website.config';
import { Recaptcha } from './Recaptcha';

export interface ContactFormOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  className?: string;
  invalidFeedbackClassName?: string;
  formBackgroundClassName?: string;

  displayFormLabel?: boolean;
}

export const ContactForm: FC<ContactFormOwnProps> = ({
  analyticsEvent,
  displayFormLabel,
  invalidFeedbackClassName,
  formBackgroundClassName,
}) => {
  const navigate = useNavigate();
  const { trackSimpleEvent } = useAnalytics();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const targetForm = event?.currentTarget;
      event.preventDefault();
      if (!targetForm?.checkValidity()) {
        event.stopPropagation();
        targetForm.classList.add('was-validated');
        return;
      }

      targetForm.classList.add('was-validated');
      const formData = new FormData(targetForm);
      const convertedFormEntries = Array.from(formData, ([key, value]) => [
        key,
        typeof value === 'string' ? value : value.name,
      ]);

      if (analyticsEvent) {
        trackSimpleEvent(analyticsEvent);
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(convertedFormEntries).toString(),
      })
        .then(() => navigate('/contact/success'))
        .catch(() => navigate('/contact/error'))
        .finally(() => {});
    },
    [analyticsEvent, navigate, trackSimpleEvent],
  );

  const subjectOptions: SelectOptions[] =
    websiteConfig.selectOptions['contact-form-subjects'] ?? [];

  const invalidFeedbackClassNames = `invalid-feedback ${invalidFeedbackClassName}`;

  return (
    <form
      className="row g-3 align-items-center needs-validation"
      name="Contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
    >
      {displayFormLabel && (
        <div className="col-12">
          <span className="fs-3 fw-bolder">Contactez-moi</span>
        </div>
      )}

      <div className="col-12 col-md-12 col-lg-3">
        <label className="visually-hidden" htmlFor="contact-field-name">
          Nom
        </label>
        <input
          type="text"
          name="Nom"
          id="contact-field-name"
          className={`form-control ${formBackgroundClassName}`}
          placeholder="Votre nom"
          autoComplete="name"
          maxLength={80}
          required
        />
        <div className={invalidFeedbackClassNames}>Vous devez saisir votre nom.</div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <label className="visually-hidden" htmlFor="contact-field-email">
          E-mail
        </label>
        <div className="input-group">
          <div className={`input-group-text ${formBackgroundClassName}`}>@</div>
          <input
            type="email"
            name="Email"
            className={`form-control ${formBackgroundClassName}`}
            id="contact-field-email"
            placeholder="E-mail"
            autoComplete="email"
            maxLength={30}
            required
          />
          <div className={invalidFeedbackClassNames}>Vous devez saisir votre email.</div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-2">
        <label className="visually-hidden" htmlFor="contact-field-phone">
          Portable
        </label>
        <div className="input-group">
          <div className={`input-group-text ${formBackgroundClassName}`}>
            <i className="bi bi-telephone-inbound"></i>
          </div>
          <input
            type="tel"
            name="Portable"
            className={`form-control ${formBackgroundClassName}`}
            id="contact-field-phone"
            placeholder="Numéro de portable"
            autoComplete="tel-national"
            maxLength={15}
            required
          />
          <div className={invalidFeedbackClassNames}>Vous devez saisir un numéro de téléphone.</div>
        </div>
      </div>

      <div className="col-12 col-md-12 col-lg-3">
        <label className="visually-hidden" htmlFor="contact-field-subject">
          Sujet
        </label>
        <select
          name="Sujet"
          className={`form-select ${formBackgroundClassName}`}
          id="contact-field-subject"
          defaultValue=""
          required
        >
          <option value="" disabled hidden>
            Sujet...
          </option>
          {subjectOptions.map((option, index) => (
            <option
              value={option.value ?? option.label}
              key={`${option.value ?? option.label}${index}`}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className={invalidFeedbackClassNames}>Vous devez sélectionner un sujet.</div>
      </div>

      <div className="col-12">
        <label className="visually-hidden" htmlFor="contact-field-message">
          Votre message
        </label>
        <textarea
          className={`form-control ${formBackgroundClassName}`}
          name="Message"
          id="contact-field-message"
          rows={4}
          placeholder="Votre message"
          required
        ></textarea>
        <div className={invalidFeedbackClassNames}>Vous devez saisir un message.</div>
      </div>

      <div className="col-12">
        <label className="visually-hidden" htmlFor="contact-field-when-i-am-available">
          Vos disponibilités
        </label>
        <textarea
          className={`form-control ${formBackgroundClassName}`}
          name="Disponibilités"
          id="contact-field-when-i-am-available"
          rows={2}
          placeholder="Vos disponibilités (jours / horaires)"
          required
        ></textarea>
        <div className={invalidFeedbackClassNames}>Vous devez saisir vos disponibilités.</div>
      </div>

      <div className="col-12 ">
        <Recaptcha invalidFeedbackClassName={invalidFeedbackClassName} />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100 fw-medium">
          Envoyer
        </button>
      </div>
      <input type="hidden" name="form-name" value="Contact" />
      <input type="hidden" name="subject" value="Demande de contact" />
      <p className="visually-hidden">
        <label>
          <input name="bot-field" />
        </label>
      </p>
    </form>
  );
};

ContactForm.displayName = 'ContactForm';
