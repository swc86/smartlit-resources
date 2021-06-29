const annotation = formatMessage => ({
    name: formatMessage({
        id: 'annotation.name',
        default: 'annotation',
        description: 'Name of annotation'
    }),
    extensionId: 'annotation',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'swc',
    iconURL: `asset/annotation.png`,
    description: formatMessage({
        id: 'annotation.description',
        default: 'code annotation.',
        description: 'Description of annotation'
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

module.exports = annotation;
