/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#808080';

    //注释1
    Blockly.Blocks.annotation_1 = {
        init: function () {
            this.jsonInit({
                message0: '// %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'data'
                    }   
                ],
                "tooltip": "注释用无特殊意义",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };

    //注释2
    Blockly.Blocks.annotation_2 = {
        init: function () {
            this.jsonInit({
                message0: '/* %1 */',
                message1: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'data'
                    }   
                ],
                args1: [
                    {
                    "type": "input_statement",
                    "name": "input"
                    }
                ],
                "tooltip": "注释用无特殊意义",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
