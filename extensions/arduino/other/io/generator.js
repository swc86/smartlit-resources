/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.io_init = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
        const mode = this.getFieldValue('MODE');
        return `pinMode(${pin}, ${mode});\n`;
    };

    Blockly.Arduino.io_write = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
        const out = this.getFieldValue('OUT');
        return `digitalWrite(${pin}, ${out});\n`;
    };

    Blockly.Arduino.io_read = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
        return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
