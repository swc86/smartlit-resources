/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_REDLED_CATEGORY}" id="REDLED_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="redLED_set" id="redLED_set">
        <field name="PIN">11</field>
    </block>
    <block type="redLED_set2" id="redLED_set2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">redLED</field>
            </shadow>
        </value>
        <field name="PIN">11</field>
    </block>
    <block type="redLED_pwm" id="redLED_pwm">
        <field name="PIN">11</field>
        <value name="BRIGHTNESS">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="redLED_pwm2" id="redLED_pwm2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">redLED</field>
            </shadow>
        </value>
        <field name="PIN">11</field>
        <value name="BRIGHTNESS">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
