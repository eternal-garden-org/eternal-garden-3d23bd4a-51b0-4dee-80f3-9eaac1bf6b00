"use client";

import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialHeaderProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  backgroundImage?: string;
  className?: string;
}

export function MemorialHeader({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  backgroundImage,
  className,
}: MemorialHeaderProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);

  const yearsLabel = age % 10 === 1 && age % 100 !== 11 
    ? "год" 
    : age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20) 
    ? "года" 
    : "лет";

  return (
    <div 
      className={cn(
        "relative w-full py-16",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] lg:w-[480px] aspect-square">
              <Image
                src={photoUrl}
                alt={`Фото ${fullName}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between text-left space-y-8">
            <div>
              {/* Name */}
              <Typography.H1 
                className="text-white font-bold mb-10"
                style={{ fontSize: "40px", marginBottom: "40px" }}
              >
                {fullName}
              </Typography.H1>

              {/* Years Badge */}
              <div className="inline-flex items-center px-4 py-1 rounded-full mb-5" 
                style={{ 
                  backgroundColor: "#F6B95A",
                  marginBottom: "20px"
                }}
              >
                <span className="font-light text-black" style={{ fontSize: "16px" }}>
                  {age} {yearsLabel} жизни
                </span>
              </div>

              {/* Dates */}
              <div className="flex items-baseline text-white">
                <span className="font-light" style={{ fontSize: "20px", color: "#8B8B8B" }}>
                  {birthDayMonth}
                </span>
                <span className="font-bold ml-2" style={{ fontSize: "20px" }}>
                  {birthYear}
                </span>
                <span className="mx-3 font-bold text-white" style={{ fontSize: "20px" }}>
                  –
                </span>
                <span className="font-bold" style={{ fontSize: "20px" }}>
                  {deathYear}
                </span>
                <span className="font-light ml-2" style={{ fontSize: "20px", color: "#8B8B8B" }}>
                  {deathDayMonth}
                </span>
              </div>
            </div>

            {/* Location Blocks */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground" style={{ fontSize: "14px" }}>
                  <MapPin size={16} className="mr-2" style={{ color: "#8B8B8B" }} />
                  <span>Место рождения</span>
                </div>
                <Typography.P className="text-white font-bold !mt-0" style={{ fontSize: "20px" }}>
                  {birthPlace}
                </Typography.P>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground" style={{ fontSize: "14px" }}>
                  <MapPin size={16} className="mr-2" style={{ color: "#8B8B8B" }} />
                  <span>Место смерти</span>
                </div>
                <Typography.P className="text-white font-bold !mt-0" style={{ fontSize: "20px" }}>
                  {deathPlace}
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}