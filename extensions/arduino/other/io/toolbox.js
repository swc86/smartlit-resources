/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_IO_CATEGORY}" id="DHT_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF">
    <block type="io_init" id="io_init">
        <value name="PIN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <field name="PIN">2</field>
    </block>
    <block type="io_write" id="io_write">
        <value name="PIN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="io_read" id="io_read">
        <value name="PIN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
