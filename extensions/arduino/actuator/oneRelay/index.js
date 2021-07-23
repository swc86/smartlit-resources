const oneRelay = formatMessage => ({
    name: formatMessage({
        id: 'oneRelay.name',
        default: 'double relay'
    }),
    extensionId: 'oneRelay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/oneRelay.png`,
    description: formatMessage({
        id: 'oneRelay.description',
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

module.exports = oneRelay;
