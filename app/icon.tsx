import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

const apex = '12,6.12'
const baseLOuter = '6.6,18.6'
const baseLInner = '9.48,18.6'
const baseROuter = '17.4,18.6'
const baseRInner = '14.52,18.6'
const innerTop = '12,10.56'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4f46e5',
          borderRadius: 7,
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
          <polygon points={`${apex} ${baseLOuter} ${baseLInner} ${innerTop}`} fill="#ffffff" />
          <polygon points={`${apex} ${baseROuter} ${baseRInner} ${innerTop}`} fill="#ffffff" />
          <rect x="8.52" y="14.04" width="6.96" height="1.92" rx="0.4" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
