import { equipeMock } from "@/lib/mock-data";
import CorpoClinicoPageClient from "./corpo-clinico-client";

export const metadata = {
  title: "Corpo Clínico | OralElite",
  description: "Conheça nossos cirurgiões-dentistas especialistas em implantes, ortodontia e estética bucal avançada. Profissionais com registro ativo no CRO e constante atualização internacional.",
};

export default function CorpoClinicoPage() {
  return <CorpoClinicoPageClient equipeMock={equipeMock} />;
}
