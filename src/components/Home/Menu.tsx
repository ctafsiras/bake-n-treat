const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Sourdough",
      desc: "Tangy and chewy with a crisp crust, our sourdough is fermented for 24 hours for maximum flavor.",
      price: 9,
    },
    {
      id: 2,
      name: "Banana Bread",
      desc: "Moist and sweet, packed with ripe bananas and a hint of cinnamon for a comforting treat.",
      price: 11,
    },
    {
      id: 3,
      name: "Cornbread",
      desc: "Golden and slightly sweet, our cornbread has a perfect crumbly texture with whole corn kernels.",
      price: 12,
    },
    {
      id: 4,
      name: "Challah Bread",
      desc: "Rich, soft, and slightly sweet braided bread, perfect for special occasions or French toast.",
      price: 8,
    },
    {
      id: 5,
      name: "Brioche Bread",
      desc: "Buttery and tender with a golden crust, our brioche is delightfully rich and versatile.",
      price: 12,
    },
    {
      id: 6,
      name: "American Rye Bread",
      desc: "Hearty and flavorful, with a perfect balance of rye and wheat flours and a sprinkle of caraway seeds.",
      price: 14,
    },
    {
      id: 7,
      name: "Pumpernickel Bread",
      desc: "Dark, dense, and slightly sweet, our pumpernickel is made with whole rye berries for authentic flavor.",
      price: 21,
    },
    {
      id: 8,
      name: "Multigrain Bread",
      desc: "Packed with a variety of nutritious grains and seeds, offering a wholesome and hearty flavor.",
      price: 15,
    },
  ];
  return (
    <section className="lg:h-screen py-20 lg:px-6">
      <div className="text-center">
        <p className="text-[#FF6F00] text-medium font-medium capitalize tracking-[.4em]">
          OUR MENU
        </p>
        <h1 className="text-5xl">Feel the Butter, All Time</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-12 justify-evenly mt-20">
        {menuItems.map((item) => (
          <div key={item.id} className="border-b border-dashed">
            <div className="flex justify-between items-center">
              <h3 className="text-xl">{item.name}</h3>
              <h3 className="text-xl text-[#FF6F00]">${item.price}</h3>
            </div>
            <p className="text-gray-500 text-sm my-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
