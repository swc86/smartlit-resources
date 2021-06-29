/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_MP3_CATEGORY}" id="QH_MP3_CATEGORY" colour="#b766ad" secondaryColour="#b766ad">
    <block type="QH_MP3_bofangx">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_yingliang">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_loopplay">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_startpause"></block>
    <block type="QH_MP3_previous_next"></block>
    <block type="QH_MP3_play">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ESPuno_define_mp3_directory">
        <value name="data">
        <shadow type="text">
            <field name="TEXT">音频1.mp3 音频2.mp3 音频3.mp3</field>
        </shadow>
        </value>
    </block>
    <block type="QH_ESPuno_mp3_designated_play">
        <value name="num">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
        </value>  
        <value name="NAME">
        <shadow type="text">
          <field name="TEXT">歌曲1</field>
        </shadow>
        </value>
    </block>  
</category>
`;
}

exports = addToolbox;
