import React, { useState } from "react";
import { Check } from "lucide-react";
import FAQAccordion from "../home/faqSection";
import Cta from "../home/cta";
import { useNavigate } from "react-router-dom";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number | string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: 499,
      period: "/ month billed annually",
      features: [
        { text: "2000 orders creation", included: true },
        { text: "Multi users login", included: true },
        { text: "5GB Database", included: true },
      ],
    },
    {
      name: "Standard",
      price: 999,
      period: "/ month billed annually",
      highlighted: true,
      features: [
        { text: "3000 orders creation", included: true },
        { text: "Multi users login", included: true },
        { text: "10GB Database", included: true },
        { text: "Automated payment", included: true },
      ],
    },
    {
      name: "Premium",
      price: 2499,
      period: "/ month billed annually",
      features: [
        { text: "6000+ orders creation", included: true },
        { text: "Unlimited users login", included: true },
        { text: "10GB Database", included: true },
        { text: "Automated payment due reminders", included: true },
        { text: "Monthly business summary report", included: true },
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        { text: "All Premium Plan features", included: true },
        { text: "Enterprise level customization", included: true },
        { text: "Dedicated support manager", included: true },
      ],
    },
  ];

  const getPrice = (plan: PricingPlan) => {
    if (typeof plan.price !== "number") return plan.price;
    const discounted = isAnnual ? Math.round(plan.price - 100) : plan.price;
    return `₹${discounted}`;
  };

  return (
    <div className=" bg-background mt-20 font-outfit py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className=" flex flex-col justify-center ">
          <h1 className="text-4xl md:text-5xl font-instrument text-center mb-2">
            Flexible plans for every business
          </h1>
          <p className="text-center text-input font-light text-lg mb-5">
            Choose the right plan for your business needs
          </p>
        </div>

        {/* Switcher — pill/tab style with sliding indicator */}
        <div className="flex items-center flex-col justify-center gap-4  mb-10">
          <div className="relative items-center bg-[#FFFFFF] border-2 border-inputBorder rounded-full shadow p-1">
            {/* Sliding background pill */}
            <span
              className="absolute top-1 bottom-1 rounded-full bg-primary shadow transition-all duration-300 ease-in-out"
              style={{
                width: "calc(50% - 4px)",
                left: isAnnual ? "calc(50%)" : "4px",
              }}
            />
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                !isAnnual ? "text-white" : "text-gray-500 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                isAnnual ? "text-white" : "text-gray-500 hover:text-black"
              }`}
            >
              Annual
            </button>
          </div>
          <div className="flex items-center gap-1 ml-[190px]">
            <img src="/Vector.svg" alt="" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Save up to 17%
            </span>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-sm border ${
                plan.highlighted
                  ? "border-primary shadow bg-gradient-to-b from-white to-[#F0F2FF]"
                  : "border-inputBorder bg-white"
              } overflow-hidden flex flex-col min-h-[500px]`}
            >
              <div className="p-6 pb-4">
                {/* Plan name + Free trial badge */}
                <div className="flex items-center justify-between mb-4">
                  <h2
                    className={`text-lg font-light ${
                      plan.highlighted
                        ? "text-primary font-medium"
                        : "text-input"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  <span className="text-[14px] font-light text-gray-500 border border-gray-200 rounded-md px-3 py-1 whitespace-nowrap">
                    30 days free trial !
                  </span>
                </div>

                <div className="flex items-baseline mb-2 flex-col gap-2">
                  <span className="text-4xl font-medium">{getPrice(plan)}</span>
                  <span className="ml-2 text-input font-light text-sm">
                    {typeof plan.price === "number"
                      ? isAnnual
                        ? "/ month billed annually"
                        : "/ month billed monthly"
                      : ""}
                  </span>
                </div>
                <hr className="py-2 border-dashed mt-4" />
                <button
                  onClick={() => navigate("/contact")}
                  className={`w-full py-3 px-4 rounded-[10px] font-light transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-white"
                      : "bg-black text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>

              <div className="px-6 pb-6 flex-grow">
                <ul className="space-y-5">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 mr-3 flex-shrink-0">
                        {feature.included && (
                          <div className="w-full h-full rounded-2xl p-px bg-gradient-to-b from-[#F4F4F5] to-[#C8D6E5]">
                            <Check className="w-full h-full bg-white p-0.5 rounded-2xl text-success" />
                          </div>
                        )}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQAccordion />
      <Cta />
    </div>
  );
};

export default PricingPage;
