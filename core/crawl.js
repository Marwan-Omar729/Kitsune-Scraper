import { parse } from "./parse.js";

/* ====== Crawling ====== */
async function crawling(items,links, depth)
{

    if (depth > 2) return;

    for (const link of links)
    {
        if (link == undefined)
        {
            console.log("The link is not found");
            return null;
        } else {
            await parse(items, link, depth + 1);
        }
    }
}

export { crawling };