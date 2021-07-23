/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.TriColorLED_init = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const redpin = block.getFieldValue('REDPIN');
        const greenpin = block.getFieldValue('GREENPIN');
        const bluepin = block.getFieldValue('BLUEPIN');

        Blockly.Arduino.includes_.TriColorLED = `#include <TriColorLED.h>`;
        Blockly.Arduino.definitions_[`TriColorLED_init_${name}`] = `TriColorLED ${name}(${redpin}, ${greenpin}, ${bluepin});`;
        return '';
    };

    Blockly.Arduino.TriColorLED_set = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const redvalue = Blockly.Arduino.valueToCode(block, 'REDVALUE', Blockly.Arduino.ORDER_ATOMIC);
        const greenvalue = Blockly.Arduino.valueToCode(block, 'GREENVALUE', Blockly.Arduino.ORDER_ATOMIC);
        const bluevalue = Blockly.Arduino.valueToCode(block, 'BLUEVALUE', Blockly.Arduino.ORDER_ATOMIC);

        return `${name}.set(${redvalue}, ${greenvalue}, ${bluevalue});\n`;
    };

    return Blockly;
}

exports = addGenerator;
