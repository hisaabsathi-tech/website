import { useEffect } from "react";

const SITE_URL = "https://www.hisaabsathi.in";

interface PageSeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/pricing". Omit for pages that should not be indexed. */
  path?: string;
  noindex?: boolean;
}

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: "name" | "property", id: string, content: string) =>
  upsert(
    `meta[${key}="${id}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(key, id);
      return m;
    },
    "content",
    content,
  );

/**
 * Updates the existing tags from index.html in place, so each route has exactly one
 * title, description and canonical tag (no duplicates for Google to choose between).
 */
const PageSeo = ({ title, description, path, noindex = false }: PageSeoProps) => {
  useEffect(() => {
    const url = path !== undefined ? `${SITE_URL}${path}` : SITE_URL + "/";
    document.title = title;
    meta("name", "description", description);
    meta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", url);
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);
    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      "href",
      url,
    );
  }, [title, description, path, noindex]);

  return null;
};

export default PageSeo;
