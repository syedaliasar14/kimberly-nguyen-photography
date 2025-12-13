import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kimberly Nguyen Photography',
  description: 'Privacy Policy for Kimberly Nguyen Photography, LLC. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Effective Date: February 6, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-stone-700 leading-relaxed mb-6">
              This Privacy Notice for Kimberly Nguyen Photography, LLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-6">
              <li>Visit our website at <Link href="/" className="text-secondary hover:underline">https://www.kimberlynguyenphotography.com</Link>, or any website of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p className="text-stone-700 leading-relaxed">
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please <Link href="/contact" className="text-secondary hover:underline">contact us</Link> at <a href="mailto:kimberlypnguyenphotography@gmail.com" className="text-secondary hover:underline">kimberlypnguyenphotography@gmail.com</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              Summary of Key Points
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
            </p>
            
            <div className="space-y-4 text-stone-700">
              <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <Link href="#information-we-collect" className="text-secondary hover:underline">Learn more about personal information you disclose to us.</Link></p>
              
              <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
              
              <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              
              <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. <Link href="#how-we-process" className="text-secondary hover:underline">Learn more about how we process your information.</Link></p>
              
              <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. <Link href="#when-we-share" className="text-secondary hover:underline">Learn more about when and with whom we share your personal information.</Link></p>
              
              <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. <Link href="#how-we-keep-safe" className="text-secondary hover:underline">Learn more about how we keep your information safe.</Link></p>
              
              <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <Link href="#privacy-rights" className="text-secondary hover:underline">Learn more about your privacy rights.</Link></p>
              
              <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <Link href="/contact" className="text-secondary hover:underline">submitting a data subject access request</Link>, or by <Link href="#contact-us" className="text-secondary hover:underline">contacting us</Link>. We will consider and act upon any request in accordance with applicable data protection laws.</p>
              
              <p className="font-medium">Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="table-of-contents" className="font-heading text-3xl font-light text-stone-900 mb-6">
              Table of Contents
            </h2>
            <nav className="bg-stone-50 p-6 rounded-lg">
              <ol className="list-decimal pl-6 space-y-2 text-stone-700">
                <li><Link href="#information-we-collect" className="text-secondary hover:underline">What Information Do We Collect?</Link></li>
                <li><Link href="#how-we-process" className="text-secondary hover:underline">How Do We Process Your Information?</Link></li>
                <li><Link href="#when-we-share" className="text-secondary hover:underline">When and With Whom Do We Share Your Personal Information?</Link></li>
                <li><Link href="#how-long-we-keep" className="text-secondary hover:underline">How Long Do We Keep Your Information?</Link></li>
                <li><Link href="#how-we-keep-safe" className="text-secondary hover:underline">How Do We Keep Your Information Safe?</Link></li>
                <li><Link href="#information-from-minors" className="text-secondary hover:underline">Do We Collect Information From Minors?</Link></li>
                <li><Link href="#privacy-rights" className="text-secondary hover:underline">What Are Your Privacy Rights?</Link></li>
                <li><Link href="#do-not-track" className="text-secondary hover:underline">Controls for Do-Not-Track Features</Link></li>
                <li><Link href="#us-residents-rights" className="text-secondary hover:underline">Do United States Residents Have Specific Privacy Rights?</Link></li>
                <li><Link href="#updates-to-notice" className="text-secondary hover:underline">Do We Make Updates to This Notice?</Link></li>
                <li><Link href="#contact-us" className="text-secondary hover:underline">How Can You Contact Us About This Notice?</Link></li>
                <li><Link href="#review-update-delete" className="text-secondary hover:underline">How Can You Review, Update, or Delete the Data We Collect From You?</Link></li>
              </ol>
            </nav>
          </section>

          <section id="information-we-collect" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              1. What Information Do We Collect?
            </h2>
            
            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              Personal Information You Disclose to Us
            </h3>
            <p className="text-stone-600 font-medium mb-4">
              In Short: We collect personal information that you provide to us.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you <Link href="/contact" className="text-secondary hover:underline">contact us</Link>.
            </p>
            
            <div className="bg-stone-50 p-6 rounded-lg mb-6">
              <h4 className="font-medium text-stone-800 mb-3">Personal Information Provided by You:</h4>
              <ul className="list-disc pl-6 text-stone-700 space-y-1">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
              </ul>
            </div>
            
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>Sensitive Information:</strong> We do not process sensitive information.
            </p>
            
            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              Information Automatically Collected
            </h3>
            <p className="text-stone-600 font-medium mb-4">
              In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
            </p>
            
            <div className="bg-stone-50 p-6 rounded-lg mb-6">
              <h4 className="font-medium text-stone-800 mb-3">The information we collect includes:</h4>
              <div className="space-y-4 text-stone-700">
                <div>
                  <p><strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</p>
                </div>
                <div>
                  <p><strong>Device Data:</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</p>
                </div>
                <div>
                  <p><strong>Location Data:</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</p>
                </div>
              </div>
            </div>
            
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</strong>
            </p>
          </section>

          <section id="how-we-process" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              2. How Do We Process Your Information?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li><strong>To deliver and facilitate delivery of services to the user:</strong> We may process your information to provide you with the requested service.</li>
              <li><strong>To respond to user inquiries/offer support to users:</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
              <li><strong>To request feedback:</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
              <li><strong>To send you marketing and promotional communications:</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "<Link href="#privacy-rights" className="text-secondary hover:underline">What Are Your Privacy Rights?</Link>" below.</li>
              <li><strong>To deliver targeted advertising to you:</strong> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</li>
              <li><strong>To evaluate and improve our Services, products, marketing, and your experience:</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
              <li><strong>To identify usage trends:</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
              <li><strong>To determine the effectiveness of our marketing and promotional campaigns:</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
            </ul>
          </section>

          <section id="when-we-share" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              3. When and With Whom Do We Share Your Personal Information?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: We may share information in specific situations described in this section and/or with the following third parties.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              We may need to share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
          </section>

          <section id="how-long-we-keep" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              4. How Long Do We Keep Your Information?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
            </p>
            <p className="text-stone-700 leading-relaxed">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          <section id="how-we-keep-safe" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              5. How Do We Keep Your Information Safe?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            <p className="text-stone-700 leading-relaxed">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
            </p>
          </section>

          <section id="information-from-minors" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              6. Do We Collect Information From Minors?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
            </p>
            <p className="text-stone-700 leading-relaxed">
              If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please <a href="mailto:kimberlypnguyenphotography@gmail.com" className="text-secondary hover:underline">contact us</a>.
            </p>
          </section>

          <section id="privacy-rights" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              7. What Are Your Privacy Rights?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
            </p>
            <div className="space-y-4 text-stone-700">
              <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<Link href="#contact-us" className="text-secondary hover:underline">How Can You Contact Us About This Notice?</Link>" below.</p>
              <p className="text-stone-700 leading-relaxed">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <p><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "<Link href="#contact-us" className="text-secondary hover:underline">How Can You Contact Us About This Notice?</Link>" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
            </div>
            <p className="text-stone-700 leading-relaxed mt-6">
              If you have questions or comments about your privacy rights, you may email us at <a href="mailto:kimberlypnguyenphotography@gmail.com" className="text-secondary hover:underline">kimberlypnguyenphotography@gmail.com</a>.
            </p>
          </section>

          <section id="do-not-track" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              8. Controls for Do-Not-Track Features
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
            </p>
            <p className="text-stone-700 leading-relaxed">
              California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
            </p>
          </section>

          <section id="us-residents-rights" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              9. Do United States Residents Have Specific Privacy Rights?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
            </p>

            <h3 className="font-heading text-xl font-medium text-stone-800 mb-4">
              Categories of Personal Information We Collect
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              We have collected the following categories of personal information in the past twelve (12) months:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-stone-200">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-stone-800 font-medium border-b border-stone-200">Category</th>
                    <th className="px-4 py-3 text-left text-stone-800 font-medium border-b border-stone-200">Examples</th>
                    <th className="px-4 py-3 text-left text-stone-800 font-medium border-b border-stone-200">Collected</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700 text-sm">
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">A. Identifiers</td>
                    <td className="px-4 py-3">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">YES</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">B. Personal information as defined in the California Customer Records statute</td>
                    <td className="px-4 py-3">Name, contact information, education, employment, employment history, and financial information</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">C. Protected classification characteristics under state or federal law</td>
                    <td className="px-4 py-3">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">D. Commercial information</td>
                    <td className="px-4 py-3">Transaction information, purchase history, financial details, and payment information</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">E. Biometric information</td>
                    <td className="px-4 py-3">Fingerprints and voiceprints</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">F. Internet or other similar network activity</td>
                    <td className="px-4 py-3">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">G. Geolocation data</td>
                    <td className="px-4 py-3">Device location</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">H. Audio, electronic, sensory, or similar information</td>
                    <td className="px-4 py-3">Images and audio, video or call recordings created in connection with our business activities</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">I. Professional or employment-related information</td>
                    <td className="px-4 py-3">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">J. Education Information</td>
                    <td className="px-4 py-3">Student records and directory information</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="px-4 py-3 font-medium">K. Inferences drawn from collected personal information</td>
                    <td className="px-4 py-3">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">L. Sensitive personal Information</td>
                    <td className="px-4 py-3">-</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">NO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-stone-50 p-6 rounded-lg mb-6">
              <p className="text-stone-700 leading-relaxed mb-4">
                We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
              </p>
              <ul className="list-disc pl-6 text-stone-700 space-y-1">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
            </div>

            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>We will use and retain the collected personal information as needed to provide the Services or for:</strong><br />
              Category A - As long as the user has an account with us
            </p>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              Sources of Personal Information
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Learn more about the sources of personal information we collect in "<Link href="#information-we-collect" className="text-secondary hover:underline">What Information Do We Collect?</Link>"
            </p>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              How We Use and Share Personal Information
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Learn more about how we use your personal information in the section, "<Link href="#how-we-process" className="text-secondary hover:underline">How Do We Process Your Information?</Link>"
            </p>

            <h4 className="font-medium text-stone-800 mb-3">Will your information be shared with anyone else?</h4>
            <div className="space-y-4 text-stone-700 mb-6">
              <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, "<Link href="#when-we-share" className="text-secondary hover:underline">When and With Whom Do We Share Your Personal Information?</Link>"</p>
              <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
              <p>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>
            </div>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              Your Rights
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
            </p>
            
            <div className="bg-stone-50 p-6 rounded-lg mb-6">
              <ul className="list-disc pl-6 text-stone-700 space-y-2">
                <li>Right to know whether or not we are processing your personal data</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request the deletion of your personal data</li>
                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                <li>Right to non-discrimination for exercising your rights</li>
                <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
              </ul>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Depending upon the state where you live, you may also have the following rights:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-6">
              <li>Right to access the categories of personal data being processed (as permitted by applicable law, including Minnesota's privacy law)</li>
              <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</li>
              <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Minnesota's and Oregon's privacy law)</li>
              <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including Minnesota's privacy law)</li>
              <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California's privacy law)</li>
              <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida's privacy law)</li>
            </ul>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              How to Exercise Your Rights
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              To exercise these rights, you can <Link href="/contact" className="text-secondary hover:underline">contact us by submitting a data subject access request</Link>, by emailing us at <a href="mailto:kimberlypnguyenphotography@gmail.com" className="text-secondary hover:underline">kimberlypnguyenphotography@gmail.com</a>, or by referring to the contact details at the bottom of this document.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
            </p>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              Request Verification
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
            </p>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              Appeals
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:kimberlypnguyenphotography@gmail.com" className="text-secondary hover:underline">kimberlypnguyenphotography@gmail.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
            </p>

            <h3 className="font-sans text-xl font-medium text-stone-800 mb-4">
              California "Shine The Light" Law
            </h3>
            <p className="text-stone-700 leading-relaxed">
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "<Link href="#contact-us" className="text-secondary hover:underline">How Can You Contact Us About This Notice?</Link>"
            </p>
          </section>

          <section id="updates-to-notice" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              10. Do We Make Updates to This Notice?
            </h2>
            <p className="text-stone-600 font-medium mb-4">
              In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p className="text-stone-700 leading-relaxed">
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this Privacy Notice. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
            </p>
          </section>

          <section id="contact-us" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              11. How Can You Contact Us About This Notice?
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              If you have questions or comments about this notice, you may <Link href="/contact" className="text-secondary hover:underline">contact us</Link> or email us at <a href="mailto:kimberlypnguyenphotography@gmail.com" className="text-secondary hover:underline">kimberlypnguyenphotography@gmail.com</a>.
            </p>
            <div className="bg-stone-50 p-6 rounded-lg">
              <h4 className="font-medium text-stone-800 mb-3">Mailing Address:</h4>
              <address className="text-stone-700 not-italic">
                Kimberly Nguyen Photography, LLC<br />
                79 Highland Street<br />
                Newington, CT 06111-2322<br />
                United States
              </address>
            </div>
          </section>

          <section id="review-update-delete" className="mb-12">
            <h2 className="font-heading text-3xl font-light text-stone-900 mb-6">
              12. How Can You Review, Update, or Delete the Data We Collect From You?
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please <Link href="/contact" className="text-secondary hover:underline">submit a data subject access request</Link>.
            </p>
          </section>

          <div className="text-center pt-8 border-t border-stone-200">
            <Link href="#table-of-contents" className="text-secondary hover:underline font-medium">
              Back to Table of Contents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}