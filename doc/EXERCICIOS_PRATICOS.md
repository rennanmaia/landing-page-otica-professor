# Exercícios Práticos - Programação Web com IA
## Landing Page Ótica - Atividades Hands-On

---

## 🎯 **EXERCÍCIO 1: ANÁLISE DE CÓDIGO HTML**
**Tempo:** 15 minutos | **Dificuldade:** 🟢 Básico

### **Tarefa:**
Analise o código HTML gerado pela IA e responda:

1. **Identifique 7 tags semânticas** e explique por que cada uma foi escolhida:
   ```
   Exemplo: <header> - Usado para o cabeçalho porque...
   ```

2. **Encontre 5 elementos de acessibilidade** no código:
   ```html
   <!-- Cole aqui os elementos encontrados com explicação -->
   ```

3. **Liste todas as meta tags** e explique a função de cada uma:
   ```html
   <!-- Cole as meta tags e explique -->
   ```

### **Desafio Extra:**
Adicione uma nova seção "Marcas Parceiras" ao HTML mantendo a semântica correta.

---

## 🎨 **EXERCÍCIO 2: CSS RESPONSIVO**
**Tempo:** 25 minutos | **Dificuldade:** 🟡 Intermediário

### **Tarefa A: Análise de Layout**
1. **Identifique no CSS onde são usados:**
   - CSS Grid (liste 3 exemplos)
   - Flexbox (liste 3 exemplos)
   - Media queries (liste todos os breakpoints)

2. **Explique a diferença:**
   ```css
   /* Por que usar Grid aqui? */
   .hero-container {
       display: grid;
       grid-template-columns: 1fr 1fr;
   }
   
   /* Por que usar Flexbox aqui? */
   .nav-menu {
       display: flex;
       gap: 30px;
   }
   ```

### **Tarefa B: Customização**
1. **Altere a paleta de cores** para tons de verde:
   - Verde primário: #27ae60
   - Verde secundário: #2ecc71
   - Mantenha a harmonia visual

2. **Modifique uma animação existente:**
   - Escolha uma animação (@keyframes)
   - Altere sua duração e efeito
   - Teste o resultado

### **Tarefa C: Responsividade**
Teste a página em diferentes resoluções e documente problemas encontrados:
```
320px (Mobile pequeno): 
- Problema encontrado:
- Solução proposta:

768px (Tablet):
- Problema encontrado:
- Solução proposta:
```

---

## ⚙️ **EXERCÍCIO 3: JAVASCRIPT INTERATIVO**
**Tempo:** 30 minutos | **Dificuldade:** 🟡 Intermediário

### **Tarefa A: Debug e Análise**
1. **Adicione console.log** em 5 funções diferentes
2. **Teste cada funcionalidade** e observe os logs no DevTools
3. **Documente o fluxo de execução:**
   ```javascript
   // Quando o usuário clica no menu hamburger:
   // 1. Função executada:
   // 2. Elemento modificado:
   // 3. Classe CSS aplicada:
   ```

### **Tarefa B: Nova Funcionalidade**
Implemente **uma** das opções abaixo:

**Opção 1: Contador de Visualizações**
```javascript
// Crie um contador que:
// 1. Conta quantos produtos foram visualizados
// 2. Mostra o total em algum lugar da página
// 3. Persiste no localStorage
```

**Opção 2: Modo Escuro/Claro**
```javascript
// Crie um botão que:
// 1. Alterna entre tema claro e escuro
// 2. Salva a preferência do usuário
// 3. Aplica as mudanças instantaneamente
```

**Opção 3: Modal de Produto**
```javascript
// Crie um modal que:
// 1. Abre ao clicar em "Ver detalhes"
// 2. Mostra informações do produto
// 3. Fecha com ESC ou clique fora
```

---

## 🧪 **EXERCÍCIO 4: TESTES E QUALIDADE**
**Tempo:** 20 minutos | **Dificuldade:** 🟢 Básico

### **Checklist de Testes:**
Marque ✅ ou ❌ para cada item testado:

**Funcionalidade:**
- [ ] Menu hambúrguer abre/fecha
- [ ] Links do menu navegam suavemente
- [ ] Slider de depoimentos funciona
- [ ] Filtros de produtos funcionam
- [ ] Formulário valida campos obrigatórios
- [ ] Formulário valida formato de email
- [ ] Botão voltar ao topo aparece após scroll

**Responsividade:**
- [ ] 320px - Tudo visível e funcional
- [ ] 768px - Layout se adapta corretamente  
- [ ] 1200px - Design desktop otimizado
- [ ] Orientação paisagem funciona

**Acessibilidade:**
- [ ] Navegação por teclado funciona
- [ ] Textos têm contraste adequado
- [ ] Imagens têm texto alternativo
- [ ] Links são descritivos

### **Relatório de Bugs:**
```
Bug encontrado:
Localização:
Passos para reproduzir:
Solução proposta:
```

---

## 🤖 **EXERCÍCIO 5: DOMÍNIO DA IA**
**Tempo:** 25 minutos | **Dificuldade:** 🔴 Avançado

### **Tarefa A: Engenharia de Prompts**
Crie prompts para solicitar:

