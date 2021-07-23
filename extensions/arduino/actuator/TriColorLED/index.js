const TriColorLED = formatMessage => ({
    name: formatMessage({
        id: 'TriColorLED.name',
        default: 'Tri-color LED'
    }),
    extensionId: 'TriColorLED',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/TriColorLED.png`,
    description: formatMessage({
        id: 'TriColorLED.description',
        default: 'Tri-color LED Module.'
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

module.exports = TriColorLED;
