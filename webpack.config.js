const path = require("path");
module.exports = {
    mode: "development",
    entry: "./code/main.js",
    devServer: {
      static: {
        directory: path.join(__dirname, "/"),
      },
    },
    module: {
        rules: [
           {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
           },
         
      
          {
            test: /\.ttf$/i,
            type: "asset/resource"
          }
        ]
    }
}