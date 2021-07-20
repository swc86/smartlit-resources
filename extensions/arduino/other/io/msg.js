/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IO_CATEGORY: 'IO',
        IO_INIT: 'set pin %1 mode %2',
        IO_Write: 'set digital pin %1 out %2',
        IO_Read: 'read digital pin %1',
        IO_INPUT: 'input',
        IO_OUTPUT: 'output',
        IO_INPUT_PULLUP: 'input-pullup',
        IO_LOW: 'low',
        IO_HIGH: 'high'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IO_CATEGORY: 'IO接口',
        IO_INIT: '设置引脚%1 模式 %2',
        IO_Write: '设置引脚%1 输出为 %2',
        IO_Read: '读取数字引脚%1',
        IO_INPUT: '输入',
        IO_OUTPUT: '输出',
        IO_INPUT_PULLUP: '上拉输入',
        IO_LOW: '低',
        IO_HIGH: '高'
    });
    return Blockly;
}

exports = addMsg;
