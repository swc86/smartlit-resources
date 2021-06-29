/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.lcd1602_init = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const rs_pin = Blockly.Arduino.valueToCode(block, 'rs_pin', Blockly.Arduino.ORDER_ATOMIC);
        const en_pin = Blockly.Arduino.valueToCode(block, 'en_pin', Blockly.Arduino.ORDER_ATOMIC);
        const d4_pin = Blockly.Arduino.valueToCode(block, 'd4_pin', Blockly.Arduino.ORDER_ATOMIC);
        const d5_pin = Blockly.Arduino.valueToCode(block, 'd5_pin', Blockly.Arduino.ORDER_ATOMIC);
        const d6_pin = Blockly.Arduino.valueToCode(block, 'd6_pin', Blockly.Arduino.ORDER_ATOMIC);
        const d7_pin = Blockly.Arduino.valueToCode(block, 'd7_pin', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_lcd1602_init = `#include <LiquidCrystal.h>`;
        Blockly.Arduino.definitions_[`lcd1602_init_${my_var}`] = `LiquidCrystal ${my_var}(${rs_pin}, ${en_pin}, ${d4_pin}, ${d5_pin}, ${d6_pin}, ${d7_pin});`;
        Blockly.Arduino.setups_[`lcd1602_init_${my_var}`] = `${my_var}.begin(16, 2);`;
        return '';
    };

    Blockly.Arduino.lcd1602_init2 = function (block) {
        const my_var  = Blockly.Arduino.valueToCode(block, 'my_var',  Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const address = Blockly.Arduino.valueToCode(block, 'address', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""

        Blockly.Arduino.includes_.include_lcd1602_init = `#include <Wire.h>\r\n#include <LiquidCrystal_I2C.h>`;
        Blockly.Arduino.definitions_[`lcd1602_init_${my_var}`] = `LiquidCrystal_I2C ${my_var}(${address}, 16, 2);`;
        Blockly.Arduino.setups_[`lcd1602_init_${my_var}`] = `${my_var}.init();`;
        Blockly.Arduino.setups_[`lcd1602_backlight_${my_var}`] = `${my_var}.backlight();`;
        return '';
    };

    Blockly.Arduino.lcd1602_init3 = function (block) {
        const my_var  = Blockly.Arduino.valueToCode(block, 'my_var',  Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const address = Blockly.Arduino.valueToCode(block, 'address', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const scl_pin = Blockly.Arduino.valueToCode(block, 'scl_pin', Blockly.Arduino.ORDER_ATOMIC);
        const sda_pin = Blockly.Arduino.valueToCode(block, 'sda_pin', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_lcd1602_init = `#include <SoftI2CMaster.h>\r\n#include <LiquidCrystal_SoftI2C.h>`;
        Blockly.Arduino.definitions_[`lcd1602_init_${my_var}`] = `LiquidCrystal_SoftI2C ${my_var}(${address}, 16, 2, ${scl_pin}, ${sda_pin});`;
        Blockly.Arduino.setups_[`lcd1602_init_${my_var}`] = `${my_var}.init();`;
        Blockly.Arduino.setups_[`lcd1602_backlight_${my_var}`] = `${my_var}.backlight();`;
        return '';
    };

    Blockly.Arduino.lcd1602_print1 = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const data   = Blockly.Arduino.valueToCode(block, 'data',   Blockly.Arduino.ORDER_ATOMIC);
        return `${my_var}.setCursor(0, 0);\r\n${my_var}.print(${data});\r\n`;
    };

    Blockly.Arduino.lcd1602_print2 = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const data   = Blockly.Arduino.valueToCode(block, 'data',   Blockly.Arduino.ORDER_ATOMIC);
        return `${my_var}.setCursor(0, 1);\r\n${my_var}.print(${data});\r\n`;
    };

    Blockly.Arduino.lcd1602_print3 = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const row    = Blockly.Arduino.valueToCode(block, 'row',    Blockly.Arduino.ORDER_ATOMIC);
        const col    = Blockly.Arduino.valueToCode(block, 'col',    Blockly.Arduino.ORDER_ATOMIC);
        const data   = Blockly.Arduino.valueToCode(block, 'data',   Blockly.Arduino.ORDER_ATOMIC);
        return `${my_var}.setCursor(${col}-1, ${row}-1);\r\n${my_var}.print(${data});\r\n`;
    };
    
    Blockly.Arduino.lcd1602_printImage = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const row    = Blockly.Arduino.valueToCode(block, 'row',    Blockly.Arduino.ORDER_ATOMIC);
        const col    = Blockly.Arduino.valueToCode(block, 'col',    Blockly.Arduino.ORDER_ATOMIC);
        const image_name = Blockly.Arduino.valueToCode(block, 'image_name', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const image_no   = Blockly.Arduino.valueToCode(block, 'image_no',   Blockly.Arduino.ORDER_ATOMIC);
        const image_data = Blockly.Arduino.valueToCode(block, 'image_data', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""

        Blockly.Arduino.definitions_[`lcd1602_printImage_${image_name}`] = `byte ${image_name}[] = {${image_data}};\r\nbyte ${image_name}_${image_no} = ${image_no};`;
        Blockly.Arduino.setups_[`lcd1602_printImage_${image_name}`] = `${my_var}.createChar(${image_name}_${image_no}, ${image_name});`;
        return `${my_var}.setCursor(${col}-1, ${row}-1);\r\n${my_var}.write(${image_name}_${image_no});\r\n`;
    };

    Blockly.Arduino.lcd1602_set = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const mode   = this.getFieldValue('mode');
        return `${my_var}.${mode};\r\n`;
    };

    return Blockly;
}

exports = addGenerator;
