/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ARRAY_CATEGORY: 'array',
        ARRAY_CREATE: '%1 %2[%3] make array from %4',
        ARRAY_LEN: 'length of %1',
        ARRAY_ITEMGET: '%1 get item at %2',
        ARRAY_ITEMSET: '%1 set item at %2 to %3',
        ARRAY2_CREATE: '%1 Two-dimensional array Name %2 rows %3 cols %4 make array from text %5 Create',
        ARRAY2_LEN: 'Two-dimensional array Name %1 get %2',
        ARRAY2_ITEMGET: 'Get Two-dimensional array value %1 Raw %2 Column %3',
        ARRAY2_ITEMSET: 'Two-dimensional array assignment %1 Raw %2 Column %3 value %4',
        ARRAY_ROWS:            'rows',
        ARRAY_COLS:            'cols',
        ARRAY_INT:             'int',
        ARRAY_UNSIGNED_INT:    'unsigned int',
        ARRAY_WORD:            'word',
        ARRAY_LONG:            'long',
        ARRAY_UNSIGNED_LONG:   'unsigned long',
        ARRAY_FLOAT:           'float',
        ARRAY_DOUBLE:          'double',
        ARRAY_BOOLEAN:         'boolean',
        ARRAY_BYTE:            'byte',
        ARRAY_CHAR:            'char',
        ARRAY_UNSIGNED_CHAR:   'unsigned char',
        ARRAY_STRING:          'String'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ARRAY_CATEGORY: '数组',
        ARRAY_CREATE: '%1 %2[%3] 从字符串%4创建数组',
        ARRAY_LEN: '获取数组%1长度',
        ARRAY_ITEMGET: '%1的第%2项',
        ARRAY_ITEMSET: '%1的第%2项赋值为%3',
        ARRAY2_CATEGORY: '二维数组',
        ARRAY2_CREATE: '%1 二维数组%2行数%3列数%4 从字符串%5创建数组',
        ARRAY2_LEN: '二维数组%1获取%2',
        ARRAY2_ITEMGET: '获取二维数组%1第%2行第%3列的数据',
        ARRAY2_ITEMSET: '二维数组%1的第%2行第%3列赋值为%4',
        ARRAY_ROWS:            '行数',
        ARRAY_COLS:            '列数',
        ARRAY_INT:             '整数',
        ARRAY_UNSIGNED_INT:    '无符号整数',
        ARRAY_WORD:            '字',
        ARRAY_LONG:            '长整数',
        ARRAY_UNSIGNED_LONG:   '无符号长整数',
        ARRAY_FLOAT:           '小数',
        ARRAY_DOUBLE:          '双精度浮点数',
        ARRAY_BOOLEAN:         '布尔',
        ARRAY_BYTE:            '字节',
        ARRAY_CHAR:            '字符',
        ARRAY_UNSIGNED_CHAR:   '无符号字符',
        ARRAY_STRING:          '字符串'
    });
    return Blockly;
}

exports = addMsg;
