"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/path-parse";
exports.ids = ["vendor-chunks/path-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/path-parse/index.js":
/*!******************************************!*\
  !*** ./node_modules/path-parse/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar isWindows = process.platform === 'win32';\n\n// Regex to split a windows path into into [dir, root, basename, name, ext]\nvar splitWindowsRe =\n    /^(((?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?[\\\\\\/]?)(?:[^\\\\\\/]*[\\\\\\/])*)((\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))[\\\\\\/]*$/;\n\nvar win32 = {};\n\nfunction win32SplitPath(filename) {\n  return splitWindowsRe.exec(filename).slice(1);\n}\n\nwin32.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = win32SplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  return {\n    root: allParts[1],\n    dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3]\n  };\n};\n\n\n\n// Split a filename into [dir, root, basename, name, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^((\\/?)(?:[^\\/]*\\/)*)((\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))[\\/]*$/;\nvar posix = {};\n\n\nfunction posixSplitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n}\n\n\nposix.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = posixSplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  \n  return {\n    root: allParts[1],\n    dir: allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3],\n  };\n};\n\n\nif (isWindows)\n  module.exports = win32.parse;\nelse /* posix */\n  module.exports = posix.parse;\n\nmodule.exports.posix = posix.parse;\nmodule.exports.win32 = win32.parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGF0aC1wYXJzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsMERBQTBELElBQUk7O0FBRTVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQzs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9wYXRoLXBhcnNlL2luZGV4LmpzPzhjZDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcblxuLy8gUmVnZXggdG8gc3BsaXQgYSB3aW5kb3dzIHBhdGggaW50byBpbnRvIFtkaXIsIHJvb3QsIGJhc2VuYW1lLCBuYW1lLCBleHRdXG52YXIgc3BsaXRXaW5kb3dzUmUgPVxuICAgIC9eKCgoPzpbYS16QS1aXTp8W1xcXFxcXC9dezJ9W15cXFxcXFwvXStbXFxcXFxcL10rW15cXFxcXFwvXSspP1tcXFxcXFwvXT8pKD86W15cXFxcXFwvXSpbXFxcXFxcL10pKikoKFxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKVtcXFxcXFwvXSokLztcblxudmFyIHdpbjMyID0ge307XG5cbmZ1bmN0aW9uIHdpbjMyU3BsaXRQYXRoKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFdpbmRvd3NSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn1cblxud2luMzIucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcbiAgICApO1xuICB9XG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJvb3Q6IGFsbFBhcnRzWzFdLFxuICAgIGRpcjogYWxsUGFydHNbMF0gPT09IGFsbFBhcnRzWzFdID8gYWxsUGFydHNbMF0gOiBhbGxQYXJ0c1swXS5zbGljZSgwLCAtMSksXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXG4gICAgZXh0OiBhbGxQYXJ0c1s0XSxcbiAgICBuYW1lOiBhbGxQYXJ0c1szXVxuICB9O1xufTtcblxuXG5cbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbZGlyLCByb290LCBiYXNlbmFtZSwgbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxudmFyIHNwbGl0UGF0aFJlID1cbiAgICAvXigoXFwvPykoPzpbXlxcL10qXFwvKSopKChcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpW1xcL10qJC87XG52YXIgcG9zaXggPSB7fTtcblxuXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xuICByZXR1cm4gc3BsaXRQYXRoUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSk7XG59XG5cblxucG9zaXgucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcbiAgICApO1xuICB9XG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcbiAgfVxuICBcbiAgcmV0dXJuIHtcbiAgICByb290OiBhbGxQYXJ0c1sxXSxcbiAgICBkaXI6IGFsbFBhcnRzWzBdLnNsaWNlKDAsIC0xKSxcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcbiAgICBleHQ6IGFsbFBhcnRzWzRdLFxuICAgIG5hbWU6IGFsbFBhcnRzWzNdLFxuICB9O1xufTtcblxuXG5pZiAoaXNXaW5kb3dzKVxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyLnBhcnNlO1xuZWxzZSAvKiBwb3NpeCAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IHBvc2l4LnBhcnNlO1xuXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4LnBhcnNlO1xubW9kdWxlLmV4cG9ydHMud2luMzIgPSB3aW4zMi5wYXJzZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/path-parse/index.js\n");

/***/ }),

