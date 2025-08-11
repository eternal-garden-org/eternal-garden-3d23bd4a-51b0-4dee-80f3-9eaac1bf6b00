"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialBioProps {
  firstName: string;
  lastName: string;
  className?: string;
}

export function MemorialBio({ firstName, lastName, className }: MemorialBioProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Accordion type="single" collapsible defaultValue="biography" className="space-y-5">
        <AccordionItem 
          value="biography" 
          className="border rounded-lg px-6 data-[state=open]:border-white"
          style={{ borderColor: "#2D2D2D" }}
        >
          <AccordionTrigger className="text-white font-bold hover:no-underline [&>svg]:text-muted-foreground" style={{ fontSize: "20px" }}>
            Биография
          </AccordionTrigger>
          <AccordionContent>
            <Typography.P className="!mt-0" style={{ fontSize: "16px", color: "#8B8B8B" }}>
              Александр Викторович Карпук родился в Бресте. С ранних лет он проявлял интерес к науке и искусству. 
              После окончания школы Александр поступил в университет, где изучал инженерное дело. 
              В своей карьере он достиг значительных успехов, работая над различными проектами в области технологий. 
              В свободное время Александр увлекается фотографией и путешествиями, что позволяет ему открывать 
              новые горизонты и вдохновляться окружающим миром.
            </Typography.P>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="hobbies" 
          className="border rounded-lg px-6 data-[state=open]:border-white"
          style={{ borderColor: "#2D2D2D" }}
        >
          <AccordionTrigger className="text-white font-bold hover:no-underline [&>svg]:text-muted-foreground" style={{ fontSize: "20px" }}>
            Увлечения
          </AccordionTrigger>
          <AccordionContent>
            <Typography.P className="!mt-0" style={{ fontSize: "16px", color: "#8B8B8B" }}>
              {firstName} был человеком с разносторонними интересами. Он увлекался фотографией, 
              особенно любил снимать архитектуру и природу. Путешествия были его страстью – 
              он объездил множество стран, изучая их культуру и традиции. В свободное время 
              любил играть в шахматы, считая эту игру отличной тренировкой для ума. 
              Также {firstName} с удовольствием работал в саду, выращивая розы и создавая 
              ландшафтные композиции вокруг дома.
            </Typography.P>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="education" 
          className="border rounded-lg px-6 data-[state=open]:border-white"
          style={{ borderColor: "#2D2D2D" }}
        >
          <AccordionTrigger className="text-white font-bold hover:no-underline [&>svg]:text-muted-foreground" style={{ fontSize: "20px" }}>
            Образование
          </AccordionTrigger>
          <AccordionContent>
            <Typography.P className="!mt-0" style={{ fontSize: "16px", color: "#8B8B8B" }}>
              {firstName} окончил Брестский государственный технический университет по специальности 
              "Промышленное и гражданское строительство". Позже получил дополнительное образование 
              в области архитектуры и дизайна. На протяжении всей карьеры продолжал совершенствовать 
              свои знания, регулярно посещая профессиональные курсы и семинары. Был членом 
              Союза архитекторов Беларуси и активно участвовал в профессиональных конференциях.
            </Typography.P>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}