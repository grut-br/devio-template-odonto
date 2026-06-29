import { conveniosMock } from "@/lib/mock-data";
import ConveniosPageClient from "./convenios-client";

export const metadata = {
  title: "Convênios e Reembolso | OralElite",
  description: "Consulte a cobertura de planos odontológicos aceitos na clínica OralElite. Saiba como funciona o sistema de reembolso livre escolha para convênios corporativos de alto padrão.",
};

export default function ConveniosPage() {
  return <ConveniosPageClient conveniosMock={conveniosMock} />;
}
