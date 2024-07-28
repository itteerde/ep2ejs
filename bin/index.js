#!/usr/bin/env node

import { program } from "commander";
import { Level } from "level";
import inquirer from 'inquirer';

import { Ep2e } from "./module/ep2e.mjs";
import { Item } from "./module/types/item.mjs";


program
    .version("1.0.0")
    .description("Eclipse Phase 2nd Edition Tools")
    .option("--import", "imports an entity")
    .option("--export", "exports an entity")
    .action((options) => {
        console.log({ options: options });
    });

program.parse(process.argv);

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
];

await inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers.name}!`);
});

const db = {};
db.actors = new Level('./db/actors', { valueEncoding: 'json' });
db.gear = new Level('./db/gear', { valueEncoding: 'json' });
db.morphs = new Level('./db/morphs', { valueEncoding: 'json' });

db.ep2e = {};
db.ep2e.armor = new Level('./ep2e/armor', { valueEncoding: 'json' });

const item = new Item("myItem");
console.log({ item: item, items: item.getItems() });
console.log(Ep2e.gear.ware.types.bioware);

//const db = new Level('./items', { valueEncoding: 'json' });
//await db.items.put('a', 'Hello World!');

//console.log(await db.get('a'));

/*
for await (const [key, value] of db.ep2e.armor.iterator()) { // { gt: 'a' }
    console.log({ key: key, value: value });
}
*/

//const entries = await db.iterator().all();
//console.log(entries.length)