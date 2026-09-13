import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const apex = '12,6.12'
const baseLOuter = '6.6,18.6'
const baseLInner = '9.48,18.6'
const baseROuter = '17.4,18.6'
const baseRInner = '14.52,18.6'
const innerTop = '12,10.56'

export default function AppleIcon() {
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
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="none">
          <polygon points={`${apex} ${baseLOuter} ${baseLInner} ${innerTop}`} fill="#ffffff" />
          <polygon points={`${apex} ${baseROuter} ${baseRInner} ${innerTop}`} fill="#ffffff" />
          <rect x="8.52" y="14.04" width="6.96" height="1.92" rx="0.4" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
