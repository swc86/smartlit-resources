const yyOLED = formatMessage => ({
    name: 'yyOLED',
    extensionId: 'yyOLED',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyOLED.png`,
    description: formatMessage({
        id: 'yyOLED.description',
        default: 'yyOLED',
        description: 'Description of yyOLED'
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

module.exports = yyOLED;
