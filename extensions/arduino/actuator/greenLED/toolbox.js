/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_GREENLED_CATEGORY}" id="GREENLED_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="greenLED_set" id="greenLED_set">
        <field name="PIN">9</field>
    </block>
    <block type="greenLED_set2" id="greenLED_set2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">greenLED</field>
            </shadow>
        </value>
        <field name="PIN">9</field>
    </block>
    <block type="greenLED_pwm" id="greenLED_pwm">
        <field name="PIN">9</field>
        <value name="BRIGHTNESS">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="greenLED_pwm2" id="greenLED_pwm2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">greenLED</field>
            </shadow>
        </value>
        <field name="PIN">9</field>
        <value name="BRIGHTNESS">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
