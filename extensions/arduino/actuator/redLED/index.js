const redLED = formatMessage => ({
    name: formatMessage({
        id: 'redLED.name',
        default: 'red LED'
    }),
    extensionId: 'redLED',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/redLED.png`,
    description: formatMessage({
        id: 'redLED.description',
        default: 'red LED Module.'
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

module.exports = redLED;
