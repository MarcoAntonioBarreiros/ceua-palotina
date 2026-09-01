/*
 * Dados editaveis da pagina CEUA/Palotina.
 *
 * Para atualizar pelo GitHub:
 * 1. Abra este arquivo no repositorio.
 * 2. Clique no lapis "Edit this file".
 * 3. Altere somente os valores entre aspas, mantendo virgulas, colchetes e chaves.
 * 4. Clique em "Commit changes".
 *
 * Nos documentos, o campo "palavras" e opcional: sao termos extras que a busca
 * da Central de recursos reconhece alem do titulo do link (sinonimos, siglas,
 * assuntos). Escreva sem acentos, separados por espaco.
 */
window.CEUA_DADOS = {
  prazoDias: 15,

  reunioes: [
    { data: '2026-07-28' },
    { data: '2026-08-26' },
    { data: '2026-09-29' },
    { data: '2026-10-28' },
    { data: '2026-11-24' },
    { data: '2026-12-16', sufixo: '*' }
  ],

  composicao: {
    portaria: 'Portaria nº 1691/2026-PL',
    subtitulo: 'Mandato e composição conforme portaria de 13 de fevereiro de 2026.',
    membros: [
      {
        assento: 'Assento 1',
        indicacao: 'Docente do quadro efetivo do Setor Palotina com formação em Zootecnia',
        titular: 'Profa. Angela Rocio Poveda Parra',
        suplente: 'Profa. Lilian Dena dos Santos'
      },
      {
        assento: 'Assento 2',
        indicacao: 'Docente do quadro efetivo do Setor Palotina com formação em Ciências Biológicas',
        titular: 'Prof. Alexandre Leandro Pereira',
        suplente: 'Profa. Lucíola Thais Baldan'
      },
      {
        assento: 'Assento 3',
        indicacao: 'Departamento de Ciências Veterinárias',
        titular: 'Profa. Geane Maciel Pagliosa',
        suplente: 'Profa. Maristela de Cássia Seudo Lopes'
      },
      {
        assento: 'Assento 4',
        indicacao: 'Departamento de Ciências Veterinárias',
        titular: 'Prof. Olicies da Cunha',
        suplente: 'Profa. Manoela Marchezan Piva'
      },
      {
        assento: 'Assento 5',
        indicacao: 'Departamento de Ciências Veterinárias',
        titular: 'Profa. Edna Tereza de Lima',
        suplente: 'Profa. Janislene Mach Trentin'
      },
      {
        assento: 'Assento 6',
        indicacao: 'Departamento de Biociências',
        titular: 'Prof. Marco Antonio Bacellar Barreiros',
        suplente: 'Prof. Milton Ronnau'
      },
      {
        assento: 'Assento 7',
        indicacao: 'Departamento de Biodiversidade',
        titular: 'Profa. Márcia Santos de Menezes',
        suplente: 'Prof. Edilson Caron'
      },
      {
        assento: 'Assento 8',
        indicacao: 'Associação protetora de animais legalmente constituída e estabelecida no país',
        titular: 'Olenia Terezinha Rinaldi',
        suplente: 'Claudineia Mara Marx Leal'
      }
    ]
  },

  coordenacao: {
    nome: 'Prof. Marco Antonio Bacellar Barreiros',
    email: 'mbarreiros@ufpr.br'
  },

  documentos: [
    {
      titulo: 'Normativas e diretrizes',
      icone: '§',
      itens: [
        {
          texto: 'CONCEA — Conselho Nacional de Controle de Experimentação Animal (página oficial)',
          url: 'https://www.gov.br/mcti/pt-br/composicao/colegiados/concea',
          palavras: 'legislacao lei arouca 11794 resolucoes normativas rn mcti orgao federal'
        },
        {
          texto: 'Diretriz da Prática de Eutanásia do CONCEA',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2024/07/Anexo_Res_Norm_37_2018_CONCEA_Pratica_Eutanasia.pdf',
          palavras: 'eutanasia metodo humanitario morte destino final ponto final rn 37 anestesico sobredose'
        },
        {
          texto: 'Guia Brasileiro de produção, manutenção ou utilização de animais em ensino e pesquisa — CONCEA',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2024/07/guia_concea_1ed_animais-_ensino_ou_pesquisa_2023.pdf',
          palavras: 'guia brasileiro alojamento manejo biotério roedores camundongo rato coelho peixe anfibio reptil ave ambiente enriquecimento'
        },
        {
          texto: 'Cria as CEUAs na UFPR — Resolução 86/11 CEPE',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2016/06/Resolução-cepe8611-CEUA-1.pdf',
          palavras: 'criacao das ceuas ufpr resolucao cepe norma institucional'
        },
        {
          texto: 'Regimento Interno da CEUA/Palotina',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2023/02/REGIMENTO-INTERNO_CEUA.Palotina_2023__ASSINADO.pdf',
          palavras: 'regimento funcionamento reunioes mandato relator recurso prazo tramitacao competencias'
        },
        {
          texto: 'Resolução CONCEA/MCTI nº 49, de 7 de maio de 2021',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2023/08/Res492021.pdf',
          palavras: 'resolucao normativa 49 2021 diretriz concea'
        },
        {
          texto: 'Instrução Normativa nº 03/2026-PRPI — instalações de uso animal',
          url: 'https://ufpr.br/prpi/wp-content/uploads/2026/06/IN-03-2026-PRPI.pdf',
          palavras: 'in 03 instalacao biotério credenciamento cadastro ciuca prpi infraestrutura responsavel tecnico'
        }
      ]
    },
    {
      titulo: 'Formulários e modelos',
      icone: '□',
      itens: [
        {
          texto: 'Formulário Unificado de Autorização para Uso de Animais — ver orientações de envio',
          url: '#solicitacoes',
          palavras: 'formulario unificado solicitacao projeto protocolo submissao envio prazo parecer'
        },
        {
          texto: 'Formulários para cadastramento de instalações — ver orientações do CIUCA',
          url: '#ciuca',
          palavras: 'ciuca cadastro instalacao biotério credenciamento registro'
        },
        {
          texto: 'Ajuda no preenchimento do item 8.A — guia da Redução e cálculo do número de animais',
          url: 'calculo-amostral.html',
          palavras: 'calculo amostral tamanho de amostra n numero de animais reducao 3rs estatistica formula poder do teste power alfa beta desvio padrao efeito g*power arrive equacao de recurso resource equation grupos delineamento justificativa item 8a 8.a'
        },
        {
          texto: 'Termo de Consentimento Livre e Esclarecido — TCLE',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2016/06/TERMO-DE-CONSENTIMENTO-LIVRE-E-ESCLARECIDO-CEUA.Palotina.doc',
          palavras: 'tcle consentimento tutor proprietario animal de companhia estudo clinico autorizacao do dono'
        }
      ]
    },
    {
      titulo: 'Cursos e capacitação',
      icone: '▶',
      itens: [
        {
          texto: 'Iniciação em Ciência em Animais de Laboratório — FIOCRUZ',
          url: 'https://campusvirtual.fiocruz.br/portal/?q=node/66494',
          palavras: 'curso capacitacao treinamento ead certificado animais de laboratorio manejo bem-estar'
        },
        {
          texto: 'Curso sobre Uso Animal — Embrapa',
          url: 'https://ava.sede.embrapa.br/enrol/index.php?id=396',
          palavras: 'curso capacitacao treinamento ead ava embrapa uso animal bem-estar'
        }
      ]
    }
  ]
};

