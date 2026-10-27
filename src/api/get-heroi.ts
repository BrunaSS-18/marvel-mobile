const BASE_URL = "http://10.92.198.17:8080/api/herois";

export async function BuscarHeroiPorId(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar detalhes do herói");
  }

  return response.json();
}