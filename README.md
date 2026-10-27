# README - Frontend Mobile (Expo / React Native)

## Marvel Mobile App

Aplicação mobile desenvolvida em **React Native** com **Expo** e **Expo Router** para a visualização, catálogo e navegação pelas equipas e heróis da Marvel, consumindo os dados da **Marvel API** (Spring Boot).

---

### Tecnologias Utilizadas

* **Framework:** Expo (React Native)
* **Navegação:** Expo Router (File-based Routing)
* **Gestão de Estado/Cache:** TanStack React Query (`@tanstack/react-query`)
* **Linguagem:** TypeScript
* **Componentes visuais:** `FlatList`, `TouchableOpacity`, `ActivityIndicator`, `Image`

---

### Estrutura de Ecrãs e Funcionalidades

* **Visualização por Equipa (`TelaEquipe`):** Exibe o logótipo da equipa selecionada (`Vingadores`, `X-Men`, `Quarteto Fantástico`, `Guardiões da Galáxia`) e a lista dos respetivos membros em cartões brancos estilizados (*white card style*).
* **Detalhes do Herói (`catalogo/heroi/[id]`):** Carrega e exibe os dados detalhados do herói (nome real, ocupação, poderes, inimigos e filmes) utilizando rotas dinâmicas do Expo Router.

---

### Configuração de Acesso à API

Para que a aplicação consuma a API Spring Boot a partir de um dispositivo físico ou emulador, configure o endereço IP da máquina local no ficheiro de integração da API (ex: `src/api/get-equipe.ts` e `src/api/get-heroi.ts`):

```typescript
// IP local da máquina na rede
const API_URL = "http://10.92.198.17:8080/api";

```

> **Atenção:** Garanta que a porta utilizada seja **`8080`** (backend Spring Boot) e não a porta `8081` (Metro Bundler do Expo).

---

### Como Executar

1. Instale as dependências do projeto:
```bash
npm install

```


2. Inicie o servidor do Metro/Expo:
```bash
npx expo start

```


3. Abra a aplicação:
* **Dispositivo Físico:** Utilize a aplicação **Expo Go** para ler o código QR no ecrã do terminal.
* **Emulador Android/iOS:** Pressione `a` para Android ou `i` para iOS no terminal.