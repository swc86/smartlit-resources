/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        REDLED_CATEGORY: 'red LED',
        REDLED_SET: 'red LED pin %1 stat %2',
        REDLED_SET2: 'red LED name %1 pin %2 stat %3',
        REDLED_PWM: 'red LED pin %1 brightness %2',
        REDLED_PWM2: 'red LED name %1 pin %2 brightness %3',
        REDLED_ON: 'on',
        REDLED_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        REDLED_CATEGORY: '红色LED灯',
        REDLED_SET: '红色LED灯模块 引脚 %1 状态 %2',
        REDLED_SET2: '红色LED灯模块 名称 %1 引脚 %2 状态 %3',
        REDLED_PWM: '红色LED灯模块 引脚 %1 亮度 %2',
        REDLED_PWM2: '红色LED灯模块 名称 %1 引脚 %2 亮度 %3',
        REDLED_ON: '亮',
        REDLED_OFF: '灭'
    });
    return Blockly;
}

exports = addMsg;
