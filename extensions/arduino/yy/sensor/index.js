const yySensor = formatMessage => ({
    name: formatMessage({
        id: 'yySensor.name',
        default: 'yySensor',
        description: 'Name of yySensor'
    }),
    extensionId: 'yySensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yySensor.png`,
    description: formatMessage({
        id: 'yySensor.description',
        default: 'sensors',
        description: 'Description of yySensor'
    }),
    featured: true,
    blocks: '../../kit/QhRobot/blocks.js',
    generator: '../../kit/QhRobot/generator.js',
    toolbox: 'toolbox.js',
    msg: '../msg.js',
    library: '../../kit/QhRobot/lib',
    tags: ['sensor'],
    helpLink: 'http://www.baidu.com/'
});

module.exports = yySensor;
