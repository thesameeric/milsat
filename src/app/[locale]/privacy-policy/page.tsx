"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "intro", title: "Introduction" },
    { id: "collection", title: "Information We Collect" },
    { id: "you-give", title: "Information You Give Us" },
    { id: "from-others", title: "Information from Others" },
    { id: "from-use", title: "Information from Use" },
    { id: "cookies", title: "Cookies and Technology" },
    { id: "rights", title: "Your Rights" },
    { id: "marketing", title: "Marketing" },
    { id: "disclosure", title: "Disclosure" },
    { id: "security", title: "Security" },
    { id: "children", title: "Children's Privacy" },
    { id: "contact", title: "Contact & Updates" },
];

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -50% 0px" }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen text-gray-300 font-sans selection:bg-teal-900 selection:text-white">
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 relative">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <div className="lg:sticky lg:top-32 space-y-2 max-h-[calc(100vh-10rem)] overflow-y-auto no-visible-scrollbar p-1">
                            <p className="text-white font-semibold mb-4 pl-4 text-lg hidden lg:block">
                                Contents
                            </p>
                            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                                {sections.map(({ id, title }) => (
                                    <a
                                        key={id}
                                        href={`#${id}`}
                                        onClick={(e) => scrollToSection(e, id)}
                                        className={cn(
                                            "whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-all duration-300 border border-transparent block",
                                            activeSection === id
                                                ? "bg-teal-900/40 text-teal-300 border-teal-800/50 font-medium"
                                                : "hover:bg-white/5 hover:text-white text-gray-400"
                                        )}
                                    >
                                        {title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 max-w-3xl space-y-16">
                        <section id="intro" className="scroll-mt-32 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                Privacy Policy
                            </h1>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
                                <p>
                                    This Privacy Policy is incorporated by reference into the Terms of Use of{" "}
                                    <Link href="https://www.milsat.africa" className="text-teal-400 hover:text-teal-300 underline underline-offset-4">
                                        www.milsat.africa
                                    </Link>
                                    . The terms “Milsat Technologies Limited, “Milsat” “We,” “Our” and “us” include its affiliates and subsidiaries. The Privacy Policy explains your privacy rights and how Milsat may: collect, use, store, protect and disclose the information we obtain through the use of Milsat Services.
                                </p>
                                <p>
                                    This Privacy Policy guides your use of our website:{" "}
                                    <Link href="https://www.milsat.africa" className="text-teal-400 hover:text-teal-300 underline underline-offset-4">
                                        www.milsat.africa
                                    </Link>{" "}
                                    (“the Website”) and your rights regarding our collection, use, storage and protection of your data when you visit, access, browse through and/or use our Website or Services; including but not limited to mobile applications and digital platforms. Your privacy is important to us.
                                </p>
                                <p>
                                    “Personal Information” means information that alone or when in combination with other information may be used to readily identify, contact, or locate you, such as name, address, email address, passwords, payment information, phone number, and banking information. We do not consider Personal Information to include information that has been de-identified so that it does not allow a third party to easily identify a specific individual.
                                </p>
                                <p>
                                    “User” means an individual who uses the Services or accesses the website and has agreed to the terms of use.
                                </p>
                            </div>
                        </section>

                        <section id="collection" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Information We Collect and Use
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>
                                    For purposes of this Policy, “Personal Information” is any information that identifies, relates to, or describes, directly or indirectly, an individual or household.
                                </p>
                                <p>
                                    In the course of operating the website, we collect Personal Information, which we use for typical business and commercial purposes (including compliance with legal obligations and use for auditing, security, and anti-fraud purposes) and for other purposes as described below.
                                </p>
                                <p>
                                    This Privacy Policy applies to www.milsat.africa. We do not exercise control over the sites displayed or linked from within our various services. These other sites may place their cookies, or other files on your computer, collect data or solicit personal information from you. We do not control these third-party websites and we are not responsible for their privacy statements. Please consult such third parties’ privacy statements.
                                </p>
                            </div>
                        </section>

                        <section id="you-give" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Information You Give Us
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>
                                    In offering our services, we may process your personal information. Personal information means any information about an individual from which that person can be directly or indirectly identified.
                                </p>
                                <p>The personal information may include:</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                    <li>Your full name</li>
                                    <li>Your email address</li>
                                    <li>Your address</li>
                                    <li>Your telephone number</li>
                                    <li>The domain name of the Internet service provider (ISP)</li>
                                    <li>Date and time of your visits to our Website</li>
                                    <li>Login email addresses and passwords</li>
                                    <li>IP address</li>
                                </ul>
                            </div>
                        </section>

                        <section id="from-others" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Information Other Users Provide about You
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Other users may provide us with your identifiers (such as your email address) or other information to invite you to use www.milsat.africa or share content from www.milsat.africa with you. In this case, we will use the information for the purposes for which it was provided.
                            </p>
                            <h3 className="text-xl font-medium text-teal-100 pt-4">Other Information We Collect</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We also may collect other information about you, your device, or your use of the services in ways that we describe to you at the point of collection or otherwise with your consent. You may choose not to provide us with certain types of information but doing so may affect your ability to use some of the services on www.milsat.africa.
                            </p>
                        </section>

                        <section id="from-use" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Information We Get from Your Use of www.milsat.africa
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>
                                    In addition to the information you provide when you use the website, we keep track of information about how you have used the Service, like when you open one of our emails or whether you viewed and interacted with certain content (collectively, “Usage Information”). We use this information to provide and improve our products and services, tailor your experience on and across our websites and other services, tailor our marketing efforts, and create aggregate internal reports on website usage and activity, such as views of certain pages and services in demand. Usage Information includes:
                                </p>
                                <ul className="list-none space-y-4 mt-4">
                                    <li>
                                        <strong className="text-teal-200 block mb-1">Device Information</strong>
                                        We collect device-specific information (such as your hardware model, operating system version, and unique device identifiers).
                                    </li>
                                    <li>
                                        <strong className="text-teal-200 block mb-1">Browsing Information</strong>
                                        This includes the URL that referred you to www.milsat.africa, the areas within the website that you visit, and the time of day of your visit.
                                    </li>
                                    <li>
                                        <strong className="text-teal-200 block mb-1">IP Address</strong>
                                        An IP address is a string of numbers associated with the device you use to access the Internet.
                                    </li>
                                    <li>
                                        <strong className="text-teal-200 block mb-1">Location Information</strong>
                                        Many mobile devices permit applications to access real-time geo-location information. We may collect and use such information with your consent when you use our websites. We use various technologies to determine location, including IP address, GPS, and other sensors that may, for example, provide us with information on nearby devices, Wi-Fi access points, and cell towers and provide geo-location information.
                                    </li>
                                    <li>
                                        <strong className="text-teal-200 block mb-1">Inferences</strong>
                                        We may use the information listed above to draw inferences about your preferences to provide better products and services.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="cookies" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Cookies and Other Technology
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>
                                    We use various technologies to collect and store information when you visit or use www.milsat.africa, which we use for the same purposes as Usage Information to help us improve our websites and communications. This automatic information collection may include using cookies or similar technologies to identify your browser or device:
                                </p>
                                <div>
                                    <strong className="text-white block mb-2">Cookies</strong>
                                    <p>
                                        A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the website again, the cookie allows that site to recognize your browser. Cookies may store user preferences and other information. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features or services may not function properly without cookies.
                                    </p>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-900/50 p-6 rounded-xl">
                                    <p className="text-sm">
                                        ** Most browsers will tell you how to stop accepting new cookies, how to receive notifications of new cookies, and how to disable existing cookies. For more information about cookies and how to disable them or restrict the categories of cookies you wish to accept, you can consult the information at <a href="http://www.allaboutcookies.org/manage-cookies/" className="text-teal-400 hover:text-teal-300 underline">www.allaboutcookies.org/manage-cookies/</a>.
                                    </p>
                                    <p className="text-sm mt-2 font-medium text-teal-200">
                                        Please note that without cookies, you may not be able to take full advantage of all of the functions on www.milsat.africa.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="rights" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Your Rights
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>You, as a data subject, have certain rights under the law. These include the right to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>access personal data we hold about you by making a request;</li>
                                    <li>rectify such information where you believe it to be inaccurate;</li>
                                    <li>restrict the processing of your data in certain circumstances;</li>
                                    <li>object to the processing of your data where we intend to process such data for marketing purposes;</li>
                                    <li>request the erasure of your data (also known as the right to be forgotten);</li>
                                    <li>withdraw your consent to the processing of your data; and</li>
                                    <li>complain with a relevant authority, where you have reason to believe that we have violated the term(s) of this Notice. (You may complain or seek redress from us within 30 days from the time you first detected the alleged violation.).</li>
                                </ul>
                                <p>
                                    You may seek to exercise any of the above rights at any time by sending an email to us via{" "}
                                    <a href="mailto:support@milsat.tech" className="text-teal-400 hover:text-teal-300">support@milsat.tech</a>
                                </p>
                                <p className="border-l-4 border-teal-500 pl-4 py-1 bg-teal-900/10">
                                    The supervisory authority is the Nigerian Data Protection Bureau (NDPB), and you can send your complaint via email to <a href="mailto:info@ndpb.gov.ng" className="text-teal-400 hover:text-teal-300">info@ndpb.gov.ng</a>
                                </p>
                            </div>
                        </section>

                        <section id="marketing" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Marketing and Communication
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                We only send marketing/newsletter communications to you with your consent. You may choose to opt-out of our marketing/newsletter emails by clicking on the ‘unsubscribe' button at the bottom of the page.
                            </p>
                        </section>

                        <section id="disclosure" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Disclosure of Information
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-2">Within Our Organization</h3>
                                    <p className="text-gray-300">We may share any of your Personal Information with parents, subsidiaries, joint venture partners, and other entities under common control subject to this Privacy Policy.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-2">Legal and Similar Disclosures</h3>
                                    <p className="text-gray-300">We may disclose Personal Information about you to law enforcement, the courts, our advisors, attorneys, and others who participate in the legal process, if necessary to do so by law or based on our good-faith belief that it is necessary to enforce or apply our contracts, conform, or comply with the law or is necessary to protect us, the users of the websites, or others.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-2">Otherwise with Your Consent or At Your Direction</h3>
                                    <p className="text-gray-300">In addition to the sharing described in this Privacy Policy, we may share information about you with third parties whenever you consent to or direct such sharing.</p>
                                </div>
                            </div>
                        </section>

                        <section id="security" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Security of Your Information
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>
                                    We take steps to ensure that your information is treated securely and per this Privacy Policy. Unfortunately, the internet cannot be guaranteed to be 100% secure, and we cannot ensure or warrant the security of any information you provide to us. We do not accept liability for unintentional disclosure.
                                </p>
                                <p>
                                    By using www.milsat.africa or providing Personal Information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of the website. If we learn of a security system breach, we may attempt to notify you electronically by posting a notice on www.milsat.africa or sending an email to you. You may have a legal right to receive this notice in writing. To receive free written notice of a security breach (or to withdraw your consent from receiving electronic notice), please notify us at.
                                </p>
                            </div>
                        </section>

                        <section id="children" className="scroll-mt-32 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Children&apos;s Privacy
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                <p>
                                    No one under the age of 13 is authorized to submit any information, including Personal Information, on www.milsat.africa. Under no circumstances may anyone under the age of 13 use the Service.
                                </p>
                                <p>
                                    If you learn that your child has provided us with Personal Information without your consent, you may alert us at <a href="mailto:support@milsat.tech" className="text-teal-400 hover:text-teal-300">support@milsat.tech</a>. If we learn that we have collected any Personal Information from children under 13, we will promptly take steps to delete such information and terminate the child’s account.
                                </p>
                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-32 space-y-8 mb-20">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Contact, Updates & Deletion
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-medium text-teal-100 mb-2">Updating Your Information or Posing a Question</h3>
                                    <p className="text-gray-300">If you have any questions or concerns about this Privacy Policy or the use of your information, or to modify or update any information we have received, please contact <a href="mailto:support@milsat.tech" className="text-teal-400 hover:text-teal-300">support@milsat.tech</a>.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-teal-100 mb-2">Data Retention</h3>
                                    <p className="text-gray-300">We will retain your information for as long as needed to provide you with our Service and as permitted by law. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-teal-100 mb-2">Account Deactivation and Deletion</h3>
                                    <p className="text-gray-300">If you no longer desire to use the services on the website, you may deactivate or delete your account by sending us an email at <a href="mailto:support@milsat.tech" className="text-teal-400 hover:text-teal-300">support@milsat.tech</a>. Deactivating your account puts your account on hold and is the same as you telling us not to delete any information because you might want to reactivate your account at some point in the future. When you delete an account, you are requesting that your account and the information stored therein be permanently deleted from our database. You should only delete your account if you are sure you never want to reactivate it. Please note that certain data you have provided may continue to exist in aggregate form that cannot be used to identify you.</p>
                                </div>

                                <div className="border-t border-teal-900/50 pt-8 mt-8">
                                    <h3 className="text-xl font-medium text-white mb-4">Changes to Our Privacy Policy and Practices</h3>
                                    <p className="text-gray-300 mb-4">We may revise this Privacy Policy, so review it periodically.</p>
                                    <p className="text-gray-300 mb-4"><strong className="text-teal-200">Posting of Revised Privacy Policy.</strong> We may update this privacy policy to reflect changes to our information practices. If we make any change in how we use Personal Information we will notify you by email (sent to the e-mail address specified in your account) or using a notice on the website before the change becomes effective. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
                                    <p className="text-gray-300"><strong className="text-teal-200">New Uses of Personal Information.</strong> From time to time, we may desire to use Personal Information for uses not previously disclosed in our Privacy Policy. If our practices change regarding previously collected Personal Information in a way that would be materially less restrictive than stated in the version of this Privacy Policy in effect at the time we collected the information, we will make reasonable efforts to provide notice and obtain consent to any such uses as may be required by law.</p>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
