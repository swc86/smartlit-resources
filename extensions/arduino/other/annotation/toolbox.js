/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ANNOTATION_CATEGORY}" id="ANNOTATION_CATEGORY" colour="#808080" secondaryColour="#808080">
    <block type="annotation_1">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">info</field>
            </shadow>
        </value>
    </block>
    <block type="annotation_2">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">info</field>
            </shadow>
        </value>
        <statement name="input"></statement>
    </block>
</category>`;
}

exports = addToolbox;
