'use client';

import { useEffect, useState } from 'react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services', title: 'Services Description' },
    { id: 'user-obligations', title: 'User Obligations' },
    { id: 'data-collection', title: 'Data Collection & Use' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'payment', title: 'Payment Terms' },
    { id: 'confidentiality', title: 'Confidentiality' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Information' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-foreground text-background font-medium'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-foreground/70 mb-2">
              Last updated: January 2025
            </p>
            <p className="text-foreground/70 mb-12">
              Please read these terms and conditions carefully before using our services.
            </p>

            <section id="acceptance" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/70 mb-4">
                By accessing and using Milsat's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, you should not use our services.
              </p>
              <p className="text-foreground/70">
                These Terms & Conditions apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>
            </section>

            <section id="services" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-foreground/70 mb-4">
                Milsat provides data collection, field mapping, and geospatial intelligence services across Africa. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li>On-ground data collection through field agents</li>
                <li>Custom mapping and location intelligence</li>
                <li>Market research and business intelligence</li>
                <li>Real-time data integration and API access</li>
                <li>Geospatial analysis and reporting</li>
              </ul>
              <p className="text-foreground/70">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>
            </section>

            <section id="user-obligations" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
              <p className="text-foreground/70 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not reproduce, duplicate, copy, or resell any part of our services without express written permission</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section id="data-collection" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Data Collection & Use</h2>
              <p className="text-foreground/70 mb-4">
                The data we collect on your behalf remains your property. However, you grant us the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li>Collect, process, and analyze data as per your project requirements</li>
                <li>Store data securely for the duration of our engagement</li>
                <li>Use anonymized and aggregated data for service improvement</li>
              </ul>
              <p className="text-foreground/70">
                All data collection is conducted ethically and in compliance with applicable data protection laws. See our Privacy Policy for more details.
              </p>
            </section>

            <section id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-foreground/70 mb-4">
                The service and its original content, features, and functionality are owned by Milsat and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-foreground/70">
                Data collected specifically for your project is owned by you. Our methodologies, processes, and proprietary tools remain the property of Milsat.
              </p>
            </section>

            <section id="payment" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-foreground/70 mb-4">
                Payment terms are outlined in individual service agreements. General terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li>Payment is due according to the schedule specified in your contract</li>
                <li>Late payments may incur additional fees</li>
                <li>Services may be suspended for non-payment</li>
                <li>All fees are non-refundable unless otherwise stated</li>
              </ul>
              <p className="text-foreground/70">
                You are responsible for any taxes, duties, or fees associated with your use of our services.
              </p>
            </section>

            <section id="confidentiality" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
              <p className="text-foreground/70 mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of our engagement. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Business strategies and plans</li>
                <li>Technical specifications and methodologies</li>
                <li>Customer data and project information</li>
                <li>Financial information</li>
              </ul>
            </section>

            <section id="limitation" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-foreground/70 mb-4">
                To the maximum extent permitted by law, Milsat shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
              <p className="text-foreground/70">
                Our total liability shall not exceed the amount paid by you for the services in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section id="termination" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-foreground/70 mb-4">
                Either party may terminate the service agreement with written notice as specified in your contract. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>You remain responsible for payment of services rendered</li>
                <li>We will provide collected data in an agreed format</li>
                <li>Confidentiality obligations continue indefinitely</li>
                <li>We reserve the right to retain anonymized data</li>
              </ul>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-foreground/70 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
              <p className="text-foreground/70">
                Material changes will be communicated via email to registered users.
              </p>
            </section>

            <section id="governing-law" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-foreground/70">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Milsat operates, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved through binding arbitration.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p className="text-foreground/70 mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="text-foreground/70 space-y-2">
                <p>Email: legal@milsat.africa</p>
                <p>Website: www.milsat.africa</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
