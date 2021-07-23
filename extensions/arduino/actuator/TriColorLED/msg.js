/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TRICOLORLED_CATEGORY: 'Tri-color LED',
        TRICOLORLED_INIT: 'init Tri-color LED name %1 R %2 G %3 B %4',
        TRICOLORLED_SET: 'set Tri-color LED name %1 R %2 G %3 B %4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TRICOLORLED_CATEGORY: '三色灯',
        TRICOLORLED_INIT: '初始化三色灯 名称 %1 红 %2 绿 %3 蓝 %4',
        TRICOLORLED_SET: '设置三色灯 名称 %1 红 %2 绿 %3 蓝 %4',
    });
    return Blockly;
}

exports = addMsg;
