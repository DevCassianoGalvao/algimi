# PROMPT — ALGIMI SÃO PAULO | LANDING PAGE COMPLETA

---

## CONTEXTO E REFERÊNCIAS

Você tem em anexo nesta pasta de projeto:
- **Manual de Marca Algimi São Paulo** (identidade visual completa)
- **Design System Algimi São Paulo** (tokens, componentes)
- **Copy do Site** (texto fixo — não altere nenhuma palavra)
- **Logo da marca** (use exatamente como fornecido)
- **Referências visuais** (Silverpoint, Arden, Visionary Intelligence, skincare orgânico)

Leia todos antes de começar.

---

## IDENTIDADE VISUAL (extraída do manual — seguir rigorosamente)

**Paleta de cores:**
- Marrom escuro (primária): `#311d13`
- Cinza grafite (secundária): `#47474a`
- Bege areia (background / respiro): `#f3f2eb`
- Branco puro para overlays pontuais: `#ffffff`

**Tipografia:**
- Display / títulos: **TangoSans** (serif elegante — para headlines e manifesto)
- Corpo / subtítulos / UI: **Poppins** (sans-serif — para textos corridos, labels, botões)
- Hierarquia: TangoSans grande e com espaçamento generoso nos títulos, Poppins leve (300–400) nos textos

**Logo:** símbolo geométrico isométrico (tábuas sobrepostas) + wordmark "ALGIMI" em serif + "SÃO PAULO" em versalete espaçado. Usar em bege sobre fundos escuros e em marrom/grafite sobre fundos claros.

**DNA da marca:** Segurança · Credibilidade · Estratégia · Exclusividade · Sutil · Clássica · Diferente

---

## DIREÇÃO VISUAL E ESTÉTICA

**Base:** Silverpoint (editorial premium, fotografia grande, alternância fundo claro/escuro entre seções)
**Mistura de:**
- Arden → espaço branco generoso, tipografia bold no hero, formulário/CTA integrado clean
- Visionary Intelligence → cards com hover estado ativo, uso de linha/stroke fino como detalhe
- Skincare orgânico → formas suaves, transições de cor gentis, sensação de textura

**Signature element:** Ilustrações lineares isométricas derivadas do símbolo da marca (as tábuas de madeira empilhadas) usadas como grafismos decorativos em seções-chave — não como ícone, mas como elemento visual ampliado em background ou como separador de seção.

**Estética geral:**
- Premium editorial minimalista com personalidade
- Muito espaço branco/bege — a madeira "respira" na página
- Fotografia de banco de imagens do nicho (madeira nobre, interiores de arquitetura de alto padrão, floresta amazônica, detalhes de corte de madeira)
- Nos cards de sócios: placeholder de foto (retângulo com cinza grafite + ícone de pessoa, label "foto")
- Linha fina horizontal como elemento gráfico recorrente (herdada do manual)
- Bordas e cantos: sem border-radius nos elementos principais (postura editorial) — apenas raio sutil (4px) em pills e tags

---

## ANIMAÇÕES E INTERATIVIDADE

**GSAP (obrigatório):**
- Hero: texto do manifesto entra com `SplitText` palavra por palavra, opacity 0→1 com stagger suave
- Scroll-triggered reveals: seções entram com `gsap.from` + `ScrollTrigger` (Y: 40, opacity: 0, duração 0.8s, ease: "power2.out")
- Linha horizontal do header: anima de 0% → 100% width no load (1.2s, ease: "power3.inOut")
- Números/stats (se houver): contador animado com `gsap.to` no scroll

**Hover states:**
- Cards de espécies de madeira: background shift sutil de bege → marrom muito claro + linha inferior marrom aparece
- CTAs principais: background fill da esquerda para a direita (clip-path ou pseudo-elemento)
- Fotos de projeto: leve zoom (scale 1.04) com overlay de cor marrom 20% opacity
- Logo/nav links: underline que cresce do centro (transform scaleX)

**Scroll suave:**
- `lenis` ou `locomotive-scroll` para scroll suave na página toda
- Parallax leve (10–15%) nas fotos de hero e seção Projetos

