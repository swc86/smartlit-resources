/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_SPEECH_CATEGORY}" id="QH_SPEECH_CATEGORY" colour="#ae8f00" secondaryColour="#ae8f00">
    <block type="QH_Voice">
        <value name="delayTime">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ASR_SendData"></block>
    <block type="QH_ASR_ReceiveData"></block>
    <block type="QH_ASR_CompareData"></block>
    <label text="%{BKY_QH_SYNTHESIS_LABEL}"></label>
    <block type="QH_QF_hc">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">中/E/拼/不支持变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_hc_en">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_sound">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">01</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_stophc"></block>
    <label text="%{BKY_QH_RECOGNITION_LABEL}"></label>
    <block type="QH_QF_startstopsb"></block>
    <block type="QH_QF_sbjg">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">yes ok</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_sbjg2"></block>
</category>
`;
}

exports = addToolbox;
