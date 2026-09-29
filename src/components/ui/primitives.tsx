import React, { useCallback, useEffect } from 'react';
import { X } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Brand mark                                                         */
/* ------------------------------------------------------------------ */

type CrestSize = 'sm' | 'md';

const CREST_SIZES: Record<CrestSize, string> = {
  sm: 'h-9 w-9 text-base',
  md: 'h-10 w-10 text-lg',
};

interface CrestProps {
  readonly src: string;
  readonly size?: CrestSize;
  readonly className?: string;
}

/**
 * School monogram with a graceful fallback.
 *
 * The crest is served from a remote CDN, so a blocked or offline request would
 * otherwise leave a broken-image glyph in the masthead. On error we swap to an
 * inline monogram that carries the same visual weight.
 */
export const Crest: React.FC<CrestProps> = ({ src, size = 'sm', className = '' }) => {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <span
        className={`${CREST_SIZES[size]} shrink-0 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-display font-bold tracking-tight select-none ${className}`}
        aria-hidden="true"
      >
        PP
      </span>
    );
  }

  return (
    <img
      src={src}
      alt="Peevees Public School crest"
      onError={() => setFailed(true)}
      className={`${size === 'sm' ? 'h-9' : 'h-10'} w-auto shrink-0 object-contain ${className}`}
    />
  );
};

/* ------------------------------------------------------------------ */
/* Section header                                                     */
/* ------------------------------------------------------------------ */

interface SectionHeaderProps {
  /** Small uppercase eyebrow above the headline. */
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle?: string;
  /** `left` for editorial sections, `center` for the symmetric grid blocks. */
  readonly align?: 'left' | 'center';
  /** Trailing controls rendered on the same row as the headline. */
  readonly actions?: React.ReactNode;
  readonly className?: string;
}

/**
 * Standard section masthead: hairline + eyebrow, serif headline, optional
 * supporting copy and a trailing action cluster.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  actions,
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`${
        isCentered ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end justify-between'
      } gap-6 mb-12 ${className}`}
    >
      <div className={isCentered ? '' : 'max-w-3xl'}>
        <div className={`flex items-center gap-2 ${isCentered ? 'justify-center' : ''}`}>
          <span className="h-0.5 w-8 bg-secondary" />
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary">
            {eyebrow}
          </span>
        </div>

        <h2
          className={`font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight ${
            isCentered ? 'mt-2' : 'mt-1.5'
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Modal shell                                                        */
/* ------------------------------------------------------------------ */

interface ModalProps {
  readonly onClose: () => void;
  /** Accessible name for the dialog. */
  readonly label: string;
  /** Sticky navy header content; omit for shell-less dialogs. */
  readonly header?: React.ReactNode;
  /** Tailwind size classes for the dialog card. */
  readonly sizeClass?: string;
  /** Backdrop darkness / blur treatment. */
  readonly tone?: 'default' | 'deep';
  readonly children: React.ReactNode;
  /** Pinned footer, rendered outside the scroll region. */
  readonly footer?: React.ReactNode;
}

const TONE_CLASSES = {
  default: 'bg-black/70 backdrop-blur-sm',
  deep: 'bg-black/80 backdrop-blur-md',
} as const;

/**
 * Dialog shell shared by every overlay in the app.
 *
 * Handles the repeated concerns in one place: backdrop click-to-dismiss,
 * `Escape` to close, body scroll locking while open, and restoring focus
 * afterwards.
 */
export const Modal: React.FC<ModalProps> = ({
  onClose,
  label,
  header,
  sizeClass = 'max-w-2xl',
  tone = 'default',
  children,
  footer,
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [handleKeyDown]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 ${TONE_CLASSES[tone]}`}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <div
        className={`w-full ${sizeClass} max-h-[90vh] flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface shadow-2xl`}
        onClick={(event) => event.stopPropagation()}
      >
        {header}

        <div className="flex-1 overflow-y-auto">{children}</div>

        {footer}
      </div>
    </div>
  );
};

/** Navy sticky header used by the standard modals. */
interface ModalHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly onClose: () => void;
  readonly icon?: React.ReactNode;
  /** Optional close-button styling override. */
  readonly closeClassName?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  subtitle,
  onClose,
  icon,
  closeClassName = 'p-1 rounded-lg bg-white/10 text-white/70 hover:text-white',
}) => (
  <div className="shrink-0 bg-primary p-5 text-white flex items-center justify-between gap-4">
    <div className="flex items-center gap-3 min-w-0">
      {icon}
      <div className="min-w-0">
        <h3 className="font-display text-lg sm:text-xl text-white">{title}</h3>
        {subtitle && <p className="text-xs text-primary-fixed truncate">{subtitle}</p>}
      </div>
    </div>
    <button
      type="button"
      onClick={onClose}
      aria-label="Close dialog"
      className={`${closeClassName} cursor-pointer transition-colors shrink-0`}
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);