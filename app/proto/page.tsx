import { Suspense } from 'react'
import ProtoContent from './content'

export default function ProtoPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <ProtoContent />
    </Suspense>
  )
}
