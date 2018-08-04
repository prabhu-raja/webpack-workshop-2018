module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
});

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ['css-loader']
//             }
//         ]
//     }
// };