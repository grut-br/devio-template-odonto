import { tratamentosMock } from "@/lib/mock-data";
import TratamentosPageClient from "./tratamentos-client";

export const metadata = {
  title: "Tratamentos Especializados | OralElite",
  description: "Explore nossa gama completa de soluções odontológicas de alto padrão: Implantes Guiados, Alinhadores Transparentes, Estética Avançada e Prevenção Digital.",
};

export default function TratamentosPage() {
  return <TratamentosPageClient tratamentosMock={tratamentosMock} />;
}
