# Guia de Prompts para Professores
## Programação Web com IA - Landing Page Ótica

### 🎯 **PROMPTS ESTRUTURADOS POR ETAPA DA AULA**

---

## **PARTE 1: PROMPTS PARA HTML**

### **Prompt Inicial - Estrutura Base**
```
Preciso criar uma landing page completa para uma ótica chamada 'VisãoClear'. 
Crie um arquivo HTML5 semântico e bem estruturado com as seguintes seções:

1. Header com logo e navegação responsiva
2. Seção Hero com título impactante e call-to-actions
3. Seção de Serviços (4 cards: exame, óculos de grau, óculos de sol, manutenção)
4. Seção de Produtos com filtros por categoria
5. Seção Sobre a empresa com estatísticas
6. Seção de Depoimentos de clientes
7. Seção de Contato com formulário e informações
8. Footer completo com links e redes sociais

Use tags semânticas, inclua meta tags para SEO, e prepare a estrutura para ser responsiva. Adicione links para Font Awesome e Google Fonts (Poppins).
```

### **Prompt de Refinamento - Acessibilidade**
```
Melhore o HTML da landing page da ótica adicionando:
- Atributos alt em todas as imagens/ícones
- Labels apropriados para formulários
- Atributos aria-label onde necessário
- Estrutura hierárquica correta de headings (h1, h2, h3)
- Roles ARIA para melhor acessibilidade
- Skip links para navegação por teclado
```

---

## **PARTE 2: PROMPTS PARA CSS**

### **Prompt Principal - Design Responsivo**
```
Crie CSS moderno e responsivo para a landing page da ótica VisãoClear. 
Especificações:

DESIGN:
- Paleta: azul (#667eea) e roxo (#764ba2) com gradientes
- Tipografia: Poppins do Google Fonts
- Estilo: moderno, limpo, profissional

LAYOUT:
- Mobile-first approach
- CSS Grid para layouts principais
- Flexbox para componentes menores
- Container máximo de 1200px

COMPONENTES:
- Botões com hover effects e shadows
- Cards com animações hover
- Header transparente com blur
- Animações suaves (float, fade, bounce)

RESPONSIVIDADE:
- Breakpoints: 480px, 768px, 1024px
- Menu hambúrguer para mobile
- Grids que se adaptam ao tamanho da tela
- Textos e espaçamentos proporcionais
```

### **Prompt Específico - Animações**
```
Adicione animações CSS avançadas à landing page:

1. Hero section com animação de entrada (fadeInUp e fadeInRight)
2. Elementos que aparecem ao fazer scroll
3. Animação 'float' para o ícone de óculos no hero
4. Hover effects nos botões com transform e shadow
5. Animação 'bounce' para o indicador de scroll
6. Transições suaves em todos os elementos interativos
7. Loading states para o formulário

Use @keyframes e transitions. Otimize para performance evitando animações de propriedades que causam reflow/repaint.
```

---

## **PARTE 3: PROMPTS PARA JAVASCRIPT**

### **Prompt Completo - Funcionalidades**
```
Crie JavaScript moderno para tornar a landing page da ótica totalmente interativa:

FUNCIONALIDADES OBRIGATÓRIAS:
1. Menu hambúrguer responsivo (toggle no mobile)
2. Navegação suave entre seções (smooth scroll)
3. Header que muda de estilo ao fazer scroll
4. Filtros de produtos por categoria (todos, grau, sol, infantil)
5. Slider automático de depoimentos (3 slides, 5s cada)
6. Formulário de contato com validação completa
7. Botão "voltar ao topo" que aparece após scroll
8. Animações on-scroll para elementos

REQUISITOS TÉCNICOS:
- Use addEventListener para todos os eventos
- Organize em funções modulares
- Inclua validação de email e telefone com regex
- Implemente debounce para eventos de scroll
- Adicione feedback visual para ações do usuário
- Trate erros e casos extremos
- Use const/let apropriadamente
```

### **Prompt Específico - Validação de Formulário**
```
Crie um sistema completo de validação para o formulário de contato:

CAMPOS:
- Nome (obrigatório, min 2 caracteres)
- Email (obrigatório, formato válido)
- Telefone (obrigatório, formato brasileiro)
- Serviço (select obrigatório)
- Mensagem (obrigatória, min 10 caracteres)

FUNCIONALIDADES:
- Validação em tempo real (on blur)
- Mensagens de erro personalizadas
- Formatação automática do telefone
- Submit com simulação de envio
- Modal de sucesso após envio
- Loading state no botão de envio
- Limpar validações ao digitar

Use regex para validações e classes CSS para styling de erro.
```

---

## **PARTE 4: PROMPTS PARA MELHORIAS E OTIMIZAÇÕES**

