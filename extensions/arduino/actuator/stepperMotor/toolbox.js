/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_STEPPERMOTOR_CATEGORY}" id="STEPPERMOTOR_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="stepperMotor_init" id="stepperMotor_init">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">stepperMotor</field>
            </shadow>
        </value>
        <field name="PININ1">10</field>
        <field name="PININ2">11</field>
        <field name="PININ3">13</field>
        <field name="PININ4">12</field>
    </block>
    <block type="stepperMotor_speed" id="stepperMotor_speed">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">stepperMotor</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="stepperMotor_step" id="stepperMotor_step">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">stepperMotor</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">2048</field>
            </shadow>
        </value>
    </block>
    <block type="stepperMotor_step2" id="stepperMotor_step2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">stepperMotor</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
