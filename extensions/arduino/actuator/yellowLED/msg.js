/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        YELLOWLED_CATEGORY: 'yellow LED',
        YELLOWLED_SET: 'yellow LED pin %1 stat %2',
        YELLOWLED_SET2: 'yellow LED name %1 pin %2 stat %3',
        YELLOWLED_PWM: 'yellow LED pin %1 brightness %2',
        YELLOWLED_PWM2: 'yellow LED name %1 pin %2 brightness %3',
        YELLOWLED_ON: 'on',
        YELLOWLED_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        YELLOWLED_CATEGORY: '黄色LED灯',
        YELLOWLED_SET: '黄色LED灯模块 引脚 %1 状态 %2',
        YELLOWLED_SET2: '黄色LED灯模块 名称 %1 引脚 %2 状态 %3',
        YELLOWLED_PWM: '黄色LED灯模块 引脚 %1 亮度 %2',
        YELLOWLED_PWM2: '黄色LED灯模块 名称 %1 引脚 %2 亮度 %3',
        YELLOWLED_ON: '亮',
        YELLOWLED_OFF: '灭'
    });
    return Blockly;
}

exports = addMsg;
