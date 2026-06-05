import { Suspense } from 'react'
import ProtoContent from './proto/content'

export default function HomePage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <ProtoContent />
    </Suspense>
  )
}
