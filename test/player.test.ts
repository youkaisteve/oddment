import Player, { PlayerOption } from '../lib/player';
import { expect } from 'chai';
let context_copy;
let context;
const handler = function (ctx) {
    console.log(ctx.current, ctx.status);
    context = ctx;
    context_copy = { ...ctx };
};

describe('Player', () => {
    it('Normal start', (done) => {
        const option: PlayerOption = {
            handler: handler,
            total: 10,
        };
        const player = new Player(option);
        setTimeout(() => {
            expect(context_copy.current).to.equal(5);
            player.stop();
            expect(context.status).to.equal(0);
            done();
        }, 5020);
        player.start();
    }).timeout(20000);
});
