/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ANNOTATION_CATEGORY: 'annotation'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ANNOTATION_CATEGORY: '注释'
    });
    return Blockly;
}

exports = addMsg;
