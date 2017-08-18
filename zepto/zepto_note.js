/**
 * 参考
 * http://codeduan.com/posts/zepto.html
 * https://github.com/JiayiLi/source-code-study
 */
var class2type = {};
toString = class2type.toString;

// 类型判断
function type(obj) {
    return obj == null ? String(obj) :
        [toString.call(obj)] || 'object'
}

// 判断 函数
function isFunction(value) {
    return type(value) == 'function';
}

// 判断 window
function isWindow(obj) {
    return obj !== null && obj === obj.window;
}

// 判断 document
function isDocument(obj) {
    return obj !== null && obj.nodeType == obj.DOCUMENT_NODE;
}

// 判断 object
function isObject(obj) {
    return type(obj) == 'object';
}

// 数组去重
var uniq = function (array) {
    return filter.call(array, function (item, idx) { array.indexOf(item) == idx });
}

// 判断 对象是否为空
function isEmptyObject(obj) {
    var name;
    for (name in obj) return false;
    return true;    
}

(function (global, factory) {}(this, function (window) {
    
    // 核心模块
    var Zepto = (function () {

        // 初始化 变量
        var undefined, key, $, classList, emptyArray = [],

        // 缓存 数组的 concat、filter、slice方法
        concat = emptyArray.concat,
        filter = emptyArray.filter,
        slice = emptyArray.slice,

        document = window.document,

        // 保存元素的默认display属性值
        elementDisplay = {},
        classCache = {},
        cssNumber = {
            'column-count': 1,
            'columns': 1,
            'font-weight': 1,
            'line-height': 1,
            'opacity:' 1,
            'z-index': 1,
            'zoom': 1,
        },

        // 正则表达式记录
        /**
         *  正则表达式特殊字符
         *  -   ^   匹配开始
         *  -   $   匹配结束
         *  -   *   匹配前一个表达式0-n次
         *  -   ?   匹配 0 || 1次
         *  -   ()  匹配并记住匹配项
         *  -   []  字符集合
         *  -   \w  匹配一个单字字符（字母、数字或者下划线）
         *  -   \s  匹配一个空白字符，包括空格、制表符、换页符和换行符
         *  -   [^] 反向字符集
         *  -   (?:x) 匹配但是不记住，对整个表达式生效
         * 
         * 
         */

        // RegExp对象变量
        // 匹配项的第一个标签字符串，eg.<p>123</p><h1>345</h1> => <p>
        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
        // 匹配非嵌套标签，eg.div><p></p></div> => 无， <br>, <br />, <h3></h3> => 可以匹配
        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        // 匹配自闭和标签，将 <p/>或<p />，替换为 <p></p>，将<p abc/>替换为<p>abc</p> 但 <input/> （在 tagExpanderRE 中定义）的不替换
        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        // body html
        rootNodeRE = /^(?:body|html)$/i,
        // 大写字母
        capitalRE = /([A-Z])/g,
        // 通过function调用来设置/获取的特殊属性
        methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
        table = document.createElement('table'),
        tableRow = document.createElement('tr'),

        // 指定特殊元素的容器
        containers = {
            'tr': document.createElement('tbody'),
            'tbody': table,
            'thead': table,
            'tfoot': table,
            'td': tableRow,
            'th': tableRow,
            '*': document.createElement('div')
        },

        // 匹配一个包括（字母、数组、下划线、-）的字符串
        simpleSelectorRE = /^[\w-]*$/,





    })();



































































}))