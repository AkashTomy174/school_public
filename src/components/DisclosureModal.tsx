import React from 'react';
import { X, FileText, Download, ShieldCheck } from 'lucide-react';
import { CBSE_DISCLOSURE_DOCS, SCHOOL_INFO } from '../data/schoolData';

interface DisclosureModalProps {
  onClose: () => void;
}

export const DisclosureModal: React.FC<DisclosureModalProps> = ({ onClose }) => {
  const handleDownload = (title: string) => {
    alert(`Downloading verified copy of "${title}" (Peevees Public School CBSE Compliance Repository).`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf9f5] max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd] flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#00162d] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#aef2c2] text-[#00210f] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold">
                Mandatory CBSE Public Disclosure
              </h3>
              <p className="text-xs text-[#d2e4ff]">
                Affiliation #{SCHOOL_INFO.affiliationNo} • Circular Compliance Appendix IX
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-3">
          <p className="text-xs text-[#43474d] leading-relaxed">
            In compliance with the directives of the Central Board of Secondary Education (CBSE), New
            Delhi, the verified official documents and statutory compliance reports are made available
            here for public scrutiny.
          </p>

          <div className="divide-y divide-[#efeeea] border border-[#e8e5dd] rounded-xl bg-white overflow-hidden">
            {CBSE_DISCLOSURE_DOCS.map((doc, idx) => (
              <div
                key={idx}
                className="p-3.5 flex items-center justify-between gap-3 hover:bg-[#faf9f5] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#efeeea] flex items-center justify-center text-[#7c5800] shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-[#00162d] leading-tight">
                      {doc.title}
                    </h5>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-[#43474d]">
                      <span className="font-mono">{doc.code}</span>
                      <span>•</span>
                      <span>Validity: {doc.validUntil}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="p-2 rounded-lg bg-[#faf9f5] hover:bg-[#00162d] hover:text-white text-[#00162d] border border-[#e8e5dd] transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0 cursor-pointer"
                  title="Download verified PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#efeeea] border-t border-[#e8e5dd] flex items-center justify-between text-xs text-[#43474d]">
          <span>Verified by CBSE Regional Office, Trivandrum</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#00162d] text-white rounded-lg font-bold hover:bg-[#0f2b48]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
