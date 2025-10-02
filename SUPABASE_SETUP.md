# Supabase Integration Setup Guide

This guide walks you through setting up and using Supabase in the Kimberly Nguyen Photography website.

## What Was Integrated

The base Supabase configuration has been successfully integrated into the project. This includes:

### 1. Package Dependencies
- `@supabase/supabase-js`: The Supabase JavaScript client library
- `@supabase/ssr`: Server-Side Rendering utilities for Next.js

### 2. Configuration Files
- **`.env.example`**: Template for environment variables
- **`lib/supabase/client.ts`**: Client-side Supabase client for React components
- **`lib/supabase/server.ts`**: Server-side Supabase client for Server Components and API routes
- **`lib/supabase/middleware.ts`**: Middleware helper for session management
- **`middleware.ts`**: Root middleware for automatic session refresh

### 3. Documentation
- **`lib/supabase/README.md`**: Comprehensive usage examples and documentation

## Next Steps

### 1. Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project or select an existing one
3. Navigate to **Project Settings** > **API**
4. Copy your **Project URL** and **anon/public key**

### 2. Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 3. Create Database Tables

Here are some suggested tables for this photography website:

#### Contact Inquiries Table
```sql
create table contact_inquiries (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  wedding_date date,
  venue text,
  how_did_you_hear text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table contact_inquiries enable row level security;

-- Create policy to allow insert for everyone (for contact form)
create policy "Anyone can insert contact inquiries"
  on contact_inquiries for insert
  with check (true);

-- Create policy for admins to view all inquiries
-- You'll need to set up auth for this
create policy "Admins can view all inquiries"
  on contact_inquiries for select
  using (auth.role() = 'authenticated');
```

#### Blog Posts Table (for future use)
```sql
create table blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  featured_image text,
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table blog_posts enable row level security;

-- Allow public read access to published posts
create policy "Anyone can view published blog posts"
  on blog_posts for select
  using (published = true);

-- Only authenticated users can insert/update/delete
create policy "Authenticated users can manage blog posts"
  on blog_posts for all
  using (auth.role() = 'authenticated');
```

### 4. Update the Contact Form

Here's an example of how to integrate the contact form with Supabase:

```typescript
// app/contact/components/contact-form.tsx
'use client';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function ContactForm() {
  // ... existing state ...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const supabase = createClient();
      
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            wedding_date: formData.weddingDate || null,
            venue: formData.venue,
            how_did_you_hear: formData.howDidYouHear,
            message: formData.message,
          }
        ]);
      
      if (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your inquiry. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of component ...
}
```

### 5. Create an Admin Dashboard

You can create an admin page to view contact inquiries:

```typescript
// app/admin/inquiries/page.tsx
import { createClient } from '@/lib/supabase/server';

export default async function InquiriesPage() {
  const supabase = await createClient();
  
  const { data: inquiries, error } = await supabase
    .from('contact_inquiries')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    return <div>Error loading inquiries</div>;
  }
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-serif mb-6">Contact Inquiries</h1>
      <div className="space-y-4">
        {inquiries?.map((inquiry) => (
          <div key={inquiry.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{inquiry.name}</h2>
            <p className="text-gray-600">{inquiry.email}</p>
            <p className="text-gray-600">{inquiry.phone}</p>
            {inquiry.wedding_date && (
              <p className="text-gray-600">Wedding Date: {inquiry.wedding_date}</p>
            )}
            <p className="mt-4">{inquiry.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              Received: {new Date(inquiry.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Features Available

With Supabase integrated, you can now:

1. **Database**: Store and retrieve data (contacts, blog posts, galleries, etc.)
2. **Authentication**: Add user login/signup (for admin dashboard)
3. **Storage**: Store and serve images (for photo galleries)
4. **Real-time**: Get live updates when data changes
5. **Edge Functions**: Run serverless functions

## Authentication (Optional)

To add authentication for the admin dashboard:

```typescript
// app/login/page.tsx
'use client';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      alert(error.message);
    } else {
      router.push('/admin');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## Testing

To test your Supabase connection:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser console and run:
   ```javascript
   import { createClient } from '@/lib/supabase/client'
   const supabase = createClient()
   const { data, error } = await supabase.from('your_table').select('*')
   console.log(data, error)
   ```

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## Support

If you encounter any issues:

1. Check the [Supabase Discord](https://discord.supabase.com)
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Check the browser console for errors
4. Verify your environment variables are set correctly

## Security Notes

- Never commit `.env.local` to version control
- The `NEXT_PUBLIC_` prefix makes variables available in the browser
- Use Row Level Security (RLS) policies to protect your data
- The anon key is safe to expose but always use RLS
- For sensitive operations, use Server Components or API routes
