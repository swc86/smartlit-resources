/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_OTHER_CATEGORY}" id="QH_OTHER_CATEGORY" colour="#808080" secondaryColour="#808080">
    <label text="%{BKY_QH_ANNOTATION_LABEL}"></label>
    <block type="qdp_annotation1">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">info</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_annotation2">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">info</field>
            </shadow>
        </value>
        <statement name="input"></statement>
    </block>
    <label text="%{BKY_QH_VARIABLE_LABEL}"></label>
    <block type="QH_variables_declare">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_get">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_set">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_change">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_SCOOP_LABEL}"></label>
    <block type="cooperativeScheduler_start" id="cooperativeScheduler_start">
    </block>
    <block type="cooperativeScheduler_setup" id="cooperativeScheduler_setup">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="cooperativeScheduler_sleep" id="cooperativeScheduler_sleep">
        <value name="time">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_OPERATOR_LABEL}"></label>
    <block type="QH_arithmetic_operator" id="QH_arithmetic_operator">
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_relational_operator" id="QH_relational_operator">
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_bit_operator" id="QH_bit_operator">
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_constrain" id="QH_constrain">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="MIN">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="MAX">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="QH_map" id="QH_map">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="MIN1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="MAX1">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="MIN2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="MAX2">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = addToolbox;
