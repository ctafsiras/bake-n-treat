"use client";

import {
	Accordion as AccordionContainer,
	AccordionItem,
} from "@nextui-org/react";

const Accordion = ({ faqs }: { faqs: any }) => {
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
