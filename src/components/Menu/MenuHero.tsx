import DishImage from "@/../public/assets/images/dish.jpeg";
import Image from "next/image";

const MenuHero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-x-24 gap-y-7 items-center justify-around py-8 lg:mx-14 mx-2 font-sans">
      <div className="lg:w-1/2 w-full space-y-5 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-800">
          Fresh & Healthy Organic Food
        </h1>
        <p className="text-gray-600 tex">
          Discover our menu of fresh, healthy, and organic delights. At Bake N
          Treat, we&apos;re committed to using only the finest, locally-sourced
          ingredients to create dishes that nourish both body and soul. From our
          artisanal breads to our farm-fresh salads, every item is crafted with
          care to ensure maximum flavor and nutritional value. Experience the
          difference that quality ingredients and passionate cooking can make in
          your dining experience. Whether you&apos;re looking for a quick,
          healthy lunch or a indulgent yet wholesome dessert, our menu has
          something to satisfy every palate and dietary need.
        </p>
        <div className="space-x-7">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            See Video
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <Image src={DishImage} alt="Dish" width={800} height={600} />
      </div>
    </section>
  );
};

export default MenuHero;
