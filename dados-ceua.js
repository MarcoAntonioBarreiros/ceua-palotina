/*
 * Dados editaveis da pagina CEUA/Palotina.
 *
 * Para atualizar pelo GitHub:
 * 1. Abra este arquivo no repositorio.
 * 2. Clique no lapis "Edit this file".
 * 3. Altere somente os valores entre aspas, mantendo virgulas, colchetes e chaves.
 * 4. Clique em "Commit changes".
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
          texto: 'Diretriz da Prática de Eutanásia do CONCEA',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2024/07/Anexo_Res_Norm_37_2018_CONCEA_Pratica_Eutanasia.pdf'
        },
        {
          texto: 'Guia Brasileiro de produção, manutenção ou utilização de animais em ensino e pesquisa — CONCEA',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2024/07/guia_concea_1ed_animais-_ensino_ou_pesquisa_2023.pdf'
        },
        {
          texto: 'Cria as CEUAs na UFPR — Resolução 86/11 CEPE',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2016/06/Resolução-cepe8611-CEUA-1.pdf'
        },
        {
          texto: 'Regimento Interno da CEUA/Palotina',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2023/02/REGIMENTO-INTERNO_CEUA.Palotina_2023__ASSINADO.pdf'
        },
        {
          texto: 'Resolução CONCEA/MCTI nº 49, de 7 de maio de 2021',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2023/08/Res492021.pdf'
        },
        {
          texto: 'Instrução Normativa nº 03/2026-PRPI — instalações de uso animal',
          url: 'https://ufpr.br/prpi/wp-content/uploads/2026/06/IN-03-2026-PRPI.pdf'
        }
      ]
    },
    {
      titulo: 'Formulários e modelos',
      icone: '□',
      itens: [
        {
          texto: 'Formulário Unificado de Autorização para Uso de Animais — ver orientações de envio',
          url: '#solicitacoes'
        },
        {
          texto: 'Formulários para cadastramento de instalações — ver orientações do CIUCA',
          url: '#ciuca'
        },
        {
          texto: 'Formulário CEUA/Palotina — Relato de Caso',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2016/06/Formulário-CEUA.Palotina-Relato-de-Caso.doc'
        },
        {
          texto: 'Termo de Consentimento Livre e Esclarecido — TCLE',
          url: 'https://palotina.ufpr.br/wp-content/uploads/2016/06/TERMO-DE-CONSENTIMENTO-LIVRE-E-ESCLARECIDO-CEUA.Palotina.doc'
        }
      ]
    },
    {
      titulo: 'Cursos e capacitação',
      icone: '▶',
      itens: [
        {
          texto: 'Iniciação em Ciência em Animais de Laboratório — FIOCRUZ',
          url: 'https://campusvirtual.fiocruz.br/portal/?q=node/66494'
        },
        {
          texto: 'Curso sobre Uso Animal — Embrapa',
          url: 'https://ava.sede.embrapa.br/enrol/index.php?id=396'
        }
      ]
    }
  ]
};
