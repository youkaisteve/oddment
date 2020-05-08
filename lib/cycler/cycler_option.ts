export interface CyclerOption {
    /**
     * 间隔，毫秒，默认为1000，
     */
    interval?: number;
    /**
     * 处理队列中对象的函数
     */
    handler: Function;
    /**
     * 循环次数，默认为0，表示无限循环
     */
    cycleTimes?: number;
}
