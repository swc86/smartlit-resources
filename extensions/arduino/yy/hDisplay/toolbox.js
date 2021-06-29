/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_HDISPLAY_CATEGORY}" id="QH_HDISPLAY_CATEGORY" colour="#6495ed" secondaryColour="#6495ed">
    <block type="qdp_display_START"></block>
    <block type="qdp_display_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_display_variable"></block>
    <block type="qdp_display_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_sleep"></block>
    <block type="qdp_zkpdisplay_buzzer">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_color"></block>
    <block type="qdp_zkpdisplay_clscolor">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_pic"></block>
    <block type="qdp_zkpdisplay_page"></block>
    <block type="qdp_zkpdisplay_drawinground">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_function1">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_TEXT">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
        <value name="num6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="text3">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_TEXT_CN">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
        <value name="num6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="text3">
            <shadow type="text">
                <field name="TEXT">中文</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = addToolbox;
