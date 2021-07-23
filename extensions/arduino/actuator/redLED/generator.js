/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.redLED_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.redLED = `#include <redLED.h>`;
        Blockly.Arduino.definitions_[`redLED_set_${pin}`] = `redLED redLED_${pin}(${pin});`;
        return `redLED_${pin}.set(${stat});\n`;
    };

    Blockly.Arduino.redLED_set2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.redLED = `#include <redLED.h>`;
        Blockly.Arduino.definitions_[`redLED_set_${name}`] = `redLED ${name}(${pin});`;
        return `${name}.set(${stat});\n`;
    };

    Blockly.Arduino.redLED_pwm = function (block) {
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.redLED = `#include <redLED.h>`;
        Blockly.Arduino.definitions_[`redLED_pwm_${pin}`] = `redLED redLED_${pin}(${pin});`;
        return `redLED_${pin}.pwm(${brightness});\n`;
    };

    Blockly.Arduino.redLED_pwm2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.redLED = `#include <redLED.h>`;
        Blockly.Arduino.definitions_[`redLED_pwm_${name}`] = `redLED ${name}(${pin});`;
        return `${name}.pwm(${brightness});\n`;
    };

    return Blockly;
}

exports = addGenerator;
