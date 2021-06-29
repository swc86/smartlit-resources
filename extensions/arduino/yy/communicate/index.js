const yyCommunicate = formatMessage => ({
    name: formatMessage({
        id: 'yyCommunicate.name',
        default: 'yyCommunicate',
        description: 'Name of yyCommunicate'
    }),
    extensionId: 'yyCommunicate',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yyCommunicate.png`,
    description: formatMessage({
        id: 'yyCommunicate.description',
        default: 'actuators',
        description: 'Description of yyCommunicate'
    }),
    featured: true,
    blocks: '../../kit/QhRobot/blocks.js',
    generator: '../../kit/QhRobot/generator.js',
    toolbox: 'toolbox.js',
    msg: '../msg.js',
    library: '../../kit/QhRobot/lib',
    tags: ['communication'],
    helpLink: 'http://www.baidu.com/'
});

module.exports = yyCommunicate;
