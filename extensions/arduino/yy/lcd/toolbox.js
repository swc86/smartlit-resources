/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_LCD_CATEGORY}" id="QH_LCD_CATEGORY" colour="#5ba5a5" secondaryColour="#5ba5a5">
    <block type="group_lcd_init2">
        <value name="device">
            <shadow type="math_number">
                <field name="NUM">0x27</field>
            </shadow>
        </value>
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
    </block>
    <block type="group_lcd_print">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">Line1</field>
            </shadow>
        </value>
        <value name="TEXT2">
            <shadow type="text">
                <field name="TEXT">Line2</field>
            </shadow>
        </value>
    </block>
    <block type="group_lcd_print2">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="column">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="group_lcd_power">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
    </block>  
</category>
`;
}

exports = addToolbox;
