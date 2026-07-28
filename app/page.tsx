'use client';
import { useState } from 'react';

// ==========================================
// 📍 ÁREA DE DADOS (LISTA DE PRODUTORES - ALTA CONVERSÃO)
// Textos criados com gatilhos de vendas, storytelling e termos sensoriais.
// ==========================================
const produtores = [
  {
    id: 1,
    nome_produtor: "Família Benassi",
    nome_propriedade: "Benassi Cafés Especiais",
    localizacao: "Muzambinho - MG",
    historia: "A tradição corre nas veias da Família Benassi. Com um microclima privilegiado e colheita seletiva manual, seus grãos passam por um rigoroso processo de secagem em terreiro suspenso, entregando uma xícara limpa, encorpada e com uma doçura natural que dispensa açúcar.",
    nota_cafe: "Amêndoas Torradas e Cacau",
    imagem_produto: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  },
  {
    id: 2,
    nome_produtor: "Aurélio Silva",
    nome_propriedade: "Dom Aurélio",
    localizacao: "Muzambinho - MG",
    historia: "O Dom Aurélio é o resultado de anos de estudo sobre a fermentação natural dos grãos. Produzido em encostas de alta altitude, este café possui uma acidez brilhante e um perfil exótico, ideal para quem busca uma verdadeira viagem sensorial a cada gole.",
    nota_cafe: "Rapadura e Laranja Doce",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    nome_produtor: "Roberto Ferreira",
    nome_propriedade: "Família Ferreira",
    localizacao: "Muzambinho - MG",
    historia: "Na propriedade da Família Ferreira, o respeito ao meio ambiente vem em primeiro lugar. O manejo sustentável e a dedicação diária na lavoura resultam em um café clássico do Sul de Minas: aveludado, denso e com finalizações longas e prazerosas.",
    nota_cafe: "Melaço e Frutas Cítricas",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    nome_produtor: "Ana Florisa",
    nome_propriedade: "Florisa",
    localizacao: "Muzambinho - MG",
    historia: "Delicadeza e força definem a produção da Florisa. Liderada por mulheres, a lavoura recebe um cuidado maternal, selecionando apenas as cerejas mais maduras. O resultado é uma bebida elegante, floral e extremamente aromática, que perfuma o ambiente ao ser coada.",
    nota_cafe: "Jasmim e Mel",
    imagem_produto: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    nome_produtor: "Irmãos Oliveira",
    nome_propriedade: "imolive",
    localizacao: "Muzambinho - MG",
    historia: "Inovação é a marca da imolive. Unindo a sabedoria dos antigos com a tecnologia das novas gerações de agrônomos, eles produzem microlotes exclusivos. Uma torra média perfeita que evidencia o potencial máximo dos açúcares do grão.",
    nota_cafe: "Chocolate Amargo e Avelã",
    imagem_produto: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    nome_produtor: "João Rossi",
    nome_propriedade: "JRossi",
    localizacao: "Muzambinho - MG",
    historia: "O café JRossi é sinônimo de consistência. Cultivado a 1.100m, o frio da madrugada prolonga a maturação dos grãos, intensificando os sabores. É aquele café que te abraça de manhã, encorpado e reconfortante.",
    nota_cafe: "Caramelo e Baunilha",
    imagem_produto: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 7,
    nome_produtor: "Família Lalato",
    nome_propriedade: "Lalato",
    localizacao: "Muzambinho - MG",
    historia: "Ausência de defeitos e explosão de sabores. A Família Lalato trata o café como uma verdadeira joia. Processado por via seca (Natural), os grãos absorvem toda a doçura da mucilagem, criando uma bebida licorosa e surpreendente.",
    nota_cafe: "Frutas Vermelhas e Vinho",
    imagem_produto: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 8,
    nome_produtor: "Pedro Henrique",
    nome_propriedade: "Minas Golden",
    localizacao: "Muzambinho - MG",
    historia: "O ouro negro de Muzambinho. Minas Golden é a representação do que Minas Gerais tem de melhor para oferecer ao mundo. Um lote premiado, com controle de temperatura na secagem que garante uma acidez cítrica refinada e refrescante.",
    nota_cafe: "Açúcar Mascavo e Pêssego",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 9,
    nome_produtor: "Naiara Costa",
    nome_propriedade: "Naiara",
    localizacao: "Muzambinho - MG",
    historia: "A dedicação de Naiara transformou a pequena propriedade familiar em um ícone de qualidade. Com um foco rigoroso na etapa de pós-colheita, seu café surpreende os paladares mais exigentes com notas cremosas e suaves.",
    nota_cafe: "Limão Siciliano e Chocolate Branco",
    imagem_produto: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 10,
    nome_produtor: "Selma Ribeiro",
    nome_propriedade: "Selma",
    localizacao: "Muzambinho - MG",
    historia: "História, afeto e muito suor. O café da Dona Selma é conhecido na região por sua torra artesanal impecável. Cada saca é tratada com um carinho ímpar, resultando em uma bebida encorpada que harmoniza perfeitamente com queijos mineiros.",
    nota_cafe: "Nozes e Caramelo Salgado",
    imagem_produto: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 11,
    nome_produtor: "Susana Alves",
    nome_propriedade: "Susana",
    localizacao: "Muzambinho - MG",
    historia: "Ousadia na xícara. Susana trouxe técnicas de vanguarda para o terreiro da família. Com fermentações induzidas e muita pesquisa, seu lote se destaca por um perfil especiado e marcante, fugindo do óbvio e conquistando apaixonados por cafés exóticos.",
    nota_cafe: "Especiarias e Cacau",
    imagem_produto: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 12,
    nome_produtor: "Valdirene Martins",
    nome_propriedade: "Valdirene",
    localizacao: "Muzambinho - MG",
    historia: "Da roça para o mundo, com orgulho e maestria. Valdirene conduz a lavoura com braço forte e olhar sensível. O solo vulcânico da região favorece seus grãos da variedade Bourbon Amarelo, entregando uma bebida intensa, doce e com uma complexidade apaixonante.",
    nota_cafe: "Frutas Amarelas e Melado",
    imagem_produto: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

// Função inteligente que transforma o link normal do YouTube em um link de "Embed" (Embutido)
const obterLinkEmbutido = (url: string) => {
  if (url.includes('watch?v=')) {
    const videoId = url.split('watch?v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  return url; 
};

// ==========================================
// 🎨 ESTRUTURA VISUAL DO SITE
// ==========================================
export default function Home() {
  const [videoAtivo, setVideoAtivo] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#4A3525] font-sans overflow-x-hidden selection:bg-[#2D4A22] selection:text-white">
      
      {/* HEADER LIMPO E ELEGANTE */}
      <header className="flex flex-col md:flex-row justify-between items-center py-8 px-10 max-w-7xl mx-auto border-b border-[#eaddcf] bg-[#FDFBF7]/90 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-3xl font-serif font-bold tracking-wider mb-4 md:mb-0">
          Raiz do <span className="text-[#2D4A22]">Agora</span>
        </h1>
        <nav className="flex space-x-8 md:space-x-12 text-xs font-bold tracking-widest uppercase text-[#4A3525]">
          <a href="#origem" className="hover:text-[#2D4A22] transition-colors">Nossa Origem</a>
          <a href="#produtores" className="hover:text-[#2D4A22] transition-colors">Produtores</a>
          <a href="#contato" className="hover:text-[#2D4A22] transition-colors">Contato</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="origem" className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#2D4A22] font-bold text-sm tracking-widest uppercase mb-4 block">
            FAEMG Jovem • IFSULDEMINAS
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6">
            A essência dos cafés especiais de Muzambinho.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
            Conectamos você às histórias, ao trabalho árduo e aos sabores únicos das famílias produtoras da nossa região. Conheça a verdadeira raiz do nosso café.
          </p>
          <a href="#produtores" className="inline-block bg-[#4A3525] text-[#FDFBF7] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#2D4A22] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Conhecer os Produtores
          </a>
        </div>
        <div className="relative h-[600px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            className="object-cover w-full h-full rounded-tl-[120px] rounded-br-[120px] shadow-2xl" 
            alt="Plantação de café em Muzambinho" 
          />
        </div>
      </section>

      {/* SEÇÃO PRODUTORES (Agora com 12 Produtores Vendedores) */}
      <section id="produtores" className="bg-[#F4EFE8] py-24 mt-12">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-serif font-bold text-center mb-6 text-[#4A3525]">
            Quem faz a magia acontecer
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20 text-lg">
            Descubra os microlotes exclusivos e as famílias que colocam Muzambinho no mapa mundial dos cafés de altíssima qualidade.
          </p>

          <div className="space-y-24">
            {produtores.map((produtor) => (
              <div key={produtor.id} className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-sm">
                
                {/* ÁREA DE MÍDIA: Imagem ou Vídeo */}
                <div className="relative h-[500px] w-full overflow-hidden bg-gray-900">
                  {videoAtivo === produtor.id ? (
                    <iframe 
                      className="w-full h-full"
                      src={obterLinkEmbutido(produtor.link_video)} 
                      title={`Vídeo da ${produtor.nome_propriedade}`}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={produtor.imagem_produto} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" 
                        alt={`Café ${produtor.nome_propriedade}`} 
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Botão que ativa o vídeo */}
                        <button 
                          onClick={() => setVideoAtivo(produtor.id)}
                          className="bg-white text-[#4A3525] px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[#2D4A22] hover:text-white transition-colors rounded-full shadow-lg transform hover:scale-105"
                        >
                          ▶ Assistir à História
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Textos e Informações de Venda */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <p className="text-[#2D4A22] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="text-lg">📍</span> {produtor.localizacao}
                  </p>
                  <h3 className="text-4xl font-serif font-bold mb-2 text-[#4A3525]">
                    {produtor.nome_propriedade}
                  </h3>
                  <p className="text-gray-400 italic mb-8 border-b border-gray-100 pb-6 text-lg">
                    Produzido por <span className="font-semibold text-[#4A3525]">{produtor.nome_produtor}</span>
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg text-justify">
                    {produtor.historia}
                  </p>
                  
                  <div className="mt-auto inline-block bg-[#FDFBF7] border border-[#eaddcf] px-6 py-4 text-sm font-bold text-[#4A3525] self-start rounded-md shadow-sm">
                    <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Perfil Sensorial</span>
                    ☕ {produtor.nota_cafe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#3A2718] text-[#FDFBF7] py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif font-bold mb-2">Raiz do <span className="text-[#84b975]">Agora</span></h3>
            <p className="text-sm text-gray-300 leading-relaxed pr-8">
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
        
        <div className="max-w-7xl mx-auto px-10 mt-16 pt-8 border-t border-[#4a3525] text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Raiz do Agora. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}