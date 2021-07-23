/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DOUBLERELAY_CATEGORY: 'double relay',
        DOUBLERELAY_SET: 'relay pin %1 stat %2',
        DOUBLERELAY_SET2: 'relay name %1 pin %2 stat %3',
        DOUBLERELAY_OPEN: 'open',
        DOUBLERELAY_CLOSE: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DOUBLERELAY_CATEGORY: '双路继电器',
        DOUBLERELAY_SET: '继电器模块 引脚 %1 状态 %2',
        DOUBLERELAY_SET2: '继电器模块 名称 %1 引脚 %2 状态 %3',
        DOUBLERELAY_OPEN: '开',
        DOUBLERELAY_CLOSE: '闭'
    });
    return Blockly;
}

exports = addMsg;
