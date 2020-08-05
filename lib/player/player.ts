import PlayerContext from './context';
import { PlayerOption } from './player_option';

export default class Player {
    private context: PlayerContext;
    private timer: any;
    private speedIndex = 0;
    private playerOption: PlayerOption;

    constructor(playerOption: PlayerOption) {
        if (!playerOption.handler) {
            console.error('PlayerOption.handler must be provided');
        }
        this.playerOption = playerOption;
        this.context = {
            interval: playerOption.interval || 1,
            current: 0,
            total: playerOption.total,
            speed: playerOption.speed || 1,
            speedList: playerOption.speedList || [1, 4, 8, 16],
            status: 0,
        };
    }

    /**
     * 开始
     * @param blocker 需要异步启动的业务，可设置blocker，待blocker返回true之后，才会真正启动，否则会停止
     */
    async start(blocker: () => Promise<boolean>) {
        if (this.context.status !== 0) {
            console.warn('player has already started');
            return;
        }
        this.context.status = 1;
        this.playerOption.handler(this.context);

        const blockResult = await blocker();
        if (blockResult) {
            this.play();
        } else {
            // blocker返回失败结果，状态重置为0
            this.stop();
        }
    }
    /**
     * 暂停
     */
    pause() {
        if (this.context.status !== 1) {
            console.warn('player is not running');
            return;
        }
        clearInterval(this.timer);
        this.context.status = 2;
        this.handleContent();
    }
    /**
     * 恢复，暂停后使用
     */
    resume() {
        if (this.context.status !== 2) {
            console.warn('player is not paused');
            return;
        }
        this.context.status = 1;
        this.play();
    }
    /**
     * 停止
     */
    stop() {
        clearInterval(this.timer);
        this.context.status = 0;
        this.context.current = 0;
<<<<<<< HEAD
        this.speedIndex = 0;
=======
        this.handleContent();
>>>>>>> feature-player
    }
    /**
     * 加速
     */
    speedUp() {
        if (this.speedIndex === this.context.speedList.length - 1) {
            console.warn('player is playing at top speed, then resume speed to default');
            this.speedIndex = 0;
        } else {
            this.speedIndex++;
        }
        this.context.speed = this.context.speedList[this.speedIndex];
        this.handleContent();
    }
    /**
     * 减速，最低减到一倍速，不能慢放
     */
    slowDown() {
        if (this.speedIndex === 0) {
            console.warn('player is playing at bottom speed');
            return;
        }
        this.speedIndex--;
        this.context.speed = this.context.speedList[this.speedIndex];
        this.handleContent();
    }
    /**
     * 播放
     */
    private play() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (this.context.current === this.context.total) {
                this.stop();
            }
            this.context.current++;
            this.handleContent();
        }, this.context.speed * this.context.interval * 1000);
    }

    private handleContent() {
        this.playerOption.handler(this.context);
    }
}
