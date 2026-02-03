"use client";

import { feedback } from "@/lib/data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Feedback() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="technical-label text-primary">Kundenstimmen</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 uppercase">CUSTOMERS FEEDBACK</h2>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <div className="flex gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-bold text-2xl text-white">5.0 / 5.0</span>
            </div>
            <span className="technical-label opacity-60">Basierend auf 15 Kundenbewertungen</span>
          </div>
        </div>

        <div className="relative group/carousel">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {feedback.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="glass p-10 rounded-xl relative h-full flex flex-col justify-between min-h-[380px] hover:border-primary/20 transition-colors duration-500">
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.03]" />
                    
                    <div>
                      <div className="flex gap-1 mb-8">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-lg italic leading-relaxed mb-10 text-zinc-400 line-clamp-6">
                        &ldquo;{item.comment}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex flex-col mt-auto pt-8 border-t border-white/5">
                      <span className="font-bold text-white tracking-tight">{item.user}</span>
                      <span className="technical-label text-[10px] mt-2 opacity-50">{item.date}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Large Grey Chevron Buttons */}
            <CarouselPrevious 
              variant="ghost" 
              className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 h-full w-12 md:w-20 rounded-none border-none hover:bg-transparent text-zinc-600 hover:text-zinc-200 transition-all duration-300 disabled:opacity-0"
            >
              <ChevronLeft className="!w-16 !h-16 md:!w-24 md:!h-24 stroke-[1.5px]" />
            </CarouselPrevious>
            <CarouselNext 
              variant="ghost" 
              className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 h-full w-12 md:w-20 rounded-none border-none hover:bg-transparent text-zinc-600 hover:text-zinc-200 transition-all duration-300 disabled:opacity-0"
            >
              <ChevronRight className="!w-16 !h-16 md:!w-24 md:!h-24 stroke-[1.5px]" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}