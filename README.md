# Silvio SB - Página Pessoal

Página pessoal para compartilhar trabalhos, estudos, atividades sociais e blog.

## 🌐 Sobre o Projeto

Este é um site pessoal desenvolvido para compartilhar:
- **Trabalhos**: Projetos profissionais e experiências
- **Estudos**: Formação acadêmica e aprendizado contínuo
- **Atividades Sociais**: Participação em comunidades e voluntariado
- **Blog**: Artigos e reflexões sobre diversos temas
- **Links**: Páginas pessoais e recursos úteis

## 🚀 Tecnologias

- HTML5
- CSS3 (Design Responsivo)
- JavaScript (Vanilla)
- Font Awesome (Ícones)

## 📦 Como Usar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Silviosb88/silviosb-pagina-pessoal.git
```

2. Navegue até o diretório:
```bash
cd silviosb-pagina-pessoal
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

4. Acesse `http://localhost:8000` no navegador

## 🌍 Deploy no Cloudflare Pages

### Opção 1: Deploy Direto pelo Dashboard

1. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
2. Faça login em sua conta Cloudflare
3. Clique em "Create a project"
4. Conecte sua conta GitHub
5. Selecione o repositório `silviosb-pagina-pessoal`
6. Configure o projeto:
   - **Production branch**: `main` ou `master`
   - **Build command**: (deixe vazio - site estático)
   - **Build output directory**: `/` (raiz do projeto)
7. Clique em "Save and Deploy"

### Opção 2: Deploy via Wrangler CLI

1. Instale o Wrangler:
```bash
npm install -g wrangler
```

2. Autentique com o Cloudflare:
```bash
wrangler login
```

3. Publique o site:
```bash
wrangler pages publish . --project-name=silviosb-pagina-pessoal
```

### Configuração de Domínio Customizado

1. No dashboard do Cloudflare Pages, vá em "Custom domains"
2. Clique em "Set up a custom domain"
3. Digite `www.silviosb.com.br`
4. Siga as instruções para configurar os registros DNS
5. O Cloudflare irá gerar automaticamente um certificado SSL

## 📝 Personalização

Para personalizar o conteúdo:

1. **Informações Pessoais**: Edite o arquivo `index.html`
2. **Estilos e Cores**: Modifique as variáveis CSS em `styles.css` (seção `:root`)
3. **Links Sociais**: Atualize os links no rodapé e na seção de links
4. **Posts do Blog**: Adicione novos artigos na seção `#blog`

## 🎨 Personalização de Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Cor principal */
    --secondary-color: #1e40af;  /* Cor secundária */
    --text-color: #1f2937;       /* Cor do texto */
    --text-light: #6b7280;       /* Cor do texto claro */
}
```

## 📱 Design Responsivo

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 📄 Licença

Este projeto está sob a licença Unlicense (domínio público). Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Silvio SB**

- Website: [www.silviosb.com.br](https://www.silviosb.com.br)
- Email: contato@silviosb.com.br

---

Desenvolvido com ❤️ por Silvio SB
