/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.yellowLED_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.yellowLED = `#include <yellowLED.h>`;
        Blockly.Arduino.definitions_[`yellowLED_set_${pin}`] = `yellowLED yellowLED_${pin}(${pin});`;
        return `yellowLED_${pin}.set(${stat});\n`;
    };

    Blockly.Arduino.yellowLED_set2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.yellowLED = `#include <yellowLED.h>`;
        Blockly.Arduino.definitions_[`yellowLED_set_${name}`] = `yellowLED ${name}(${pin});`;
        return `${name}.set(${stat});\n`;
    };

    Blockly.Arduino.yellowLED_pwm = function (block) {
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.yellowLED = `#include <yellowLED.h>`;
        Blockly.Arduino.definitions_[`yellowLED_pwm_${pin}`] = `yellowLED yellowLED_${pin}(${pin});`;
        return `yellowLED_${pin}.pwm(${brightness});\n`;
    };

    Blockly.Arduino.yellowLED_pwm2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.yellowLED = `#include <yellowLED.h>`;
        Blockly.Arduino.definitions_[`yellowLED_pwm_${name}`] = `yellowLED ${name}(${pin});`;
        return `${name}.pwm(${brightness});\n`;
    };

    return Blockly;
}

exports = addGenerator;
