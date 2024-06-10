#!/usr/bin/env node

import { program } from "commander";

program
    .version("1.0.0")
    .description("Eclipse Phase 2nd Edition Tools")
    .option("-n, --name <type>", "Erik Itter")
    .action((options) => {
        console.log(`Hey, ${options.name}!`);
    });

program.parse(process.argv);