import SubscriptionNewsletterForm from '~/components/SubscriptionNewsletterForm'
import VerticalLinks from '~/components/VerticalLinks'
import CircleArrow from '~/icons/CircleArrow'

export default function IntroductorySection({
  className,
}: {
  className?: string
}) {
  return (
    <main className={`grid grid-cols-12 justify-between pt-16 ${className}`}>
      <LeftColumn />
      <RightColumn />
    </main>
  )
}

function LeftColumn() {
  return (
    <div className='col-span-12 space-y-3 lg:col-span-8'>
      <h1 className='text-center text-7xl font-bold text-slate-200 lg:text-left'>
        Welcome to my <span className='text-sky-400'>Blog</span>
      </h1>
      <div className='flex flex-col items-center gap-4 px-5 pt-3 lg:flex-row lg:items-start'>
        <div>
          <CircleArrow className='h-11 w-16 rotate-[56deg] text-slate-200 lg:rotate-0' />
        </div>
        <div className='space-y-5 pt-7'>
          <p className='text-center text-sm lg:text-left'>
            Subscribe to our newsletter to receive the latest updates and never
            miss a post! Be the first to know about new articles, special
            offers, and exclusive content.
          </p>
          <div className='flex justify-center lg:block lg:justify-start'>
            <SubscriptionNewsletterForm className='max-w-md' />
          </div>
        </div>
      </div>
    </div>
  )
}

function RightColumn() {
  return (
    <div className='col-span-4 hidden flex-col items-end lg:flex'>
      <VerticalLinks className='-mr-2' />
    </div>
  )
}
