export default function CircleArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 60 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.56516 2C-4.43483 11 11.5652 31 32.0651 23.7372C69.0652 -2.5 -20.9348 2 52.0652 40'
        stroke='currentcolor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M58.8364 40.6527L52.2568 33.0342C51.6512 32.333 50.5 32.7613 50.5 33.6878V39.0576C50.5 39.3394 50.3811 39.608 50.1727 39.7976L47.5132 42.2153C46.7752 42.8862 47.3665 44.1056 48.3503 43.9416L58.244 42.2927C59.0137 42.1644 59.3464 41.2432 58.8364 40.6527Z'
        fill='currentcolor'
      />
    </svg>
  )
}
