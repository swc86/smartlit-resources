/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.oneRelay_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.oneRelay_set = `#include <oneRelay.h>`;
        Blockly.Arduino.definitions_[`oneRelay_set_${pin}`] = `oneRelay oneRelay_${pin}(${pin});`;
        return `oneRelay_${pin}.set(${stat});\n`;
    };

    Blockly.Arduino.oneRelay_set2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.oneRelay_set = `#include <oneRelay.h>`;
        Blockly.Arduino.definitions_[`oneRelay_set_${name}`] = `oneRelay ${name}(${pin});`;
        return `${name}.set(${stat});\n`;
    };

    return Blockly;
}

exports = addGenerator;
