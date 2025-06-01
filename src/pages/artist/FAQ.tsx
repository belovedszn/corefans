import { useState } from "react";
import faqs from "../../data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white py-24 px-6">
      <div className="w-full mx-auto">
        <h2
          className="text-4xl font-extrabold uppercase tracking-tight leading-tight text-left mb-12 max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg"
          style={{ fontFamily: "Grotesk" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                background: "linear-gradient(to right, #F18B1B, #E52053)",
                fontFamily: "Gilroy-MD",
              }}
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer max-lg:p-4 max-sm:p-2"
                onClick={() => toggleFAQ(index)}
              >
                <p
                  className="text-2xl font-medium text-white max-lg:text-xl max-md:text-lg max-sm:text-base"
                  style={{ fontFamily: "Grotesk" }}
                >
                  {faq.question}
                </p>
                <div className="ml-4 transition-transform duration-300">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center border border-white/70">
                    <i
                      className={`bi text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base ${
                        openIndex === index ? "bi-dash" : "bi-plus"
                      }`}
                    ></i>
                  </div>
                </div>
              </div>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] py-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-white text-lg tracking-widest leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "Gilroy-Reg" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
