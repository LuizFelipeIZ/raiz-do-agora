'use client';
import { useState } from 'react';

// ==========================================
// 📍 ÁREA DE DADOS (SEUS SINAIS ESTÃO AQUI)
// ==========================================
const produtores = [
  {
    id: 1,
    nome_produtor: "William Líder",
    nome_propriedade: "Sítio Mela Cueca",
    localizacao: "Muzambinho - MG",
    historia: "Há mais de 3 gerações, a família cultiva grãos 100% arábica com processos artesanais. Localizada a 1.050 metros de altitude, a propriedade se destaca por métodos sustentáveis e uma colheita seletiva que garante a máxima qualidade na xícara.",
    nota_cafe: "Caramelo e Chocolate",
    imagem_produto: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // ⚠️ Pode colocar o link normal do YouTube aqui! O código converte sozinho.
    link_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  },
  {
    id: 2,
    nome_produtor: "João Chocolate",
    nome_propriedade: "Fazenda Quebra Safra",
    localizacao: "Muzambinho - MG",
    historia: "Com um cuidado maternal, Dona Maria seleciona os grãos à mão. O café da Fazenda Esperança já foi premiado na região por sua doçura natural, acidez equilibrada e um corpo aveludado inesquecível.",
    nota_cafe: "Frutas Vermelhas e Mel",
    imagem_produto: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // ⚠️ Pode colocar o link normal do YouTube aqui! O código converte sozinho.
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
  return url; // Retorna normal se já for embed ou não reconhecido
};

// ==========================================
// 🎨 ESTRUTURA VISUAL DO SITE
// ==========================================
export default function Home() {
  // Isso aqui cria a "memória" para saber qual vídeo está tocando no momento
  const [videoAtivo, setVideoAtivo] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#4A3525] font-sans overflow-x-hidden">
      
      {/* HEADER LIMPO E ELEGANTE */}
      <header className="flex flex-col md:flex-row justify-between items-center py-8 px-10 max-w-7xl mx-auto border-b border-[#eaddcf]">
        <h1 className="text-3xl font-serif font-bold tracking-wider mb-4 md:mb-0">
          Raiz do <span className="text-[#2D4A22]">Agora</span>
        </h1>
        <nav className="flex space-x-10 text-xs font-bold tracking-widest uppercase text-[#4A3525]">
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
          <a href="#produtores" className="inline-block bg-[#4A3525] text-[#FDFBF7] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#2D4A22] transition-all shadow-lg hover:shadow-xl">
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

      {/* SEÇÃO PRODUTORES (Agora com Vídeo Embutido!) */}
      <section id="produtores" className="bg-[#F4EFE8] py-24 mt-12">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-serif font-bold text-center mb-20 text-[#4A3525]">
            Quem faz a magia acontecer
          </h2>

          <div className="space-y-20">
            {produtores.map((produtor) => (
              <div key={produtor.id} className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                
                {/* ÁREA DE MÍDIA: Imagem ou Vídeo */}
                <div className="relative h-[450px] w-full overflow-hidden bg-gray-900">
                  
                  {/* Se o vídeo estiver ativo, mostra o YouTube, senão mostra a Foto */}
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
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" 
                        alt={`Café ${produtor.nome_propriedade}`} 
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Botão que ativa o vídeo */}
                        <button 
                          onClick={() => setVideoAtivo(produtor.id)}
                          className="bg-white text-[#4A3525] px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[#2D4A22] hover:text-white transition-colors rounded-full shadow-lg"
                        >
                          ▶ Assistir à História
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Textos e Informações */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <p className="text-[#2D4A22] font-bold text-xs uppercase tracking-widest mb-3">
                    📍 {produtor.localizacao}
                  </p>
                  <h3 className="text-4xl font-serif font-bold mb-2 text-[#4A3525]">
                    {produtor.nome_propriedade}
                  </h3>
                  <p className="text-gray-400 italic mb-8 border-b border-gray-100 pb-6">
                    Produzido por {produtor.nome_produtor}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {produtor.historia}
                  </p>
                  
                  <div className="mt-auto inline-block bg-[#FDFBF7] border border-[#eaddcf] px-5 py-3 text-sm font-bold text-[#4A3525] self-start rounded-md">
                    ☕ Notas Sensoriais: <span className="font-normal">{produtor.nota_cafe}</span>
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
              <li className="hover:text-white cursor-pointer transition-colors">✉️ contato@raizdoagora.com.br</li>
              <li className="hover:text-white cursor-pointer transition-colors">📞 (35) 9 9999-9999</li>
              <li className="hover:text-white cursor-pointer transition-colors">📱 @raizdoagora.mz</li>
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