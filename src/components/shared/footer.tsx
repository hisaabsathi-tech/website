import React, { useState } from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-input font-outfit font-light text-[14px] md:text-[16px] hover:text-black transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby22HAyQiefz21Se7Uz8LEKD5TlbLhfRaTmSvWjPlMLbxWCwE_HLHUMY_RxEjeMSMCJ_g/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ email }),
        },
      );

      alert("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="font-outfit bg-background w-full flex justify-center pt-8 md:pt-16 lg:pt-20 px-4 md:px-6 left-0 right-0 z-40 bottom-0">
      <div className="flex flex-col max-w-7xl bg-white shadow-sm mx-auto w-full py-6 md:py-10 lg:py-12 px-4 md:px-8 lg:px-12 border-2 border-inputBorder rounded-t-2xl md:rounded-t-3xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 lg:col-span-8">
            {/* Quick Links */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-medium text-[14px] md:text-[16px]">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/#features">Features</FooterLink>

                <FooterLink href="/pricing">Pricing</FooterLink>
                <FooterLink href="https://www.youtube.com/@hisaabsathi">
                  Tutorials
                </FooterLink>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-medium text-[14px] md:text-[16px]">Legal</h4>
              <div className="flex flex-col gap-2">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/refund-policy">Refund Policy</FooterLink>
                <FooterLink href="/terms-of-service">
                  Terms of Service
                </FooterLink>
                <FooterLink href="/refer-and-earn">Refer & Earn</FooterLink>
              </div>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-medium text-[14px] md:text-[16px]">
                Explore
              </h4>
              <div className="flex flex-col gap-2">
                <FooterLink href="https://www.instagram.com/hisaabsathi">
                  Instagram
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/company/hisaab-sathi">
                  LinkedIn
                </FooterLink>
                <FooterLink href="https://x.com/hisaabsathi">
                  Twitter
                </FooterLink>
                <FooterLink href="https://docs.google.com/forms/d/e/1FAIpQLSd3tZ8PRqxxXEBLcIBFROxgeUq_JAuzVXuNxDzHAwzh3dgtfQ/viewform?usp=dialog">
                  We are hiring!!
                </FooterLink>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-medium text-[16px] md:text-[18px]">
              Stay in the know &amp; connect with us
            </h4>
            <p className="text-lg text-input font-light">
              Subscribe to our newsletter. We promise we don't spam your emails!
            </p>
            <div className="flex items-center mt-2 border border-inputBorder rounded-full overflow-hidden pr-1 py-1 pl-4 bg-white shadow-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-black text-white text-sm px-4 py-2 rounded-full font-light whitespace-nowrap flex items-center gap-1 hover:bg-gray-800 transition-colors"
              >
                Subscribe <span className="text-base">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t   mt-8 md:mt-12 mb-6 md:mb-8 opacity-40"></div>
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Hisaab Sathi | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
