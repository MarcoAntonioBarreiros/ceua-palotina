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