---

## ESTRUTURA DE PÁGINAS E SEÇÕES

### PÁGINA: HOME

---

**[SEÇÃO 1 — NAV / HEADER]**
- Fundo: `#f3f2eb` (transparente no topo, fica sólido no scroll)
- Logo à esquerda
- Nav: Home · A Marca · Acervo · Projetos · Manejo · Para Arquitetos · Para Construtoras · Showroom · Contato
- CTA nav direito: botão outline "Agendar apresentação" (marrom, sem fill)
- Linha fina marrom abaixo do header (aparece com scroll)

---

**[SEÇÃO 2 — HERO]**

Fundo: `#f3f2eb`

Layout dois blocos (inspiração Silverpoint):
- Bloco esquerdo (60%): headline + seta scroll
- Bloco direito (40%): foto grande de madeira nobre amazônica em ambiente de arquitetura de alto padrão (banco de imagens)

Copy exato:
```
Madeiras autorais amazônicas para arquitetura de alto padrão.
↓ conheça a marca
```

TangoSans, muito grande (clamp 64px–120px), marrom `#311d13`, tracking ligeiramente espaçado.
A seta `↓` anima em loop suave (translateY bounce).
Grafismo decorativo: ilustração isométrica das tábuas em bege claro levíssimo no canto inferior direito do hero (opacity 8–12%, muito sutil).

---

**[SEÇÃO 3 — MANIFESTO]**

Fundo: `#311d13` (marrom escuro)
Texto: bege `#f3f2eb`

Copy exato (centralizado, TangoSans, grande):
```
A Algimi São Paulo não é uma fornecedora de madeira.

Apresenta ao mercado paulista uma forma de pensar a madeira como
linguagem arquitetônica — autoral, raríssima, sob medida.
```

Linha fina bege horizontal separa do bloco abaixo.
Ilustração isométrica ampliada (tábuas) em marrom levemente mais claro que o fundo — background decoration.

---

**[SEÇÃO 4 — TRÊS PILARES]**

Fundo: `#f3f2eb`

Layout: 3 colunas com linha fina vertical separando cada coluna (inspirado no Silverpoint)

**Coluna 1 — Curadoria**
```
Seleção de madeiras amazônicas raras, com valor estético e técnico,
escolhidas para ampliar o repertório do arquiteto.
```

**Coluna 2 — Personalização**
```
Fornecimento sob medida. Corte, dimensão e acabamento
adaptados ao desenho do projeto.
```

**Coluna 3 — Parceria**
```
Participação consultiva no processo criativo,
do conceito à especificação técnica.
```

Label de cada coluna em Poppins versalete espaçado, marrom.
Texto corpo em Poppins 300, grafite.

---

**[SEÇÃO 5 — ACERVO EM DESTAQUE]**

Fundo: `#f3f2eb`

Título (TangoSans, marrom):
```
Um acervo de espécies amazônicas, com paletas, texturas e aplicações
que ampliam o vocabulário da arquitetura contemporânea.
```

Grid de espécies: 3 colunas × 2 linhas de cards
Cada card:
- Foto de banco de imagens (madeira específica — textura, veio, cor)
- Nome da espécie (TangoSans)
- Tags de aplicação (pill outline)
- Hover: fundo escurece levemente, linha inferior marrom aparece

CTA centralizado abaixo:
```
→ Ver acervo completo
```

---

**[SEÇÃO 6 — PROJETOS]**

Fundo: `#311d13`
Texto: bege

Título:
```
Cada projeto é uma escolha. Cada espécie, uma assinatura.
```

Layout horizontal scroll (drag) com 3 cards de projeto visíveis:
- Foto grande (banco de imagens: interiores com madeira)
- Nome fictício do projeto
- Hover: overlay leve + zoom foto

CTA:
```
→ Ver todos os projetos
```

---

**[SEÇÃO 7 — SÓCIOS]**

Fundo: `#f3f2eb`

Título:
```
Três visões. Uma marca.
```

