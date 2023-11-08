import WidthClamp from "@/components/Layout/Clamp";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How can I find lyrics for a specific song?",
      answer: "You can use the search bar on our website to look up lyrics by song title, artist, or keywords.",
    },
    {
      question: "Are the lyrics accurate and up-to-date?",
      answer:
        "We strive to maintain accurate and current lyrics, regularly updating our database to ensure quality content.",
    },
    {
      question: "Can users submit or request lyrics for specific songs?",
      answer:
        "At the moment, we don’t support direct user submissions. However, we're always looking to expand our database with popular and in-demand tracks.",
    },
    {
      question: "How can I report incorrect lyrics or errors?",
      answer:
        "If you notice any inaccuracies or errors in our lyrics, please contact our support team via email or our website’s contact form. We greatly appreciate your feedback.",
    },
    {
      question: "Do you provide song translations?",
      answer:
        "We're working on expanding our language options. Currently, we offer translations for some songs, with plans to include more in the future.",
    },
    // Add more FAQ items
    {
      question: "Can I print or share the lyrics from your website?",
      answer:
        "Yes, you can! Our platform allows users to print or share lyrics for personal use. Please respect copyright and fair use policies when sharing content.",
    },
    {
      question: "Are the lyrics verified by artists or official sources?",
      answer:
        "We strive for accuracy but rely on various sources. Our lyrics may not always come from official artist releases. Any discrepancies are corrected based on reliable user feedback or verified sources.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <WidthClamp>
      <div className="space-y-6 mb-40">
        <h4 className="font-extrabold text-5xl">FAQ</h4>
        <div className="grid sm:grid-cols-2 gap-4 select-none">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-background-900 shadow-xl self-start duration-200 rounded-lg p-3"
            >
              <div
                className="cursor-pointer flex justify-between items-center py-2 border-b border-gray-300 dark:border-background-700"
                onClick={() => toggleFAQ(index)}
              >
                <div className="font-semibold text-lg">{faq.question}</div>
                <div>
                  <ChevronDown
                    className={`${activeIndex === index ? "rotate-180" : "rotate-0"} duration-200 transition-transform`}
                  />
                </div>
              </div>
              {activeIndex === index && <div className="py-2 text-text-700 dark:text-text-300">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </WidthClamp>
  );
};

export default FAQComponent;