/***/ "(instrument)/./node_modules/path-parse/index.js":
/*!******************************************!*\
  !*** ./node_modules/path-parse/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar isWindows = process.platform === 'win32';\n\n// Regex to split a windows path into into [dir, root, basename, name, ext]\nvar splitWindowsRe =\n    /^(((?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?[\\\\\\/]?)(?:[^\\\\\\/]*[\\\\\\/])*)((\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))[\\\\\\/]*$/;\n\nvar win32 = {};\n\nfunction win32SplitPath(filename) {\n  return splitWindowsRe.exec(filename).slice(1);\n}\n\nwin32.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = win32SplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  return {\n    root: allParts[1],\n    dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3]\n  };\n};\n\n\n\n// Split a filename into [dir, root, basename, name, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^((\\/?)(?:[^\\/]*\\/)*)((\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))[\\/]*$/;\nvar posix = {};\n\n\nfunction posixSplitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n}\n\n\nposix.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = posixSplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  \n  return {\n    root: allParts[1],\n    dir: allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3],\n  };\n};\n\n\nif (isWindows)\n  module.exports = win32.parse;\nelse /* posix */\n  module.exports = posix.parse;\n\nmodule.exports.posix = posix.parse;\nmodule.exports.win32 = win32.parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL3BhdGgtcGFyc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixFQUFFLDBEQUEwRCxJQUFJOztBQUU1Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLElBQUk7QUFDbkM7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQixvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcGF0aC1wYXJzZS9pbmRleC5qcz81YTZiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG5cbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gaW50byBbZGlyLCByb290LCBiYXNlbmFtZSwgbmFtZSwgZXh0XVxudmFyIHNwbGl0V2luZG93c1JlID1cbiAgICAvXigoKD86W2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT9bXFxcXFxcL10/KSg/OlteXFxcXFxcL10qW1xcXFxcXC9dKSopKChcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSlbXFxcXFxcL10qJC87XG5cbnZhciB3aW4zMiA9IHt9O1xuXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xuICByZXR1cm4gc3BsaXRXaW5kb3dzUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSk7XG59XG5cbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xuICBpZiAodHlwZW9mIHBhdGhTdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXG4gICAgKTtcbiAgfVxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcbiAgaWYgKCFhbGxQYXJ0cyB8fCBhbGxQYXJ0cy5sZW5ndGggIT09IDUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByb290OiBhbGxQYXJ0c1sxXSxcbiAgICBkaXI6IGFsbFBhcnRzWzBdID09PSBhbGxQYXJ0c1sxXSA/IGFsbFBhcnRzWzBdIDogYWxsUGFydHNbMF0uc2xpY2UoMCwgLTEpLFxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxuICAgIGV4dDogYWxsUGFydHNbNF0sXG4gICAgbmFtZTogYWxsUGFydHNbM11cbiAgfTtcbn07XG5cblxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW2Rpciwgcm9vdCwgYmFzZW5hbWUsIG5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oKFxcLz8pKD86W15cXC9dKlxcLykqKSgoXFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKVtcXC9dKiQvO1xudmFyIHBvc2l4ID0ge307XG5cblxuZnVuY3Rpb24gcG9zaXhTcGxpdFBhdGgoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufVxuXG5cbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xuICBpZiAodHlwZW9mIHBhdGhTdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXG4gICAgKTtcbiAgfVxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcbiAgaWYgKCFhbGxQYXJ0cyB8fCBhbGxQYXJ0cy5sZW5ndGggIT09IDUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XG4gIH1cbiAgXG4gIHJldHVybiB7XG4gICAgcm9vdDogYWxsUGFydHNbMV0sXG4gICAgZGlyOiBhbGxQYXJ0c1swXS5zbGljZSgwLCAtMSksXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXG4gICAgZXh0OiBhbGxQYXJ0c1s0XSxcbiAgICBuYW1lOiBhbGxQYXJ0c1szXSxcbiAgfTtcbn07XG5cblxuaWYgKGlzV2luZG93cylcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMi5wYXJzZTtcbmVsc2UgLyogcG9zaXggKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeC5wYXJzZTtcblxubW9kdWxlLmV4cG9ydHMucG9zaXggPSBwb3NpeC5wYXJzZTtcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzIucGFyc2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/path-parse/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/path-parse/index.js":
