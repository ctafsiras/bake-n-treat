import BakerWithPastries from "@/../public/assets/images/bakerWithPastries.jpg";
import Image from "next/image";
import Accordion from "../Accordion/Accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the most ordered bread at Bake N Treat?",
      answer:
        "Our Artisan Sourdough is by far our most popular bread. Customers love its tangy flavor, crispy crust, and soft interior. It's made using a century-old starter and traditional fermentation methods, resulting in a bread that's not only delicious but also easier to digest.",
    },
    {
      question: "Can I order a birthday cake at Bake N Treat?",
      answer:
        "Absolutely! We specialize in custom birthday cakes. You can choose from our range of flavors, sizes, and designs, or work with our cake artists to create something unique. We recommend placing your order at least 48 hours in advance to ensure we can meet your specific requirements.",
    },
    {
      question:
        "How much does it cost to make a fancy wedding cake at Bake N Treat?",
      answer:
        "The cost of a wedding cake varies depending on factors such as size, design complexity, and ingredients. Our wedding cakes typically start at $300 for a basic three-tier cake and can go up to $1000 or more for elaborate designs. We offer free consultations and tastings to help you find the perfect cake within your budget.",
    },
    {
      question: "Can I order bread with a special shape?",
      answer:
        "Yes, we offer custom-shaped breads for special occasions. Whether you need a braided challah for a holiday, a heart-shaped loaf for Valentine's Day, or a unique shape for a corporate event, our bakers can create it. Please allow at least 24 hours for custom orders, and note that there may be an additional charge for complex shapes.",
    },
  ];

  return (
    <div className="py-16 px-5 xl:px-[70px] md:flex gap-20 items-center space-y-10">
      <div className="w-full lg:w-1/2 text-center md:text-left">
        <p className="text-[#FF6F00] font-sans font-semibold uppercase tracking-[.2em] mb-3">
          FAQs
        </p>
        <h1 className="text-4xl ">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-lg mt-4">
          Find answers to common queries about our bakery, products, and
          services. We&apos;re here to help you understand our offerings and
          ensure you have the best experience with Bake N Treat.
        </p>
        <div className="mt-8 text-left">
          <Accordion faqs={faqs} />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={BakerWithPastries} alt="Bakery" />
      </div>
    </div>
  );
}
