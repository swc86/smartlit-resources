/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_OLED_CATEGORY}" id="QH_OLED_CATEGORY" colour="#e36a69" secondaryColour="#e36a69">
    <block type="tool_modulus_show">
        <value name="VAR">
            <shadow type="text">
              <field name="TEXT">bitmap</field>
            </shadow>
        </value> 
        <value name="input_data">
            <block type="tool_modulus">
                <field name="modulus_way">2</field>
                <field name="modulus_direction">2</field>
                <value name="hz_line_height">
                    <shadow type="text">
                      <field name="TEXT">16</field>
                    </shadow>
                </value>
                <value name="bitmap_width">
                    <shadow type="text">
                      <field name="TEXT">128</field>
                    </shadow>
                </value>
                <value name="bitmap_height">
                    <shadow type="text">
                      <field name="TEXT">64</field>
                    </shadow>
                </value>
                <value name="input_data">
                    <shadow type="text">
                      <field name="TEXT">齐护机器人</field>
                    </shadow>
                </value>        
            </block>
        </value>  
    </block>
    <block type="oled_init">
      <value name="NAME">
          <shadow type="text">
            <field name="TEXT">u8g2</field>
          </shadow>
        </value>
        <value name="ADDRESS">
          <shadow type="text">
            <field name="TEXT">0x3C</field>
          </shadow>
        </value>
      <next>
        <block type="oled_page">
          <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
          </value>
          <statement name="DO">
            <block type="oled_showBitmap" >
              <value name="NAME">
                <shadow type="text">
                  <field name="TEXT">u8g2</field>
                </shadow>
              </value>
              <value name="START_X">
                <shadow type="math_number">
                  <field name="NUM">0</field>
                </shadow>
              </value>
              <value name="START_Y">
                <shadow type="math_number">
                  <field name="NUM">0</field>
                </shadow>
              </value>
              <value name="WIDTH">
                <shadow type="math_number">
                  <field name="NUM">128</field>
                </shadow>
              </value>
              <value name="HEIGHT">
                <shadow type="math_number">
                  <field name="NUM">64</field>
                </shadow>
              </value>
              <value name="bitmap_name">
                <shadow type="text">
                  <field name="TEXT">bitmap</field>
                </shadow>
              </value>
            </block>    
          </statement>
        </block>
      </next>
    </block>
    <block type="oled_clear">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_setContrast">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
        <value name="Contrast">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="oled_face">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
        <value name="POS_X">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="POS_Y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
    </block>
    <block type="oled_drawPixel" >
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="POS_X">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="POS_Y">
        <shadow type="math_number">
          <field name="NUM">32</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawLine">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="START_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="START_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="END_X">
        <shadow type="math_number">
          <field name="NUM">15</field>
        </shadow>
      </value>
      <value name="END_Y">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
    </block>
    <block type="oled_draw_Str_Line">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="START_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="START_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="LENGTH">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawFrame">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="WIDTH">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="HEIGHT">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawRFrame">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="WIDTH">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="HEIGHT">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
      <value name="RADIUS">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawCircle">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="RADIUS">
        <shadow type="math_number">
          <field name="NUM">6</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawEllipse">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="RADIUS_X">
        <shadow type="math_number">
          <field name="NUM">6</field>
        </shadow>
      </value>
      <value name="RADIUS_Y">
        <shadow type="math_number">
          <field name="NUM">15</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawTriangle" >
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">14</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">55</field>
        </shadow>
      </value>
      <value name="D1_X">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
      <value name="D1_Y">
        <shadow type="math_number">
          <field name="NUM">33</field>
        </shadow>
      </value>
      <value name="D2_X">
        <shadow type="math_number">
          <field name="NUM">8</field>
        </shadow>
      </value>
      <value name="D2_Y">
        <shadow type="math_number">
          <field name="NUM">43</field>
        </shadow>
      </value>
    </block>
</category>
`;
}

exports = addToolbox;
