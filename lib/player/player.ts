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
     */
    start() {
        if (this.context.status !== 0) {
            console.warn('player has already started');
            return;
        }
        this.context.status = 1;
        this.play();
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
        this.speedIndex = 0;
    }
    /**
     * 加速
     */
    speedUp() {
        if (this.speedIndex === this.context.speedList.length - 1) {
            this.speedIndex = 0;
        }
        this.speedIndex++;
        this.context.speed = this.context.speedList[this.speedIndex];
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
    }
    /**
     * 播放
     */
    private play() {
        clearInterval(this.timer);
        this.playerOption.handler(this.context);
        this.timer = setInterval(() => {
            if (this.context.current === this.context.total) {
                this.stop();
            }
            this.context.current++;
            this.playerOption.handler(this.context);
        }, this.context.speed * this.context.interval * 1000);
    }
}
