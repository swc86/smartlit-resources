const yyOther = formatMessage => ({
    name: formatMessage({
        id: 'yyOther.name',
        default: 'yyOther',
        description: 'Name of yyOther'
    }),
    extensionId: 'yyOther',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyOther.png`,
    description: formatMessage({
        id: 'yyOther.description',
        default: 'actuators',
        description: 'Description of yyOther'
    }),
    featured: true,
    blocks: '../../kit/QhRobot/blocks.js',
    generator: '../../kit/QhRobot/generator.js',
    toolbox: 'toolbox.js',
    msg: '../msg.js',
    library: '../../kit/QhRobot/lib',
    tags: ['other'],
    helpLink: 'http://www.baidu.com/'
});

module.exports = yyOther;
