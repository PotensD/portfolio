export default function Tag({
  tag,
  className,
}: {
  tag: string
  className?: string
}) {
  return <span className={`text-sm  ${className}`}>{tag}</span>
}
