const stepperMotor = formatMessage => ({
    name: formatMessage({
        id: 'stepperMotor.name',
        default: 'stepper motor'
    }),
    extensionId: 'stepperMotor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/stepperMotor.png`,
    description: formatMessage({
        id: 'stepperMotor.description',
        default: '28byj-48, a four phase eight beat permanent magnet deceleration stepping motor with an outer diameter of 28mm.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://www.baidu.com'
});

module.exports = stepperMotor;
