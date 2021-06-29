/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LCD1602_CATEGORY}" id="LCD1602_CATEGORY" colour="#42CCFF" secondaryColour="#00D7B0">
    <block type="lcd1602_init" id="lcd1602_init">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="rs_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">12</field>
            </shadow>
        </value>
        <value name="en_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">11</field>
            </shadow>
        </value>
        <value name="d4_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">5</field>
            </shadow>
        </value>
        <value name="d5_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">4</field>
            </shadow>
        </value>
        <value name="d6_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">3</field>
            </shadow>
        </value>
        <value name="d7_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">2</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_init2" id="lcd1602_init2">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="address">
            <shadow type="text">
                <field name="TEXT">0x20</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_init3" id="lcd1602_init3">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="address">
            <shadow type="text">
                <field name="TEXT">0x20</field>
            </shadow>
        </value>
        <value name="scl_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">3</field>
            </shadow>
        </value>
        <value name="sda_pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">2</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_print1" id="lcd1602_print1">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_print2" id="lcd1602_print2">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_print3" id="lcd1602_print3">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM" max="2" min="1">1</field>
            </shadow>
        </value>
        <value name="col">
            <shadow type="math_number">
                <field name="NUM" max="16" min="1">1</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_printImage" id="lcd1602_printImage">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM" max="2" min="1">1</field>
            </shadow>
        </value>
        <value name="col">
            <shadow type="math_number">
                <field name="NUM" max="16" min="1">1</field>
            </shadow>
        </value>
        <value name="image_name">
            <shadow type="text">
                <field name="TEXT">lcdimage</field>
            </shadow>
        </value>
        <value name="image_no">
            <shadow type="math_number">
                <field name="NUM" min="1" max="50">0</field>
            </shadow>
        </value>
        <value name="image_data">
            <shadow type="text">
                <field name="TEXT">0B10001,0B01010,0B11111,0B00100,0B11111,0B00100,0B00100,0B00000</field>
            </shadow>
        </value>
    </block>
    <block type="lcd1602_set">
        <value name="my_var">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = addToolbox;
