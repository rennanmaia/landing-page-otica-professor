
# Como publicar meu site

### 1. Escolha do Host Gratuito

O serviço mais recomendado atualmente para projetos educacionais e pequenos sites dinâmicos é o **InfinityFree**:
- Suporte a HTML, CSS, JS, PHP e MySQL
- 100% gratuito
- Sem anúncios obrigatórios
- Painel de controle fácil
- Permite importar/exportar banco de dados
- [https://infinityfree.net/](https://infinityfree.net/)

Alternativas: 000WebHost, AwardSpace, FreeHosting.com

---

### 2. Cadastro e Criação da Conta
1. Acesse [https://infinityfree.net/](https://infinityfree.net/)
2. Clique em "Sign Up Now" e crie sua conta gratuita
3. Confirme o e-mail e acesse o painel

---

### 3. Criação do Site
1. No painel, clique em "Create Account"
2. Escolha um subdomínio gratuito (ex: visaoclear.epizy.com)
3. Aguarde a criação do espaço

---

### 4. Upload dos Arquivos
1. No painel, acesse "File Manager" ou use um cliente FTP (ex: FileZilla)
2. Envie todos os arquivos do projeto (index.html, style.css, script.js, etc.) para a pasta `htdocs`
3. Se houver arquivos PHP, envie também para `htdocs`

---

### 5. Configuração do Banco de Dados MySQL
1. No painel, acesse "MySQL Databases"
2. Crie um novo banco de dados
3. Anote o nome do banco, usuário, senha e host
4. Importe o arquivo `.sql` (se houver) usando o "phpMyAdmin" do painel
5. Configure seu código PHP para usar essas credenciais

---

### 6. Teste e Acesso Público
- Acesse o site pelo subdomínio gerado (ex: https://visaoclear.epizy.com/)
- Teste todas as funcionalidades (formulários, banco de dados, etc.)

---

### 7. Dicas Finais
- InfinityFree não permite envio de e-mails por PHP (use serviços externos se necessário)
- Para domínios próprios, é possível configurar DNS gratuitamente
- Consulte a documentação do host para limites e recursos

---

**Resumo:**
InfinityFree é a melhor opção gratuita para hospedar projetos com HTML, CSS, JS, PHP e MySQL. O processo é simples, rápido e não exige cartão de crédito. Ideal para projetos educacionais, protótipos e portfólios!