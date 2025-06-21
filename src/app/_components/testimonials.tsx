"use client"

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.png";
import Image from "next/image";

const testimonials = [
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        autor: "Mariana Souza",
        role: "Tutora da Luna (Golden Retriever)",
        image: tutor2
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        autor: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: tutor1
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        autor: "Camila Fernandes",
        role: "Tutora da Mel e do Max",
        image: tutor2
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        autor: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: tutor1
    },
];

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    });

    function scroolPrev() {
        emblaApi?.scrollPrev();
    }

    function scroolNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">

            <div className="container mx-auto px-4">

                <h2 className="text-4xl text-center font-bold mb-12">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt={item.autor}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-full"
                                                />
                                            </div>

                                            <p className="text-gray-200">{item.content}</p>

                                            <div>
                                                <p className="font-bold">{item.autor}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>
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