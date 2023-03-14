const defaultColors = 'text-gray-300'

const colors: Record<string, string> = {
  Laravel: 'text-red-300',
  Rust: 'text-orange-300',
  WebDev: 'text-green-300',
}

export default function ColoredTag({
  tag,
  className,
}: {
  tag: string
  className?: string
}) {
  const color = colors[tag] ?? defaultColors
  return <span className={`${color} ${className}`}>{tag}</span>
}
