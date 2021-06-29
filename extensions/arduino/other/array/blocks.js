/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    Blockly.Blocks.array_create = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY_CREATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [
                            [Blockly.Msg.ARRAY_INT,             'int'],
                            [Blockly.Msg.ARRAY_UNSIGNED_INT,    'unsigned int'],
                            [Blockly.Msg.ARRAY_WORD,            'word'],
                            [Blockly.Msg.ARRAY_LONG,            'long'],
                            [Blockly.Msg.ARRAY_UNSIGNED_LONG,   'unsigned long'],
                            [Blockly.Msg.ARRAY_FLOAT,           'float'],
                            [Blockly.Msg.ARRAY_DOUBLE,          'double'],
                            [Blockly.Msg.ARRAY_BOOLEAN,         'boolean'],
                            [Blockly.Msg.ARRAY_BYTE,            'byte'],
                            [Blockly.Msg.ARRAY_CHAR,            'char'],
                            [Blockly.Msg.ARRAY_UNSIGNED_CHAR,   'unsigned char'],
                            [Blockly.Msg.ARRAY_STRING,          'String'],
                            ['char*',                           'char*'],
                            ['uint8_t',                         'uint8_t'],
                            ['uint16_t',                        'uint16_t'],
                            ['uint32_t',                        'uint32_t'],
                            ['uint64_t',                        'uint64_t']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'size'
                    },
                    {
                        type: 'input_value',
                        name: 'buff'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.array_len = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY_LEN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.array_itemGet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY_ITEMGET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'index'
                    },
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.array_itemSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY_ITEMSET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'input_value',
                        name: 'index'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.array2_create = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY2_CREATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [
                            [Blockly.Msg.ARRAY_INT,             'int'],
                            [Blockly.Msg.ARRAY_UNSIGNED_INT,    'unsigned int'],
                            [Blockly.Msg.ARRAY_WORD,            'word'],
                            [Blockly.Msg.ARRAY_LONG,            'long'],
                            [Blockly.Msg.ARRAY_UNSIGNED_LONG,   'unsigned long'],
                            [Blockly.Msg.ARRAY_FLOAT,           'float'],
                            [Blockly.Msg.ARRAY_DOUBLE,          'double'],
                            [Blockly.Msg.ARRAY_BOOLEAN,         'boolean'],
                            [Blockly.Msg.ARRAY_BYTE,            'byte'],
                            [Blockly.Msg.ARRAY_CHAR,            'char'],
                            [Blockly.Msg.ARRAY_UNSIGNED_CHAR,   'unsigned char'],
                            [Blockly.Msg.ARRAY_STRING,          'String'],
                            ['char*',                           'char*'],
                            ['uint8_t',                         'uint8_t'],
                            ['uint16_t',                        'uint16_t'],
                            ['uint32_t',                        'uint32_t'],
                            ['uint64_t',                        'uint64_t']
                        ]
                    },
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
                        name: 'buff'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.array2_len = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY2_LEN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'my_var'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [
                            [Blockly.Msg.ARRAY_ROWS,            'rows'],
                            [Blockly.Msg.ARRAY_COLS,            'cols']
                        ]
                    },
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.array2_itemGet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY2_ITEMGET,
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
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.array2_itemSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARRAY2_ITEMSET,
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
