/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_SDISPLAY_CATEGORY}" id="QH_SDISPLAY_CATEGORY" colour="#a5855b" secondaryColour="#a5855b">
    <block type="QH_display_samll_refresh_display"></block>
    <block name="横坚屏设置" type="QH_display_samll_HV"></block> 
    <block name="屏亮度" type="QH_display_samll_BL">
        <value name="QDP_display_samll_bl_1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block name="颜色刷屏/背景色" type="QH_display_samll_clr">
        <value name="QDP_display_samll_clr_1">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
    </block> 
    <block name="图片显示" type="QH_display_samll_flash_pic"></block>
    <block name="图片显示" type="QH_display_samll_pic">
        <value name="QDP_display_samll_pic_add">
            <shadow type="math_number">
                <field name="NUM">2097152</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_W">
            <shadow type="math_number">
                <field name="NUM">128</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_H">
            <shadow type="math_number">
                <field name="NUM">160</field>
            </shadow>
        </value>
    </block>
    <block name="画点指令" type="QH_display_samll_PS">
        <value name="QDP_display_samll_ps_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_Y">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="画线框指令" type="QH_display_samll_PL">
        <value name="QDP_display_samll_pl_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_X2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="画圆指令" type="QH_display_samll_CIR">
        <value name="QDP_display_samll_cir_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_Y">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_R">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="显示文本" type="QH_display_samll_DC">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block name="显示中文" type="QH_display_samll_CN">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">中文</field>
            </shadow>
        </value>
    </block>
    <block name="显示带底色文本" type="QH_display_samll_SBCDC">
        <value name="QDP_display_samll_sbcdc_colou2">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_text">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_display_samll_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
    <block name="波特率" type="QH_display_samll_btl"></block>
</category>
`;
}

exports = addToolbox;
