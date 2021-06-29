const yyHDisplay = formatMessage => ({
    name: formatMessage({
        id: 'yyHDisplay.name',
        default: 'yyHDisplay',
        description: 'Name of yyHDisplay'
    }),
    extensionId: 'yyHDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyHDisplay.png`,
    description: formatMessage({
        id: 'yyHDisplay.description',
        default: 'actuators',
        description: 'Description of yyHDisplay'
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

module.exports = yyHDisplay;
