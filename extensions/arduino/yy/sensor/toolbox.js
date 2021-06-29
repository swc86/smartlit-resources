/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QH_SENSOR_CATEGORY}" id="QH_SENSOR_CATEGORY" colour="#27b6ac" secondaryColour="#27b6ac">
    <label text="%{BKY_QH_BUTTON_LABEL}"></label>
    <block type="QH_button_general" id="QH_button_general"></block>
    <block type="QH_button_both" id="QH_button_both"></block>
    <block type="QH_buttonfuction_init" id="QH_buttonfuction_init"></block>
    <block type="QH_buttonfuction_do" id="QH_buttonfuction_do"></block>
    <label text="%{BKY_QH_SENSOR_LABEL}"></label>
    <block type="QH_UltraSonicDistanceSensor" id="QH_UltraSonicDistanceSensor"></block>
    <block type="QH_Line_follower" id="QH_Line_follower"></block>
    <block type="QH_lightSensor" id="QH_lightSensor"></block>
    <block type="QH_sound" id="QH_sound"></block>
    <block type="QH_Potentiometer" id="QH_Potentiometer"></block>
    <block type="QH_joystick_initialization" id="QH_joystick_initialization"></block>
    <block type="QH_get_the_joystick_value" id="QH_get_the_joystick_value"></block>
    <block type="QH_Soilmoisture" id="QH_Soilmoisture"></block>
    <block type="QH_dht11" id="QH_dht11"></block>
    <label text="%{BKY_QH_COLOR_LABEL}"></label>
    <block type="QH_yssb_init">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0x29</field>
            </shadow>
        </value>
    </block>
    <block type="QH_yssb_get" id="QH_yssb_get"></block>
    <block type="QH_yssb_compare">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_MPU6050_LABEL}"></label>
    <block type="QH_MPU6050_update" id="QH_MPU6050_update"></block>
    <block type="QH_MPU6050_yaw_reset" id="QH_MPU6050_yaw_reset"></block>
    <block type="QH_MPU6050_GETDATA" id="QH_MPU6050_GETDATA"></block>
    <block type="QH_MPU6050_MOTION_update" id="QH_MPU6050_MOTION_update"></block>
    <block type="QH_MPU6050_MOTION_GETDATA" id="QH_MPU6050_MOTION_GETDATA"></block>
</category>
`;
}

exports = addToolbox;
