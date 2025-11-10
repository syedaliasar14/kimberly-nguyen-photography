interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate?: string;
  location?: string;
  service: string;
  description: string;
  inspo?: string;
  howDidYouHear: string;
}

export default function ContactEmail({ firstName, lastName, email, phone, eventDate, location, service, description, inspo, howDidYouHear }: ContactEmailProps) {
  const fieldStyle = {
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center'
  };

  const labelStyle = {
    backgroundColor: '#f8f8f8',
    padding: '8px 12px',
    fontWeight: 'bold',
    borderBottom: 'none',
    borderRight: '1px solid #e5e5e5',
    margin: 0,
    width: '160px',
    boxSizing: 'border-box' as const
  };

  const valueStyle = {
    backgroundColor: 'white',
    padding: '8px 12px',
    margin: 0,
    flex: 1,
    paddingLeft: '12px',
    whiteSpace: 'pre-wrap' as const
  };

  return (
    <html>
      <body style={{ fontFamily: 'sans-serif', backgroundColor: 'white', padding: '10px', margin: 0 }}>
        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px', maxWidth: '672px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
            New Inquiry from {firstName} {lastName}
          </h1>

          <p style={{ marginBottom: '20px' }}>Reply to this email to respond to {firstName}</p>

          <div style={{ marginBottom: '20px' }}>
            <div style={fieldStyle}>
              <p style={labelStyle}>Name</p>
              <p style={valueStyle}>{firstName} {lastName}</p>
            </div>

            <div style={fieldStyle}>
              <p style={labelStyle}>Email</p>
              <p style={valueStyle}>{email}</p>
            </div>

            <div style={fieldStyle}>
              <p style={labelStyle}>Phone</p>
              <p style={valueStyle}>{phone}</p>
            </div>

            <div style={fieldStyle}>
              <p style={labelStyle}>Service</p>
              <p style={valueStyle}>{service}</p>
            </div>

            {eventDate && (
              <div style={fieldStyle}>
                <p style={labelStyle}>Event Date</p>
                <p style={valueStyle}>{eventDate}</p>
              </div>
            )}

            {location && (
              <div style={fieldStyle}>
                <p style={labelStyle}>Location</p>
                <p style={valueStyle}>{location}</p>
              </div>
            )}

            <div style={fieldStyle}>
              <p style={labelStyle}>How they found you</p>
              <p style={valueStyle}>{howDidYouHear}</p>
            </div>

            <div style={fieldStyle}>
              <p style={labelStyle}>Description</p>
              <p style={valueStyle}>{description}</p>
            </div>

            {inspo && (
              <div style={fieldStyle}>
                <p style={labelStyle}>Visual Inspiration</p>
                <p style={valueStyle}>{inspo}</p>
              </div>
            )}
          </div>

        </div>
      </body>
    </html>
  );
}