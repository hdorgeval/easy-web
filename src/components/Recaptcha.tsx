import { FC, useCallback, useEffect, useState } from 'react';
import { MyAnalyticsEvent } from '../hooks/useAnalytics';
import { websiteConfig } from '../website.config';

export interface RecaptchaOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  className?: string;
  invalidFeedbackClassName?: string;
  theme?: 'dark' | 'light';
}

export const Recaptcha: FC<RecaptchaOwnProps> = ({ theme, invalidFeedbackClassName }) => {
  const [hasLoadedRecaptchaApi, setHasLoadedRecaptchaApi] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState<string>('');
  const [captchaId, setCaptchaId] = useState<number | null>(null);
  const [waitForRecaptachCounter, setWaitForRecaptachCounter] = useState<number>(0);

  const captchaCallback = useCallback((response: string) => {
    try {
      setRecaptchaResponse(response);
    } catch (_error) {
      /* empty */
    }
  }, []);

  const expiredCaptchaCallback = useCallback(() => {
    try {
      setRecaptchaResponse('');
    } catch (_error) {
      /* empty */
    }
  }, []);

  useEffect(() => {
    try {
      const hasLoaded = window.grecaptcha !== undefined;
      if (hasLoaded) {
        setHasLoadedRecaptchaApi(true);
        return;
      }

      setTimeout(() => {
        if (window.grecaptcha !== undefined) {
          setHasLoadedRecaptchaApi(true);
          return;
        }
        setWaitForRecaptachCounter(waitForRecaptachCounter + 1);
      }, 1000);
    } catch (_error) {
      /* empty */
    }
  }, [waitForRecaptachCounter]);

  useEffect(() => {
    try {
      if (grecaptcha && typeof captchaId === 'number') {
        return () => {
          try {
            if (grecaptcha && typeof captchaId === 'number') {
              grecaptcha.reset(captchaId);
              setRecaptchaResponse('');
            }
          } catch (_error) {
            /* empty */
          }
        };
      }
    } catch (_error) {
      /* empty */
    }
  }, [captchaId]);

  useEffect(() => {
    try {
      if (!hasLoadedRecaptchaApi) {
        return;
      }
      const captchaContainer = document.querySelector(
        'div[data-netlify-recaptcha="true"]',
      ) as HTMLDivElement;

      const hasRendered = captchaContainer?.hasChildNodes() ?? false;
      if (hasRendered) {
        return;
      }

      if (captchaContainer && grecaptcha) {
        try {
          const captchaId = grecaptcha.render(captchaContainer, {
            sitekey: websiteConfig.recaptchaV2.sitekey,
            callback: captchaCallback,
            'expired-callback': expiredCaptchaCallback,
            theme: theme ?? websiteConfig.recaptchaV2.theme,
            size: websiteConfig.recaptchaV2.size,
          });
          setCaptchaId(captchaId);

          setTimeout(() => {
            const captchaIframe = captchaContainer.querySelector(
              'iframe[title="reCAPTCHA"]',
            ) as HTMLIFrameElement;
            if (captchaIframe) {
              const iframeWitdh = captchaIframe.getAttribute('width');
              const iframeHeight = captchaIframe.getAttribute('height');
              if (iframeWitdh && iframeHeight) {
                captchaIframe.setAttribute('width', `${Number(iframeWitdh) - 3}`);
                captchaIframe.setAttribute('height', `${Number(iframeHeight) - 3}`);
                captchaIframe.setAttribute('class', `rounded-3 border border-1`);
              }
            }
          }, 0);
        } catch (_error) {
          /* empty */
        }
      }
    } catch (_error) {
      /* empty */
    }
  }, [captchaCallback, expiredCaptchaCallback, hasLoadedRecaptchaApi, theme]);

  return (
    <>
      <div className="g-recaptcha" data-netlify-recaptcha="true"></div>
      <input
        id="contact-field-recaptcha-response"
        className="form-control d-none"
        value={recaptchaResponse}
        onChange={() => {
          // no-op
        }}
        required
      />
      <div className={`invalid-feedback mt-n2 ${invalidFeedbackClassName ?? ''}`}>
        Vous devez indiquer que vous n'êtes pas un robot.
      </div>
    </>
  );
};

Recaptcha.displayName = 'Recaptcha';
