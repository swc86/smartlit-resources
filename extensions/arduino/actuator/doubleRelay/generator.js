/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.doubleRelay_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.doubleRelay_set = `#include <doubleRelay.h>`;
        Blockly.Arduino.definitions_[`doubleRelay_set_${pin}`] = `doubleRelay doubleRelay_${pin}(${pin});`;
        return `doubleRelay_${pin}.set(${stat});\n`;
    };

    Blockly.Arduino.doubleRelay_set2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.doubleRelay_set = `#include <doubleRelay.h>`;
        Blockly.Arduino.definitions_[`doubleRelay_set_${name}`] = `doubleRelay ${name}(${pin});`;
        return `${name}.set(${stat});\n`;
    };

    return Blockly;
}

exports = addGenerator;
