const array = formatMessage => ({
    name: formatMessage({
        id: 'array.name',
        default: 'array',
        description: 'Name of array'
    }),
    extensionId: 'array',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'swc',
    iconURL: `asset/array.png`,
    description: formatMessage({
        id: 'array.description',
        default: 'Array (including one-dimensional array and two-dimensional array).',
        description: 'Description of array'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = array;
