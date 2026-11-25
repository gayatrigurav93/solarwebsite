
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Target,
  Eye,
  Award,
  Users,
  Zap
} from "lucide-react";

export default function About() {

  const navigate = useNavigate();

  return (
    <>
      {/* 1. Hero Section */}
      <section className="m-4 min-h-[55vh]
        bg-[url('/images/abouthero.png')]
        bg-cover bg-bottom bg-no-repeat
        flex items-center rounded-2xl relative">

        <div className="bg-black/40 absolute inset-0 rounded-2xl"></div>

        <div className="relative z-10 p-6 md:p-12 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            About <span className="text-yellow-300">Our Company</span>
          </h1>

          <p className="mt-5 text-white text-base md:text-lg">
            Powering a brighter tomorrow with clean, reliable
            and affordable solar energy solutions.
          </p>

          <button
            onClick={() => navigate("/Services")}
            className="mt-6 bg-green-700 text-white px-6 py-3
            rounded-xl hover:bg-green-600 transition duration-300">
            Explore Our Solutions
          </button>
        </div>
      </section>


      {/* 2. Who We Are */}
      <section className="m-4 p-5 md:p-8
        flex flex-col md:flex-row items-center gap-8">

        <div className="w-full md:w-1/2">
          <img
            src="/images/aboutus.png"
            alt="Solar panel installation"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-7 mb-4">
            We are a dedicated solar energy company committed to
            making clean and renewable energy accessible to
            homes and businesses.
          </p>

          <p className="text-gray-700 leading-7 mb-4">
            From residential rooftops to large commercial
            installations, we provide complete solar solutions
            designed to reduce electricity costs and promote
            environmental sustainability.
          </p>

          <p className="text-gray-700 leading-7">
            Our experienced team focuses on quality products,
            expert installation and dependable customer support
            to deliver long-term value to every customer.
          </p>
        </div>
      </section>


      {/* 3. Mission and Vision */}
      <section className="m-4 py-10 px-5 md:px-10 bg-green-50 rounded-2xl">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">
            Our Purpose
          </h2>
          <p className="text-gray-600 mt-2">
            Building a cleaner and more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white p-7 rounded-2xl shadow-sm
            hover:shadow-md transition duration-300">

            <Target size={42} className="text-green-700 mb-4" />

            <h3 className="text-xl font-bold text-green-700 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-7">
              Our mission is to provide affordable, efficient
              and high-quality solar energy solutions that help
              customers save money while reducing their carbon
              footprint.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-7 rounded-2xl shadow-sm
            hover:shadow-md transition duration-300">

            <Eye size={42} className="text-green-700 mb-4" />

            <h3 className="text-xl font-bold text-green-700 mb-3">
              Our Vision
            </h3>

            <p className="text-gray-700 leading-7">
              Our vision is to create a sustainable future where
              clean solar energy becomes a trusted and accessible
              power source for every home and business.
            </p>
          </div>

        </div>
      </section>


      {/* 4. Achievements */}
      <section className="m-4 py-10 px-5 md:px-8
        border border-gray-200 rounded-2xl shadow-sm">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">
            Our Achievements
          </h2>

          <p className="text-gray-600 mt-2">
            Our journey towards a brighter, greener future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div className="text-center">
            <Users size={35} className="mx-auto text-green-700 mb-3" />

            <h3 className="text-3xl font-bold text-green-700">
              500+
            </h3>

            <p className="font-semibold text-gray-800 mt-2">
              Happy Customers
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Trusted by homes and businesses.
            </p>
          </div>

          <div className="text-center">
            <Zap size={35} className="mx-auto text-green-700 mb-3" />

            <h3 className="text-3xl font-bold text-green-700">
              1 MW+
            </h3>

            <p className="font-semibold text-gray-800 mt-2">
              Solar Capacity Installed
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Delivering clean energy solutions.
            </p>
          </div>

          <div className="text-center">
            <Award size={35} className="mx-auto text-green-700 mb-3" />

            <h3 className="text-3xl font-bold text-green-700">
              5+
            </h3>

            <p className="font-semibold text-gray-800 mt-2">
              Years of Experience
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Experience you can trust.
            </p>
          </div>

        </div>
      </section>


      {/* 5. Call To Action */}
      <section className="m-4 mb-0 py-14 px-5
        bg-green-50  text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          Let's Build a Greener Future Together!
        </h2>

        <p className="text-green-600 mt-4 mb-7">
          Switch to solar energy today and take the first step
          towards a cleaner and more sustainable tomorrow.
        </p>

        <button
          onClick={() => navigate("/Contact")}
          className="bg-green-700 text-white font-semibold
          px-7 py-3 rounded-xl 
          hover:bg-white hover:border-2 hover:border-amber-400
           hover:text-green-600
          transition duration-300">
          Contact Us
        </button>

      </section>

    </>
  );
}


        