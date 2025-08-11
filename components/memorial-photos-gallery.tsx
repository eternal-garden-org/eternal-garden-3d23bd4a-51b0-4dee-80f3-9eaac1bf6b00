"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialPhotosGalleryProps {
  className?: string;
}

const photos = [
  {
    id: "1",
    url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/3d23bd4a-51b0-4dee-80f3-9eaac1bf6b00/photo/1754929545150_photo_3_1.png",
    alt: "Первое фото",
  },
  {
    id: "2",
    url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/3d23bd4a-51b0-4dee-80f3-9eaac1bf6b00/photo/1754929552017_photo_3_2.png",
    alt: "Второе фото",
  },
  {
    id: "3",
    url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/3d23bd4a-51b0-4dee-80f3-9eaac1bf6b00/photo/1754929559392_photo_3_3.png",
    alt: "Третье фото",
  },
  {
    id: "4",
    url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/3d23bd4a-51b0-4dee-80f3-9eaac1bf6b00/photo/1754929573282_photo_3_4.png",
    alt: "Четвертое фото",
  },
];

export function MemorialPhotosGallery({ className }: MemorialPhotosGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  return (
    <div className={cn("w-full py-16", className)}>
      <Typography.H2 className="text-white text-center mb-10" style={{ fontSize: "40px" }}>
        Фотографии
      </Typography.H2>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start max-w-4xl mx-auto">
        {/* Thumbnails List */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto order-2 lg:order-1">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={cn(
                "relative flex-shrink-0 transition-all duration-200",
                selectedPhoto.id === photo.id
                  ? "opacity-100 ring-2 ring-[#F6B95A]"
                  : "opacity-50 hover:opacity-75"
              )}
              style={{ width: "80px", height: "80px" }}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover rounded"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Main Photo */}
        <div className="relative order-1 lg:order-2" style={{ width: "600px", height: "600px", maxWidth: "100%" }}>
          <Image
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
      </div>
    </div>
  );
}