/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.array_create = function (block) {
        const type   = this.getFieldValue('type');
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const size   = Blockly.Arduino.valueToCode(block, 'size',   Blockly.Arduino.ORDER_ATOMIC);
        const buff   = Blockly.Arduino.valueToCode(block, 'buff',   Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""

        Blockly.Arduino.definitions_[`array_create_${my_var}`] = `${type} ${my_var}[${size}]={${buff}};`;
        return '';
    };

    Blockly.Arduino.array_len = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""

        return [`sizeof(${my_var})/sizeof(${my_var}[0])`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.array_itemGet = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const index  = Blockly.Arduino.valueToCode(block, 'index',  Blockly.Arduino.ORDER_ATOMIC);

        return [`${my_var}[(int)(${index}-1)]`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.array_itemSet = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const index  = Blockly.Arduino.valueToCode(block, 'index',  Blockly.Arduino.ORDER_ATOMIC);
        const data   = Blockly.Arduino.valueToCode(block, 'data',   Blockly.Arduino.ORDER_ATOMIC);

        return `${my_var}[(int)(${index}-1)] = ${data};\n`;
    };

    Blockly.Arduino.array2_create = function (block) {
        const type   = this.getFieldValue('type');
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const row    = Blockly.Arduino.valueToCode(block, 'row',   Blockly.Arduino.ORDER_ATOMIC);
        const col    = Blockly.Arduino.valueToCode(block, 'col',   Blockly.Arduino.ORDER_ATOMIC);
        const buff   = Blockly.Arduino.valueToCode(block, 'buff',   Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""

        Blockly.Arduino.definitions_[`array2_create_${my_var}`] = `${type} ${my_var}[${row}][${col}]={${buff}};`;
        return '';
    };

    Blockly.Arduino.array2_len = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const type   = this.getFieldValue('type');
        
        if (type == "rows")
        {
            return [`sizeof(${my_var})/sizeof(${my_var}[0])`, Blockly.Arduino.ORDER_ATOMIC];
        }

        if (type == "cols")
        {
            return [`sizeof(${my_var}[0])/sizeof(${my_var}[0][0])`, Blockly.Arduino.ORDER_ATOMIC];
        }        
    };

    Blockly.Arduino.array2_itemGet = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const row    = Blockly.Arduino.valueToCode(block, 'row',   Blockly.Arduino.ORDER_ATOMIC);
        const col    = Blockly.Arduino.valueToCode(block, 'col',   Blockly.Arduino.ORDER_ATOMIC);

        return [`${my_var}[(int)(${row}-1)][(int)(${col}-1)]`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.array2_itemSet = function (block) {
        const my_var = Blockly.Arduino.valueToCode(block, 'my_var', Blockly.Arduino.ORDER_ATOMIC).slice(1,-1);  // 去掉""
        const row    = Blockly.Arduino.valueToCode(block, 'row',   Blockly.Arduino.ORDER_ATOMIC);
        const col    = Blockly.Arduino.valueToCode(block, 'col',   Blockly.Arduino.ORDER_ATOMIC);
        const data   = Blockly.Arduino.valueToCode(block, 'data',   Blockly.Arduino.ORDER_ATOMIC);

        return `${my_var}[(int)(${row}-1)][(int)(${col}-1)] = ${data};\n`;
    };

    return Blockly;
}

exports = addGenerator;
