/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_ACTUATOR_CATEGORY}" id="QH_ACTUATOR_CATEGORY" colour="#AE8F00" secondaryColour="#AE8F00">
    <label text="LED"></label>
    <block type="QH_inout_highlow" id="QH_inout_highlow"></block>
    <block type="QH_ledlight">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_ledlight"></block>
    <block type="QH_ledlight_PWM">
        <value name="ledn">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_RELAY_LABEL}"></label>
    <block type="QH_relay">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_relay"></block>
    <label text="RGB"></label>
    <block type="QH_rgb_led">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_BUZZER_LABEL}"></label>
    <block type="QH_buzzer">
        <value name="DURATION">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="QH_buzzer_music"></block>
    <label text="%{BKY_QH_DCMOTO_LABEL}"></label>
    <block type="QH_motor">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_code_motor">
        <value name="speed1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_code_motor_read"></block>
    <label text="%{BKY_QH_SERVO_LABEL}"></label>
    <block type="QH_servomotor360">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotor180">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorread"></block>
    <block type="QH_servomotorPWM_set180">
        <value name="param1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="param2">
            <shadow type="math_number">
                <field name="NUM">460</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorPWM">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorPWM_set360">
        <value name="S_param">
            <shadow type="math_number">
                <field name="NUM">270</field>
            </shadow>
        </value>
        <value name="CW_L_param">
            <shadow type="math_number">
                <field name="NUM">230</field>
            </shadow>
        </value>
        <value name="CW_H_param">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="CCW_L_param">
            <shadow type="math_number">
                <field name="NUM">300</field>
            </shadow>
        </value>
        <value name="CCW_H_param">
            <shadow type="math_number">
                <field name="NUM">450</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorPWM360">
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = addToolbox;
