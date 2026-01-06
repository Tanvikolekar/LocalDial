import React from "react";
import Navbar from "../layout/Navbar";

const AboutUs = () => {
  return (
    <div className="bg-orange-100 text-orange-900 font-sans">
      

      {/* Header Section */}
      <header className="bg-white py-12 shadow-md">
  <div className="container mx-auto px-4">
    <h3 className="text-5xl font-bold text-center">Your trusted partner for local services — dedicated to your community.</h3>
  </div>
</header>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-800">Who We Are</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We are a community-driven platform dedicated to connecting people with essential services in their local area. Whether you're looking for nearby hospitals, trusted medical professionals, grocery stores, restaurants, or hotels — we've got you covered. Our mission is to make everyday life easier by helping you discover reliable and accessible options close to home.
        </p>
      </section>
      

      {/* Services Section */}
<section className="bg-white py-16">
  <div className="container mx-auto px-4">
    <h3 className="text-4xl font-bold text-center mb-12 text-orange-800">Our Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Business Listings",
          desc: "We help local businesses like hospitals, grocery stores, and medical shops get listed so customers in their area can find them easily.",
          img: "https://cdn-icons-png.flaticon.com/512/2620/2620984.png", // business icon
        },
        {
          title: "Location-Based Search",
          desc: "Users can quickly find essential services around them, including clinics, restaurants, and general stores — all in one place.",
          img: "https://cdn-icons-png.flaticon.com/512/535/535239.png", // map/search icon
        },
        {
          title: "Promote Local Growth",
          desc: "We support small and local businesses by giving them visibility and helping them connect with nearby customers.",
          img: "https://cdn-icons-png.flaticon.com/512/2920/2920256.png", // support icon
        },
      ].map((service, i) => (
        <div key={i} className="bg-orange-100 hover:bg-orange-200 transition rounded-xl shadow-lg p-6 text-center">
          <img src={service.img} alt={service.title} className="w-20 h-20 mx-auto mb-4 rounded-full shadow" />
          <h4 className="text-xl font-bold">{service.title}</h4>
          <p className="mt-2">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section className="py-16 bg-orange-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6 text-orange-900">Our Mission</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Our mission is to connect people with trusted local businesses and essential services, making daily life easier and more community-focused.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-orange-800">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Members */}
            {[
              {
                name: "Tanvi Kolekar",
                role: "Founder & CEO",
                desc: "With 15+ years in the industry, Tanvi leads with passion and expertise.",
                img: "https://w7.pngwing.com/pngs/654/133/png-transparent-emotion-computer-icons-graduate-record-examinations-paper-one-hundred-years-of-solitude-selamat-datang-love-child-culture.png",
              },
              {
                name: "Jaydatta Shinde",
                role: "Operations Manager",
                desc: "Ensuring smooth operations and exceptional customer satisfaction.",
                img: "https://img.lovepik.com/png/20231113/cartoon-boy-in-headphones-is-listening-to-music-vector-clipart_580003_wh860.png",
              },
              {
                name: "Khushi Rakshe",
                role: "Service Specialist",
                desc: "Delivering high-quality services with detail and care.",
                img: "https://w7.pngwing.com/pngs/654/133/png-transparent-emotion-computer-icons-graduate-record-examinations-paper-one-hundred-years-of-solitude-selamat-datang-love-child-culture.png",
              },
            ].map((member, i) => (
              <div key={i} className="bg-orange-50 hover:bg-orange-100 transition rounded-xl shadow-lg p-6 text-center">
                <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full shadow mb-4" />
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-orange-700">{member.role}</p>
                <p className="text-sm mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
