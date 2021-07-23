/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.TriColorLED_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRICOLORLED_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'REDPIN',
                        options: pwmPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'GREENPIN',
                        options: pwmPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BLUEPIN',
                        options: pwmPins
                    },
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TriColorLED_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRICOLORLED_SET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'REDVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'GREENVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'BLUEVALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
