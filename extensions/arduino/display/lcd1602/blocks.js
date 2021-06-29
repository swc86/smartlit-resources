/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';

    Blockly.Blocks.lcd1602_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_INIT, //初始化LCD1602液晶显示屏 %1 RS%2 EN%3 D4%4 D5%5 D6%6 D7%7
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'rs_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'en_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'd4_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'd5_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'd6_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'd7_pin'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_init2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_INIT2, //初始化LCD1602液晶显示屏 %1 设备地址%2
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'address'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_init3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_INIT3, //初始化LCD1602液晶显示屏 %1 设备地址%2 SCL管脚#%3 SDA管脚#%4
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'address'
                    },
                    {
                        type: 'input_value',
                        name: 'scl_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'sda_pin'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_print1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_PRINT1,   // LCD1602液晶显示屏 %1 打印第一行 %2
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_print2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_PRINT2,   // LCD1602液晶显示屏 %1 打印第二行 %2
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_print3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_PRINT3,   // LCD1602液晶显示屏 %1 在第%2行第%3列打印 %4
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'row'
                    },
                    {
                        type: 'input_value',
                        name: 'col'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_printImage = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_PRINTIMAGE,   // LCD1602液晶显示屏 %1 在第%2行第%3列显示图像 --- 图像名称%4 图像编号%5 图像内容%6
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'row'
                    },
                    {
                        type: 'input_value',
                        name: 'col'
                    },
                    {
                        type: 'input_value',
                        name: 'image_name'
                    },
                    {
                        type: 'input_value',
                        name: 'image_no'
                    },
                    {
                        type: 'input_value',
                        name: 'image_data'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd1602_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD1602_SET,   // LCD1602液晶显示屏 %1 %2
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            [Blockly.Msg.LCD1602_SET_ON,          'display'],
                            [Blockly.Msg.LCD1602_SET_OFF,         'noDisplay'],
                            [Blockly.Msg.LCD1602_SET_CURSOR,      'cursor'],
                            [Blockly.Msg.LCD1602_SET_NOCURSOR,    'noCursor'],
                            [Blockly.Msg.LCD1602_SET_BLINK,       'blink'],
                            [Blockly.Msg.LCD1602_SET_NOBLINK,     'noBlink'],
                            [Blockly.Msg.LCD1602_SET_CLEAR,       'clear'],
                            [Blockly.Msg.LCD1602_SET_NOBACKLIGHT, 'noBacklight'],
                            [Blockly.Msg.LCD1602_SET_BACKLIGHT,   'backlight']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
