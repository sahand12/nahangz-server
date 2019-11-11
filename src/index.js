// @flow
import { Server } from 'boardgame.io/dist/server';
import { uxoGame } from 'nahangz-uxo';

const server = Server({ games: [uxoGame] });
console.log('server is starting');

server.run(8000);