1. **Funcionalidade específica:**
   ```
   Prompt: [Escreva seu prompt aqui]
   Objetivo: Criar um sistema de busca nos produtos
   ```

2. **Correção de bug:**
   ```
   Prompt: [Escreva seu prompt aqui]
   Objetivo: Corrigir problema de responsividade específico
   ```

3. **Otimização:**
   ```
   Prompt: [Escreva seu prompt aqui]
   Objetivo: Melhorar performance de animações
   ```

### **Tarefa B: Validação de Código IA**
A IA gerou este código. Encontre e corrija os problemas:

```javascript
// Código gerado pela IA (com problemas propositais)
function validateEmail(email) {
    return email.includes('@');  // Problema 1: Validação muito simples
}

document.getElementById('form').onsubmit = function() {
    var email = document.getElementById('email').value;  // Problema 2: var ao invés de const/let
    if (validateEmail(email)) {
        alert('Enviado!');  // Problema 3: Alert não é boa UX
    }
}  // Problema 4: Missing addEventListener e preventDefault
```

**Sua correção:**
```javascript
// Cole aqui o código corrigido
```

---

## 🏆 **PROJETO FINAL: LANDING PAGE PERSONALIZADA**
**Tempo:** 90 minutos | **Dificuldade:** 🔴 Avançado

### **Missão:**
Criar uma landing page completamente nova para um dos nichos:
- 🍕 Restaurante | 💪 Academia | 🐕 Petshop | ✂️ Salão | 👕 Loja | 🏠 Imobiliária

### **Requisitos Obrigatórios:**

#### **HTML (25 pontos):**
- [ ] Estrutura semântica completa
- [ ] Meta tags otimizadas para SEO
- [ ] Acessibilidade (alt, aria-labels, etc.)
- [ ] Pelo menos 6 seções principais

#### **CSS (25 pontos):**
- [ ] Design responsivo (mobile-first)
- [ ] Paleta de cores temática
- [ ] Animações e transições suaves
- [ ] Layout Grid/Flexbox apropriado

#### **JavaScript (25 pontos):**
- [ ] Mínimo 4 funcionalidades interativas
- [ ] Validação de formulário completa
- [ ] Código organizado em funções
- [ ] Tratamento de erros

#### **Inovação (25 pontos):**
- [ ] Pelo menos 1 funcionalidade única
- [ ] Elemento visual diferenciado
- [ ] Interação criativa com usuário
- [ ] Otimização não sugerida pela IA

### **Entrega:**
```
Pasta: [seu-nome]-landing-page/
├── index.html
├── style.css  
├── script.js
├── README.md (explicando suas escolhas técnicas)
└── assets/ (se houver imagens)
```

### **Critérios de Avaliação:**
- **Funciona sem erros:** 40%
- **Código limpo e organizado:** 30%  
- **Design profissional:** 20%
- **Criatividade e inovação:** 10%

---

## 🎯 **EXERCÍCIOS EXTRAS (OPCIONAIS)**

### **🔥 Desafio 1: Performance**
Otimize a landing page para carregar em menos de 2 segundos:
- Minifique CSS/JS
- Otimize imagens
- Implemente lazy loading
- Use CDN para bibliotecas

### **🔥 Desafio 2: PWA**
Transforme em Progressive Web App:
- Crie manifest.json
- Implemente service worker básico
- Torne funcional offline
- Adicione à tela inicial

### **🔥 Desafio 3: API Integration**
Integre com APIs reais:
- Maps API para localização
- Weather API para clima
- Fake Store API para produtos
- JSONPlaceholder para comentários

---

## 📋 **TEMPLATE DE ENTREGA**

### **Relatório de Desenvolvimento:**
```markdown
# Landing Page [Seu Nome] - [Nicho Escolhido]

## 🎯 Objetivo
[Descreva o objetivo da sua landing page]

## 🛠️ Tecnologias Utilizadas
- HTML5: [funcionalidades específicas usadas]
- CSS3: [técnicas e frameworks]
- JavaScript: [funcionalidades implementadas]
- IA: [como foi utilizada]

## 🚀 Funcionalidades Implementadas
1. [Funcionalidade 1] - [Como funciona]
2. [Funcionalidade 2] - [Como funciona]
3. [Funcionalidade 3] - [Como funciona]

## 🎨 Decisões de Design
- Paleta de cores: [justificativa]
- Tipografia: [escolhas e por quê]
- Layout: [estrutura e responsividade]

## 🤖 Uso da IA
- Prompts utilizados: [liste os principais]
- Código adaptado: [o que foi modificado]
- Aprendizados: [o que descobriu]

## 🧪 Testes Realizados
- Navegadores testados:
- Dispositivos testados:
- Problemas encontrados e soluções:

## 🔄 Melhorias Futuras
[Liste 3 melhorias que implementaria com mais tempo]

## 📚 Referências
[Sites, documentações, tutorials consultados]
```

---

**💡 DICAS IMPORTANTES:**

1. **Sempre teste antes de entregar**
2. **Documente seu código com comentários**
3. **Use a IA como assistente, não como substituto do conhecimento**
4. **Pergunte quando tiver dúvidas**
5. **Seja criativo e experimente!**

**🎓 BOA SORTE!**
