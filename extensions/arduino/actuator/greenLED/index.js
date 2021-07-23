const greenLED = formatMessage => ({
    name: formatMessage({
        id: 'greenLED.name',
        default: 'green LED'
    }),
    extensionId: 'greenLED',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/greenLED.png`,
    description: formatMessage({
        id: 'greenLED.description',
        default: 'green LED Module.'
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

module.exports = greenLED;
