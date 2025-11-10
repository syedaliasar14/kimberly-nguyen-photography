import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Font,
  Tailwind,
} from '@react-email/components';

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate?: string;
  location?: string;
  subject: string;
  description: string;
  inspo?: string;
  howDidYouHear: string;
}

export default function ContactEmail({
  firstName,
  lastName,
  email,
  phone,
  eventDate,
  location,
  subject,
  description,
  inspo,
  howDidYouHear,
}: ContactEmailProps) {
  const fullName = `${firstName} ${lastName}`;
  
  return (
    <Html>
      <Preview>New photography inquiry from {fullName}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                'stone-900': '#1c1917',
                'stone-600': '#846660',
                'gold': '#dab364',
                'sage': '#9ea39d',
              },
              fontFamily: {
                'jost': ['Jost', 'Arial', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Head>
          <Font
            fontFamily="Jost"
            fallbackFontFamily="Arial"
            webFont={{
              url: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-stone-100 font-jost py-8">
          <Container className="bg-white mx-auto px-0 py-0 rounded-2xl max-w-2xl shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <Section className="bg-gradient-to-r from-stone-900 to-stone-600 text-center py-12 px-8">
              <Heading className="text-white text-4xl font-light mb-3 leading-tight tracking-wide">
                New Inquiry
              </Heading>
              <div className="w-16 h-0.5 bg-gold mx-auto mb-4"></div>
              <Text className="text-stone-200 text-lg m-0 font-light">
                You have a new inquiry from {fullName}
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="px-8 py-8 bg-stone-50">
              <Heading className="text-stone-900 text-2xl font-medium mb-6 pb-3 border-b border-gold/30">
                Contact Information
              </Heading>
              <div>
                <Text className="text-base leading-relaxed my-0 text-stone-700 flex mb-3">
                  <span className="font-semibold text-stone-900 inline-block min-w-[110px]">Name:</span> 
                  <span className="text-stone-600">{fullName}</span>
                </Text>
                <Text className="text-base leading-relaxed my-0 text-stone-700 flex mb-3">
                  <span className="font-semibold text-stone-900 inline-block min-w-[110px]">Email:</span> 
                  <span className="text-stone-600">{email}</span>
                </Text>
                <Text className="text-base leading-relaxed my-0 text-stone-700 flex">
                  <span className="font-semibold text-stone-900 inline-block min-w-[110px]">Phone:</span> 
                  <span className="text-stone-600">{phone}</span>
                </Text>
              </div>
            </Section>

            {/* Event Details */}
            <Section className="px-8 py-8 bg-white">
              <Heading className="text-stone-900 text-2xl font-medium mb-6 pb-3 border-b border-gold/30">
                Event Details
              </Heading>
              <div>
                <Text className="text-base leading-relaxed my-0 text-stone-700 flex mb-3">
                  <span className="font-semibold text-stone-900 inline-block min-w-[110px]">Service Type:</span> 
                  <span className="text-stone-600 bg-gold/10 px-3 py-1 rounded-full font-medium">{subject}</span>
                </Text>
                <Text className="text-base leading-relaxed my-0 text-stone-700 flex mb-3">
                  <span className="font-semibold text-stone-900 inline-block min-w-[110px]">Event Date:</span> 
                  <span className="text-stone-600">{eventDate || 'Not specified'}</span>
                </Text>
                <Text className="text-base leading-relaxed my-0 text-stone-700 flex">
                  <span className="font-semibold text-stone-900 inline-block min-w-[110px]">Location:</span> 
                  <span className="text-stone-600">{location || 'Not specified'}</span>
                </Text>
              </div>
            </Section>

            {/* Description */}
            <Section className="px-8 py-8 bg-stone-50">
              <Heading className="text-stone-900 text-2xl font-medium mb-6 pb-3 border-b border-gold/30">
                Project Description
              </Heading>
              <div className="bg-white border-l-4 border-gold p-6 rounded-r-lg shadow-sm">
                <Text className="text-base leading-relaxed text-stone-700 m-0 whitespace-pre-wrap font-light">
                  {description}
                </Text>
              </div>
            </Section>

            {/* Visual Inspiration */}
            {inspo && (
              <Section className="px-8 py-8 bg-white">
                <Heading className="text-stone-900 text-2xl font-medium mb-6 pb-3 border-b border-gold/30">
                  Visual Inspiration
                </Heading>
                <div className="bg-sage/10 border-l-4 border-sage p-6 rounded-r-lg">
                  <Text className="text-base leading-relaxed text-stone-700 m-0 whitespace-pre-wrap font-light">
                    {inspo}
                  </Text>
                </div>
              </Section>
            )}

            {/* How They Found You */}
            <Section className="px-8 py-8 bg-stone-50">
              <Heading className="text-stone-900 text-2xl font-medium mb-6 pb-3 border-b border-gold/30">
                How They Found You
              </Heading>
              <div className="bg-white border-l-4 border-stone-600 p-6 rounded-r-lg shadow-sm">
                <Text className="text-base leading-relaxed text-stone-700 m-0 whitespace-pre-wrap font-light">
                  {howDidYouHear}
                </Text>
              </div>
            </Section>

            {/* Footer */}
            <Section className="bg-stone-900 text-center py-10 px-8">
              <Text className="text-stone-300 text-sm mb-4 font-light">
                Reply directly to this email to respond to {fullName}
              </Text>
              <div className="w-12 h-0.5 bg-gold mx-auto mb-4"></div>
              <Text className="text-gold text-xl font-light m-0 tracking-wider">
                Kimberly Nguyen Photography
              </Text>
              <Text className="text-stone-400 text-sm mt-2 m-0 font-light italic">
                Capturing life's beautiful moments
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}