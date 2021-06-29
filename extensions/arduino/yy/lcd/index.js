const yyLCD = formatMessage => ({
    name: formatMessage({
        id: 'yyLCD.name',
        default: 'yyLCD',
        description: 'Name of yyLCD'
    }),
    extensionId: 'yyLCD',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyLCD.png`,
    description: formatMessage({
        id: 'yyLCD.description',
        default: 'actuators',
        description: 'Description of yyLCD'
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

module.exports = yyLCD;
