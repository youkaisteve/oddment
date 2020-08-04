/**
 * 播放器上下文
 */
export default interface PlayerContext {
    /**
     * 间隔，秒，默认为1
     */
    interval: number;
    /**
     * 当前时间(秒)
     */
    current: number;
    /**
     * 总时长(秒)
     */
    total: number;
    /**
     * 当前播放速度，默认为1，即每秒播放一次；
     */
    speed: number;
    /**
     * 倍数列表，用于播放速度控制，默认为[1,4,8,16],可定制
     */
    speedList: number[];
    /**
     * 当前状态，0-停止/未开始；1-播放中；2-暂停；
     */
    status: number;
}
