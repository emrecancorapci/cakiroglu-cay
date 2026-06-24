interface HtmlPluginConfig {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
  // New social media properties
  siteUrl?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  htmlClass: string;
}

function generateIndexFile({
  title,
  description,
  keywords,
  author,
  siteUrl,
  ogImage,
  twitterCard = 'summary_large_image',
  htmlClass = "",
}: HtmlPluginConfig) {
  return `
<!doctype html>
<html class=${htmlClass} lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    ${description ? `<meta name="description" content="${description}">` : ""}
    ${keywords && keywords.length > 0 ? `<meta name="keywords" content="${keywords.join(", ")}">` : ""}
    ${author ? `<meta name="author" content="${author}">` : ""}

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    ${description ? `<meta property="og:description" content="${description}">` : ""}
    ${siteUrl ? `<meta property="og:url" content="${siteUrl}">` : ""}
    ${ogImage ? `<meta property="og:image" content="${ogImage}">` : ""}

    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${title}" />
    ${description ? `<meta name="twitter:description" content="${description}">` : ""}
    ${ogImage ? `<meta name="twitter:image" content="${ogImage}">` : ""}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

export function viteHtmlPlugin(config: HtmlPluginConfig) {
  return {
    name: 'html-transform',
    apply: 'build' as const, 
    transformIndexHtml() {
      return generateIndexFile(config);
    },
  };
}