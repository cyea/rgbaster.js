# rgbaest.js

获取图片指定区域色值：rgbaest.js 场景实践。

[demo](https://jingchaofang.github.io/rgbaster.js/demo/index.html?1)

更换链接URL后的数字1-5体验不同的图片获取主色效果
```
https://jingchaofang.github.io/rgbaster.js/demo/index.html?1
```


## Warn

会存在跨域问题，需保证图片资源在同一域下或设置服务器允许跨域

### img没有添加crossOrigin属性

```
Access to Image at 'http://book.img.ireader.com/idc_1/group6/M00/31/8E/CmRaIVo53O6Ef4BpAAAAAI_HxBM376605464.jpg?v=tCduIjU9&t=CmRaIVo53O4.' from origin 'http://fjc.dev.iovp.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://fjc.dev.iovp.com' is therefore not allowed access.
```

### getImageData()跨域报错

```
rgbaster.js:29 Uncaught DOMException: Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data. at Image.imgObj.onload (http://fjc.dev.iovp.com/testhtml/colorpick/rgbaster.js:29:31)
```
