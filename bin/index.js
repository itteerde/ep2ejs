#!/usr/bin/env node

import { program } from "commander";



program
    .version("1.0.0")
    .description("Eclipse Phase 2nd Edition Tools")
    .option("-f, --file <path>", "data.json")
    .action((options) => {
        console.log(`Hey, ${options.file}!`);
    });

program.parse(process.argv);