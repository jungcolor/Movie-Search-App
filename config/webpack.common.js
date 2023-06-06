const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML 플러그인 패키지

module.exports = {
    entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/ // 제외할 폴더
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.ProvidePlugin({
            React: "react"
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src/"),
            "@layouts": path.resolve(__dirname, "../src/layouts"),
            "@components": path.resolve(__dirname, "../src/components"),
            "@pages": path.resolve(__dirname, "../src/pages")
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"]
    },
    stats: {
        preset: 'minimal',
        moduleTrace: true, // 종속성 경고/에러 표시
        errorDetails: true, // 에러 세부 정보
        chunks: true
    }
}