import { Phone, Mail } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialContactsProps {
  className?: string;
}

const contactsData = [
  {
    id: "1",
    name: "Ольга Сергеевна",
    relation: "Жена",
    phone: "+375 (29) 123-45-67",
    email: "olga.karpuk@mail.by",
  },
  {
    id: "2",
    name: "Полина",
    relation: "Дочь",
    phone: "+375 (29) 123-45-67",
  },
];

export function MemorialContacts({ className }: MemorialContactsProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Typography.H2 className="text-white text-center mb-10" style={{ fontSize: "40px" }}>
        Контакты
      </Typography.H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
        {contactsData.map((contact) => (
          <div
            key={contact.id}
            className="w-full max-w-[450px] rounded-lg p-10"
            style={{ 
              backgroundColor: "#2D2D2D",
              backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.8), rgba(45, 45, 45, 0.8))`,
            }}
          >
            <div className="space-y-4">
              <div style={{ marginBottom: "4px" }}>
                <Typography.Small className="text-white" style={{ fontSize: "12px" }}>
                  {contact.relation}
                </Typography.Small>
                <Typography.P className="text-white font-bold !mt-1" style={{ fontSize: "16px" }}>
                  {contact.name}
                </Typography.P>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={20} style={{ color: "#8B8B8B" }} />
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-white hover:text-primary transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    {contact.phone}
                  </a>
                </div>

                {contact.email && (
                  <div className="flex items-center gap-3">
                    <Mail size={20} style={{ color: "#8B8B8B" }} />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white hover:text-primary transition-colors"
                      style={{ fontSize: "16px" }}
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}