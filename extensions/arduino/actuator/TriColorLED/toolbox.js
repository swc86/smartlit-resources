/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TRICOLORLED_CATEGORY}" id="TRICOLORLED_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="TriColorLED_init" id="TriColorLED_init">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">TriColorLED</field>
            </shadow>
        </value>
        <field name="REDPIN">9</field>
        <field name="GREENPIN">10</field>
        <field name="BLUEPIN">11</field>
    </block>
    <block type="TriColorLED_set" id="TriColorLED_set">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">TriColorLED</field>
            </shadow>
        </value>
        <value name="REDVALUE">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="GREENVALUE">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="BLUEVALUE">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = addToolbox;
