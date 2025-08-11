import { Typography } from "@/components/ui/typography";
import { CustomAudioPlayer } from "@/components/custom-audio-player";
import { cn } from "@/lib/utils";

interface MemorialAudioProps {
  className?: string;
}

export function MemorialAudio({ className }: MemorialAudioProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Typography.H2 className="text-white text-center mb-10" style={{ fontSize: "40px" }}>
        Песня Александра
      </Typography.H2>

      <div className="flex justify-center">
        <CustomAudioPlayer />
      </div>
    </div>
  );
}