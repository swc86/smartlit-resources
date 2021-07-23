/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ONERELAY_CATEGORY}" id="ONERELAY_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="oneRelay_set" id="oneRelay_set">
        <field name="PIN">4</field>
    </block>
    <block type="oneRelay_set2" id="oneRelay_set2">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">realy</field>
            </shadow>
        </value>
        <field name="PIN">4</field>
    </block>
</category>`;
}

exports = addToolbox;
