"use client";

import {
  Accordion as AccordionContainer,
  AccordionItem,
} from "@nextui-org/react";

const Accordion = ({ faqs }: { faqs: any }) => {
  const defaultContent =
    "This is a default placeholder text for the accordion content. It provides a brief description or answer to a frequently asked question. The actual content will be dynamically populated based on the specific FAQs provided to the component.";

  return (
    <AccordionContainer variant="splitted">
      {faqs.map((faq: any) => (
        <AccordionItem
          key={faq.question}
          aria-label={faq.question}
          title={faq.question}
        >
          <p className="text-gray-500 font-sans">{faq.answer}</p>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
