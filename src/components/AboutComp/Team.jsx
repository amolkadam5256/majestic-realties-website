import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../assets/images/images";
import TeamCardCompact from "./TeamCardCompact";
const coreTeam = [
    {
        name: "Kamal Sharma",
        role: "Branch Manager - Pirangut Branch",
        desc: "Leads operations and customer relations at the Pirangut branch.",
        image: images.Kamal_Sharma,
        animation: "fade-up",
    },
    {
        name: "Dashrath Sable",
        role: "Branch Manager",
        desc: "Handles branch-level execution and team coordination.",
        image: images.Dashrath_Sable,
        animation: "fade-down",
    },
    {
        name: "Surendra Kakade",
        role: "Branch Manager",
        desc: "Manages local client interactions and operational flow.",
        image: images.Surendra_Kakade,
        animation: "flip-left",
    },
    {
        name: "Pooja Patil",
        role: "Human Resources (HR)",
        desc: "Drives recruitment, employee engagement, and HR strategy.",
        image: images.Pooja_Patil,
        animation: "zoom-in-up",
    },
    {
        name: "Sampada Ambre",
        role: "Operations",
        desc: "Coordinates backend activities ensuring smooth workflow.",
        image: images.Sampada_Ambre,
        animation: "fade-up-right",
    },
];


const Team = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 900, easing: "ease-in-out" });
    }, []);

    return (
        <section className="bg-white text-gray-900 font-['Inter'] py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">
                {/* Header */}


                {/* Core Team */}
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

                <div className="my-5">
                    <TeamCardCompact />
                </div>


                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {coreTeam.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-2"
                            data-aos={member.animation}
                            data-aos-delay={index * 100}
                        >
                            <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 border-2 border-[#F2B90C] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 rounded-xl transition-all duration-300 pointer-events-none" />
                                <div className="absolute inset-0 border-2 border-[#BF8D30] opacity-0 group-hover:opacity-50 scale-90 group-hover:scale-100 rounded-xl transition-all duration-300 pointer-events-none" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                            <p className="text-xs font-semibold text-[#735A2C] uppercase tracking-widest">{member.role}</p>
                            <p className="mt-2 text-sm text-gray-600 px-4">{member.desc}</p>
                        </div>
                    ))}
                </div>


            </div>

        </section>
    );
};

export default Team;
