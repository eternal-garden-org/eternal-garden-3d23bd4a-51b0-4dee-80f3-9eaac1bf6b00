import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotosGallery } from "@/components/memorial-photos-gallery";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { MemorialAudio } from "@/components/memorial-audio";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHeader
        fullName="Александр Викторович Карпук"
        birthDate="1970-06-11"
        deathDate="2025-08-05"
        photoUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/3d23bd4a-51b0-4dee-80f3-9eaac1bf6b00/photo/1754929507313_main_image_3.png"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
        backgroundImage="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/3d23bd4a-51b0-4dee-80f3-9eaac1bf6b00/photo/1754929528193_bg_image_3.png"
      />
      <Container>
        <MemorialBio 
          firstName="Александр"
          lastName="Карпук"
        />
        <MemorialPhotosGallery />
        <MemorialInfo 
          firstName="Александр"
        />
      </Container>
      <MemorialQuotes 
        firstName="Александр"
        middleName="Викторович"
      />
      <Container>
        <MemorialMedia />
        <MemorialAudio />
        <MemorialWords 
          firstName="Александр"
          lastName="Карпук"
        />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}