/*
 * Destaque em vídeo da página inicial.
 * O bloco só aparece quando o arquivo de vídeo está disponível no GitHub Pages.
 * Assim, esta alteração pode ser publicada antes do upload do MP4 sem quebrar a página.
 */
(function iniciarVideoDestaqueCEUA() {
  const VIDEO_SRC = 'ceuafinal-web.mp4';
  const VIDEO_POSTER = 'ceuafinal-poster.jpg';

  function montarVideo() {
    const prioridade = document.querySelector('.ceua-priority');
    const navegacao = document.querySelector('.ceua-sticky-nav');

    if (!prioridade || !navegacao || document.querySelector('.ceua-video-feature')) return;

    if (!document.getElementById('ceua-video-feature-style')) {
      const style = document.createElement('style');
      style.id = 'ceua-video-feature-style';
      style.textContent = `
        .ceua-video-feature[hidden] { display:none !important; }
        .ceua-video-feature {
          position:relative;
          overflow:hidden;
          margin:28px 34px 0;
          padding:22px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:22px;
          background:
            radial-gradient(circle at 92% 4%, rgba(142,224,200,.14), transparent 24%),
            linear-gradient(135deg, #071f33 0%, #0d4168 62%, #0f6d75 100%);
          box-shadow:0 16px 38px rgba(7,31,51,.12);
        }
        .ceua-video-feature::after {
          content:"";
          position:absolute;
          width:190px;
          height:190px;
          right:-82px;
          top:-105px;
          border:1px solid rgba(255,255,255,.1);
          border-radius:50%;
          pointer-events:none;
        }
        .ceua-video-feature-head {
          position:relative;
          z-index:1;
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:18px;
          margin-bottom:16px;
        }
        .ceua-video-kicker {
          margin:0 0 4px;
          color:#8ee0c8;
          font-size:.72rem;
          font-weight:850;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .ceua-video-feature h2 {
          margin:0;
          color:#fff;
          font-size:clamp(1.3rem, 2.4vw, 1.8rem);
          line-height:1.15;
          letter-spacing:-.025em;
        }
        .ceua-video-meta {
          flex:0 0 auto;
          margin:0;
          padding:7px 10px;
          border:1px solid rgba(255,255,255,.16);
          border-radius:999px;
          background:rgba(255,255,255,.08);
          color:rgba(255,255,255,.78);
          font-size:.76rem;
          font-weight:700;
          white-space:nowrap;
        }
        .ceua-video-shell {
          position:relative;
          z-index:1;
          overflow:hidden;
          aspect-ratio:16 / 9;
          border:1px solid rgba(255,255,255,.17);
          border-radius:17px;
          background:#02070b;
          box-shadow:0 12px 30px rgba(0,0,0,.24);
        }
        .ceua-video-shell video {
          display:block;
          width:100%;
          height:100%;
          object-fit:contain;
          background:#02070b;
        }
        @media (max-width:740px) {
          .ceua-video-feature { margin:22px 12px 0; padding:14px; border-radius:18px; }
          .ceua-video-feature-head { align-items:flex-start; flex-direction:column; gap:9px; margin-bottom:12px; }
          .ceua-video-meta { white-space:normal; }
          .ceua-video-shell { border-radius:13px; }
        }
      `;
      document.head.appendChild(style);
    }

    const bloco = document.createElement('section');
    bloco.className = 'ceua-video-feature';
    bloco.hidden = true;
    bloco.setAttribute('aria-labelledby', 'ceua-video-feature-title');
    bloco.innerHTML = `
      <div class="ceua-video-feature-head">
        <div>
          <p class="ceua-video-kicker">Vídeo de orientação</p>
          <h2 id="ceua-video-feature-title">CIUCA 2.0 no Setor Palotina</h2>
        </div>
        <p class="ceua-video-meta">7 min 46 s · CEUA/Palotina</p>
      </div>
      <div class="ceua-video-shell">
        <video controls playsinline preload="metadata" poster="${VIDEO_POSTER}" aria-label="Vídeo CIUCA 2.0 no Setor Palotina">
          <source src="${VIDEO_SRC}" type="video/mp4">
          Seu navegador não suporta a reprodução deste vídeo.
        </video>
      </div>
    `;

    navegacao.before(bloco);

    const video = bloco.querySelector('video');
    video.addEventListener('loadedmetadata', function () {
      bloco.hidden = false;
    }, { once:true });
    video.addEventListener('error', function () {
      bloco.remove();
    }, { once:true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarVideo, { once:true });
  } else {
    montarVideo();
  }
})();

/* ==========================================================================
 * BLOCO REMOVÍVEL — Guia de enquadramento embutido na seção 02 (CIUCA)
 * --------------------------------------------------------------------------
 * Coloca o guia interativo dentro de um container na própria página, logo
 * ANTES do cartão dos formulários de instalação. O container mede a altura
 * real do conteúdo e se ajusta sozinho a cada troca de aba/etapa — por isso
 * não há barra de rolagem interna nem espaço sobrando.
 *
 * PARA DESLIGAR sem apagar nada .... troque   ATIVO: true   por   ATIVO: false
 * PARA REMOVER DE VEZ .............. apague deste comentário até a linha
 *                                    "FIM DO BLOCO REMOVÍVEL", no fim do arquivo.
 *
 * Nada mais na página depende deste bloco: o botão "Abrir formulários" e todo
 * o resto continuam funcionando sozinhos.
 * ========================================================================== */
(function iniciarGuiaEnquadramentoCEUA() {
  const CFG = {
    ATIVO: true,

    /* Página mostrada dentro do container.
       Quando a versão v3 sair do preview e for para o repositório de produção,
       basta trocar estas duas URLs para .../CEUA_form/ciuca/guia-enquadramento.html */
    URL: 'https://marcoantoniobarreiros.github.io/CEUA_form-ciuca-v3-preview/ciuca/guia-enquadramento.html?embed=1',
    URL_PAGINA_INTEIRA: 'https://marcoantoniobarreiros.github.io/CEUA_form-ciuca-v3-preview/ciuca/guia-enquadramento.html',

    /* O container é inserido imediatamente ANTES deste elemento.
       '#ciuca .ceua-intro-grid' = antes do cartão "Abrir formulários".
       Para jogá-lo mais para baixo, use '#ciuca .ceua-timeline'. */
    ANTES_DE: '#ciuca .ceua-intro-grid',

    /* Marca que precisa existir na página carregada. Se não existir (link
       quebrado, 404), o container se remove sozinho e a página segue normal. */
    CONFERE: '#guia-ceua',

    ALTURA_INICIAL: 900,
    ALTURA_MINIMA: 420,

    KICKER: 'Antes de escolher o formulário',
    TITULO: 'Guia de enquadramento e licenciamento',
    RESUMO: 'Verifique se a estrutura é uma instalação de uso de animais, qual é o caminho no CIUCA e quais critérios normativos se aplicam ao grupo animal — antes de preencher o formulário.'
  };

  function montarGuia() {
    if (!CFG.ATIVO) return;

    const ancora = document.querySelector(CFG.ANTES_DE);
    if (!ancora || document.querySelector('.ceua-guia-embed')) return;

    if (!document.getElementById('ceua-guia-embed-style')) {
      const style = document.createElement('style');
      style.id = 'ceua-guia-embed-style';
      style.textContent = `
        .ceua-guia-embed { margin:0 0 26px; }
        .ceua-guia-embed-head {
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:16px;
          margin-bottom:14px;
        }
        .ceua-guia-embed-kicker {
          margin:0 0 5px;
          color:var(--ceua-green-700,#26704b);
          font-size:.72rem;
          font-weight:850;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .ceua-guia-embed h3 {
          margin:0 0 7px;
          color:var(--ceua-navy-900,#0a2d48);
          font-size:clamp(1.15rem, 2.1vw, 1.5rem);
          line-height:1.2;
          letter-spacing:-.02em;
        }
        .ceua-guia-embed-sub {
          margin:0;
          max-width:660px;
          color:var(--ceua-muted,#607080);
          font-size:.9rem;
          line-height:1.5;
        }
        .ceua-guia-embed-open {
          flex:0 0 auto;
          display:inline-block;
          padding:10px 15px;
          border:1px solid var(--ceua-line,#dce5eb);
          border-radius:999px;
          background:#fff;
          color:var(--ceua-navy-800,#0d4168);
          font-size:.8rem;
          font-weight:800;
          text-decoration:none;
          white-space:nowrap;
        }
        .ceua-guia-embed-open:hover,
        .ceua-guia-embed-open:focus-visible {
          border-color:var(--ceua-green-600,#31845d);
          color:var(--ceua-green-700,#26704b);
        }
        .ceua-guia-embed-shell {
          overflow:hidden;
          border:1px solid var(--ceua-line,#dce5eb);
          border-radius:var(--ceua-radius-lg,20px);
          background:#e8f4f6;
          box-shadow:var(--ceua-shadow-sm,0 9px 26px rgba(7,31,51,.09));
        }
        .ceua-guia-embed-shell iframe {
          display:block;
          width:100%;
          border:0;
        }
        @media (max-width:740px) {
          .ceua-guia-embed-head { align-items:flex-start; flex-direction:column; gap:10px; }
          .ceua-guia-embed-open { white-space:normal; }
          .ceua-guia-embed-shell { border-radius:var(--ceua-radius-md,14px); }
        }
      `;
      document.head.appendChild(style);
    }

    const bloco = document.createElement('div');
    bloco.className = 'ceua-guia-embed';
    bloco.setAttribute('aria-labelledby', 'ceua-guia-embed-title');
    bloco.innerHTML = `
      <div class="ceua-guia-embed-head">
        <div>
          <p class="ceua-guia-embed-kicker">${CFG.KICKER}</p>
          <h3 id="ceua-guia-embed-title">${CFG.TITULO}</h3>
          <p class="ceua-guia-embed-sub">${CFG.RESUMO}</p>
        </div>
        <a class="ceua-guia-embed-open" href="${CFG.URL_PAGINA_INTEIRA}" target="_blank" rel="noopener">Abrir em página inteira <span aria-hidden="true">↗</span></a>
      </div>
      <div class="ceua-guia-embed-shell">
        <iframe title="${CFG.TITULO}" src="${CFG.URL}" loading="lazy" style="height:${CFG.ALTURA_INICIAL}px"></iframe>
      </div>
    `;

    ancora.before(bloco);

    const frame = bloco.querySelector('iframe');
    let ultimaAltura = CFG.ALTURA_INICIAL;

    /* Altura real do conteúdo de um documento.
       A medida sai do <body>, e não de documentElement.scrollHeight: este
       último nunca fica menor que a janela do próprio iframe, e o container
       só cresceria, nunca encolheria ao trocar para uma aba mais curta. */
    function alturaDe(doc) {
      if (!doc || !doc.body) return 0;
      const corpo = doc.body;
      const janela = doc.defaultView;
      let margens = 0;
      if (janela && janela.getComputedStyle) {
        const estilo = janela.getComputedStyle(corpo);
        margens = (parseFloat(estilo.marginTop) || 0) + (parseFloat(estilo.marginBottom) || 0);
      }
      return Math.ceil(margens + Math.max(
        corpo.getBoundingClientRect().height,
        corpo.scrollHeight,
        corpo.offsetHeight
      ));
    }

    /* Documento do iframe, ou null se o navegador não deixar ler. */
    function documento() {
      try {
        return frame.contentDocument || null;
      } catch (erro) {
        return null;
      }
    }

    /* Se a página embutida tiver iframes dentro dela (é o caso do índice de
       formulários), estes também crescem até a altura do próprio conteúdo,
       para não sobrar barra de rolagem interna. */
    function expandirInternos(doc, profundidade) {
      if (!doc || profundidade > 2) return;
      doc.querySelectorAll('iframe').forEach(function (interno) {
        let dentro;
        try {
          dentro = interno.contentDocument;
        } catch (erro) {
          return;
        }
        if (!dentro || !dentro.body) return;
        expandirInternos(dentro, profundidade + 1);
        const h = alturaDe(dentro);
        if (h > 0 && Math.abs(h - interno.offsetHeight) > 1) interno.style.height = h + 'px';
      });
    }

    function ajustarAltura() {
      const doc = documento();
      if (!doc || !doc.body) return;
      expandirInternos(doc, 0);
      const altura = Math.max(CFG.ALTURA_MINIMA, alturaDe(doc));
      if (Math.abs(altura - ultimaAltura) > 1) {
        ultimaAltura = altura;
        frame.style.height = altura + 'px';
      }
    }

    let agendado = false;
    function agendarAjuste() {
      if (agendado) return;
      agendado = true;
      /* setTimeout em vez de requestAnimationFrame: rAF não dispara em aba
         de segundo plano, e o ajuste ficaria travado até o usuário voltar. */
      setTimeout(function () {
        agendado = false;
        ajustarAltura();
      }, 30);
    }

    function acompanhar() {
      const doc = documento();

      /* Página fora do ar ou trocada por um 404: o bloco some sem quebrar nada. */
      if (doc && doc.body && CFG.CONFERE && !doc.querySelector(CFG.CONFERE)) {
        bloco.remove();
        return;
      }

      /* Sem acesso ao conteúdo (outro domínio): mantém a altura inicial e a
         rolagem própria do iframe. */
      if (!doc || !doc.body) return;

      ajustarAltura();

      if (typeof ResizeObserver === 'function') {
        const observador = new ResizeObserver(agendarAjuste);
        observador.observe(doc.documentElement);
        observador.observe(doc.body);
      }

      if (typeof MutationObserver === 'function') {
        new MutationObserver(agendarAjuste).observe(doc.documentElement, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }

      /* Redundância barata: qualquer interação com abas, etapas, selects ou
         acordeões dentro do guia dispara uma remedição. */
      ['click', 'change', 'input', 'keyup', 'toggle'].forEach(function (evento) {
        doc.addEventListener(evento, agendarAjuste, true);
      });

      /* Fontes e imagens que chegam depois do load também mudam a altura. */
      if (doc.fonts && doc.fonts.ready && typeof doc.fonts.ready.then === 'function') {
        doc.fonts.ready.then(agendarAjuste).catch(function () {});
      }
      [200, 600, 1400, 3000].forEach(function (espera) {
        setTimeout(ajustarAltura, espera);
      });
    }

    frame.addEventListener('load', acompanhar);
    window.addEventListener('resize', agendarAjuste, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarGuia, { once: true });
  } else {
    montarGuia();
  }
})();
/* ===================== FIM DO BLOCO REMOVÍVEL ===================== */
