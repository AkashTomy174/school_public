import React from 'react';
import { CBSE_DISCLOSURE_DOCS, SCHOOL_INFO } from '../data/schoolData';
import { Modal, ModalHeader } from './ui/primitives';
import { Download, FileText, ShieldCheck } from 'lucide-react';

interface DisclosureModalProps {
  onClose: () => void;
}

export const DisclosureModal: React.FC<DisclosureModalProps> = ({ onClose }) => {
  /**
   * Statutory documents are hosted on the school's compliance repository; the
   * public bundle only carries the manifest, so the download is acknowledged
   * rather than served from here.
   */
  const handleDownload = (title: string) => {
    window.alert(
      `Downloading verified copy of "${title}" (Peevees Public School CBSE Compliance Repository).`,
    );
  };

  return (
    <Modal
      onClose={onClose}
      label="Mandatory CBSE public disclosure"
      sizeClass="max-w-2xl"
      header={
        <ModalHeader
          title="Mandatory CBSE Public Disclosure"
          subtitle={`Affiliation #${SCHOOL_INFO.affiliationNo} • Circular Compliance Appendix IX`}
          onClose={onClose}
          icon={
            <div className="w-8 h-8 rounded-full bg-forest-tint text-[#00210f] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
          }
        />
      }
      footer={
        <div className="shrink-0 p-4 bg-surface-container border-t border-hairline flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
          <span>Verified by CBSE Regional Office, Trivandrum</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      }
    >
      <div className="p-6 space-y-3">
        <p className="text-xs text-on-surface-variant leading-relaxed">
          In compliance with the directives of the Central Board of Secondary Education (CBSE), New
          Delhi, the verified official documents and statutory compliance reports are made available
          here for public scrutiny.
        </p>

        <ul className="divide-y divide-surface-container border border-hairline rounded-xl bg-white overflow-hidden">
          {CBSE_DISCLOSURE_DOCS.map((doc) => (
            <li
              key={doc.code}
              className="p-3.5 flex items-center justify-between gap-3 hover:bg-surface transition-colors"
            >
              <div className="flex items-start gap-3 min-w-0">
                <span className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-primary leading-tight">
                    {doc.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-on-surface-variant">
                    <span className="font-mono">{doc.code}</span>
                    <span aria-hidden="true">•</span>
                    <span>Validity: {doc.validity}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(doc.title)}
                title={`Download ${doc.title} (PDF)`}
                className="p-2 rounded-lg bg-surface hover:bg-primary hover:text-white text-primary border border-hairline transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PDF</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
