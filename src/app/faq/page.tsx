import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about Milsat's data collection, mapping services, and geospatial intelligence solutions across Africa.",
};

const faqs = [
  {
    question: "What services does Milsat provide?",
    answer: "Milsat provides comprehensive data collection, field mapping, and geospatial intelligence services across Africa. We specialize in gathering accurate, locally-sourced data through our network of field agents, offering real-time insights and custom mapping solutions tailored to your business needs."
  },
  {
    question: "Which countries do you operate in?",
    answer: "We currently operate across multiple African countries with a growing network of local field agents. Our services are available in major markets including Nigeria, Kenya, South Africa, Ghana, and we're continuously expanding to new regions. Contact us to inquire about specific country coverage."
  },
  {
    question: "How accurate is your data?",
    answer: "Our data is collected by trained local field agents who verify information on the ground, ensuring high accuracy and reliability. We employ rigorous quality control processes, including cross-verification and regular audits. Our locally-sourced approach provides significantly more accurate data than satellite-only or third-party aggregated sources."
  },
  {
    question: "How long does data collection take?",
    answer: "Project timelines vary depending on scope, geography, and complexity. Simple mapping projects can be completed within days, while comprehensive field surveys may take several weeks. We provide detailed project timelines during the consultation phase and offer real-time progress tracking throughout the project."
  },
  {
    question: "Can I integrate Milsat data with my existing systems?",
    answer: "Yes! Our data can be seamlessly integrated with your existing databases, CRM systems, analytics tools like PowerBI, and customer-facing platforms. We provide data in multiple formats (CSV, JSON, GeoJSON, etc.) and offer API access for real-time data integration."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a diverse range of industries including logistics, retail, telecommunications, real estate, agriculture, finance, and government agencies. Any organization that requires accurate location data, market intelligence, or field verification across Africa can benefit from our services."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We take data privacy and security seriously. All data is collected ethically with proper consent, encrypted during transmission and storage, and handled in compliance with international data protection standards. We offer customizable data retention policies and can sign NDAs and data processing agreements as needed."
  },
  {
    question: "What makes Milsat different from other mapping services?",
    answer: "Unlike satellite-based or crowdsourced mapping services, Milsat employs local field agents who verify data on the ground. This human-in-the-loop approach ensures higher accuracy, cultural context, and the ability to collect custom data points specific to your business needs that aren't available through automated services."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on project scope, geographic coverage, data complexity, and timeline. We offer flexible pricing models including per-location pricing, subscription plans for ongoing data collection, and enterprise packages. Contact us for a detailed quote tailored to your specific requirements."
  },
  {
    question: "Do you offer trial projects or demos?",
    answer: "Yes! We offer pilot projects and demonstrations to showcase our capabilities. This allows you to evaluate our data quality and service delivery before committing to larger projects. Contact our sales team to discuss a trial project for your specific use case."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-foreground/10 px-6 bg-black"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-[18px] py-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 text-center">
          <h2 className="text-3xl mb-4">Still have questions?</h2>
          <p className="text-foreground/70 mb-6 text-[18px]">
            {`Can't find the answer you're looking for? Our team is here to help.`}
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors px-8 py-3 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
