import useMobile from "@/hooks/useMobile";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
const HeroSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [inputValue, setInputValue] = useState<string>("");
  const isMobile = useMobile();
  if (isMobile === null) {
    return null;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus("loading");

    const FORMSPREE_FORM_ID = "mbdlnkpy";

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            contact: inputValue,
            type: "demo_request",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            style: {
              color: "#16A34A",
            },
          }
        );
        setInputValue("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        toast.error("Oops! Something went wrong. Please try again.", {
          style: {
            color: "#DC2626",
          },
        });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      toast.error("Oops! Something went wrong. Please try again.", {
        style: {
          color: "#DC2626",
        },
      });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className=" flex flex-col  bg-background mt-20 justify-center items-center px-4 sm:px-6 lg:px-8 lg:py-28">
      <div className="w-full max-w-7xl mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center   ">
          <div className="flex flex-col gap-6 sm:gap-8 ">
            <div className="space-y-4 sm:space-y-6 ">
              <h1
                className={`${
                  isMobile
                    ? "text-4xl sm:text-5xl"
                    : "text-6xl lg:text-7xl xl:text-80"
                } font-instrument leading-tight`}
              >
                Making billing{" "}
                <span className="relative inline-block italic">
                  easier
                  <img
                    src="/homeImages/underline.svg"
                    alt=""
                    className="absolute -bottom-2 left-0 w-full h-auto"
                  />
                </span>
              </h1>

              <p
                className={`${
                  isMobile ? "text-base sm:text-lg" : "text-2xl "
                } font-outfit font-light text-[#8C8C8C]`}
              >
                Fast, simple, and easy to use — manage your daily billing and
                accounts smoothly with our software in just few seconds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
              <div
                className={`flex flex-row items-stretch border-2 bg-white pl-3  pr-2 py-2 ${
                  isFocused ? "border-inputBorder" : "border-inputBorder"
                } rounded-[10px] shadow-[1px_2px_3px_0px_rgba(0,0,0,0.05)]  outline outline-1 outline-offset-[-1px] outline-gray-200 `}
              >
                <input
                type="text"
                  name="contact"
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                  placeholder="Enter mobile / email"
                  className="flex-1 px-1 bg-white text-input placeholder:text-Input  placeholder:font-outfit placeholder:font-light outline-none text-sm sm:text-base"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="font-outfit py-2 px-2 bg-primary rounded-md text-white  text-sm lg:text-base shadow-[0px_1px_2px_0px_rgba(22,25,80,1.00)] whitespace-nowrap flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Book a demo"}
                </button>
              </div>
            </form>

            {/* Rating */}
            {/* <div className="flex items-center gap-3 flex-wrap">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6 lg:w-7 lg:h-7"
                    } fill-star text-star`}
                  />
                ))}
               
                <div className="relative">
                  <Star
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6 lg:w-7 lg:h-7"
                    } text-star`}
                  />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "50%" }}
                  >
                    <Star
                      className={`${
                        isMobile ? "w-5 h-5" : "w-6 h-6 lg:w-7 lg:h-7"
                      } fill-star text-star`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-outfit font-bold ${
                    isMobile ? "text-lg" : "text-3xl"
                  }`}
                >
                  4.5
                </span>
                <span
                  className={`font-outfit font-light ${isMobile ? "text-sm" : "text-xl"}`}
                >
                  Average user rating
                </span>
              </div>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center  ">
            <div className="relative w-full  max-w-lg md:max-w-md lg:max-w-xl xl:max-w-2xl">
              <img
                src="/homeImages/hero-image.png"
                alt="Billing software illustration"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
