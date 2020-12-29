// noinspection JSUnusedGlobalSymbols
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/legal-doc-generator/'
        : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "隐私政策生成器";
                return args;
            })
    }
}
