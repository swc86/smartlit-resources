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

    Blockly.Blocks.stepperMotor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.STEPPERMOTOR_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PININ1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PININ2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PININ3',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PININ4',
                        options: digitalPins
                    },
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.stepperMotor_speed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.STEPPERMOTOR_SPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.stepperMotor_step = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.STEPPERMOTOR_STEP,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.STEPPERMOTOR_FORWARD, 'STEPPERMOTOR_FORWARD'],
                            [Blockly.Msg.STEPPERMOTOR_REVERSAL, 'STEPPERMOTOR_REVERSAL']]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.stepperMotor_step2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.STEPPERMOTOR_STEP2,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.STEPPERMOTOR_FORWARD, 'STEPPERMOTOR_FORWARD'],
                            [Blockly.Msg.STEPPERMOTOR_REVERSAL, 'STEPPERMOTOR_REVERSAL']]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
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
