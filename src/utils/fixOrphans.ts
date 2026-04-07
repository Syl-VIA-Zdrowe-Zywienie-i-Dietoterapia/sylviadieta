import type { AstroIntegration } from "astro";
import { readFileSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";

const SHOW_TEXT = 4;
const FILTER_REJECT = 2;
const FILTER_ACCEPT = 1;

const skip = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA"]);

function fixOrphans(root: Element, document: Document) {
    const walker = document.createTreeWalker(root, SHOW_TEXT, {
        acceptNode(node) {
            return skip.has(node.parentElement?.tagName ?? "") ? FILTER_REJECT : FILTER_ACCEPT;
        }
    });

    let node;
    while ((node = walker.nextNode())) {
        const text = node.textContent ?? "";
        node.textContent = text.replace(/(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ])\s/g, "$1\u00A0");
    }
}

export default function fixOrphansIntegration(): AstroIntegration {
    return {
        name: "fix-orphans",
        hooks: {
            "astro:build:done": async ({ dir, pages }) => {
                for (const { pathname } of pages) {
                    // pathname is "" for index, "blog/" for subpages
                    const filePath = new URL(pathname ? `${pathname}/index.html` : "index.html", dir);

                    try {
                        const html = readFileSync(filePath, "utf-8");
                        const dom = new JSDOM(html);
                        const { document } = dom.window;

                        fixOrphans(document.body, document);

                        writeFileSync(filePath, dom.serialize());
                        console.log(`fix-orphans: processed ${filePath}`);
                    } catch (e) {
                        console.error(`fix-orphans: failed to process ${filePath}`, e);
                    }
                }
            }
        }
    };
}
