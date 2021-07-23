/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_YELLOWLED_CATEGORY}" id="YELLOWLED_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="yellowLED_set" id="yellowLED_set">
        <field name="PIN">10</field>
    </block>
    <block type="yellowLED_set2" id="yellowLED_set2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">yellowLED</field>
            </shadow>
        </value>
        <field name="PIN">10</field>
    </block>
    <block type="yellowLED_pwm" id="yellowLED_pwm">
        <field name="PIN">10</field>
        <value name="BRIGHTNESS">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="yellowLED_pwm2" id="yellowLED_pwm2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">yellowLED</field>
            </shadow>
        </value>
        <field name="PIN">10</field>
        <value name="BRIGHTNESS">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
