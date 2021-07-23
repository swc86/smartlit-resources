const doubleRelay = formatMessage => ({
    name: formatMessage({
        id: 'doubleRelay.name',
        default: 'double relay'
    }),
    extensionId: 'doubleRelay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/doubleRelay.png`,
    description: formatMessage({
        id: 'doubleRelay.description',
        default: 'Two way relay module, 5V low trigger.'
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

module.exports = doubleRelay;
