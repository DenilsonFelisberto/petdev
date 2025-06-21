"use client"

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';

const services = [
    {
        title: "Banho e Tosa",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        duration: "1hr",
        price: "$50",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre *** e gotaria de mais informações."
    },
    {
        title: "Consulta Veterinária",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        duration: "1hr",
        price: "$45",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre *** e gotaria de mais informações."
    },
    {
        title: "Taxi Pet",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        duration: "1hr",
        price: "$50",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre *** e gotaria de mais informações."
    },
    {
        title: "Hotel para pets",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        duration: "1hr",
        price: "$45",
        icon: <Hotel />,
        linkText: "Olá, vi no site sobre *** e gotaria de mais informações."
    },
];

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    });

    function scroolPrev() {
        emblaApi?.scrollPrev();
    }

    function scroolNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">

            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>
                                            <a
                                                href={`https://wa.me/5584991378411?text=Olá, vim pelo site e gostaria de mais informações sobre ${item.title}`}
                                                target="_blank"
                                                className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogoIcon
                                                    className="w-5 h-5"
                                                />
                                                Entrar em contato
                                            </a>
                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ChevronLeft
                        onClick={scroolPrev}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 text-gray-600 bg-[#FDF6ec] cursor-pointer p-1"
                    />

                    <ChevronRight
                        onClick={scroolNext}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 text-gray-600 bg-[#FDF6ec] cursor-pointer p-1"
                    />
                </div>

            </div>

        </section>
    )
}