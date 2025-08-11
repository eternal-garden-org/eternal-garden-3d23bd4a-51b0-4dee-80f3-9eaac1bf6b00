import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialInfoProps {
  firstName: string;
  className?: string;
}

export function MemorialInfo({ className }: MemorialInfoProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="space-y-3">
            <Typography.H2 className="text-white" style={{ fontSize: "40px" }}>
              Семья
            </Typography.H2>
            <Typography.P className="!mt-0" style={{ color: "#8B8B8B" }}>
              Александр прожил счастливую жизнь с женой Ольгой Сергеевной. Вместе они воспитали двоих замечательных детей — Виктора и Елену. 
              Виктор пошёл по стопам отца, став инженером, а Елена выбрала медицину и стала врачом. 
              У Александра было трое внуков, которых он обожал: Максим, Полина и София. 
              Он всегда говорил, что внуки — это главный подарок жизни.
            </Typography.P>
          </div>

          <div className="space-y-3">
            <Typography.H2 className="text-white" style={{ fontSize: "40px" }}>
              Каким он был
            </Typography.H2>
            <Typography.P className="!mt-0" style={{ color: "#8B8B8B" }}>
              Его знали как человека с добрым сердцем и невероятной щедростью. 
              Он всегда находил время для друзей, был душой компании и мастером анекдотов.
            </Typography.P>
          </div>
        </div>

        <div className="space-y-3">
          <Typography.H2 className="text-white" style={{ fontSize: "40px" }}>
            Кем он был
          </Typography.H2>
          <Typography.P className="!mt-0" style={{ color: "#8B8B8B" }}>
            По профессии Александр был архитектором, и его работы до сих пор украшают Брест. 
            Главная площадь города, несколько школ, жилые кварталы — всё это носит отпечаток его таланта. 
            Он обожал своё дело и часто говорил: 'Архитектор не просто строит дома, он создаёт места, где рождаются истории.' 
            Но его жизнь — это не только чертежи и проекты. Александр любил проводить время с семьёй, 
            играть в шахматы и читать исторические романы. Его особенной страстью был сад — во дворе всегда цвели розы, 
            которые он ухаживал с особой любовью.
          </Typography.P>
        </div>
      </div>
    </div>
  );
}