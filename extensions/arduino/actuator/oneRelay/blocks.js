/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.oneRelay_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ONERELAY_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STAT',
                        options: [
                            [Blockly.Msg.ONERELAY_OPEN, 'OPEN'],
                            [Blockly.Msg.ONERELAY_CLOSE, 'CLOSE']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oneRelay_set2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ONERELAY_SET2,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STAT',
                        options: [
                            [Blockly.Msg.ONERELAY_OPEN, 'OPEN'],
                            [Blockly.Msg.ONERELAY_CLOSE, 'CLOSE']]
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
