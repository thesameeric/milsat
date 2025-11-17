'use client';

import { useEffect, useState } from 'react';

export default function PrivacyPage() {
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
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'data-sharing', title: 'Data Sharing & Disclosure' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'third-party', title: 'Third-Party Services' },
    { id: 'international-transfers', title: 'International Data Transfers' },
    { id: 'children', title: 'Children\'s Privacy' },
    { id: 'changes', title: 'Changes to Privacy Policy' },
    { id: 'contact', title: 'Contact Us' },
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
              Privacy Policy
            </h1>
            <p className="text-foreground/70 mb-2">
              Last updated: January 2025
            </p>
            <p className="text-foreground/70 mb-12">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-foreground/70 mb-4">
                Milsat ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-foreground/70">
                By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our services.
              </p>
            </section>

            <section id="information-collected" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
              <p className="text-foreground/70 mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6">
                <li>Name, email address, phone number, and company information</li>
                <li>Project requirements and specifications</li>
                <li>Payment and billing information</li>
                <li>Communications with our team</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information Collected Automatically</h3>
              <p className="text-foreground/70 mb-4">
                When you access our services, we automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Location data (with your permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information from Third Parties</h3>
              <p className="text-foreground/70">
                We may receive information from business partners, service providers, and publicly available sources to enhance our services and verify the accuracy of information.
              </p>
            </section>

            <section id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/70 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Communicating with you about services, updates, and offers</li>
                <li>Analyzing usage patterns to improve our services</li>
                <li>Detecting, preventing, and addressing technical issues and fraud</li>
                <li>Complying with legal obligations</li>
                <li>Conducting research and development</li>
                <li>Personalizing your experience</li>
              </ul>
            </section>

            <section id="data-sharing" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing & Disclosure</h2>
              <p className="text-foreground/70 mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
              <p className="text-foreground/70 mb-4">
                We share information with third-party vendors who perform services on our behalf, such as payment processing, data analysis, and cloud hosting.
              </p>

              <h3 className="text-xl font-semibold mb-3">Business Transfers</h3>
              <p className="text-foreground/70 mb-4">
                In connection with any merger, sale of company assets, financing, or acquisition, your information may be transferred to the acquiring entity.
              </p>

              <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
              <p className="text-foreground/70 mb-4">
                We may disclose information if required by law, court order, or governmental request, or to protect our rights and safety.
              </p>

              <h3 className="text-xl font-semibold mb-3">With Your Consent</h3>
              <p className="text-foreground/70">
                We may share information for any other purpose with your explicit consent.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-foreground/70 mb-4">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-foreground/70">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section id="data-retention" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-foreground/70 mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li>Provide our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p className="text-foreground/70">
                When information is no longer needed, we securely delete or anonymize it. Project-specific data is retained according to contractual agreements.
              </p>
            </section>

            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-foreground/70 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-foreground/70">
                To exercise these rights, please contact us at privacy@milsat.africa. We will respond within 30 days.
              </p>
            </section>

            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Cookies & Tracking Technologies</h2>
              <p className="text-foreground/70 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our services</li>
                <li>Improve user experience</li>
                <li>Deliver targeted advertising</li>
              </ul>
              <p className="text-foreground/70">
                You can control cookies through your browser settings. However, disabling cookies may limit functionality of our services.
              </p>
            </section>

            <section id="third-party" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Services</h2>
              <p className="text-foreground/70 mb-4">
                Our services may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
              <p className="text-foreground/70">
                We may use third-party analytics tools (such as Google Analytics) to understand user behavior and improve our services.
              </p>
            </section>

            <section id="international-transfers" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
              <p className="text-foreground/70 mb-4">
                Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws.
              </p>
              <p className="text-foreground/70">
                We ensure appropriate safeguards are in place when transferring data internationally, including standard contractual clauses and adequate security measures.
              </p>
            </section>

            <section id="children" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
              <p className="text-foreground/70 mb-4">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children.
              </p>
              <p className="text-foreground/70">
                If you believe we have collected information from a child, please contact us immediately so we can delete it.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-foreground/70 mb-4">
                We may update this Privacy Policy from time to time. Changes are effective immediately upon posting to our website.
              </p>
              <p className="text-foreground/70">
                We will notify you of material changes via email or prominent notice on our website. Your continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <p className="text-foreground/70 mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="text-foreground/70 space-y-2">
                <p>Email: privacy@milsat.africa</p>
                <p>Data Protection Officer: dpo@milsat.africa</p>
                <p>Website: www.milsat.africa</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
