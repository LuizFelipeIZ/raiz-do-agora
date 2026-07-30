'use client';
import { useState } from 'react';

// ==========================================
// 📍 ÁREA DE DADOS (LISTA DE 15 PRODUTORES)
// ==========================================
const produtores = [
  {
    id: 1,
    nome_produtor: "Naiara de Souza Ventura",
    nome_produto: "Ventura's Cafés Especiais",
    localizacao_texto: "Sítio Ribeirãozinho • Muzambinho - MG",
    coordenadas: "-21.359639,-46.448333", 
    historia: "Comandando o Sítio Ribeirãozinho, Naiara uniu a delicadeza do toque feminino à força do trabalho no campo. Seus microlotes destacam notas frutadas, reflexo de uma colheita 100% seletiva e muito amor pelas terras de Muzambinho.",
    link_whatsapp: "https://wa.me/5535999349440?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.", 
    link_instagram: "https://www.instagram.com/cafeventuras/",
    imagem_produto: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  },
  {
    id: 2,
    nome_produtor: "Elias Antônio Ferreira Junior",
    nome_produto: "Familia Ferreira Cafés especiais",
    localizacao_texto: "Sítio Bela Vista • Muzambinho - MG",
    coordenadas: "-21.391851,-46.437372", 
    historia: "A tradição da Família Ferreira corre nas veias de Elias. Passado de geração em geração, o cultivo no Sítio Bela Vista alia o conhecimento dos antigos com novas técnicas de pós-colheita, resultando em uma xícara clássica, encorpada e inesquecível.",
    link_whatsapp: "https://wa.me/5535998637490?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/familia_ferreira_cafes/",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    nome_produtor: "Valdirene Aparecida de Souza Ferreira dipe",
    nome_produto: "Grãos do chico",
    localizacao_texto: "Serrinha dos Cristais • Muzambinho - MG",
    coordenadas: "-21.375535,-46.528124", 
    historia: "Na Serrinha dos Cristais, Valdirene trata o café como uma verdadeira obra de arte da natureza. O foco do Grãos do Chico é a agricultura sustentável e a preservação ambiental, o que traz para a bebida um frescor único e notas florais surpreendentes.",
    link_whatsapp: "https://wa.me/5535999581140?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/graosdochico/",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    nome_produtor: "Thales da silva rossi",
    nome_produto: "@cafejrossi",
    localizacao_texto: "Sítio Guatapará • Muzambinho - MG",
    coordenadas: "-21.334944,-46.528750", 
    historia: "Trazendo inovação para o Sítio Guatapará, Thales representa a nova geração de cafeicultores apaixonados. O Café JRossi passa por processos cuidadosos de secagem, criando um perfil de bebida exótica, doce e com acidez brilhante.",
    link_whatsapp: "https://wa.me/5535988346217?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafejrossi/",
    imagem_produto: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    nome_produtor: "Selma Salomão Bueno dos Reis",
    nome_produto: "@cafebellamaria",
    localizacao_texto: "Sítio Pinhal • Muzambinho - MG",
    coordenadas: "-21.389833,-46.520000", 
    historia: "No coração do Sítio Pinhal, Selma transforma trabalho duro em poesia líquida. O Café Bella Maria é fruto de uma seleção rigorosa dos melhores grãos da propriedade, oferecendo um café aconchegante, com notas de chocolate e caramelo.",
    link_whatsapp: "https://wa.me/5535991535704?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafebellamaria/",
    imagem_produto: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    nome_produtor: "Joana Caroline D'arc de Oliveira",
    nome_produto: "Imolive café",
    localizacao_texto: "Sítio Gonçalves • Muzambinho - MG",
    coordenadas: "-21.346278,-46.553639", 
    historia: "O Imolive Café nasceu da força e determinação de Joana no Sítio Gonçalves. Cada etapa, da florada à secagem em terreiro, é acompanhada de perto, resultando em um café limpo, equilibrado e que conquista paladares exigentes.",
    link_whatsapp: "https://wa.me/5535997063156?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/imolivecafe/",
    imagem_produto: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 7,
    nome_produtor: "Rogério Maciel Carvalho Benassi",
    nome_produto: "Café Benassi",
    localizacao_texto: "Fazenda Viaduto • Muzambinho - MG",
    coordenadas: "-21.355556,-46.483417", 
    historia: "A Fazenda Viaduto é o berço do Café Benassi. Aproveitando a altitude e o terroir privilegiado da região, Rogério cultiva grãos que passam por maturação lenta, entregando uma doçura natural e um aroma que invade todo o ambiente.",
    link_whatsapp: "https://wa.me/5535999079877?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafebenassi/",
    imagem_produto: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 8,
    nome_produtor: "Armando Santos (SUZANA)",
    nome_produto: "maturasso",
    localizacao_texto: "Fazenda São Domingos • Muzambinho - MG",
    coordenadas: "-21.354778,-46.462972", 
    historia: "Na Fazenda São Domingos, Armando e Suzana tratam o café como o verdadeiro ouro negro de Minas Gerais. O Maturasso é cultivado com zelo artesanal, trazendo para a xícara a rusticidade elegante da roça e um retrogosto muito marcante.",
    link_whatsapp: "https://wa.me/5535991355474?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/maturasso.cafes/",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 9,
    nome_produtor: "Renata Maria Martins Armelin",
    nome_produto: "Dom Aurelio",
    localizacao_texto: "Sítio-Fazenda Bela Vista • Muzambinho - MG",
    coordenadas: "-21.449472,-46.485194", 
    historia: "Renata transformou o Sítio Bela Vista na morada do Dom Aurélio. Com um olhar clínico para a qualidade, seus grãos são selecionados rigorosamente e secos lentamente, criando um microlote sofisticado, aveludado e cheio de personalidade.",
    link_whatsapp: "https://wa.me/5535992208080?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafedomaurelio/",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 10,
    nome_produtor: "Silmara Aparecida Anderson Magalhães",
    nome_produto: "Florisa",
    localizacao_texto: "Sítio Belém • Muzambinho - MG",
    coordenadas: "-21.431567,-46.571315", 
    historia: "No Sítio Belém, Silmara cultiva o Florisa com o coração. Cuidando de cada detalhe, desde o manejo no campo até a precisão da torra, ela oferece um café que é um abraço em forma de bebida, destacando notas doces e corpo cremoso.",
    link_whatsapp: "https://wa.me/5535999395080?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafe_florisa/",
    imagem_produto: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 11,
    nome_produtor: "Juliana Magalhães",
    nome_produto: "Café espoir",
    localizacao_texto: "Sítio Retiro • Muzambinho - MG",
    coordenadas: "-21.298611,-46.514222", 
    historia: "A busca pela xícara perfeita guiou Juliana na criação do Café Espoir no Sítio Retiro. Apostando em processos induzidos e muita pesquisa, seu café revela notas complexas de frutas maduras, elevando completamente a experiência de degustação.",
    link_whatsapp: "https://wa.me/5535998948301?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafeespecial.espoir/",
    imagem_produto: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 12,
    nome_produtor: "Micheli Cíndel Escudero",
    nome_produto: "Minas Golden Café",
    localizacao_texto: "Sítio Minas Golden • Muzambinho - MG",
    coordenadas: "-21.355361,-46.604472", 
    historia: "Com as mãos sujas de terra e o peito cheio de orgulho, Micheli faz do Minas Golden uma joia rara. Este café reflete toda a maestria da cafeicultura de montanha, entregando uma acidez equilibrada, cítrica e um final super prolongado.",
    link_whatsapp: "https://wa.me/5535992702134?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/minasgoldencafe/",
    imagem_produto: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 13,
    nome_produtor: "Paulo José Sotero",
    nome_produto: "MANJORÊ CAFÉ",
    localizacao_texto: "Sítio Cachoeira do Cambuí • Muzambinho - MG",
    coordenadas: "-21.391722,-46.437389", 
    historia: "Cercado pelas águas do Sítio Cachoeira do Cambuí, Paulo desenvolveu o Manjorê. A união de um microclima perfeito com um rigoroso processo de seleção natural garante grãos excepcionais, com aroma levemente floral e doçura vibrante.",
    link_whatsapp: "https://wa.me/5535991966264?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/manjore.cafe.especial/",
    imagem_produto: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 14,
    nome_produtor: "Tatiana Cardoso de Castro",
    nome_produto: "Lalato",
    localizacao_texto: "Sítio Morro Preto • Muzambinho - MG",
    coordenadas: "-21.316222,-46.555694", 
    historia: "Nas terras altas do Sítio Morro Preto, Tatiana dá vida ao Lalato. Um café que traduz o amor incondicional pela terra, apresentando uma bebida extremamente limpa, encorpada e com notas que lembram melaço e caramelo tostado.",
    link_whatsapp: "https://wa.me/5535998900972?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/lalatocafesespeciais/",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 15,
    nome_produtor: "Paula santini",
    nome_produto: "Maria Cecilia",
    localizacao_texto: "Sítio Brumado • Muzambinho - MG",
    coordenadas: "-21.412917,-46.526139", 
    historia: "Homenageando as raízes familiares no Sítio Brumado, Paula assina o Maria Cecilia. Um café que surpreende pela versatilidade: ideal para o conforto do dia a dia, mas com a complexidade de um especial, revelando nuances de nozes e cacau.",
    link_whatsapp: "https://wa.me/5535991607419?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/mariaceciliacafesespeciais/",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

// ==========================================
// 🤝 ÁREA DE DADOS (PATROCINADORES)
// ==========================================
const listaPatrocinadores = [
  { id: 1, nome: "Moderna Sabor & Qualidade", logo_url: "/patrocinadores/moderna.png" },
  { id: 2, nome: "Sorveteria Fruti Bom", logo_url: "/patrocinadores/fruit_bom.png" },
  { id: 3, nome: "Parada Obrigatória", logo_url: "/patrocinadores/parada_obg.png" },
  { id: 4, nome: "Matheus Pereira Leiloeiro", logo_url: "/patrocinadores/matheus_leilao.png" },
  { id: 5, nome: "Pastelaria Doce Vício", logo_url: "/patrocinadores/pastelaria_doce_vicio.png" },
  { id: 6, nome: "Bola de Grude", logo_url: "/patrocinadores/logo_boladegrude.png" },
  { id: 7, nome: "IFSULDEMINAS", logo_url: "/patrocinadores/logo_if.png" },
  { id: 8, nome: "Cometa Tintas", logo_url: "/patrocinadores/cometa.png" },
  { id: 9, nome: "FAEMG SENAR", logo_url: "/patrocinadores/spr_muz.png" },
  { id: 10, nome: "Soma Jr.", logo_url: "/patrocinadores/somajr.png" },
  { id: 11, nome: "Raiz do Agora", logo_url: "/patrocinadores/rai_do_agora.png" },
  { id: 12, nome: "COOPAM", logo_url: "/patrocinadores/coopam.png" },
  { id: 13, nome: "Agrifort Jr.", logo_url: "/patrocinadores/agrifort.png" }
];

const obterLinkEmbutido = (url: string) => {
  if (url.includes('watch?v=')) {
    const videoId = url.split('watch?v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&color=white&modestbranding=1`;
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&color=white&modestbranding=1`;
  }
  return url; 
};

// ==========================================
// 🎨 ESTRUTURA VISUAL DO SITE
// ==========================================
export default function Home() {
  const [visualizacaoPainel, setVisualizacaoPainel] = useState<Record<number, 'video' | 'mapa'>>({});

  const alternarPainel = (id: number, tipo: 'video' | 'mapa') => {
    setVisualizacaoPainel(prev => ({
      ...prev,
      [id]: prev[id] === tipo ? 'video' : tipo 
    }));
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#4A3525] font-sans overflow-x-hidden selection:bg-[#2D4A22] selection:text-white">
      
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-10 max-w-7xl mx-auto border-b border-[#eaddcf] bg-[#FDFBF7] sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider mb-4 md:mb-0">
          Raiz do <span className="text-[#2D4A22]">Agora</span>
        </h1>
        <nav className="flex flex-wrap justify-center gap-4 md:space-x-8 text-[11px] md:text-xs font-bold tracking-widest uppercase text-[#4A3525]">
          <a href="#origem" className="hover:text-[#2D4A22] transition-colors">Origem</a>
          <a href="#produtores" className="hover:text-[#2D4A22] transition-colors">Produtores</a>
          <a href="#patrocinadores" className="hover:text-[#2D4A22] transition-colors">Patrocinadores</a>
          <a href="#contato" className="hover:text-[#2D4A22] transition-colors">Contato</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="origem" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-[#2D4A22] font-bold text-xs md:text-sm tracking-widest uppercase mb-4 block">
            FAEMG Jovem • IFSULDEMINAS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6">
            A essência dos cafés especiais de Muzambinho.
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
            Conectamos você às histórias, ao trabalho árduo e aos sabores únicos das famílias produtoras da nossa região. Conheça a verdadeira raiz do nosso café.
          </p>
          <a href="#produtores" className="inline-block text-center bg-[#4A3525] text-[#FDFBF7] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#2D4A22] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto">
            Conhecer os Produtores
          </a>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            className="object-cover w-full h-full rounded-tl-[80px] md:rounded-tl-[120px] rounded-br-[80px] md:rounded-br-[120px] shadow-2xl" 
            alt="Plantação de café em Muzambinho" 
          />
        </div>
      </section>

      {/* SEÇÃO PRODUTORES */}
      <section id="produtores" className="bg-[#F4EFE8] py-20 md:py-24 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-[#4A3525]">
            Quem faz a magia acontecer
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 md:mb-20 text-base md:text-lg">
            Descubra os microlotes exclusivos e as famílias que colocam Muzambinho no mapa mundial dos cafés de altíssima qualidade.
          </p>

          <div className="space-y-16 md:space-y-24">
            {produtores.map((produtor) => {
              const view = visualizacaoPainel[produtor.id] || 'video'; 

              return (
                <div key={produtor.id} className="flex flex-col lg:flex-row bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                  
                  {/* Lado Esquerdo */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-6 mb-8">
                      <img 
                        src={produtor.imagem_produto} 
                        alt={`Foto de ${produtor.nome_produtor}`}
                        className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg border-[3px] border-[#2D4A22] flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3525] leading-tight mb-2">
                          {produtor.nome_produto}
                        </h3>
                        <p className="text-gray-500 font-medium text-sm md:text-base">
                          Por {produtor.nome_produtor}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <button 
                        onClick={() => alternarPainel(produtor.id, 'mapa')}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                          view === 'mapa' 
                            ? 'bg-[#2D4A22] text-white shadow-md' 
                            : 'text-[#2D4A22] bg-[#2D4A22]/10 hover:bg-[#2D4A22] hover:text-white'
                        }`}
                      >
                        <span className="text-sm">📍</span> {view === 'mapa' ? 'Voltar para o Vídeo' : 'Ver no Mapa'}
                      </button>
                      <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold ml-2">
                        {produtor.localizacao_texto}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg text-justify">
                      {produtor.historia}
                    </p>
                    
                    {/* ABA DE CONTATO COM OS LINKS ATUALIZADOS */}
                    <div className="mt-auto flex flex-col gap-3 bg-[#FDFBF7] border border-[#eaddcf] px-6 py-4 self-start rounded-xl shadow-sm w-full sm:w-auto">
                      <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                        Fale com o produtor
                      </span>
                      
                      <div className="flex flex-wrap gap-3">
                        {/* Botão WhatsApp */}
                        <a 
                          href={produtor.link_whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-[#1DA851] hover:-translate-y-0.5 transition-all shadow-md w-full sm:w-auto"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </a>

                        {/* Botão Instagram */}
                        <a 
                          href={produtor.link_instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md w-full sm:w-auto"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                          Instagram
                        </a>
                      </div>

                    </div>
                  </div>

                  {/* Lado Direito */}
                  <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto relative bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-200">
                    {view === 'video' ? (
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={obterLinkEmbutido(produtor.link_video)} 
                        title={`Vídeo da ${produtor.nome_produto}`}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        title={`Mapa da ${produtor.nome_produto}`}
                        src={`https://maps.google.com/maps?q=${produtor.coordenadas}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                      ></iframe>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO PATROCINADORES */}
      <section id="patrocinadores" className="py-20 bg-[#FDFBF7] border-t border-[#eaddcf]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#2D4A22] font-bold text-xs md:text-sm tracking-widest uppercase mb-2 block">
              Apoio & Parcerias
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3525]">
              Nossos Patrocinadores
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {listaPatrocinadores.map((patrocinador) => (
              <div 
                key={patrocinador.id} 
                className="bg-white rounded-2xl shadow-sm border border-[#eaddcf] p-6 flex items-center justify-center h-32 md:h-40 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <img 
                  src={patrocinador.logo_url} 
                  alt={`Logo ${patrocinador.nome}`}
                  title={patrocinador.nome}
                  className="max-h-full max-w-full object-contain mix-blend-multiply" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#3A2718] text-[#FDFBF7] py-16 md:py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif font-bold mb-2">Raiz do <span className="text-[#84b975]">Agora</span></h3>
            <p className="text-sm text-gray-300 leading-relaxed pr-0 md:pr-8">
              Projeto desenvolvido com dedicação por estudantes do IFSULDEMINAS para o FAEMG Jovem, valorizando a cafeicultura de Muzambinho.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest mb-2 text-[#84b975]">Contato</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">✉️ contato@raizdoagora.com.br</li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">📞 (35) 9 9999-9999</li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">📱 @raizdoagora.mz</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest mb-2 text-[#84b975]">Localização</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>IFSULDEMINAS - Campus Muzambinho</strong><br/>
              Estrada de Muzambinho, km 35<br/>
              Bairro Morro Preto<br/>
              Muzambinho - MG, 37890-000
            </p>
          </div>
          
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-[#4a3525] text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Raiz do Agora. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}