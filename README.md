# Site Pessoal - José Sílvio da Silva Barreto (Silvio SB)

## 🎯 Sobre o Site

Site pessoal profissional desenvolvido para José Sílvio da Silva Barreto (Silvio SB), ativista em políticas públicas inclusivas, empreendedor social e especialista em tecnologia e inteligência artificial.

### 🌟 Características Principais

- ✅ **Design Moderno e Minimalista**: Interface limpa e profissional com cores institucionais (azul profundo, branco e cinza)
- ✅ **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- ✅ **Acessível**: Segue padrões WCAG 2.1 AA para inclusão digital
- ✅ **SEO Otimizado**: Meta tags configuradas para melhor indexação em buscadores
- ✅ **Performance**: Código otimizado com lazy loading e debounce em eventos
- ✅ **Navegação Intuitiva**: Menu fixo com indicadores de seção ativa

## 📋 Estrutura do Site

### 🏠 Página Inicial (Home)
- Apresentação pessoal e profissional
- Links para redes sociais
- Botões de ação para navegação rápida

### 👤 Sobre Mim
- Biografia e trajetória profissional
- Formação acadêmica
- Áreas de atuação (com tags interativas)
- Missão e valores

### 💼 Trabalhos & Projetos
Destaque para 4 projetos principais:
1. **Unidos pela OI – Brasil**: Movimento de apoio a pessoas com Osteogênese Imperfeita
2. **Conselhos e Comissões Públicas**: Atuação em políticas públicas
3. **Cartilhas e Materiais Educativos**: Produção de conteúdo acessível
4. **IA para Impacto Social**: Aplicação de tecnologia em projetos sociais

### 📝 Blog
5 artigos preparados sobre:
- Tecnologia, IA e Políticas Públicas
- Doenças Raras e a importância dos dados
- Trajetória pessoal entre conselhos e tecnologia
- IA como ferramenta de inclusão
- Educação acessível na era da IA

### 🔗 Links Úteis
Links organizados em 5 categorias:
- 📋 Legislação (LBI, CONADE, etc.)
- 🏥 Protocolos e Saúde (Ministério da Saúde, ANVISA)
- 📊 Dados Públicos (IBGE, DATASUS)
- 🤝 Organizações e Movimentos
- 📖 Recursos Educacionais (SciELO, bibliotecas virtuais)

### 📧 Contato
- Formulário de contato funcional
- Informações de contato
- Links para redes sociais

## 🚀 Como Publicar o Site

### Opção 1: GitHub Pages (Recomendado)

1. **Prepare o repositório**:
   - O site já está no repositório correto
   - Certifique-se de que todos os arquivos estão commitados

2. **Ative o GitHub Pages**:
   - Vá em `Settings` > `Pages`
   - Em "Source", selecione a branch `main` (ou a branch atual)
   - Selecione a pasta `/ (root)`
   - Clique em `Save`

3. **Acesse seu site**:
   - O site estará disponível em: `https://Silviosb88.github.io/silviosb-pagina-pessoal/`
   - A publicação pode levar alguns minutos

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com) e crie uma conta
2. Clique em "Add new site" > "Import an existing project"
3. Conecte com GitHub e selecione este repositório
4. Configure:
   - Build command: (deixe vazio, é site estático)
   - Publish directory: `/`
5. Clique em "Deploy site"
6. Site estará disponível em poucos segundos

### Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Clique em "New Project"
3. Importe este repositório do GitHub
4. Configure:
   - Framework Preset: Other
   - Root Directory: `./`
5. Clique em "Deploy"
6. Site estará disponível em poucos minutos

### Opção 4: Servidor Próprio

Se você tem um servidor web próprio:

1. Faça upload dos arquivos via FTP/SFTP:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Configure o servidor web (Apache/Nginx) para servir os arquivos
3. Aponte seu domínio para o servidor

### Opção 5: GitHub Pages + Cloudflare (Recomendado para Domínio Próprio)

Esta opção combina o GitHub Pages gratuito com o CDN e segurança do Cloudflare:

**Passo 1: Configurar GitHub Pages**
1. Siga os passos da "Opção 1: GitHub Pages" acima
2. Aguarde o site estar disponível em `https://Silviosb88.github.io/silviosb-pagina-pessoal/`

