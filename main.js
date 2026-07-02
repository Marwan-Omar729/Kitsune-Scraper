#!usr/bin/env node

import { parse } from "./core/parse.js";
import { Command } from "commander";
import Chalk from "chalk";

let app = new Command();

app
    .name("Kitsune Scraper CLI")
    .version("1.0.0")
    .description("A tool that helps you gather the items you need and discover certain endpoints through guessing.")
    .usage("kitsunescraper [command] [options]");

app
    .command("web [url] [items]")
    .action(async (url, items) => {

        console.log(Chalk.white("[ * ] Go to: "), url);
         await parse(items, url)

    });
