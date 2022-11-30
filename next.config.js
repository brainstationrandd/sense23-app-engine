// module.exports = {
//   devIndicators: {
//     autoPrerender: false,
//   },
//   resolve: {
//     fallback: {
//         "fs": false
//     },
// }
// };

module.exports = (phase, { defaultConfig }) => {
    return {
        ...defaultConfig,

        webpack: (config) => {

            config.resolve = {
                ...config.resolve,
                fallback: {
                    fs: false,
                    path: false,
                    os: false,
                },
            };
            return config;
        },
    };
};
