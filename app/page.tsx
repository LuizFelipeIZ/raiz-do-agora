'use client';
import { useState } from 'react';

// ==========================================
// 📍 ÁREA DE DADOS (PRODUTORES)
// ==========================================
const produtores = [
  {
    id: 1,
    nome_produtor: "Naiara de Souza Ventura",
    nome_produto: "Ventura's Cafés Especiais",
    localizacao_texto: "Sítio Ribeirãozinho • Muzambinho/MG",
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
    localizacao_texto: "Sítio Bela Vista • Muzambinho/MG",
    coordenadas: "-21.391851,-46.437372", 
    historia: "A tradição da Família Ferreira corre nas veias de Elias. Passado de geração em geração, o cultivo no Sítio Bela Vista alia o conhecimento dos antigos com novas técnicas de pós-colheita, resultando em uma xícara clássica, encorpada e inesquecível.",
    link_whatsapp: "https://wa.me/5535998637490?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/familia_ferreira_cafes/",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    nome_produtor: "Valdirene Aparecida de Souza",
    nome_produto: "Grãos do chico",
    localizacao_texto: "Serrinha dos Cristais • Muzambinho/MG",
    coordenadas: "-21.407444,-46.513748", 
    historia: "Na Serrinha dos Cristais, Valdirene trata o café como uma verdadeira obra de arte da natureza. O foco do Grãos do Chico é a agricultura sustentável e a preservação ambiental, o que traz para a bebida um frescor único e notas florais.",
    link_whatsapp: "https://wa.me/5535999581140?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/graosdochico/",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    nome_produtor: "Thales da Silva Rossi",
    nome_produto: "Cafejrossi",
    localizacao_texto: "Sítio Guatapará • Muzambinho/MG",
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
    nome_produto: "Cafebellamaria",
    localizacao_texto: "Sítio Pinhal • Muzambinho/MG",
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
    localizacao_texto: "Sítio Gonçalves • Muzambinho/MG",
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
    localizacao_texto: "Fazenda Viaduto • Muzambinho/MG",
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
    nome_produto: "Maturasso",
    localizacao_texto: "Fazenda São Domingos • Muzambinho/MG",
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
    localizacao_texto: "Sítio Bela Vista • Muzambinho/MG",
    coordenadas: "-21.449472,-46.485194", 
    historia: "Renata transformou o Sítio Bela Vista na morada do Dom Aurélio. Com um olhar clínico para a qualidade, seus grãos são selecionados rigorosamente e secos lentamente, criando um microlote sofisticado, aveludado e cheio de personalidade.",
    link_whatsapp: "https://wa.me/5535992208080?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/cafedomaurelio/",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 10,
    nome_produtor: "Silmara Aparecida Anderson",
    nome_produto: "Florisa",
    localizacao_texto: "Sítio Belém • Muzambinho/MG",
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
    nome_produto: "Café Espoir",
    localizacao_texto: "Sítio Retiro • Muzambinho/MG",
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
    localizacao_texto: "Sítio Minas Golden • Muzambinho/MG",
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
    nome_produto: "Manjorê Café",
    localizacao_texto: "Sítio Cachoeira do Cambuí • Muzambinho/MG",
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
    localizacao_texto: "Sítio Morro Preto • Muzambinho/MG",
    coordenadas: "-21.316222,-46.555694", 
    historia: "Nas terras altas do Sítio Morro Preto, Tatiana dá vida ao Lalato. Um café que traduz o amor incondicional pela terra, apresentando uma bebida extremamente limpa, encorpada e com notas que lembram melaço e caramelo tostado.",
    link_whatsapp: "https://wa.me/5535998900972?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/lalatocafesespeciais/",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 15,
    nome_produtor: "Paula Santini",
    nome_produto: "Maria Cecilia",
    localizacao_texto: "Sítio Brumado • Muzambinho/MG",
    coordenadas: "-21.412917,-46.526139", 
    historia: "Homenageando as raízes familiares no Sítio Brumado, Paula assina o Maria Cecilia. Um café que surpreende pela versatilidade: ideal para o conforto do dia a dia, mas com a complexidade de um especial, revelando nuances de nozes e cacau.",
    link_whatsapp: "https://wa.me/5535991607419?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20produto.",
    link_instagram: "https://www.instagram.com/mariaceciliacafesespeciais/",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

// ==========================================
// 🤝 ÁREA DE DADOS (PATROCINADORES E APOIADORES)
// ==========================================
// Removi as descrições dos patrocinadores para igualar as caixas
const listaPatrocinadores = [
  { id: 1, nome: "Moderna", logo_url: "/patrocinadores/moderna.jpg" },
  { id: 2, nome: "Fruti Bom", logo_url: "/patrocinadores/fruit_bom.jpg" },
  { id: 3, nome: "Parada Obrigatória", logo_url: "/patrocinadores/parada_obg.jpg" },
  { id: 4, nome: "Matheus Pereira", logo_url: "/patrocinadores/matheus_leilao.jpg" },
  { id: 5, nome: "Doce Vício", logo_url: "/patrocinadores/pastelaria_doce_vicio.jpg" },
  { id: 6, nome: "Bola de Grude", logo_url: "/patrocinadores/logo_boladegrude.jpg" },
  { id: 8, nome: "Cometa Tintas", logo_url: "/patrocinadores/cometa.jpg" },
  { id: 10, nome: "Soma Jr.", logo_url: "/patrocinadores/somajr.jpg" },
  { id: 12, nome: "COOPAM", logo_url: "/patrocinadores/coopam.jpg" },
  { id: 13, nome: "Agrifort Jr.", logo_url: "/patrocinadores/agrifort.jpg" }
];

const listaApoiadores = [
  { id: 7, nome: "IFSULDEMINAS", logo_url: "/patrocinadores/logo_if.jpg" },
  { id: 9, nome: "SPR Muzambinho", logo_url: "/patrocinadores/spr_muz.jpg" },
  { id: 11, nome: "Raiz do Agora", logo_url: "/patrocinadores/rai_do_agora.jpg" },
  { id: 14, nome: "FAEMG SENAR", logo_url: "/patrocinadores/faemg_senar.jpg" },
  { id: 15, nome: "Maratona FAEMG", logo_url: "/patrocinadores/maratona_faemg.jpg" }
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
    <main className="min-h-screen bg-[#F4EFE8] text-[#1B2F20] font-sans overflow-x-hidden selection:bg-[#B89247] selection:text-white">
      
      {/* HEADER */}
      <header className="flex flex-col xl:flex-row justify-between items-center py-5 px-6 md:px-12 bg-[#F4EFE8] sticky top-0 z-50 shadow-sm border-b border-[#e1d5c1]">
        {/* LOGO COM A PLANTINHA */}
        <div className="flex items-center gap-3 mb-4 xl:mb-0">
          <svg className="w-8 h-8 text-[#1B2F20]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V10M12 10C8.686 10 6 7.314 6 4c0 0 3.5 0 6 3.5C14.5 4 18 4 18 4c0 3.314-2.686 6-6 6zM12 16c-2.5 0-4.5-2-4.5-4.5 0 0 2 0 4.5 2zM12 16c2.5 0 4.5-2 4.5-4.5 0 0-2 0-4.5 2z" />
          </svg>
          <h1 className="text-xl font-bold tracking-tight text-[#1B2F20] leading-tight">
            RAIZ DO<br/>AGORA
          </h1>
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-[11px] font-bold tracking-widest uppercase text-[#333333]">
          <a href="#inicio" className="hover:text-[#B89247] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B89247]">Início</a>
          <a href="#produtores" className="hover:text-[#B89247] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B89247]">Produtores</a>
          <a href="#sobre" className="hover:text-[#B89247] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B89247]">Sobre o Projeto</a>
          <a href="#patrocinadores" className="hover:text-[#B89247] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B89247]">Patrocinadores</a>
          <a href="#contato" className="hover:text-[#B89247] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B89247]">Contato</a>
        </nav>

        {/* BOTÃO AÇÃO NO TOPO À DIREITA (TBM COM A PLANTINHA) */}
        <a href="#produtores" className="hidden xl:inline-flex items-center gap-2 bg-[#1B2F20] text-[#F4EFE8] px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#284630] transition-colors">
          Conheça os Produtores
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V10M12 10C8.686 10 6 7.314 6 4c0 0 3.5 0 6 3.5C14.5 4 18 4 18 4c0 3.314-2.686 6-6 6z" />
          </svg>
        </a>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative bg-[#1B2F20] text-[#F4EFE8] overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-40 lg:opacity-80 mask-image-gradient">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            className="object-cover w-full h-full"
            alt="Plantação de café em Muzambinho" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2F20] via-[#1B2F20]/80 to-transparent hidden lg:block"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-start lg:w-3/5">
          <span className="text-[#B89247] font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
            NOSSO PROPÓSITO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6">
            Conectamos histórias,<br/>valorizamos origens.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
            O Raiz do Agora é um projeto que dá voz aos produtores de cafés especiais do Sul de Minas, contando suas histórias, valorizando suas origens e aproximando pessoas através de cada xícara.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#produtores" className="inline-flex items-center gap-2 bg-[#2D4A33] text-[#F4EFE8] px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#B89247] transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Conheça os Produtores
            </a>
            <a href="#sobre" className="inline-flex items-center gap-2 border border-[#F4EFE8] text-[#F4EFE8] px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#F4EFE8] hover:text-[#1B2F20] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Assista ao Vídeo
            </a>
          </div>
        </div>
      </section>

      {/* BARRA FLUTUANTE INFORMATIVA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 -mt-10 lg:-mt-16 mb-16">
        <div className="bg-[#F4EFE8] rounded-2xl shadow-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#e1d5c1] p-2">
          
          <div className="flex-1 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-[#B89247]"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-1">Produtores Reais</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Histórias verdadeiras de quem cultiva com dedicação.</p>
            </div>
          </div>
          
          <div className="flex-1 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-[#B89247]"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 8h-3V4H3v13a4 4 0 004 4h9a4 4 0 004-4V8zM7 4v5M11 4v5M15 4v5" /></svg></div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-1">Cafés Especiais</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Grãos selecionados com qualidade e rastreabilidade.</p>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-[#B89247]"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-1">Sustentabilidade</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Valorizamos práticas que respeitam a terra e o futuro.</p>
            </div>
          </div>

        </div>
      </div>

      {/* SEÇÃO SOBRE O PROJETO */}
      <section id="sobre" className="max-w-7xl mx-auto px-6 md:px-12 py-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#B89247] font-bold text-xs tracking-widest uppercase mb-4 block">
            SOBRE O PROJETO
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B2F20] leading-[1.2] mb-6">
            Mais que cafés,<br/>histórias que transformam.
          </h2>
          <div className="space-y-4 text-sm text-gray-600 mb-8 leading-relaxed">
            <p>
              Acreditamos que cada café carrega muito mais do que sabor: carrega história, tradição, cuidado e propósito.
            </p>
            <p>
              Por isso, criamos o Raiz do Agora: para dar visibilidade aos produtores do Sul de Minas, fortalecer suas marcas e conectar seus cafés ao mundo através do digital e do storytelling.
            </p>
          </div>
          <a href="#produtores" className="inline-flex items-center gap-2 bg-[#1B2F20] text-[#F4EFE8] px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#284630] transition-colors">
            Saiba mais sobre o projeto &rarr;
          </a>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
            alt="Produtor de café olhando as montanhas" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:bg-white/40 transition-colors">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <p className="absolute bottom-6 left-6 font-serif text-white text-2xl drop-shadow-md">
            Cada história<br/><span className="text-[#B89247] italic">tem raiz.</span>
          </p>
        </div>
      </section>

      {/* SEÇÃO PRODUTORES */}
      <section id="produtores" className="py-20 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <span className="text-[#B89247] font-bold text-xs tracking-widest uppercase mb-2 block">
              Nossos Cafés
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B2F20]">
              Conheça os Produtores
            </h2>
          </div>

          <div className="space-y-16">
            {produtores.map((produtor) => {
              const view = visualizacaoPainel[produtor.id] || 'video'; 

              return (
                <div key={produtor.id} className="bg-white rounded-3xl shadow-sm border border-[#eaddcf] overflow-hidden">
                  
                  <div className="flex flex-col lg:flex-row">
                    
                    <div className="w-full lg:w-[40%] bg-gray-900 relative min-h-[300px] lg:min-h-[450px]">
                      {view === 'video' ? (
                        <iframe 
                          className="absolute inset-0 w-full h-full"
                          src={obterLinkEmbutido(produtor.link_video)} 
                          title={`Vídeo de ${produtor.nome_produtor}`}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <iframe 
                          className="absolute inset-0 w-full h-full"
                          title={`Mapa de ${produtor.nome_produtor}`}
                          src={`https://maps.google.com/maps?q=${produtor.coordenadas}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                          frameBorder="0"
                          scrolling="no"
                        ></iframe>
                      )}
                    </div>

                    <div className="w-full lg:w-[35%] p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#eaddcf]">
                      <span className="inline-block bg-[#eaf0eb] text-[#1B2F20] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 self-start">
                        Produtor
                      </span>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1B2F20] leading-tight mb-2">
                        {produtor.nome_produtor}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium flex items-center gap-2 mb-6">
                        <svg className="w-4 h-4 text-[#B89247]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        {produtor.localizacao_texto}
                      </p>
                      
                      <hr className="border-[#eaddcf] mb-6 w-12" />
                      
                      <h4 className="text-xs font-bold tracking-widest text-[#1B2F20] mb-3">
                        SOBRE A PROPRIEDADE
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed text-justify">
                        {produtor.historia}
                      </p>
                    </div>

                    <div className="w-full lg:w-[25%] p-8 flex flex-col items-center justify-center bg-[#fcfaf7]">
                      <img 
                        src={produtor.imagem_produto} 
                        alt={produtor.nome_produto}
                        className="w-48 h-64 object-cover rounded-xl shadow-lg border border-[#eaddcf] mb-4"
                      />
                      <span className="text-xs font-bold text-[#B89247] tracking-widest uppercase text-center">
                        {produtor.nome_produto}
                      </span>
                    </div>

                  </div>

                  <div className="bg-[#fcfaf7] border-t border-[#eaddcf] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Região</span>
                      <strong className="text-lg text-[#1B2F20] font-serif">Sul de Minas Gerais</strong>
                    </div>

                    <div className="flex flex-col items-center w-full md:w-1/3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Fale com o produtor</span>
                      <div className="flex gap-8">
                        <a href={produtor.link_whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-[#1B2F20] hover:text-[#25D366] transition-colors group">
                          <div className="w-10 h-10 rounded-full bg-[#f4efe8] flex items-center justify-center border border-[#eaddcf] group-hover:border-[#25D366]">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                          </div>
                          <span className="text-[10px] font-bold">WhatsApp</span>
                        </a>
                        <a href={produtor.link_instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-[#1B2F20] hover:text-[#C13584] transition-colors group">
                          <div className="w-10 h-10 rounded-full bg-[#f4efe8] flex items-center justify-center border border-[#eaddcf] group-hover:border-[#C13584]">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-[10px] font-bold">Instagram</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Localização</span>
                       <button 
                        onClick={() => alternarPainel(produtor.id, 'mapa')}
                        className="inline-flex items-center gap-2 border-2 border-[#1B2F20] text-[#1B2F20] px-6 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-wider hover:bg-[#1B2F20] hover:text-[#F4EFE8] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                        {view === 'mapa' ? 'Ver Vídeo' : 'Ver no Mapa'}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO PATROCINADORES E APOIADORES (INTRO) */}
      <section className="bg-[#1B2F20] py-20 border-t-4 border-[#B89247] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-[#B89247] font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
            PATROCINADORES E APOIADORES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-2xl">
            Juntos, fortalecemos histórias e cultivamos o futuro.
          </h2>
          <hr className="border-[#B89247] w-16 mb-6" />
          <p className="text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
            Agradecemos às empresas e instituições que acreditam no valor dos cafés especiais e no poder das conexões que transformam.
          </p>
        </div>
      </section>

      {/* GRIDS DE LOGOS */}
      <section id="patrocinadores" className="py-20 bg-[#F4EFE8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Patrocinadores */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <hr className="w-16 md:w-32 border-[#B89247]" />
              <span className="text-[#1B2F20] font-bold text-sm md:text-base tracking-widest uppercase flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B89247]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                PATROCINADORES
              </span>
              <hr className="w-16 md:w-32 border-[#B89247]" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {listaPatrocinadores.map((patrocinador) => (
                <div key={patrocinador.id} className="bg-white rounded-2xl shadow-sm border border-[#eaddcf] p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all text-center h-[140px] md:h-[160px]">
                  <div className="h-full w-full flex items-center justify-center">
                    <img src={patrocinador.logo_url} alt={patrocinador.nome} className="max-h-full max-w-[80%] object-contain mix-blend-multiply" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apoiadores */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-12">
              <hr className="w-16 md:w-32 border-[#B89247]" />
              <span className="text-[#1B2F20] font-bold text-sm md:text-base tracking-widest uppercase flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B89247]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                APOIADORES
              </span>
              <hr className="w-16 md:w-32 border-[#B89247]" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {listaApoiadores.map((apoiador) => (
                <div key={apoiador.id} className="bg-white rounded-2xl shadow-sm border border-[#eaddcf] p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all h-[140px] md:h-[160px]">
                  <div className="h-full w-full flex items-center justify-center">
                    <img src={apoiador.logo_url} alt={apoiador.nome} className="max-h-full max-w-[80%] object-contain mix-blend-multiply" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner Seja um Apoiador */}
          <div className="mt-16 bg-[#eae4d9] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#eaddcf]">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#1B2F20] text-[#F4EFE8] flex items-center justify-center shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
              </div>
              <div>
                <h4 className="text-[#1B2F20] font-bold text-sm md:text-base mb-1">Acreditamos que parcerias cultivam oportunidades.</h4>
                <p className="text-gray-600 text-xs md:text-sm">Obrigado por fazerem parte dessa jornada com a gente!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-[#d3cbbd] pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#1B2F20] mb-1">Seja um apoiador</h4>
                <p className="text-xs text-gray-500 mb-3">Entre em contato e saiba como apoiar o projeto.</p>
                <a href="#contato" className="inline-flex items-center gap-2 bg-[#1B2F20] text-[#F4EFE8] px-5 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-wider hover:bg-[#284630] transition-colors">
                  Falar Conosco
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#1B2F20] text-[#F4EFE8] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight mb-2">RAIZ DO <span className="text-[#B89247]">AGORA</span></h3>
            <p className="text-sm text-gray-300 leading-relaxed pr-0 md:pr-8">
              Projeto desenvolvido com dedicação por estudantes do IFSULDEMINAS para o FAEMG Jovem, valorizando a cafeicultura de Muzambinho.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[11px] uppercase tracking-widest mb-2 text-[#B89247]">Contato</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">✉️ raizdoagora.muz@gmail.com</li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">📱 @raizdoagora.muz</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[11px] uppercase tracking-widest mb-2 text-[#B89247]">Localização</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>IFSULDEMINAS - Campus Muzambinho</strong><br/>
              Estrada de Muzambinho, km 35<br/>
              Bairro Morro Preto<br/>
              Muzambinho - MG, 37890-000
            </p>
          </div>
          
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#2D4A33] text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Raiz do Agora. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}