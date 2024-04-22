import Tema from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nomeProduto: string;
  valorProduto: string;
  quantidadeProduto: string;
  descricaoProduto: String | null;
  data: String;
  categoria: String | null;
}