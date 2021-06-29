const yySpeech = formatMessage => ({
    name: formatMessage({
        id: 'yySpeech.name',
        default: 'yySpeech',
        description: 'Name of yySpeech'
    }),
    extensionId: 'yySpeech',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], // Hide kit extension in library
    author: 'swc',
    iconURL: `asset/yySpeech.png`,
    description: formatMessage({
        id: 'yySpeech.description',
        default: 'actuators',
        description: 'Description of yySpeech'
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

module.exports = yySpeech;
