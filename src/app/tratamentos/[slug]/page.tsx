import { notFound } from "next/navigation";
import { tratamentosMock } from "@/lib/mock-data";
import TratamentoDetalheClient from "./tratamento-detalhe-client";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Gerador de parâmetros estáticos (SSG) no build de produção
export async function generateStaticParams() {
  return tratamentosMock.map((treatment) => ({
    slug: treatment.slug,
  }));
}

// 2. Metadados Dinâmicos baseados no tratamento selecionado
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = tratamentosMock.find((t) => t.slug === slug);
  
  if (!treatment) {
    return {
      title: "Tratamento não encontrado | OralElite",
    };
  }

  return {
    title: `${treatment.titulo} | OralElite`,
    description: treatment.descricaoCurta,
  };
}

export default async function TratamentoDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = tratamentosMock.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return <TratamentoDetalheClient treatment={treatment} />;
}
