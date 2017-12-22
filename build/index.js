var UglifyJS = require("uglify-js");
var fs = require('fs');
var path = require('path');

const RELEASE_ROOT_PATH = 'dist';
const SOURCE_ROOT_PATH = 'src';

function resolvePath(p) {
  return path.resolve(__dirname, '../', p);
}

if (!fs.existsSync(resolvePath(RELEASE_ROOT_PATH))) {
    fs.mkdirSync(resolvePath(RELEASE_ROOT_PATH));
}

var options = {
  mangle: {
    reserved: ['RGBaster']
  }
}

fs.writeFileSync(resolvePath("dist/rgbaster.min.js"), UglifyJS.minify({
  "rgbaster.js": fs.readFileSync(resolvePath("src/rgbaster.js"), "utf8")
}, options).code, "utf8");
