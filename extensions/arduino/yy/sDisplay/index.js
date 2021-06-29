const yySDisplay = formatMessage => ({
    name: formatMessage({
        id: 'yySDisplay.name',
        default: 'yySDisplay',
        description: 'Name of yySDisplay'
    }),
    extensionId: 'yySDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yySDisplay.png`,
    description: formatMessage({
        id: 'yySDisplay.description',
        default: 'actuators',
        description: 'Description of yySDisplay'
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

module.exports = yySDisplay;
