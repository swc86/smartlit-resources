/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DOUBLERELAY_CATEGORY}" id="DOUBLERELAY_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="doubleRelay_set" id="doubleRelay_set">
        <field name="PIN">7</field>
    </block>
    <block type="doubleRelay_set" id="doubleRelay_set2">
        <field name="PIN">8</field>
    </block>
    <block type="doubleRelay_set2" id="doubleRelay_set3">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">realy1</field>
            </shadow>
        </value>
        <field name="PIN">7</field>
    </block>
    <block type="doubleRelay_set2" id="doubleRelay_set4">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">realy2</field>
            </shadow>
        </value>
        <field name="PIN">8</field>
    </block>
</category>`;
}

exports = addToolbox;
