import React from 'react'

const AboutMajestic = () => {
    return (
        <>
            <div>

                <section class="py-24 relative bg-white">
                    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">

                            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                                <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Redefining Real Estate with Purpose and Passion
                                    </h2>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        At Majestic Realties, we believe in more than just developing land—we build environments that enrich lives.
                                        By blending innovation, sustainability, and trust, we shape communities where people can thrive, connect, and grow together.
                                    </p>
                                </div>

                                <button
                                    class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                                    onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                                    <span class="px-1.5 text-white text-sm font-medium leading-6">Contact Us</span>
                                </button>
                            </div>

                            <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                                src="https://pagedone.io/asset/uploads/1717751272.png"
                                alt="Majestic Realties Project Image" />
                        </div>
                    </div>
                </section>


                <section class="py-24 relative bg-white">
                    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">

                            <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                                <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                    <img class="rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="Majestic Realty Project" />
                                </div>
                                <img class="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png" alt="Majestic Realty Project" />
                            </div>

                            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                <div class="w-full flex-col justify-center items-start gap-8 flex">
                                    <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            Crafting Inspired Environments Since 2014
                                        </h2>
                                        <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            For over a decade, Majestic Realties has been turning dreams into reality through thoughtful land development.
                                            We don’t just build — we craft lasting experiences with a strong commitment to sustainability, innovation, and community.
                                        </p>
                                    </div>

                                    <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                        <div class="flex-col justify-start items-start inline-flex">
                                            <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">10+</h3>
                                            <h6 class="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                                        </div>
                                        <div class="flex-col justify-start items-start inline-flex">
                                            <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">6+</h4>
                                            <h6 class="text-gray-500 text-base font-normal leading-relaxed">Projects Completed</h6>
                                        </div>
                                        <div class="flex-col justify-start items-start inline-flex">
                                            <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">100%</h4>
                                            <h6 class="text-gray-500 text-base font-normal leading-relaxed">Client Satisfaction</h6>
                                        </div>
                                    </div>
                                </div>

                                <button onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
                                    class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span class="px-1.5 text-white text-sm font-medium leading-6">Get In Touch</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div></>
    )
}

export default AboutMajestic