**Passo 2: Configurar Cloudflare**
1. Crie uma conta gratuita no [cloudflare.com](https://cloudflare.com)
2. Adicione seu domínio ao Cloudflare
3. Atualize os nameservers do seu domínio para os fornecidos pelo Cloudflare

**Passo 3: Configurar DNS no Cloudflare**
1. No painel do Cloudflare, vá em "DNS"
2. Adicione os seguintes registros:
   - Tipo: `CNAME`
   - Nome: `@` (ou `www` se preferir)
   - Conteúdo: `Silviosb88.github.io`
   - Proxy: ✅ Ativado (laranja)
   
3. Se quiser ambos (com e sem www):
   - Adicione outro registro CNAME com nome `www` apontando para o mesmo destino

**Passo 4: Configurar Custom Domain no GitHub**
1. No GitHub, vá em `Settings` > `Pages`
2. Em "Custom domain", digite seu domínio (ex: `seudominio.com`)
3. Clique em `Save`
4. Aguarde a verificação do DNS (pode levar alguns minutos)
5. Marque a opção "Enforce HTTPS" quando disponível

**Benefícios desta configuração:**
- ✅ Hospedagem gratuita no GitHub Pages
- ✅ CDN global do Cloudflare para velocidade
- ✅ Proteção DDoS gratuita
- ✅ SSL/HTTPS automático e seguro
- ✅ Cache otimizado
- ✅ Analytics básico (opcional)

## ⚠️ Ações Necessárias Antes de Publicar

### 1. Atualizar Links das Redes Sociais

No arquivo `index.html`, substitua todos os `#` pelos seus links reais:

```html
<!-- Procure por linhas como estas e substitua # pelos links reais: -->
<a href="#" class="home__social-link" target="_blank">
```

**Locais para atualizar**:
- Linha ~70-85: Redes sociais no header (home)
- Linha ~515-525: Seção de contato
- Linha ~570-580: Footer

**Exemplo**:
```html
<!-- Antes -->
<a href="#" class="home__social-link" target="_blank" title="LinkedIn">

<!-- Depois -->
<a href="https://www.linkedin.com/in/seu-usuario" class="home__social-link" target="_blank" title="LinkedIn">
```

### 2. Atualizar Email de Contato

Substitua `contato@exemplo.com` pelo seu email real:

```html
<!-- No arquivo index.html, linha ~507 -->
<p class="contact__data-info">seu-email@gmail.com</p>
```

### 3. Integrar Formulário de Contato Real

O formulário atual é apenas demonstrativo. Aqui estão algumas opções gratuitas para torná-lo funcional:

#### Opção A: Formspree (Mais Simples - Recomendado)

1. Crie conta gratuita no [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Copie o endpoint fornecido
4. No arquivo `index.html`, linha ~527, atualize:

```html
<!-- Antes -->
<form class="contact__form" id="contact-form">

<!-- Depois -->
<form class="contact__form" id="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

5. No arquivo `script.js`, comente ou remova a simulação de envio (linhas 114-125)

**Vantagens:** Muito simples, sem servidor próprio, 50 envios/mês gratuitos

#### Opção B: Netlify Forms (Se hospedar no Netlify)

1. No arquivo `index.html`, adicione `data-netlify="true"` ao formulário:

```html
<form class="contact__form" id="contact-form" data-netlify="true" name="contact">
```

2. Adicione um campo oculto para o nome do formulário:

```html
<input type="hidden" name="form-name" value="contact">
```

3. Faça deploy no Netlify - os formulários são detectados automaticamente

**Vantagens:** 100 envios/mês gratuitos, integrado com o Netlify

#### Opção C: Google Forms (Totalmente Gratuito)

1. Crie um formulário no [Google Forms](https://forms.google.com)
2. Configure os campos (nome, email, assunto, mensagem)
3. Obtenha o link do formulário
4. No arquivo `index.html`, substitua o formulário atual por um link ou iframe

**Vantagens:** Ilimitado e gratuito, respostas em planilha Google

#### Opção D: EmailJS (Email direto sem backend)

1. Crie conta em [emailjs.com](https://emailjs.com)
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Adicione o código do EmailJS no `script.js`
4. Configure o template de email

**Vantagens:** 200 emails/mês gratuitos, envia direto para seu email

**Recomendação:** Para começar, use **Formspree** (Opção A) por ser a mais simples e funcionar bem com GitHub Pages.

### 4. Criar Páginas Completas dos Posts do Blog

Os cards do blog estão prontos, mas você precisa criar as páginas completas:

1. Crie arquivos para cada post:
   - `blog-post-1.html`
   - `blog-post-2.html`
   - etc.

2. Use a mesma estrutura do `index.html` (copie header e footer)

3. Atualize os links nos cards do blog (linha ~384, 397, 410, 423, 436):

```html
<!-- Antes -->
<a href="#" class="blog__link">Ler artigo →</a>

<!-- Depois -->
<a href="blog-post-1.html" class="blog__link">Ler artigo →</a>
```

### 5. (Opcional) Adicionar sua Foto

Para adicionar uma foto profissional na seção Home:

1. Salve sua foto na pasta do projeto (ex: `foto-perfil.jpg`)
2. No arquivo `index.html`, adicione após linha ~65:

```html
<div class="home__img">
    <img src="foto-perfil.jpg" alt="José Sílvio da Silva Barreto">
</div>
```

3. No arquivo `styles.css`, adicione estilos para `.home__img`

## 🎨 Personalização

### Alterar Cores

No arquivo `styles.css`, edite as variáveis CSS (linhas 10-16):

```css
:root {
    --primary-color: #1e3a8a;      /* Cor principal */
    --primary-dark: #1e40af;       /* Cor escura */
    --primary-light: #3b82f6;      /* Cor clara */
    --secondary-color: #64748b;    /* Cor secundária */
    --text-color: #1f2937;         /* Cor do texto */
    --text-light: #6b7280;         /* Texto claro */
}
```

### Alterar Fontes

No arquivo `styles.css`, linha 20:

```css
--body-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...;
```

Para usar uma fonte do Google Fonts:

1. Adicione no `<head>` do `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Atualize a variável no `styles.css`:
```css
--body-font: 'Inter', sans-serif;
```

### Adicionar Mais Projetos

No arquivo `index.html`, copie o bloco de um projeto existente (linhas ~237-256) e adapte:

```html
<article class="project__card">
    <div class="project__header">
        <div class="project__icon">🎯</div>
        <h3 class="project__title">Nome do Projeto</h3>
    </div>
    <p class="project__description">
        Descrição do projeto...
    </p>
    <div class="project__tags">
        <span class="project__tag">Tag1</span>
        <span class="project__tag">Tag2</span>
    </div>
</article>
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS, Grid e Flexbox
- **JavaScript (Vanilla)**: Interatividade sem dependências externas
- **Intersection Observer API**: Animações otimizadas
- **ARIA**: Atributos de acessibilidade

## ♿ Acessibilidade

O site foi desenvolvido seguindo as diretrizes WCAG 2.1 AA:

- ✅ Navegação por teclado funcional
- ✅ Indicadores de foco visíveis
- ✅ Contraste adequado de cores
- ✅ Textos alternativos (alt) nas imagens
- ✅ Estrutura semântica correta
- ✅ ARIA labels e roles
- ✅ Suporte a leitores de tela
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Suporte a `prefers-contrast`

## 📱 Responsividade

O site se adapta automaticamente a diferentes tamanhos de tela:

- 📱 **Mobile**: até 768px
- 📲 **Tablet**: 768px - 1024px
- 💻 **Desktop**: acima de 1024px

## 🌐 Configurar Domínio Próprio

### Com GitHub Pages:

1. Compre um domínio (ex: em namecheap.com, godaddy.com)
2. Configure o DNS:
   - Crie um registro CNAME apontando para `Silviosb88.github.io`
3. No GitHub, vá em `Settings` > `Pages` > `Custom domain`
4. Digite seu domínio e salve

### Com Netlify/Vercel:

1. No painel da plataforma, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Siga as instruções para configurar o DNS

## 📊 Analytics (Opcional)

Para monitorar visitantes, adicione Google Analytics:

1. Crie conta no [Google Analytics](https://analytics.google.com)
2. Obtenha seu código de rastreamento
3. Adicione antes do `</head>` no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Resolução de Problemas

### Site não carrega CSS/JavaScript

- Verifique se os arquivos estão no mesmo diretório
- Verifique o console do navegador (F12) para erros
- Confirme que os nomes dos arquivos estão corretos (maiúsculas/minúsculas)

### Formulário não envia

- Verifique se integrou com Formspree conforme instruções
- Verifique o console do navegador para erros
- Teste em modo de navegação anônima

### Menu mobile não funciona

- Verifique se o arquivo `script.js` está carregando
- Abra o console do navegador e procure por erros

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório
- Entre em contato pelo email: contato@exemplo.com

## 📄 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.

## 🙏 Créditos

Site desenvolvido para José Sílvio da Silva Barreto (Silvio SB).

---

**Versão**: 1.0.0  
**Última Atualização**: Janeiro 2026  
**Status**: ✅ Pronto para publicação (após configurar redes sociais e email)

---

## ✅ Checklist Pré-Publicação

- [ ] Atualizar links das redes sociais (LinkedIn, Facebook, Instagram, GitHub)
- [ ] Atualizar email de contato
- [ ] Integrar formulário com Formspree
- [ ] (Opcional) Adicionar foto profissional
- [ ] (Opcional) Criar páginas completas dos posts do blog
- [ ] (Opcional) Configurar Google Analytics
- [ ] Testar site em diferentes navegadores
- [ ] Testar site em diferentes dispositivos
- [ ] Publicar no GitHub Pages, Netlify ou Vercel
- [ ] (Opcional) Configurar domínio próprio

**Importante**: Após completar os itens acima, seu site estará 100% pronto para o mundo! 🚀
