type Props = {
  secao: string;
  titulo: string;
  descricao: string;
  itens: string[];
};

/** Página provisória de uma aba, até a funcionalidade dela ser construída. */
export function PaginaEmConstrucao({ secao, titulo, descricao, itens }: Props) {
  return (
    <>
      <div className="pagina__titulo">
        <p className="rotulo">{secao}</p>
        <h1>{titulo}</h1>
        <p className="texto-secundario">{descricao}</p>
      </div>

      <section className="cartao">
        <h2>O que vai aparecer aqui</h2>
        <ul className="lista">
          {itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
