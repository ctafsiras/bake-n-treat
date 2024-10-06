import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function Contact() {
	return (
		<main>
			<PageHeader title="Our Contact" />
			<ContactInfo />
			<ContactForm />
		</main>
	);
}
