/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.greenLED_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.greenLED = `#include <greenLED.h>`;
        Blockly.Arduino.definitions_[`greenLED_set_${pin}`] = `greenLED greenLED_${pin}(${pin});`;
        return `greenLED_${pin}.set(${stat});\n`;
    };

    Blockly.Arduino.greenLED_set2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const stat = block.getFieldValue('STAT');

        Blockly.Arduino.includes_.greenLED = `#include <greenLED.h>`;
        Blockly.Arduino.definitions_[`greenLED_set_${name}`] = `greenLED ${name}(${pin});`;
        return `${name}.set(${stat});\n`;
    };

    Blockly.Arduino.greenLED_pwm = function (block) {
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.greenLED = `#include <greenLED.h>`;
        Blockly.Arduino.definitions_[`greenLED_pwm_${pin}`] = `greenLED greenLED_${pin}(${pin});`;
        return `greenLED_${pin}.pwm(${brightness});\n`;
    };

    Blockly.Arduino.greenLED_pwm2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.greenLED = `#include <greenLED.h>`;
        Blockly.Arduino.definitions_[`greenLED_pwm_${name}`] = `greenLED ${name}(${pin});`;
        return `${name}.pwm(${brightness});\n`;
    };

    return Blockly;
}

exports = addGenerator;