### **Prompt - Performance e SEO**
```
Otimize a landing page da ótica para performance e SEO:

PERFORMANCE:
- Lazy loading para imagens
- Minificação de CSS/JS (comentários sobre como fazer)
- Otimização de animações (will-change, transform)
- Debounce em eventos de scroll/resize
- Preload de recursos críticos

SEO:
- Meta tags completas (description, keywords, og:tags)
- Schema markup para negócio local
- Estrutura de dados JSON-LD
- Alt texts descritivos
- URLs semânticas se fossem múltiplas páginas

ACESSIBILIDADE:
- Contraste adequado em todas as cores
- Focus indicators visíveis
- Navegação por teclado funcional
- Screen reader compatibility
```

### **Prompt - PWA Básico**
```
Transforme a landing page em uma Progressive Web App básica:

ARQUIVOS NECESSÁRIOS:
1. manifest.json com ícones e configurações
2. service-worker.js para cache básico
3. Registrar o service worker no JavaScript principal

FUNCIONALIDADES:
- Cache dos arquivos estáticos
- Funcionar offline (página básica)
- Instalável no dispositivo
- Ícones para diferentes resoluções
- Splash screen personalizada

Adicione também meta tags para mobile (viewport, theme-color, apple-touch-icon).
```

---

## **PARTE 5: PROMPTS PARA EXERCÍCIOS DOS ALUNOS**

### **Desafio 1 - Customização**
```
Adapte a landing page da ótica para um [NICHO ESPECÍFICO]:
- Restaurante italiano
- Academia/fitness
- Petshop
- Salão de beleza
- Loja de roupas

Mantenha a estrutura, mas adapte:
- Cores da paleta (pesquise psicologia das cores)
- Conteúdo das seções
- Ícones temáticos
- Imagens de fundo ou elementos visuais
- Funcionalidades específicas do nicho
```

### **Desafio 2 - Nova Funcionalidade**
```
Adicione uma funcionalidade não implementada:

OPÇÕES:
1. Calculadora de grau (simulação)
2. Agendamento de consulta (modal com calendário)
3. Comparador de produtos
4. Chat bot básico
5. Galeria de imagens com lightbox
6. Sistema de avaliações/ratings
7. Carrinho de compras simples

Implemente usando JavaScript vanilla, CSS moderno e HTML semântico.
```

### **Desafio 3 - Integração**
```
Simule integrações com APIs externas:

1. MAPS API: Adicione mapa da localização da ótica
2. WEATHER API: Mostre o clima atual (relevante para óculos de sol)
3. SOCIAL MEDIA: Feed do Instagram da ótica
4. PAYMENT: Simulação de checkout com múltiplos métodos
5. EMAIL: Integração com newsletter (simulada)

Use fetch API e trate promises adequadamente. Crie dados mock para simular as respostas das APIs.
```

---

## **PARTE 6: PROMPTS PARA DEBUGGING E TESTES**

### **Prompt - Debugging Guiado**
```
Crie um guia de debugging para a landing page:

TESTES MANUAIS:
1. Checklist de funcionalidades por seção
2. Teste responsivo em diferentes resoluções
3. Teste de acessibilidade com navegação por teclado
4. Teste de performance no DevTools

DEBUGGING COMUM:
- JavaScript não funciona: console.log estratégicos
- CSS não aplica: especificidade e herança
- Layout quebrado: Flexbox/Grid debugging
- Animações travadas: performance profiling

FERRAMENTAS:
- Chrome DevTools (Elements, Console, Network, Performance)
- Lighthouse audit
- WAVE accessibility checker
- W3C validators
```

### **Prompt - Validação de Código**
```
Revise e valide todo o código da landing page:

HTML:
- Validação W3C
- Semântica correta
- Acessibilidade WCAG

CSS:
- Organização e legibilidade  
- Uso eficiente de seletores
- Responsividade em todos os breakpoints
- Performance das animações

JAVASCRIPT:
- Boas práticas ES6+
- Tratamento de erros
- Performance e otimização
- Compatibilidade com navegadores

Sugira melhorias específicas para cada problema encontrado.
```

---

## **📋 CHECKLIST PARA PROFESSORES**

### **Antes da Aula**
- [ ] Testar todos os prompts em diferentes IAs
- [ ] Preparar ambiente XAMPP funcionando
- [ ] Validar código gerado em diferentes navegadores  
- [ ] Preparar exercícios alternativos se necessário
- [ ] Testar responsividade em dispositivos reais

### **Durante a Aula**
- [ ] Demonstrar processo de prompting
- [ ] Explicar cada conceito antes de usar a IA
- [ ] Validar compreensão através de perguntas
- [ ] Incentivar experimentação e curiosidade
- [ ] Corrigir códigos problemáticos gerados pela IA

### **Após a Aula**  
- [ ] Coletar feedback dos alunos sobre a metodologia
- [ ] Documentar problemas comuns encontrados
- [ ] Atualizar prompts baseado nos resultados
- [ ] Preparar exercícios de fixação para próxima aula

---

**💡 DICAS IMPORTANTES:**

1. **Sempre validar o código gerado pela IA**
2. **Explicar o "por quê" por trás de cada conceito** 
3. **Incentivar experimentação e modificação**
4. **Usar erros como oportunidades de aprendizagem**
5. **Conectar conceitos com aplicações reais**
