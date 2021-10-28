/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        STEPPERMOTOR_CATEGORY: 'stepper motor',
        STEPPERMOTOR_INIT: 'init stepper motor name %1 IN1 %2 IN2 %3 IN3 %4 IN4 %5',
        STEPPERMOTOR_SPEED: 'set stepper motor name %1 speed %2',        
        STEPPERMOTOR_STEP: 'turn stepper motor name %1 %2 %3 steps',
        STEPPERMOTOR_STEP2: 'turn stepper motor name %1 %2 %3 laps',
        STEPPERMOTOR_FORWARD: 'foward',
        STEPPERMOTOR_REVERSAL: 'reversal',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        STEPPERMOTOR_CATEGORY: '步进电机',
        STEPPERMOTOR_INIT: '初始化步进电机 名称 %1 IN1 %2 IN2 %3 IN3 %4 IN4 %5',
        STEPPERMOTOR_SPEED: '设置步进电机 名称 %1 速度 %2',
        STEPPERMOTOR_STEP: '转动步进电机 名称 %1 %2 %3 步',
        STEPPERMOTOR_STEP2: '转动步进电机 名称 %1 %2 %3 圈',
        STEPPERMOTOR_FORWARD: '正转',
        STEPPERMOTOR_REVERSAL: '反转',
    });
    return Blockly;
}

exports = addMsg;
