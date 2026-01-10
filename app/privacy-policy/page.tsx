import { Metadata } from 'next';
import { termlyHtml } from './termly-html';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kimberly Nguyen Photography',
  description: 'Privacy Policy for Kimberly Nguyen Photography, LLC. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-16" >
        <div dangerouslySetInnerHTML={{ __html: termlyHtml }} />
      </div>
    </div>
  );
}