/**
 * 模拟sleep
 * @param millions 毫秒
 */
export const sleep = (millions) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millions);
    });
};
