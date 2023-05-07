import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

  const restaurantes: IRestaurante[] = [
    {
      id: 1,
      nome: "Lyllys Cafe",
      pratos: [
        {
          id: 1,
          descricao: 'Lasanha à Bolonhesa',
          imagem: 'https://renata.com.br/images/receitas/141/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg',
          nome: 'Lasanha',
          restaurante: 1,
          tag: 'Italiana'
        },
        {
          id: 2,
          descricao: 'Strogonoff de Frango à brasileira',
          imagem: 'https://img.itdg.com.br/images/recipes/000/002/462/332854/332854_original.jpg',
          nome: 'Strogonoff',
          restaurante: 1,
          tag: 'Russa'
        },
        {
          id: 3,
          descricao: 'Empadão de Frango',
          imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOMOwSMvc1z8UGW8gdxLqquPo6t_zS55mw07JxxNaAbfeduQA_duudjGxcIH98yJ9XWUPb9b_kPCaJFFVowmI3OOmFUlWf1gtBStivgf4VeKJw07zy_0_2oL1fLNt3l39FONfhzQW95zvdJQ2622gdCZDPn6H2kHpuC-TwZH-mVQ0qKd5rL_fFCUSe/s2000/receita-de-empadao-de-frango.jpg',
          nome: 'Empadão de Frango',
          restaurante: 1,
          tag: 'Portuguesa'
        }
      ]
    },
    {
      id: 2,
      nome: "Sugiro Sushi",
      pratos: [
        {
          id: 1,
          descricao: 'Combinado de 8 peças',
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
          nome: 'Sushi',
          restaurante: 1,
          tag: 'Japonesa'
        },
        {
          id: 2,
          descricao: 'Sashimi de Salmão',
          imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
          nome: 'Sashimi',
          restaurante: 1,
          tag: 'Japonesa'
        }
      ]
    },
    {
      id: 3,
      nome: "Cantina da Escola",
      pratos: [
        {
          id: 1,
          descricao: 'Salgado de queijo com presunto',
          imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/102/312/279767/279767_original.jpg',
          nome: 'Quejunto',
          restaurante: 1,
          tag: 'Lanche'
        },
        {
          id: 2,
          descricao: 'Coxinha de Frango',
          imagem: 'https://t1.rg.ltmcdn.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg',
          nome: 'Coxinha',
          restaurante: 1,
          tag: 'Lanche'
        },
        {
          id: 3,
          descricao: 'Risole de Palmito',
          imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/005/116/323871/323871_original.jpg',
          nome: 'Risole',
          restaurante: 1,
          tag: 'Lanche'
        }
      ]
    }
  ]

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
  </section>)
}

export default ListaRestaurantes