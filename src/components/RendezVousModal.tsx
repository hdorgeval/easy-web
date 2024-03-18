import { FC, useMemo } from 'react';
import { MyAnalyticsEvent } from '../hooks/useAnalytics';
import { SelectOptions } from '../website.config';
import { RendezVousForm } from './RendezVousForm';

export interface RendezVousModalOwnProps {
  className?: string;
  modalId: string;
  analyticsEvent?: MyAnalyticsEvent;
  subjectOptions?: SelectOptions[];
  backgroundColor?: string;
  borderColor?: string;
  backgroundImageUrl?: string;
  backgroundOverlay?: string;
  backgroundPosition?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundSize?: 'inherit' | 'cover' | 'contain' | 'initial';
  formBackgroundClassName?: string;
}
export const RendezVousModal: FC<RendezVousModalOwnProps> = ({
  modalId,
  analyticsEvent,
  subjectOptions,
  backgroundColor,
  borderColor,
  backgroundImageUrl,
  backgroundOverlay,
  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundSize,
  formBackgroundClassName,
}) => {
  const defaultBackgroundOverlay =
    'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))';

  const computedBorderColor = useMemo(() => {
    return borderColor ?? 'rgb(255 255 255 / 59%)';
  }, [borderColor]);

  const defaultBackgroundPosition = '29%';
  const computedBackgroundPositionX = useMemo(() => {
    if (!backgroundPositionX) {
      return backgroundPosition ?? defaultBackgroundPosition;
    }
    return backgroundPositionX;
  }, [backgroundPosition, backgroundPositionX]);
  const computedBackgroundPositionY = useMemo(() => {
    if (!backgroundPositionY) {
      return backgroundPosition ?? defaultBackgroundPosition;
    }
    return backgroundPositionY;
  }, [backgroundPosition, backgroundPositionY]);

  const computedBackgroundSize = useMemo(() => {
    return backgroundSize ?? 'cover';
  }, [backgroundSize]);

  const computedFormBackgroundClassName = useMemo(() => {
    return formBackgroundClassName ?? 'form-contact fw-medium';
  }, [formBackgroundClassName]);

  return (
    <div
      className="modal fade text-start text-light font-monserrat"
      id={modalId}
      tabIndex={-1}
      aria-labelledby="prendre-rendez-vous-label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            backgroundImage: `url("${backgroundImageUrl}")`,
            backgroundColor: backgroundColor ? `${backgroundColor}` : '#1d2817',
            backgroundPositionX: computedBackgroundPositionX,
            backgroundPositionY: computedBackgroundPositionY,
            backgroundSize: computedBackgroundSize,
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            borderColor: computedBorderColor,
          }}
        >
          <div
            style={{
              background: `${backgroundOverlay ?? defaultBackgroundOverlay}`,
            }}
          >
            <div className="modal-header">
              <h5
                id="prendre-rendez-vous-label"
                className="modal-title mb-0 fw-bolder text-center w-100"
              >
                Prendre rendez vous
              </h5>
              <button
                type="button"
                className="btn border border-0"
                data-bs-dismiss="modal"
                aria-label="Annuler"
                title="Annuler"
              >
                <span className="btn-close-thick-3 text-white"></span>
              </button>
            </div>
            <div className="modal-body ">
              <RendezVousForm
                analyticsEvent={analyticsEvent}
                subjectOptions={subjectOptions}
                invalidFeedbackClassName="text-light fw-bolder"
                formBackgroundClassName={computedFormBackgroundClassName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RendezVousModal.displayName = 'RendezVousModal';
