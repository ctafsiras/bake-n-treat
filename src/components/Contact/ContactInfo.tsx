import { GrPhone } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <SlLocationPin size={50} className="mx-auto text-[#FF6F00]" />,
      title: "Address",
      info1: "Mirpur 11",
      info2: "Dhaka Bangladesh",
    },
    {
      icon: <GrPhone size={50} className="mx-auto text-[#FF6F00]" />,
      title: "Phone",
      info1: "+8801983510532",
      info2: "+8801800000000",
    },
    {
      icon: <HiOutlineMailOpen size={50} className="mx-auto text-[#FF6F00]" />,
      title: "Email",
      info1: "ctafsiras@gmail.com",
      info2: "bakentreat@gmail.com",
    },
  ];
  return (
    <div className="py-16 px-5 md:py-24 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <div
            key={contact.title}
            className="text-center border border-gray-200 hover:border-black py-5 md:p-8 transition duration-500"
          >
            <span>{contact.icon}</span>
            <h3 className=" text-3xl mt-4">{contact.title}</h3>
            <p className="text-gray-500 text-lg mt-2 font-sans">
              {contact.info1}
              <br />
              {contact.info2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
