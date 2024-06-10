#!/usr/bin/env node

import { program } from "commander";
import { Level } from "level";


program
    .version("1.0.0")
    .description("Eclipse Phase 2nd Edition Tools")
    .option("-f, --file <path>", "data.json")
    .action((options) => {
        //console.log(`Hey, ${options.file}!`);
    });

program.parse(process.argv);

const db = new Level('./items', { valueEncoding: 'json' });
//await db.put('a', 'Hello World!');

//console.log(await db.get('a'));

/*
for await (const [key, value] of db.iterator()) { // { gt: 'a' }
    console.log({ key: key, value: value });
}
    */

const entries = await db.iterator().all();
console.log(entries.length)