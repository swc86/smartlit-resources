const yyActuator = formatMessage => ({
    name: formatMessage({
        id: 'yyActuator.name',
        default: 'yyActuator',
        description: 'Name of yyActuator'
    }),
    extensionId: 'yyActuator',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyActuator.png`,
    description: formatMessage({
        id: 'yyActuator.description',
        default: 'actuators',
        description: 'Description of yyActuator'
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

module.exports = yyActuator;