Subtítulo:
```
Sandro Silva, Cassius Marcelus e Larissa Schmitt reúnem na Algimi São Paulo
a experiência empresarial, a arquitetura autoral e a origem florestal.
```

3 cards lado a lado:

**Sandro Silva**
Foto: placeholder (retângulo grafite + ícone pessoa)
```
Visão empresarial e curadoria. Empreendedor há mais de 30 anos,
construiu carreira no setor de tecnologia e varejo até a venda de
sua empresa em 2019. Conheceu a cadeia produtiva da madeira amazônica
no projeto da Casa Éden, em Itu, e enxergou ali a oportunidade de
transformar a madeira em protagonista da arquitetura paulista.
```

**Cassius Marcelus**
Foto: placeholder
```
Arquitetura autoral. Responsável pelo projeto da Casa Éden e pela
curadoria técnica que conectou Sandro à Algimi Florestal. Traz à
Algimi São Paulo a leitura do arquiteto — entende a madeira como
elemento de composição, não como acabamento.
```

**Larissa Schmitt**
Foto: placeholder
```
Origem florestal. Representante da família fundadora da Algimi
Florestal, é o elo entre a operação amazônica e o mercado paulista.
Garante a procedência, o manejo responsável e a continuidade da
tradição que sustenta a marca há mais de três décadas.
```

CTA:
```
→ Conheça nossa história
```

---

**[SEÇÃO 8 — IMPRENSA]**

Fundo: `#47474a` (grafite)
Texto: bege

Título:
```
Na imprensa especializada.
```

Card único (para ser expandido futuramente):
```
Revista Cenário — Edição 86
Algimi São Paulo inicia operação em Itu de madeiras autorais
amazônicas e atendimento premium.
→ Leia a matéria completa
```

---

**[SEÇÃO 9 — CTA FINAL]**

Fundo: `#311d13`

Título (TangoSans, bege, grande):
```
Agende uma apresentação.
```

Subtítulo (Poppins, bege leve):
```
Receba o portfólio digital e conheça o acervo com a curadoria
da equipe Algimi São Paulo.
```

Botão:
```
→ Falar com a gente
```

Grafismo isométrico ampliado decorando o fundo (muito sutil, opacity 6%).

---

**[SEÇÃO 10 — FOOTER]**

Fundo: `#1a0e08` (marrom mais escuro que a marca — variação para o footer)
Texto: bege

```
Algimi São Paulo
Madeiras autorais amazônicas para arquitetura de alto padrão.

Rua Francisco Benedito da Silveira, 43 — Itu Novo Centro – SP
(11) 9.3342-7616 · @algimisaopaulo

Algimi SP é uma operação da Algimi Florestal (Santarém-PA), certificada FSC.

© 2026 Algimi São Paulo. Todos os direitos reservados.
```

Logo em versão bege no rodapé.
Links de nav em Poppins light, espaçados.

---

### PÁGINAS INTERNAS (estrutura base — replicar nav e footer da home)

---

**[PÁGINA: A MARCA]**

Hero: fundo marrom escuro, título TangoSans grande:
```
A Algimi São Paulo nasce no encontro entre a tradição florestal
amazônica e a arquitetura autoral paulista.
```

Manifesto completo:
```
Não trabalhamos com madeira como commodity. Apresentamos matéria-prima
com presença, cor e textura próprias — para projetos que tratam o
material como parte da criação, não apenas como insumo.

Cada espécie do nosso acervo é uma escolha. Cada corte, uma resposta
ao desenho de um arquiteto. Cada entrega, um diálogo entre origem e projeto.
```

**Timeline horizontal (inspiração Visionary Intelligence — cards deslizantes):**

