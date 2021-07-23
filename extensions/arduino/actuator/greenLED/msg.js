/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        GREENLED_CATEGORY: 'green LED',
        GREENLED_SET: 'green LED pin %1 stat %2',
        GREENLED_SET2: 'green LED name %1 pin %2 stat %3',
        GREENLED_PWM: 'green LED pin %1 brightness %2',
        GREENLED_PWM2: 'green LED name %1 pin %2 brightness %3',
        GREENLED_ON: 'on',
        GREENLED_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        GREENLED_CATEGORY: '绿色LED灯',
        GREENLED_SET: '绿色LED灯模块 引脚 %1 状态 %2',
        GREENLED_SET2: '绿色LED灯模块 名称 %1 引脚 %2 状态 %3',
        GREENLED_PWM: '绿色LED灯模块 引脚 %1 亮度 %2',
        GREENLED_PWM2: '绿色LED灯模块 名称 %1 引脚 %2 亮度 %3',
        GREENLED_ON: '亮',
        GREENLED_OFF: '灭'
    });
    return Blockly;
}

exports = addMsg;
