# DoctorBot — novo site

Site institucional estático, responsivo e pronto para publicação no GitHub Pages.

## Estrutura

- `index.html` — página principal
- `style.css` — identidade visual e responsividade
- `script.js` — menu mobile, animações e efeitos
- `assets/doctorbot-logo.png` — logo enviada para o projeto

## Publicar no GitHub Pages

### Opção A — pelo navegador

1. Crie um novo repositório no GitHub, por exemplo `doctorbot-site`.
2. Deixe o repositório como público se estiver usando o GitHub Pages no plano gratuito.
3. Abra o repositório.
4. Clique em **Add file → Upload files**.
5. Envie `index.html`, `style.css`, `script.js` e a pasta `assets`.
6. Faça o commit.
7. Vá em **Settings → Pages**.
8. Em **Build and deployment**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
9. Salve.
10. O GitHub mostrará o endereço publicado.

### Opção B — Git pelo computador

```bash
git clone https://github.com/SEU_USUARIO/doctorbot-site.git
cd doctorbot-site

# copie os arquivos deste projeto para esta pasta

git add .
git commit -m "Novo site DoctorBot"
git push origin main
```

Depois ative o GitHub Pages em `Settings → Pages`.

## Antes de publicar

No `index.html`, procure por:

`https://wa.me/5500000000000`

e troque pelo número comercial real da DoctorBot no formato internacional, somente números.

Também revise:
- e-mail comercial;
- textos institucionais;
- CNPJ/razão social;
- endereço;
- links de política de privacidade e termos;
- favicon/logo;
- domínio personalizado.

## Domínio doctorbot.com.br

Depois que o site estiver funcionando no GitHub Pages, você pode configurar o domínio personalizado em:

`Settings → Pages → Custom domain`

O GitHub informará o destino DNS. No provedor onde o domínio estiver registrado, configure os registros DNS indicados pelo GitHub.

## Formulário

Este primeiro pacote não usa PHP, banco ou backend. Isso é intencional para facilitar o GitHub Pages.

Os CTAs funcionam via WhatsApp e e-mail. Se quiser um formulário real, podemos conectar posteriormente a:
- webhook/n8n;
- Typebot;
- Formspree;
- serviço de e-mail;
- API própria.

## Direção de conversão

A página foi organizada para conduzir o visitante por:

1. Problema / oportunidade
2. Soluções
3. Como funciona
4. Integrações
5. Resultados
6. Segmentos
7. FAQ
8. CTA para WhatsApp

A próxima evolução recomendada é criar páginas separadas para `/assistentes`, `/telefonia`, `/integracoes` e `/segmentos`, além de uma demonstração interativa do assistente.
