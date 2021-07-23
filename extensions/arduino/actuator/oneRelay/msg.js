/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ONERELAY_CATEGORY: 'one relay',
        ONERELAY_SET: 'relay pin %1 stat %2',
        ONERELAY_SET2: 'relay name %1 pin %2 stat %3',
        ONERELAY_OPEN: 'open',
        ONERELAY_CLOSE: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ONERELAY_CATEGORY: '单路继电器',
        ONERELAY_SET: '继电器模块 引脚 %1 状态 %2',
        ONERELAY_SET2: '继电器模块 名称 %1 引脚 %2 状态 %3',
        ONERELAY_OPEN: '开',
        ONERELAY_CLOSE: '闭'
    });
    return Blockly;
}

exports = addMsg;
