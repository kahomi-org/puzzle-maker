(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(67)},46:function(e,t,n){},47:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),l=n.n(o),c=(n(46),n(8)),u=n(9),i=n(12),s=n(10),h=n(11),d=(n(47),n(26)),f=n(17),g=n(18),v=n(70),m=n(37),p=n(69),b=n(71);function y(){var e=Object(f.a)(["\n  background: gray;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  margin-left: 1px;\n  margin-bottom: 1px;\n  font-size: 2em;\n"]);return y=function(){return e},e}var k=g.a.span(y()),w="gray",E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={color:w,selected:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){var e=this;this.setState({selected:!this.state.selected},function(){return e.props.onToggled(e.props.value,e.state.selected)})}},{key:"render",value:function(){var e=this,t={background:this.state.selected?"red":this.props.completed?"green":w};return a.a.createElement(k,{onClick:function(){e.toggle()},style:t},this.props.value.char)}}]),t}(a.a.Component);function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function C(){var e="ABCDEFGHIJKLMNOPQRSTUVWXTZ";return e[Math.floor(Math.random()*e.length)]}function O(e,t,n){var r=0,a=0;switch(n){case 0:r=0,a=e-1;break;case 1:r=0,a=e-t-1;break;case-1:r=t,a=e-1}return[r,a]}function j(){var e;do{e={x:x(0,2)-1,y:x(0,2)-1}}while(0===e.x&&0===e.y);return e}function S(e,t,n){var r=function(e,t,n){return{x:O(e,t,n.x),y:O(e,t,n.y)}}(e,t,n);return{x:x(r.x[0],r.x[1]),y:x(r.y[0],r.y[1])}}function W(e,t,n,r){for(var a=0;a<t.length;a++){var o=r.x+a*n.x,l=r.y+a*n.y,c=e[o][l].char;if(""!==c&&c!==t[a])return!1}return!0}function F(e){return{char:e,tags:[{key:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,checkSum:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}]}}function I(e,t,n){return e.tags.push({key:t,checkSum:n}),e}function T(e){if(!e||0===e.length)return[];console.log("generate board"),e.sort(function(e,t){return e.length<t.length});var t=function(e){for(var t=[],n=0;n<e;n++){for(var r=[],a=0;a<e;a++)r.push(F(""));t.push(r)}return t}(e[0].length+3);return e.filter(function(e){return e}).map(function(e){return e.trim().toUpperCase()}).forEach(function(e,n){!function(e,t,n){var r,a,o=0,l=e.length;do{r=j(),a=S(l,t.length,r)}while(!W(e,t,r,a)&&++o<100);if(o>=100)return void console.log("ignore the word >>>",t);!function(e,t,n,r,a){for(var o=0;o<t.length;o++){var l=r.x+o*n.x,c=r.y+o*n.y,u=e[l][c];u.char?I(u,a,t.length):e[l][c]=F(t[o],a,t.length)}}(e,t,r,a,n)}(t,e,n)}),function(e){e.forEach(function(e){for(var t=0;t<e.length;t++)""===e[t].char&&(e[t].char=C())})}(t),t}var B=n(13),M=n.n(B);function V(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return V=function(){return e},e}var N=g.a.div(V()),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleCellToggled=function(e,t){var r;r=t?[].concat(Object(d.a)(n.state.selectedCells),[e]):n.state.selectedCells.filter(function(t){return!M.a.isEqual(t,e)}),n.setState({selectedCells:r},function(){var e=n.checkWordComplete();M.a.isNumber(e)&&(console.log("congratulation >>> you found one word"),n.setState({selectedCells:[],wordsFound:[].concat(Object(d.a)(n.state.wordsFound),[e])}))})},n.state={board:[],words:[],selectedCells:[],wordsFound:[],boardId:1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"checkWordBoxComplete",value:function(e){for(var t=0;t<e.length;t++)if(this.state.wordsFound.includes(e[t].key))return e[t].key;return""}},{key:"generateRow",value:function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r],l=this.checkWordBoxComplete(o.tags),c=r.toString()+l.toString();n.push(a.a.createElement(E,{value:o,key:c,onToggled:this.handleCellToggled,completed:M.a.isNumber(l)}))}return a.a.createElement(N,{key:t},n)}},{key:"checkWordComplete",value:function(){var e=this.state.selectedCells;if(e&&e.length>0){var t=e[0].tags,n=null;return t.forEach(function(t){var r=t.key,a=t.checkSum;if(r>=0&&a===e.length&&M.a.every(e,function(e){return M.a.some(e.tags,function(e){return e.key===r})}))return void(n=r)}),n}return null}},{key:"generate",value:function(){if(this.state.textValue){var e=this.state.textValue.split("\n"),t=T(e);this.setState({words:e,board:t,boardId:this.state.boardId+1,wordsFound:[]})}}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({textValue:t})}},{key:"render",value:function(){for(var e=this,t=[],n=this.state.board,r=0;r<n.length;r++)t.push(this.generateRow(n[r],r));var o=this.state,l=o.words,c=o.wordsFound,u=c.length>0&&c.length===l.length;return a.a.createElement("div",null,a.a.createElement("h1",null,"WordSearch generator"),a.a.createElement(v.a,null,a.a.createElement(v.a.Label,null,"Enter the word list (1 word per line)"),a.a.createElement(v.a.Row,null,a.a.createElement(m.a,{sm:"4"}),a.a.createElement(m.a,{sm:"4"},a.a.createElement(v.a.Control,{as:"textarea",rows:"6",value:this.state.textValue,onChange:function(t){return e.handleChange(t)}}))),a.a.createElement("br",null),a.a.createElement(p.a,{variant:"success",onClick:function(){e.generate()}},"Generate")),a.a.createElement("br",null),a.a.createElement("div",{key:this.state.boardId,style:{display:"table",margin:"0 auto"}},t),a.a.createElement("br",null),a.a.createElement("br",null),u&&a.a.createElement(b.a,{dismissible:!0,variant:"primary"},a.a.createElement(b.a.Heading,null,"Congratulation!"),a.a.createElement("p",null,"You have found all the words")))}}]),t}(a.a.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(R,null),a.a.createElement("br",null),a.a.createElement("br",null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(66);l.a.render(a.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.897e10a9.chunk.js.map