# Quick Start Guide

## 1. Setup (One-time)

```bash
# Copy environment template
cp .env.example .env.local

# Add your Supabase credentials to .env.local
# Get them from: https://app.supabase.com > Your Project > Settings > API
```

## 2. Usage Examples

### Client Component (Browser)
```typescript
'use client'
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()
const { data } = await supabase.from('table').select()
```

### Server Component (SSR)
```typescript
import { createClient } from '@/lib/supabase/server'

const supabase = await createClient()
const { data } = await supabase.from('table').select()
```

### Server Action
```typescript
'use server'
import { createClient } from '@/lib/supabase/server'

export async function myAction() {
  const supabase = await createClient()
  return await supabase.from('table').insert({ ... })
}
```

## 3. Common Operations

```typescript
// SELECT
const { data } = await supabase.from('table').select('*')

// INSERT
const { data } = await supabase.from('table').insert({ col: 'value' })

// UPDATE
const { data } = await supabase.from('table').update({ col: 'new' }).eq('id', 1)

// DELETE
const { data } = await supabase.from('table').delete().eq('id', 1)
```

## 4. Need More Help?

- 📖 Full documentation: See `README.md` in this directory
- 🚀 Complete setup guide: See `SUPABASE_SETUP.md` in project root
- 🌐 Official docs: https://supabase.com/docs
