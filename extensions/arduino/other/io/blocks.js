/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    Blockly.Blocks.io_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IO_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.IO_INPUT, 'INPUT'],
                            [Blockly.Msg.IO_OUTPUT, 'OUTPUT'],
                            [Blockly.Msg.IO_INPUT_PULLUP, 'INPUT_PULLUP']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.io_write = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IO_Write,
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'OUT',
                        options: [
                            [Blockly.Msg.IO_LOW, 'LOW'],
                            [Blockly.Msg.IO_HIGH, 'HIGH']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.io_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IO_Read,
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
