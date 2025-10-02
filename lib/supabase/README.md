# Supabase Configuration

This directory contains the base configuration for Supabase integration with Next.js.

## Setup

1. Copy `.env.example` to `.env.local` in the root directory:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your Supabase credentials in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous/public key

   You can find these values in your [Supabase Dashboard](https://app.supabase.com) under Project Settings > API.

## Usage

### Client Components

For client-side React components (marked with `'use client'`):

```typescript
'use client'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function MyComponent() {
  const supabase = createClient()
  
  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase
        .from('your_table')
        .select('*')
      
      if (error) console.error('Error:', error)
      else console.log('Data:', data)
    }
    
    getData()
  }, [])
  
  return <div>My Component</div>
}
```

### Server Components

For server-side React components (default in Next.js 15 App Router):

```typescript
import { createClient } from '@/lib/supabase/server'

export default async function MyServerComponent() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  if (error) {
    console.error('Error:', error)
    return <div>Error loading data</div>
  }
  
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

### Server Actions

For server actions:

```typescript
'use server'
import { createClient } from '@/lib/supabase/server'

export async function createItem(formData: FormData) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('your_table')
    .insert({
      name: formData.get('name'),
    })
    .select()
  
  if (error) {
    return { error: error.message }
  }
  
  return { data }
}
```

### Route Handlers (API Routes)

For API routes in the app directory:

```typescript
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ data })
}
```

## Authentication

The middleware automatically handles session refresh for authenticated users. You can add protected routes by modifying `lib/supabase/middleware.ts`.

Example of protecting admin routes:

```typescript
// In lib/supabase/middleware.ts
const { data: { user } } = await supabase.auth.getUser()

if (!user && request.nextUrl.pathname.startsWith('/admin')) {
  return NextResponse.redirect(new URL('/login', request.url))
}
```

## Database Types (Optional)

To get full TypeScript support for your database schema, you can generate types:

```bash
npx supabase gen types typescript --project-id your-project-id > lib/supabase/database.types.ts
```

Then use them in your client:

```typescript
import { createClient } from '@/lib/supabase/client'
import type { Database } from '@/lib/supabase/database.types'

const supabase = createClient<Database>()
```

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js with Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
