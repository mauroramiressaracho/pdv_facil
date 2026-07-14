import type { Categoria, Configuracao, Produto } from "../types";
import { uid } from "../utils/format";

export const initialCategories: Categoria[] = [
  { id: "cat-produtos", nome: "Produtos", ordem: 1, ativo: true, icone: "products" },
  { id: "cat-bebidas", nome: "Bebidas", ordem: 2, ativo: true, icone: "drink" },
  { id: "cat-servicos", nome: "Servicos", ordem: 3, ativo: true, icone: "services" },
  { id: "cat-outros", nome: "Outros", ordem: 4, ativo: true, icone: "more" },
];

const now = new Date().toISOString();

export const initialProducts: Produto[] = [
  { id: "prod-item-1", nome: "Produto Exemplo 1", preco: 10, categoriaId: "cat-produtos", icone: "📦", ativo: true, ordem: 1, criadoEm: now },
  { id: "prod-item-2", nome: "Produto Exemplo 2", preco: 15, categoriaId: "cat-produtos", icone: "🛍️", ativo: true, ordem: 2, criadoEm: now },
  { id: "prod-item-3", nome: "Produto Exemplo 3", preco: 20, categoriaId: "cat-produtos", icone: "🏷️", ativo: false, ordem: 3, criadoEm: now },
  { id: "prod-agua", nome: "Agua Mineral", preco: 5, categoriaId: "cat-bebidas", icone: "💧", ativo: false, ordem: 1, criadoEm: now },
  { id: "prod-refri", nome: "Refrigerante", preco: 6, categoriaId: "cat-bebidas", icone: "🥤", ativo: false, ordem: 2, criadoEm: now },
  { id: "prod-cafe", nome: "Cafe", preco: 4, categoriaId: "cat-bebidas", icone: "☕", ativo: false, ordem: 3, criadoEm: now },
  { id: "prod-servico-1", nome: "Servico Exemplo", preco: 25, categoriaId: "cat-servicos", icone: "🧾", ativo: false, ordem: 1, criadoEm: now },
  { id: "prod-servico-2", nome: "Taxa de Entrega", preco: 8, categoriaId: "cat-servicos", icone: "🚚", ativo: false, ordem: 2, criadoEm: now },
  { id: "prod-outros", nome: "Item Avulso", preco: 10, categoriaId: "cat-outros", icone: "➕", ativo: false, ordem: 1, criadoEm: now },
].map((product) => ({ ...product, id: product.id || uid("prod") }));

export const defaultSettings: Configuracao = {
  id: "default",
  nomeEvento: "CAIXA FÁCIL MRS",
  subtitulo: "SISTEMA COMERCIAL",
  mensagemComanda: "OBRIGADO PELA PREFERENCIA!",
  operadorPadrao: "",
  impressaoAtivada: true,
  larguraMm: 58,
  vias: 1,
  mostrarValores: true,
  mostrarTotal: true,
  mostrarPagamento: true,
  rodape: "OBRIGADO PELA PREFERENCIA!",
};
