/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //注释1  
    Blockly.Arduino.annotation_1 = function() {
        var text_data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        text_data = text_data.replace(/\"/g,'');
        var code = '//'+text_data+'\n';
        return code;
    };
    //注释2  
    Blockly.Arduino.annotation_2 = function() {
        var text_data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        text_data = text_data.replace(/\"/g,'');
        var statements_input = Blockly.Arduino.statementToCode(this, 'input');
        statements_input = statements_input.replace(new RegExp(/\n  /g), "\n");
        statements_input = statements_input.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
        var code = '/*'+text_data+'*/\n'+statements_input+"\n";
        return code;
    };

    return Blockly;
}

exports = addGenerator;
