import { Getdata } from "./scraper.js";
import * as cheerio from "cheerio";
import Chalk from "chalk";
import { crawling } from "./crawl.js";
import { normalizeUrl } from "./utlis.js"

let visited = new Set();

async function parse(items, url, depth = 0)
{

    let TargetURL = normalizeUrl(url);

    if (visited.has(TargetURL) || depth > 2) {

        await crawling('', '', depth);
        return
    };
    
    visited.add(TargetURL);

    let data = await Getdata(TargetURL);
    let links = [];

    try {
        if (!data) return;

        let $ = cheerio.load(data);
    
        $('a').each((i, el) => {
            let href = $(el).attr('href');

            if (!href) return;

            if (!href.startsWith("http://") && !href.startsWith("https://")) {
                href = new URL(href, TargetURL).href;
            }

            if (href.startsWith("http") || href.startsWith("https")) {
                if (!visited.has(href)) {
                    links.push(href);
                }
            }

        });

        $(items).each((i, el) => {

            let item = $(el).text().trim();

            if (!item) {
                return;
            } else {
                let itemTable = {
                    Id: i,
                    Item: item,
                    Type: (el.name).trim()
                };

                console.table(itemTable);
            }
        
        });

        await crawling(items, links, depth);
    } catch (E) { throw Error(E); }

}



export { parse };