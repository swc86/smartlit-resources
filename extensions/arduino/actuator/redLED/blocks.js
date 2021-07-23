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

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.redLED_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REDLED_SET,
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
                            [Blockly.Msg.REDLED_ON, 'ON'],
                            [Blockly.Msg.REDLED_OFF, 'OFF']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.redLED_set2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REDLED_SET2,
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
                            [Blockly.Msg.REDLED_ON, 'ON'],
                            [Blockly.Msg.REDLED_OFF, 'OFF']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    }; 

    Blockly.Blocks.redLED_pwm = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REDLED_PWM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: pwmPins
                    },
                    {
                        type: 'input_value',
                        name: 'BRIGHTNESS'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.redLED_pwm2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REDLED_PWM2,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: pwmPins
                    },
                    {
                        type: 'input_value',
                        name: 'BRIGHTNESS'
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
