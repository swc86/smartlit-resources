/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD1602_CATEGORY: 'LCD1602',
        LCD1602_INIT:   'setup LCD1602 %1 RS%2 EN%3 D4%4 D5%5 D6%6 D7%7',
        LCD1602_INIT2:  'setup LCD1602 %1 address%2',
        LCD1602_INIT3:  'setup LCD1602 %1 address%2 SCL PIN#%3 SDA PIN#%4',
        LCD1602_PRINT1: 'LCD1602 %1 print line1 %2',
        LCD1602_PRINT2: 'LCD1602 %1 print line2 %2',
        LCD1602_PRINT3: 'LCD1602 %1 row %2 column %3 print %4',
        LCD1602_PRINTIMAGE: 'LCD1602 %1 row %2 column %3 display image --- image name%4 image no%5 image data%6',
        LCD1602_SET:    'LCD1602 %1 %2',
        LCD1602_SET_ON:         'ON',
        LCD1602_SET_OFF:        'OFF',
        LCD1602_SET_CURSOR:     'Cursor',
        LCD1602_SET_NOCURSOR:   'noCursor',
        LCD1602_SET_BLINK:      'blink',
        LCD1602_SET_NOBLINK:    'noBlink',
        LCD1602_SET_CLEAR:      'Clear',
        LCD1602_SET_NOBACKLIGHT:'noBacklight',
        LCD1602_SET_BACKLIGHT:  'backlight',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD1602_CATEGORY: 'LCD1602',
        LCD1602_INIT:   '初始化LCD1602液晶显示屏 %1 RS%2 EN%3 D4%4 D5%5 D6%6 D7%7',
        LCD1602_INIT2:  '初始化LCD1602液晶显示屏 %1 设备地址%2',
        LCD1602_INIT3:  '初始化LCD1602液晶显示屏 %1 设备地址%2 SCL管脚#%3 SDA管脚#%4',
        LCD1602_PRINT1: 'LCD1602液晶显示屏 %1 打印第一行 %2',
        LCD1602_PRINT2: 'LCD1602液晶显示屏 %1 打印第二行 %2',
        LCD1602_PRINT3: 'LCD1602液晶显示屏 %1 在第%2行第%3列打印 %4',
        LCD1602_PRINTIMAGE: 'LCD1602液晶显示屏 %1 在第%2行第%3列显示图像 --- 图像名称%4 图像编号%5 图像内容%6',
        LCD1602_SET:    'LCD1602液晶显示屏 %1 %2',
        LCD1602_SET_ON:         '开',
        LCD1602_SET_OFF:        '关',
        LCD1602_SET_CURSOR:     '有光标',
        LCD1602_SET_NOCURSOR:   '无光标',
        LCD1602_SET_BLINK:      '闪烁',
        LCD1602_SET_NOBLINK:    '不闪烁',
        LCD1602_SET_CLEAR:      '清屏',
        LCD1602_SET_NOBACKLIGHT:'关闭背光',
        LCD1602_SET_BACKLIGHT:  '打开背光',
    });
    return Blockly;
}

exports = addMsg;
