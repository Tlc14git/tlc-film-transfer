module.exports = {
  stylesheet: [
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css"
  ],
  css: `
    body { font-family: Georgia, serif; }
    h1 { color: #2F1E14; border-bottom: 2px solid #A67C52; }
    h2 { color: #5A3E2B; }
    h3 { color: #5A3E2B; }
    strong { color: #2F1E14; }
  `,
  body_class: 'markdown-body',
  pdf_options: {
    format: 'Letter',
    margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
    printBackground: true
  }
};
