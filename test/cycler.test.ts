import Cycler, { CyclerOption } from '../lib/cycler';
import { expect } from 'chai';

let currentItem;
const handler = function (item) {
    console.log(item);
    currentItem = item;
};

const asyncHandler = function (item) {
    currentItem = item;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
describe('Cycler', () => {
    const items = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    it('Normal start', async () => {
        const option: CyclerOption = {
            handler: handler,
        };
        const cycler = new Cycler(items, option);
        setTimeout(() => {
            cycler.stop();
            expect(currentItem).to.equal(items[4]);
        }, 5010);
        await cycler.start();
    }).timeout(20000);

    it('Normal start 1 times', async () => {
        const option: CyclerOption = {
            handler: handler,
            cycleTimes: 1,
        };
        const cycler = new Cycler(items, option);
        await cycler.start();
        expect(currentItem).to.equal(items[9]);
    }).timeout(20000);

    it('Normal start - add item', (done) => {
        const option: CyclerOption = {
            handler: handler,
            cycleTimes: 1,
        };
        const cycler = new Cycler(items, option);
        setTimeout(() => {
            cycler.add(55, 5);
            cycler.add(22, 2);
        }, 4000);
        setTimeout(() => {
            cycler.stop();
            expect(items[6]).to.equal(55);
            // 因为中间插入了一个55，所以10秒的时候只轮训到了倒数第二个90，目前有12个item，倒数第二个的下标是10
            expect(currentItem).to.equal(items[10]);
            done();
        }, 10000);
        cycler.start();
    }).timeout(20000);

    it('Async start', function (done) {
        const option: CyclerOption = {
            handler: asyncHandler,
        };
        const cycler = new Cycler(items, option);
        setTimeout(() => {
            cycler.stop();
            expect(currentItem).to.equal(items[4]);
            done();
        }, 10000);
        cycler.start();
    }).timeout(20000);
});
