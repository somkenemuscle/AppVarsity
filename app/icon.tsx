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
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
          <rect x="3.6" y="13.92" width="4" height="7.68" rx="1.4" fill="#ffffff" />
          <rect x="10" y="9.12" width="4" height="12.48" rx="1.4" fill="#ffffff" />
          <rect x="16.4" y="4.32" width="4" height="17.28" rx="1.4" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
