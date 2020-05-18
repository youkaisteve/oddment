import { CyclerOption } from './cycler_option';

const NEXT = Symbol('Cycler#Next');

export default class Cycler {
    items: Array<any>;
    options: CyclerOption;
    timer: any;
    currentPos: number = 0;
    /**
     * 状态: 0-停止;1-进行中；
     */
    status: number = 0;
    /**
     * 循环次数
     */
    cycleTimes: number = 0;
    /**
     * 已经开始了
     */
    started: Boolean = false;

    constructor(items: Array<any>, options: CyclerOption) {
        this.items = items;
        if (!options.handler) {
            throw new Error('options.handler is required');
        }
        options.interval = options.interval || 1000;
        options.cycleTimes = options.cycleTimes || 0;
        this.options = options;
    }

    /**
     * 开始
     * @param pos 开始位置
     */
    async start(pos?: number) {
        if (this.started === true) {
            console.warn('Cycler already started, you may want to resume(Cycler.resume())?');
            return;
        }
        this.started = true;
        this.currentPos = pos || 0;
        this.status = 1;
        await this[NEXT]();
    }

    /**
     * 暂停
     */
    pause() {
        this.status = 0;
    }

    /**
     * 恢复
     */
    async resume() {
        if (this.started === false) {
            console.warn('Cycler does not start, you may start(Cycler.start()) it first.');
            return;
        }
        if (this.status === 1) {
            console.warn('Cycler is running, you may pause(Cycler.pause()) it first.');
            return;
        }
        this.status = 1;
        await this[NEXT]();
    }

    /**
     * 停止，等同于释放资源，当不再使用的时候，务必调用一次该方法
     */
    stop() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.started = false;
        this.status = 0;
        this.currentPos = 0;
        this.cycleTimes = 0;
    }

    /**
     * 重置Cycler，停止循环
     * @param items 重置的数据,非必填，如果没有值，效果等同于stop
     */
    reset(items?: Array<any>) {
        if (items && items.length > 0) {
            this.items = items;
        }
        this.stop();
    }

    /**
     * 将新的对象加入到循环队列中
     * @param item 要插队的数组或对象
     * @param pos 要插入的位置
     */
    add(item: any, pos?: number) {
        const realPos = pos || 0;
        let addLength = 0;
        if (item.constructor.name === 'Array') {
            addLength = item.length;
            this.items.splice(realPos, 0, ...item);
        } else {
            addLength = 1;
            this.items.splice(realPos, 0, item);
        }
        // 插入的位置在当前播放位置的后面，那么当前播放位置不变；否则，当前播放位置就需要加上新插入的对象的数量，这样才能保证播放顺序不会乱
        if (realPos <= this.currentPos) {
            this.currentPos += addLength;
        }
    }

    /**
     * 模拟sleep
     * @param millions 毫秒
     */
    sleep(millions) {
        return new Promise((resolve) => {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(resolve, millions);
        });
    }

    async [NEXT]() {
        if (this.status === 0) {
            return;
        }

        // 循环到了队列最后，即将进行下次循环
        if (this.currentPos === this.items.length) {
            this.cycleTimes++;
            if (this.options.cycleTimes > 0 && this.cycleTimes === this.options.cycleTimes) {
                return;
            }
            this.currentPos = 0;
        }

        const ret = this.options.handler(this.items[this.currentPos]);

        this.currentPos++;

        if (ret && ret.constructor.name === 'Promise') {
            return ret.then(async () => {
                await this.sleep(this.options.interval);
                return this[NEXT]();
            });
        } else {
            await this.sleep(this.options.interval);
            return this[NEXT]();
        }
    }
}