```
1992 — A origem na floresta
Sandro Silva, empresário com mais de 30 anos no setor de tecnologia e varejo,
recebe do arquiteto Cassius Marcelus a curadoria técnica para o projeto de sua
residência em Itu — a Casa Éden. Ali, a madeira amazônica deixa de ser insumo
e se revela protagonista da arquitetura.

2019 — O encontro
Da experiência da Casa Éden nasce a tese: conectar a origem florestal
certificada à especificação autoral. A sociedade entre Sandro, Cassius e
Larissa Schmitt — representante da família fundadora da Algimi Florestal —
estrutura a operação paulista com Centro de Distribuição em Piedade e
showroom em Itu.

2024-2026 — Algimi São Paulo
A Algimi São Paulo não atua como revendedora. Trabalha com madeira própria,
controle integral da cadeia, customização de cortes e venda consultiva.
```

Sócios (mesmo layout da home, expandido).

---

**[PÁGINA: ACERVO]**

Hero fundo bege, título:
```
Um acervo autoral de madeiras amazônicas.

Cada espécie carrega uma presença própria. Uma cor que não se repete.
Uma textura que não se substitui. Uma aplicação que pode transformar
o desenho de um projeto.

Explore o acervo por cor, aplicação ou disponibilidade.
```

**Filtros:**
- Cor: Clara · Média · Escura
- Aplicação: Interna · Externa · Estrutural · Revestimento
- Disponibilidade: Imediata · Médio prazo

Grid de cards de espécies.

Cada card de espécie ao abrir:
```
Espécie selecionada para compor o acervo autoral da Algimi São Paulo,
com potencial de aplicação em projetos de arquitetura e interiores de alto padrão.

→ Solicitar amostra
→ Solicitar especificação para projeto
```

---

**[PÁGINA: PROJETOS]**

Hero fundo marrom:
```
Projetos que escolheram a madeira como assinatura.

Cada projeto é um diálogo entre o arquiteto, a obra e a matéria.
Conheça aplicações reais do acervo Algimi São Paulo em residências,
comércios e espaços autorais.
```

Grid masonry de projetos (fotos grandes de banco de imagens: interiores com madeira nobre).

---

**[PÁGINA: MANEJO]**

Hero fundo floresta (foto banco de imagens: floresta amazônica, madeira em manejo):
```
Da floresta à arquitetura. Com rastreabilidade.
```

Texto completo:
```
A madeira comercializada pela Algimi São Paulo é proveniente de manejo
florestal sustentável, com concessões legalizadas e inventário técnico
realizado por drone.

A extração é controlada em até 30% por lote, garantindo a regeneração
natural da área explorada. O manejo opera por ciclos de 10 anos — o
tempo necessário para a floresta se regenerar antes de uma nova intervenção.

A certificação internacional assegura que cada lote respeita critérios
ambientais, sociais e econômicos. A rastreabilidade é parte do produto:
cada peça que chega a São Paulo carrega a procedência de uma cadeia
documentada, controlada e verificável.

Não é discurso. É operação.
```

Linha final em destaque (TangoSans grande, marrom):
```
Não é discurso. É operação.
```

---

**[PÁGINA: PARA ARQUITETOS]**

Hero:
```
Madeira como linguagem de projeto.
```

Texto:
```
A Algimi São Paulo atende escritórios de arquitetura autoral com um modelo
consultivo. Mais do que fornecer madeira, participamos da especificação —
do entendimento do conceito do projeto à seleção da espécie certa para cada aplicação.
```

**O que oferecemos** (grid 2×3 de cards com ícone de linha fina + texto):
```
• Acervo de espécies amazônicas raras, com paletas e texturas diferenciadas
• Fichas técnicas completas para especificação em projeto
• Fornecimento sob medida (corte, dimensão, beneficiamento)
• Apresentação presencial do mostruário no escritório ou no showroom em Itu
• Suporte técnico durante a execução da obra
```

**Como trabalhamos** (timeline vertical numerada — aqui faz sentido pois É uma sequência):
```
1. Contato inicial e entendimento do projeto
2. Apresentação do acervo e curadoria de espécies
3. Especificação técnica e definição de medidas
4. Fornecimento sob medida e acompanhamento da entrega
5. Suporte na execução
```

CTA:
```
→ Agende uma apresentação
```

---

**[PÁGINA: PARA CONSTRUTORAS]**

Hero:
```
Madeira amazônica autoral com segurança de fornecimento.
```

