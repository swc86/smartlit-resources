const yyMP3 = formatMessage => ({
    name: formatMessage({
        id: 'yyMP3.name',
        default: 'yyMP3',
        description: 'Name of yyMP3'
    }),
    extensionId: 'yyMP3',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyMP3.png`,
    description: formatMessage({
        id: 'yyMP3.description',
        default: 'actuators',
        description: 'Description of yyMP3'
    }),
    featured: true,
    blocks: '../../kit/QhRobot/blocks.js',
    generator: '../../kit/QhRobot/generator.js',
    toolbox: 'toolbox.js',
    msg: '../msg.js',
    library: '../../kit/QhRobot/lib',
    tags: ['actuator'],
    helpLink: 'http://www.baidu.com/'
});

module.exports = yyMP3;
