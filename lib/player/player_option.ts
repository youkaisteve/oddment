import PlayerContext from './context';

/**
 * 播放器选项
 */
export interface PlayerOption {
    /**
     * 间隔，秒，默认为1
     */
    interval?: number;
    /**
     * 播放速度（秒），默认为1
     */
    speed?: number;
    /**
     * 倍数列表，用于播放速度控制，默认为[1,4,8,16],可定制
     */
    speedList?: number[];
    /**
     * 总时长(秒)
     */
    total: number;
    /**
     * 播放回调
     */
    handler: (context: PlayerContext) => any;
}
