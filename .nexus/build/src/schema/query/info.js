"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
nexus_1.schema.objectType({
    name: 'Info',
    definition(t) {
        t.string('description');
        t.string('version', { nullable: true });
        t.string('constants', { nullable: true });
        t.string('repo', { nullable: true });
    },
});
nexus_1.schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('info', {
            type: 'Info',
            resolve(root, args, ctx) {
                return {
                    description: 'This is a graphql wrapper of RIOT API',
                    version: process.env.npm_package_version,
                    constants: 'https://developer.riotgames.com/docs/lol#general_game-constants',
                    repo: 'https://github.com/jeongY-Cho/riotql',
                };
            },
        });
    },
});
