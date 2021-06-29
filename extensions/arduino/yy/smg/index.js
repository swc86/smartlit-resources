const yySmg = formatMessage => ({
    name: formatMessage({
        id: 'yySmg.name',
        default: 'yySmg',
        description: 'Name of yySmg'
    }),
    extensionId: 'yySmg',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yySmg.png`,
    description: formatMessage({
        id: 'yySmg.description',
        default: 'actuators',
        description: 'Description of yySmg'
    }),
    featured: true,
    blocks: '../../kit/QhRobot/blocks.js',
    generator: '../../kit/QhRobot/generator.js',
    toolbox: 'toolbox.js',
    msg: '../msg.js',
    library: '../../kit/QhRobot/lib',
    tags: ['display'],
    helpLink: 'http://www.baidu.com/'
});

module.exports = yySmg;
