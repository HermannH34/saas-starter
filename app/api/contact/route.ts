import { NextResponse } from 'next/server'
import { db } from '@/lib/db/drizzle'
import { contactRequests } from '@/lib/db/schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, email, profileType, context, experienceLevel, formType } = body

    if (!firstName || !email || !formType) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      )
    }

    await db.insert(contactRequests).values({
      firstName,
      email,
      profileType: profileType || null,
      context: context || null,
      experienceLevel: experienceLevel || null,
      formType,
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Erreur contact request:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
