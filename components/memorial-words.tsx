"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialWordsProps {
  firstName: string;
  lastName: string;
  className?: string;
}

export function MemorialWords({ firstName, lastName, className }: MemorialWordsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const wordsData = [
    {
      id: "1",
      text: `Мой папа, ${firstName}, был невероятным человеком. Он всегда умел находить радость в мелочах и делал каждый день особенным. Его смех наполнял дом теплом, а доброта и забота о других вдохновляли меня. Я помню, как он учил меня кататься на велосипеде, поддерживая меня даже в самые трудные моменты. Папа всегда говорил, что важно следовать своим мечтам, и я надеюсь, что смогу сделать его гордым.`,
      author: {
        name: `Елена ${lastName}`,
        relation: "Дочь",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3276&auto=format&fit=crop",
      },
    },
    {
      id: "2",
      text: `${firstName} был моим лучшим другом на протяжении 40 лет. Мы вместе учились в институте, вместе начинали свой путь в строительстве. Он был не просто коллегой — он был человеком, который никогда не подводил, всегда держал слово. Я помню, как в трудные 90-е он помог мне с работой, когда я остался без средств к существованию. Такая верность дружбе и человеческая порядочность редко встречаются в наше время.`,
      author: {
        name: "Виктор Павлович",
        relation: "Друг",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3270&auto=format&fit=crop",
      },
    },
    {
      id: "3",
      text: `Наши 35 лет вместе пролетели как один день. Саша был не просто мужем, он был моей опорой, моим защитником, моим лучшим другом. Он мог заставить меня улыбаться даже в самые тяжелые дни. Каждое утро готовил мне кофе, даже когда спешил на работу. Его забота и любовь наполняли наш дом. Теперь, когда его нет рядом, я чувствую его присутствие в каждом уголке нашего дома, в каждом воспоминании, которое мы создали вместе.`,
      author: {
        name: "Ольга Сергеевна",
        relation: "Жена",
        avatar: "https://images.unsplash.com/photo-1544222575-74d0d211d516?q=80&w=3282&auto=format&fit=crop",
      },
    },
    {
      id: "4",
      text: `Дедушка научил меня самому важному — никогда не сдаваться. Он часто брал меня с собой на стройку, показывал, как из обычных кирпичей вырастают дома, в которых потом живут люди. 'Максим, — говорил он, — важно не то, как быстро ты строишь, а насколько прочным будет результат'. Эти слова стали моим жизненным девизом. Я благодарен судьбе за то, что у меня был такой дедушка, который не просто любил, но и передал мне свою мудрость.`,
      author: {
        name: `Максим ${lastName}`,
        relation: "Внук",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop",
      },
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
    <div className={cn("w-full py-16", className)}>
      <Typography.H2 className="text-white text-center mb-10" style={{ fontSize: "40px" }}>
        Слова близких
      </Typography.H2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {wordsData.map((word) => (
            <CarouselItem key={word.id} className="basis-full">
              <div 
                className="p-8 rounded-lg"
                style={{ border: "1px solid #2D2D2D", backgroundColor: "transparent" }}
              >
                {/* Author Block */}
                <div className="flex items-stretch gap-4 mb-6">
                  <Avatar className="flex-shrink-0" style={{ width: "44px", height: "44px" }}>
                    <AvatarImage
                      src={word.author.avatar}
                      alt={word.author.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {word.author.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col justify-between" style={{ height: "44px" }}>
                    <Typography.P className="text-white font-medium !mt-0 !mb-0" style={{ fontSize: "20px" }}>
                      {word.author.name}
                    </Typography.P>
                    <Typography.Small style={{ color: "#8B8B8B", fontSize: "16px" }}>
                      {word.author.relation}
                    </Typography.Small>
                  </div>
                </div>

                {/* Quote Text */}
                <Typography.P className="text-white !mt-0" style={{ fontSize: "20px" }}>
                  {word.text}
                </Typography.P>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Dots */}
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
              aria-label={`Перейти к словам ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}