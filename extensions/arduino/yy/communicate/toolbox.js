/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_COMMUNICATE_CATEGORY}" id="QH_COMMUNICATE_CATEGORY" colour="#6c91ac" secondaryColour="#6c91ac">
    <label text="%{BKY_QH_IR_LABEL}"></label>
    <block type="QH_ir_re2"></block>
    <block type="QH_ir_send_nec">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">0xCF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ir_send_raw">     
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">0,0,0</field>
        </shadow>
      </value>
      <value name="length">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
      <value name="freq">
        <shadow type="math_number">
          <field name="NUM">38</field>
        </shadow>
      </value>
    </block>
    <label text="%{BKY_QH_BLUETOOTH_LABEL}"></label>
    <block type="QH_BT_START"></block>
    <block type="QH_BT_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>  
    <block type="QH_BT_variable"></block> 
    <block type="QH_BT_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N5">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block> 
    <label text="%{BKY_QH_SERIAL_LABEL}"></label>  
    <block type="QH_serial_change"></block>
    <block type="QH_serial_jieshouzhi">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="QH_serial_fasong">
        <value name="text">
        <shadow type="text">
            <field name="TEXT">0x7E</field>
        </shadow>
        </value>
    </block>
    <block type="QH_serial_jieshou"></block>
    <block type="QH_serial_suju"></block>
</category>
`;
}

exports = addToolbox;
