// components/CaseStudyCard.tsx

import Image from 'next/image'
import Link from 'next/link'

const SECTOR_LABELS: Record<string, string> = {
  govtech:    'GovTech / DPI',
  healthtech: 'HealthTech / SRHR',
  femtech:    'FemTech',
  dpg:        'Open Source / DPG',
  civic:      'Civic Tech',
  education:  'Education',
}

const SECTOR_COLOURS: Record<string, { bg: string; text: string }> = {
  govtech:    { bg: '#E1F5EE', text: '#085041' },
  healthtech: { bg: '#EEEDFE', text: '#3C3489' },
  femtech:    { bg: '#FBEAF0', text: '#72243E' },
  dpg:        { bg: '#FAEEDA', text: '#633806' },
  civic:      { bg: '#E6F1FB', text: '#0C447C' },
  education:  { bg: '#EAF3DE', text: '#27500A' },
}

export type CaseStudy = {
  _id: string
  title: string
  slug: { current: string }
  client?: string
  sector?: string
  my_role?: string
  summary?: string
  impact_metric?: string
  tags?: string[]
  cover_image?: string
  external_url?: string
  live_url?: string
  year?: number
}

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const sectorColour = study.sector
    ? SECTOR_COLOURS[study.sector] ?? { bg: '#F1EFE8', text: '#444441' }
    : { bg: '#F1EFE8', text: '#444441' }

  return (
    <article className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-colors">
      {/* Cover image */}
      {study.cover_image ? (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-50">
          <Image
            src={study.cover_image}
            alt={`${study.title} — case study cover`}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      ) : (
        <div
          className="aspect-video w-full flex items-center justify-center"
          style={{ background: sectorColour.bg }}
        >
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: sectorColour.text }}
          >
            {study.sector ? SECTOR_LABELS[study.sector] : 'Case study'}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Sector pill + year */}
        <div className="flex items-center justify-between">
          {study.sector && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: sectorColour.bg, color: sectorColour.text }}
            >
              {SECTOR_LABELS[study.sector]}
            </span>
          )}
          {study.year && (
            <span className="text-xs text-gray-400">{study.year}</span>
          )}
        </div>

        {/* Title + client */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 leading-snug mb-0.5">
            {study.title}
          </h3>
          {study.client && (
            <p className="text-xs text-gray-500">{study.client}</p>
          )}
        </div>

        {/* Summary */}
        {study.summary && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {study.summary}
          </p>
        )}

        {/* Impact metric highlight */}
        {study.impact_metric && (
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 border border-gray-100">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Impact
            </span>
            <span className="text-xs font-semibold text-gray-800">
              {study.impact_metric}
            </span>
          </div>
        )}

        {/* Tags */}
        {study.tags && study.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {study.tags.slice(0, 4).map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-500 bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="flex items-center gap-3 pt-1 mt-auto">
          {study.external_url && (
            <a
              href={study.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-crimson-600 hover:text-crimson-800 transition-colors"
            >
              Read full case study →
            </a>
          )}
          {study.live_url && (
            <a
              href={study.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Live product ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
