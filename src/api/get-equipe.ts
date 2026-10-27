const BASE_URL = "http://10.92.198.17:8080/api/equipes";

export async function BuscarEquipePorNome(nome: string) {
  const response = await fetch(`${BASE_URL}/busca?nome=${nome}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar a equipe");
  }

  return response.json();
}

export async function BuscarEquipes() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar todas as equipes");
  }

  return response.json();
}