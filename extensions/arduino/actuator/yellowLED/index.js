const yellowLED = formatMessage => ({
    name: formatMessage({
        id: 'yellowLED.name',
        default: 'yellow LED'
    }),
    extensionId: 'yellowLED',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/yellowLED.png`,
    description: formatMessage({
        id: 'yellowLED.description',
        default: 'yellow LED Module.'
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

module.exports = yellowLED;
