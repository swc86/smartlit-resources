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

    Blockly.Blocks.doubleRelay_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DOUBLERELAY_SET,
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
                            [Blockly.Msg.DOUBLERELAY_OPEN, 'OPEN'],
                            [Blockly.Msg.DOUBLERELAY_CLOSE, 'CLOSE']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.doubleRelay_set2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DOUBLERELAY_SET2,
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
                            [Blockly.Msg.DOUBLERELAY_OPEN, 'OPEN'],
                            [Blockly.Msg.DOUBLERELAY_CLOSE, 'CLOSE']]
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
