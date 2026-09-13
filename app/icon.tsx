import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

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
          <rect x="6.48" y="10.56" width="2.76" height="6.72" rx="0.97" fill="#ffffff" />
          <rect x="11.4" y="7.2" width="2.76" height="10.08" rx="0.97" fill="#ffffff" />
          <rect x="16.32" y="3.36" width="2.76" height="13.92" rx="0.97" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
