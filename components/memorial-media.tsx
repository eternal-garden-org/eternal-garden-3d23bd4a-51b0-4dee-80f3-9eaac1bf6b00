import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialMediaProps {
  className?: string;
}

export function MemorialMedia({ className }: MemorialMediaProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Typography.H2 className="text-white text-center mb-10" style={{ fontSize: "40px" }}>
        Медиафайлы
      </Typography.H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео памяти"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
        
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео памяти"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}