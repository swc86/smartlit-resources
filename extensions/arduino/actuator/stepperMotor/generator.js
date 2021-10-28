/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.stepperMotor_init = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const pinIn1 = block.getFieldValue('PININ1');
        const pinIn2 = block.getFieldValue('PININ2');
        const pinIn3 = block.getFieldValue('PININ3');
        const pinIn4 = block.getFieldValue('PININ4');        

        Blockly.Arduino.includes_.stepperMotor_init = `#include <Stepper.h>`;
        Blockly.Arduino.definitions_.stepperMotor_init = 
            `// 转子旋转一周需要走32步\n` +
            `// 转子每旋转一周，电机输出轴只旋转1/64周\n` +
            `// 因此电机输出轴旋转一周则需要转子走32X64=2048步\n` +
            `Stepper ${name}(32, ${pinIn1}, ${pinIn2}, ${pinIn3}, ${pinIn4}); `;

        return '';
    };

    Blockly.Arduino.stepperMotor_speed = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        return `${name}.setSpeed(${value});\n`;
    };

    Blockly.Arduino.stepperMotor_step = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const dir = this.getFieldValue('DIR');
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        if (dir === 'STEPPERMOTOR_REVERSAL') {
            return `${name}.step(-${value});\n`;
        }

        return `${name}.step(${value});\n`;
    };

    Blockly.Arduino.stepperMotor_step2 = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const dir = this.getFieldValue('DIR');
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        if (dir === 'STEPPERMOTOR_REVERSAL') {
            return `${name}.step(-${value}*2048);\n`;
        }

        return `${name}.step(${value}*2048);\n`;
    };

    return Blockly;
}

exports = addGenerator;
