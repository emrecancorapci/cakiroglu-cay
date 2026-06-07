function generateIndexFile({
  title,
  description,
  keywords,
  author,
}: {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
}) {
  return `
<!doctype html>
<html class="scroll-smooth bg-background" lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    ${description ? `<meta name="description" content="${description}">` : ""}
    ${keywords && keywords.length > 0 ? `<meta name="keywords" content="${keywords.join(", ")}">` : ""}
    ${author ? `<meta name="author" content="${author}">` : ``}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

export function viteHtmlPlugin(config: Parameters<typeof generateIndexFile>[0]) {
  return {
    name: 'html-transform',
    transformIndexHtml() {
      // This overwrites Vite's default index.html template with your function's output
      return generateIndexFile(config);
    },
  };
}