Texto:
```
A Algimi São Paulo atende construtoras e incorporadoras que executam projetos
de alto padrão. Trabalhamos com madeira própria, disponibilidade controlada
por espécie, beneficiamento qualificado e suporte técnico para a execução.
```

**O que oferecemos:**
```
• Fornecimento sob medida com prazos definidos
• Beneficiamento controlado
• Suporte técnico para especificação e execução
• Atendimento direto, sem intermediários
• Rastreabilidade e certificação da madeira fornecida
```

CTA:
```
→ Fale com o comercial
```

---

**[PÁGINA: SHOWROOM]**

Hero fundo marrom, foto do espaço (banco de imagens: showroom de materiais premium):
```
Itu Novo Centro.
```

Texto:
```
O showroom da Algimi São Paulo fica em Itu, ponto estratégico para o
atendimento a escritórios de arquitetura, decoradores e construtoras do
interior e da capital paulista.

O espaço é dedicado à apresentação do acervo, à curadoria de espécies
para projetos em desenvolvimento e ao encontro com arquitetos parceiros.

Atendimento por agendamento.
```

Endereço destacado (TangoSans):
```
Rua Francisco Benedito da Silveira, 43
Itu Novo Centro – São Paulo
(11) 9.3342-7616
```

CTA:
```
→ Agendar visita
```

Mapa embed (Google Maps) com pin no endereço.

---

**[PÁGINA: IMPRENSA]**

```
A Algimi São Paulo na imprensa especializada.
Acompanhe publicações, citações e reportagens sobre a marca.
```

Card de matéria:
```
Revista Cenário — Edição 86
Algimi São Paulo inicia operação em Itu de madeiras autorais
amazônicas e atendimento premium.
→ Leia a matéria completa
```

---

**[PÁGINA: CONTATO]**

Hero fundo bege:
```
Vamos conversar.
Para apresentação do acervo, especificação em projeto ou
agendamento de visita ao showroom.
```

Layout dois blocos:
- Bloco esquerdo: dados de contato
```
WhatsApp: (11) 9.3342-7616
E-mail: contato@algimisaopaulo.com.br
Endereço: Rua Francisco Benedito da Silveira, 43 — Itu Novo Centro – São Paulo
Instagram: @algimisaopaulo
```

- Bloco direito: formulário
```
Nome *
Escritório ou empresa *
Telefone *
Mensagem
→ Enviar mensagem
```

Confirmação:
```
Mensagem recebida. Em breve entraremos em contato.
```

Erro:
```
Não foi possível enviar. Tente novamente em instantes.
```

---

## MICROCOPY (aplicar em todos os pontos recorrentes)

```
CTA principal: Agende uma apresentação
CTA secundário: Solicite o portfólio
CTA acervo: Solicitar amostra · Solicitar especificação
Botão de envio: Enviar mensagem
WhatsApp flutuante: Fale com a Algimi São Paulo
Cookies: Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.
```

---

## CHECKLIST TÉCNICO

- [ ] Fontes: TangoSans (display) + Poppins (corpo/UI) — importar via Google Fonts ou CDN
- [ ] GSAP + ScrollTrigger + SplitText carregados
- [ ] Lenis (smooth scroll) configurado
- [ ] Todas as fotos: banco de imagens gratuito (Unsplash/Pexels) com tema madeira nobre, interiores de alto padrão, floresta amazônica — URLs diretas ou placeholders descritivos
- [ ] Sócios: placeholder retângulo cinza grafite com ícone de pessoa centralizado
- [ ] Logo: usar arquivo SVG/PNG fornecido em anexo
- [ ] WhatsApp flutuante: botão fixo canto inferior direito (fundo marrom, ícone branco)
- [ ] Responsivo: mobile-first, breakpoints 768px e 1280px
- [ ] Max-width container: 1440px, padding lateral 80px desktop / 24px mobile
- [ ] Scroll suave entre âncoras internas

---

*Texto do site: fixo e imutável conforme copy fornecido. Não alterar nenhuma palavra, apenas posicionar nas seções correspondentes.*