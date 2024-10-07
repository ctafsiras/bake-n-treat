import { BsCart3 } from "react-icons/bs";
import { GiShop, GiStarFormation } from "react-icons/gi";

const ChooseUs = () => {
  const columns = [
    {
      icon: <BsCart3 size={48} className="text-[#FF6F00] mx-auto" />,
      title: "Fresh Ingredients",
      text: "We source only the finest, locally-grown ingredients to ensure superior quality and flavor in every product we create.",
    },
    {
      icon: <GiShop size={48} className="text-[#FF6F00] mx-auto" />,
      title: "Years of Experience",
      text: "With decades of baking expertise, our skilled artisans craft each item with precision and care, perfecting our recipes over time.",
    },
    {
      icon: <GiStarFormation size={48} className="text-[#FF6F00] mx-auto" />,
      title: "Delicious Food",
      text: "Our commitment to excellence results in irresistibly delicious baked goods that keep our customers coming back for more.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-5">
      <h2 className="text-[#FF6F00] text-center font-medium font-sans uppercase tracking-[.2em]">
        Why Choose Us
      </h2>
      <h1 className="text-5xl text-center my-5">Great Taste in Every Bite</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {columns.map((column) => (
          <div
            key={column.title}
            className="p-10 text-center hover:shadow-large transition duration-300 bg-white"
          >
            <span>{column.icon}</span>
            <h3 className="text-2xl mt-4">{column.title}</h3>
            <p className="text-gray-500 font-sans mt-2">{column.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
