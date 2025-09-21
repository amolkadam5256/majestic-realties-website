import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../assets/images/images";
import TeamCardCompact from "./TeamCardCompact";

const coreTeam = [
  {
    name: "aslam shake",
    role: "Branch Manager – NIBM Pune Branch",
    desc: "A core pillar of Majestic Realties, Expertly leads the NIBM Pune branch, overseeing sales, legal, and project development with unmatched dedication and experience.",
    image: images.Kamal_Sharma,
    animation: "fade-up",
  },
  {
    name: "Sidr Sabale",
    role: "Branch Manager",
    desc: "With sharp leadership in sales and team management, Dashrath is a key force behind branch performance and a significant contributor to the company’s overall revenue and strategic growth.",
    image: images.Dashrath_SableAI,
    animation: "fade-up",
  },
  {
    name: "Kamal Sharma",
    role: "Branch Manager – Pirangut Branch",
    desc: "A core pillar of Majestic Realties, Expertly leads the Pirangut branch, overseeing sales, legal, and project development with unmatched dedication and experience.",
    image: images.Kamal_Sharma,
    animation: "fade-up",
  },
  {
    name: "Dashrath Sabale",
    role: "Branch Manager",
    desc: "With sharp leadership in sales and team management, Dashrath is a key force behind branch performance and a significant contributor to the company’s overall revenue and strategic growth.",
    image: images.Dashrath_SableAI,
    animation: "fade-up",
  },
  {
    name: "Surendra Kakade",
    role: "Branch Manager",
    desc: "Known for his graceful client handling and strong leadership, Efficiently manages branch operations, drives team performance, and excels in closing high-value sales.",
    image: images.Surendra_Kakade,
    animation: "fade-up",
  },
  {
    name: "Pooja Patil",
    role: "Human Resources (HR)",
    desc: "Plays a vital role in shaping the company’s culture through efficient recruitment, employee engagement, and HR operations, ensuring smooth coordination across all departments with professionalism.",
    image: images.Pooja_Patil,
    animation: "fade-up",
  },
  {
    name: "Sampada Ambre",
    role: "Operations",
    desc: "Plays a vital role in streamlining the company’s processes through efficient planning, cross-department coordination, and operational excellence, ensuring smooth workflow and strong backend support with precision and professionalism.",
    image: images.Sampada_Ambre,
    animation: "fade-up",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 900, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-white text-gray-900 font-['Inter'] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#262324] via-[#F2B90C] to-[#402708] text-transparent bg-clip-text animate-infiniteGradient"
            data-aos="fade-down"
          >
            Our Team
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            The driving force behind our success - dedicated professionals committed to turning vision into value.
          </p>
        </div>

        {/* Optional Compact View */}
        <div className="my-5">
          <TeamCardCompact />
        </div>

        {/* Grid View */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-2"
              data-aos={member.animation}
              data-aos-delay={index * 100}
            >
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-[#F2B90C] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 rounded-2xl transition-all duration-300 pointer-events-none" />
                <div className="absolute inset-0 border-2 border-[#BF8D30] opacity-0 group-hover:opacity-60 scale-90 group-hover:scale-100 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
              <p className="text-xs font-semibold text-[#735A2C] uppercase tracking-widest mt-1">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600 px-4">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
