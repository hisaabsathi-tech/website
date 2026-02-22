import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq-data.ts";
import { Link } from "react-router-dom";

const FAQAccordion: React.FC = () => {
  return (
    <div className=" flex justify-center items-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:py-16 bg-background">
      <div className="w-full  max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left Section - Title and CTA */}
          <div className="w-full h-full  lg:w-2/5 xl:w-1/3 mb-8 lg:mb-0 lg:top-8 lg:self-start">
            <h1 className="font-instrument text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 lg:mb-4 leading-tight">
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="font-outfit text-gray-600 text-base sm:text-lg mb-6 lg:mb-8">
              Everything you need to know about Hisaab Sathi
            </p>
            <Link
              to="/contact"
              className=" px-6 py-2.5  font-medium transition-colors font-outfit  bg-primary rounded-md text-white  text-sm lg:text-base shadow-[0px_1px_2px_0px_rgba(22,25,80,1.00)] whitespace-nowrap flex-shrink-0 "
            >
              Book a demo
            </Link>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="w-full lg:w-3/5 xl:w-2/3 font-outfit">
            <Accordion
              type="single"
              collapsible
              className="space-y-3 sm:space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-4 sm:px-6 py-1 transition-all duration-300 "
                >
                  <AccordionTrigger className="text-left text-gray-900 font-normal text-sm sm:text-base lg:text-lg hover:no-underline py-3 sm:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-input font-light text-sm sm:text-base pb-3 sm:pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
