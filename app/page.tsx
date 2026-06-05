import { Suspense } from 'react'
import LandingContent from './landing/content'

export default function HomePage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <LandingContent />
    </Suspense>
  )
}