/*!******************************************!*\
  !*** ./node_modules/path-parse/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar isWindows = process.platform === 'win32';\n\n// Regex to split a windows path into into [dir, root, basename, name, ext]\nvar splitWindowsRe =\n    /^(((?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?[\\\\\\/]?)(?:[^\\\\\\/]*[\\\\\\/])*)((\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))[\\\\\\/]*$/;\n\nvar win32 = {};\n\nfunction win32SplitPath(filename) {\n  return splitWindowsRe.exec(filename).slice(1);\n}\n\nwin32.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = win32SplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  return {\n    root: allParts[1],\n    dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3]\n  };\n};\n\n\n\n// Split a filename into [dir, root, basename, name, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^((\\/?)(?:[^\\/]*\\/)*)((\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))[\\/]*$/;\nvar posix = {};\n\n\nfunction posixSplitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n}\n\n\nposix.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = posixSplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  \n  return {\n    root: allParts[1],\n    dir: allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3],\n  };\n};\n\n\nif (isWindows)\n  module.exports = win32.parse;\nelse /* posix */\n  module.exports = posix.parse;\n\nmodule.exports.posix = posix.parse;\nmodule.exports.win32 = win32.parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGF0aC1wYXJzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsMERBQTBELElBQUk7O0FBRTVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQzs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9wYXRoLXBhcnNlL2luZGV4LmpzPzk5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcblxuLy8gUmVnZXggdG8gc3BsaXQgYSB3aW5kb3dzIHBhdGggaW50byBpbnRvIFtkaXIsIHJvb3QsIGJhc2VuYW1lLCBuYW1lLCBleHRdXG52YXIgc3BsaXRXaW5kb3dzUmUgPVxuICAgIC9eKCgoPzpbYS16QS1aXTp8W1xcXFxcXC9dezJ9W15cXFxcXFwvXStbXFxcXFxcL10rW15cXFxcXFwvXSspP1tcXFxcXFwvXT8pKD86W15cXFxcXFwvXSpbXFxcXFxcL10pKikoKFxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKVtcXFxcXFwvXSokLztcblxudmFyIHdpbjMyID0ge307XG5cbmZ1bmN0aW9uIHdpbjMyU3BsaXRQYXRoKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFdpbmRvd3NSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn1cblxud2luMzIucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcbiAgICApO1xuICB9XG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJvb3Q6IGFsbFBhcnRzWzFdLFxuICAgIGRpcjogYWxsUGFydHNbMF0gPT09IGFsbFBhcnRzWzFdID8gYWxsUGFydHNbMF0gOiBhbGxQYXJ0c1swXS5zbGljZSgwLCAtMSksXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXG4gICAgZXh0OiBhbGxQYXJ0c1s0XSxcbiAgICBuYW1lOiBhbGxQYXJ0c1szXVxuICB9O1xufTtcblxuXG5cbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbZGlyLCByb290LCBiYXNlbmFtZSwgbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxudmFyIHNwbGl0UGF0aFJlID1cbiAgICAvXigoXFwvPykoPzpbXlxcL10qXFwvKSopKChcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpW1xcL10qJC87XG52YXIgcG9zaXggPSB7fTtcblxuXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xuICByZXR1cm4gc3BsaXRQYXRoUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSk7XG59XG5cblxucG9zaXgucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcbiAgICApO1xuICB9XG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcbiAgfVxuICBcbiAgcmV0dXJuIHtcbiAgICByb290OiBhbGxQYXJ0c1sxXSxcbiAgICBkaXI6IGFsbFBhcnRzWzBdLnNsaWNlKDAsIC0xKSxcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcbiAgICBleHQ6IGFsbFBhcnRzWzRdLFxuICAgIG5hbWU6IGFsbFBhcnRzWzNdLFxuICB9O1xufTtcblxuXG5pZiAoaXNXaW5kb3dzKVxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyLnBhcnNlO1xuZWxzZSAvKiBwb3NpeCAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IHBvc2l4LnBhcnNlO1xuXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4LnBhcnNlO1xubW9kdWxlLmV4cG9ydHMud2luMzIgPSB3aW4zMi5wYXJzZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/path-parse/index.js\n");

/***/ })

};
;