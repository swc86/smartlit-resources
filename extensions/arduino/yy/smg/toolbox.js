/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_SMG_CATEGORY}" id="QH_SMG_CATEGORY" colour="#ae8f00" secondaryColour="#ae8f00">
    <block type="QH_display">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">1234</field>
            </shadow>
        </value>
    </block>
    <block type="QH_displayoff"></block>
</category>
`;
}

exports = addToolbox;
