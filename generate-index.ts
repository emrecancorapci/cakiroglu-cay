interface HtmlPluginConfig {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
  htmlClass: string;
  openGraph?: {
    url?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  twitter?: {
    site?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

function generateIndexFile({
  title,
  description,
  keywords,
  author,
  htmlClass = "",
  openGraph,
  twitter,
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
    ${openGraph?.title ? `<meta property="og:title" content="${openGraph.title}" />` : ""}
    ${openGraph?.description ? `<meta property="og:description" content="${openGraph.description}">` : ""}
    ${openGraph?.url ? `<meta property="og:url" content="${openGraph.url}">` : ""}
    ${openGraph?.image ? `<meta property="og:image" content="${openGraph.image}">` : ""}

    <meta name="twitter:card" content="summary_large_image" />
    ${twitter?.title ? `<meta name="twitter:title" content="${twitter.title}" />` : ""}
    ${twitter?.description ? `<meta name="twitter:description" content="${twitter.description}">` : ""}
    ${twitter?.image ? `<meta name="twitter:image" content="${twitter?.image}">` : ""}
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
    name: "html-transform",
    apply: "build" as const,
    transformIndexHtml() {
      return generateIndexFile(config);
    },
  };
}
