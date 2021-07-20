const io = formatMessage => ({
    name: formatMessage({
        id: 'io.name',
        default: 'IO interface'
    }),
    extensionId: 'io',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'swc',
    iconURL: `asset/io.png`,
    description: formatMessage({
        id: 'io.description',
        default: 'IO interface.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'https://www.baidu.com'
});

module.exports = io;
