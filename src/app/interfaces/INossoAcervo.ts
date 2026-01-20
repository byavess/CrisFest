

export interface INossoAcervo {

  id: number;
 // marca: IMenians,
 //odelo: IModelo;
  ano: number;
  km?: number;
  preco: number;
  descricao: string;
  urlsFotos: string[];
  cor?: string;
  motor?: string;
  cambio?: string;
  combustivel?: string;
  emOferta?: boolean;
  imagem: Blob | null;
  vendido?: boolean;
  placa?: string;
  infoVenda?: string;
}