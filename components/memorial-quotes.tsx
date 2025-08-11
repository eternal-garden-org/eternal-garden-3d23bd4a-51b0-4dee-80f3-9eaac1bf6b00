"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface MemorialQuotesProps {
  firstName: string;
  middleName: string;
  className?: string;
}

export function MemorialQuotes({ firstName, middleName, className }: MemorialQuotesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const quotes = [
    {
      text: "Ты по жизни нас вел, ты себя не жалел, ты так рано ушел, ты так много успел. И не верит никто, что тебя рядом нет, что ушел в небытье. Сын, муж, дед, отец — ЧЕЛОВЕК!",
      author: "Цитата семьи"
    },
    {
      text: "Отец не просто дал мне жизнь — он показал, как наполнить её смыслом. Его мудрые советы и личный пример научили меня тому, что ценность жизни определяется не количеством прожитых лет, а тем, сколько добра ты успел сделать за это время.",
      author: "Цитата дочери"
    },
    {
      text: "Дедушка всегда говорил мне: 'София, мечтай смело, как будто неудачи не существует.' Благодаря ему я поверила в свои силы. Даже сейчас, когда его нет рядом, я слышу его голос, поддерживающий меня в трудную минуту.",
      author: "Цитата внучки"
    },
    {
      text: `${firstName} ${middleName} был не просто коллегой, а наставником для всех нас. Его профессионализм, честность и умение найти подход к каждому сотруднику сделали нашу компанию одной семьей. Его наследие живет в каждом здании, которое мы создали вместе.`,
      author: "Цитата коллеги"
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={cn("w-full py-16 overflow-visible", className)}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
        }}
        setApi={setApi}
        className="w-full mx-auto overflow-visible"
      >
        <CarouselContent>
          {quotes.map((quote, index) => (
            <CarouselItem key={index} className="basis-full max-w-6xl">
              <div className="mx-4 relative pt-6 pb-8 overflow-visible">
                {/* Author Badge */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-0 z-10 inline-flex items-center px-4 py-1 rounded-full"
                  style={{ backgroundColor: "#F6B95A" }}
                >
                  <span className="text-black font-light" style={{ fontSize: "14px" }}>
                    {quote.author}
                  </span>
                </div>

                {/* Quote Block */}
                <div
                  className={cn(
                    "relative p-8 md:p-12 rounded-lg transition-all duration-500 mt-3",
                    index === current ? "opacity-100" : "opacity-0"
                  )}
                  style={{ 
                    backgroundColor: "#2D2D2D",
                    backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.8), rgba(45, 45, 45, 0.8))`,
                    overflow: "visible"
                  }}
                >
                  {/* Top Quote Icon */}
                  <Quote 
                    className="absolute -top-6 left-4 rotate-180" 
                    style={{ color: "#F6B95A" }}
                    size={48}
                  />

                  {/* Bottom Quote Icon */}
                  <Quote 
                    className="absolute -bottom-6 right-4" 
                    style={{ color: "#F6B95A" }}
                    size={48}
                  />

                  <Typography.P className="text-white text-center !mt-0" style={{ fontSize: "18px" }}>
                    {quote.text}
                  </Typography.P>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-8 flex justify-center">
          <div className="flex gap-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "rounded-full transition-all duration-300 cursor-pointer"
                )}
                style={{
                  width: index === current ? "12px" : "8px",
                  height: index === current ? "12px" : "8px",
                  backgroundColor: index === current ? "#F6B95A" : "#2D2D2D"
                }}
                aria-label={`Перейти к цитате ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
}