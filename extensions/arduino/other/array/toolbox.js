/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ARRAY_CATEGORY}" id="ARRAY_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="array_create" id="array_create">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray</field>
            </shadow>
        </value>
        <value name="size">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">3</field>
            </shadow>
        </value>
        <value name="buff">
            <shadow type="text">
                <field name="TEXT">0,0,0</field>
            </shadow>
        </value>
    </block>
    <block type="array_len" id="array_len">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray</field>
            </shadow>
        </value>
    </block>
    <block type="array_itemGet" id="array_itemGet">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray</field>
            </shadow>
        </value>
        <value name="index">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">1</field>
            </shadow>
        </value>
    </block>
    <block type="array_itemSet" id="array_itemGet">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray</field>
            </shadow>
        </value>
        <value name="index">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">1</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="array2_create" id="array2_create">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray2</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">2</field>
            </shadow>
        </value>
        <value name="col">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">2</field>
            </shadow>
        </value>
        <value name="buff">
            <shadow type="text">
                <field name="TEXT">{0,0},{0,0}</field>
            </shadow>
        </value>
    </block>
    <block type="array2_len" id="array2_len">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray2</field>
            </shadow>
        </value>
    </block>
    <block type="array2_itemGet" id="array2_itemGet">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray2</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">1</field>
            </shadow>
        </value>
        <value name="col">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">1</field>
            </shadow>
        </value>
    </block>
    <block type="array2_itemSet" id="array2_itemGet">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">myarray2</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">1</field>
            </shadow>
        </value>
        <value name="col">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">1</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
