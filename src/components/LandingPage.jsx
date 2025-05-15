import Navbar from "../components/Navbar.jsx";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="mx-auto px-6 py-8 pt-28 max-w-7xl">
        {/* Hero Section - Updated */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000"
            alt="Healthcare professionals"
            className="w-full h-[30rem] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a]/70 via-[#0d1b2a]/40 to-transparent p-10 rounded-3xl flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4 leading-tight">
              Connecting You to the Best <br /> Healthcare Worldwide
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-200">
              Discover top medical facilities, compare options, and make
              informed decisions for your well-being — wherever you are.
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-16">
          <h1 className="text-5xl font-extrabold text-[#0d1b2a] leading-snug drop-shadow-md">
            Explore Global Medical Excellence
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            A world of top-tier healthcare options at your fingertips. Compare,
            consult, and choose with confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <div className="bg-[#e8f0fe] rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1">
            <button className="bg-[#0d1b2a] text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:bg-[#112d4e]">
              Browse Catalog
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
                "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
                "https://cdn-icons-png.flaticon.com/512/4076/4076398.png",
                "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow"
                >
                  <img src={src} alt="icon" className="w-6 h-6" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Find top hospitals and specialists worldwide with ease.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-[#f5faff] to-white rounded-2xl p-6 flex items-center justify-center shadow-xl hover:shadow-2xl">
            <p className="text-center text-gray-500"></p>
          </div>

          <div className="bg-[#e8f0fe] rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1">
            <a
              href="/chatbot"
              className="bg-[#0d1b2a] text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow-md hover:bg-[#112d4e]"
            >
              Get AI Help
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-6">
              <div className="w-16 h-16 bg-[#0d1b2a] rounded-2xl flex items-center justify-center shadow-md">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-700">
              Get personalized healthcare guidance instantly.
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20 p-8 rounded-3xl bg-white shadow-2xl">
          <h2 className="text-3xl font-bold text-[#0d1b2a] text-center">
            Collaborating with World-Class Health Experts
          </h2>
          <p className="mt-2 text-center text-gray-500">
            Exceptional healthcare from our international partners.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
            {[
              "Ruby Hall Clinic",
              "Apollo Hospitals",
              "Fortis Healthcare",
              "Mayo Clinic",
              "Bumrungrad Hospital",
              "Cleveland Clinic",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-[#f0f4ff] rounded-xl p-4 flex flex-col items-center shadow hover:scale-105 transition"
              >
                <div className="w-16 h-16 bg-blue-200 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={`https://via.placeholder.com/80?text=${
                      name.split(" ")[0]
                    }`}
                    alt={`${name} logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-600 text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-20 bg-gradient-to-br from-gray-100 via-white to-gray-100 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0d1b2a]">
            Your Journey to Better Health in 4 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Search & Compare",
              "Get Expert Consultation",
              "Plan Your Journey",
              "Receive Quality Treatment",
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#0d1b2a] text-white rounded-full flex items-center justify-center text-xl font-bold shadow">
                  {i + 1}
                </div>
                <p className="mt-3 font-semibold text-gray-700">{step}</p>
                <p className="mt-1 text-xs text-gray-500">
                  Detailed description goes here.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center bg-white rounded-3xl shadow-2xl p-10 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#0d1b2a]">
              Take the First Step Towards Better Health
            </h2>
            <p className="mt-4 text-gray-600">
              Begin your journey to world-class healthcare today. Compare
              options, connect with experts, and plan your treatment
              effortlessly.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-72 h-48 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Doctor consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
