const lcd1602 = formatMessage => ({
    name: 'LCD1602',
    extensionId: 'lcd1602',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'swc',
    iconURL: `asset/LCD1602.png`,
    description: formatMessage({
        id: 'lcd1602.description',
        default: 'LCD1602 display module.',
        description: 'Description of lcd1602'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = lcd1602;
