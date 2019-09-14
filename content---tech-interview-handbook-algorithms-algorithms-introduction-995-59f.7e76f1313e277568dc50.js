(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"rightToc",function(){return s}),a.d(t,"default",function(){return u});a(0);var n=a(131);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={id:"algorithms-introduction",title:"Introduction"},s=[{value:"General tips",id:"general-tips",children:[]}],c={rightToc:s},l="wrapper";function u(e){var t=e.components,a=o(e,["components"]);return Object(n.b)(l,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This section dives deep into practical tips for specific topics of algorithms and data structures which appear frequently in coding questions. Many algorithm questions involve techniques that can be applied to questions of similar nature. The more techniques you have in your arsenal, the higher the chances of passing the interview. They may lead you to discover corner cases you might have missed out or even lead you towards the optimal approach!"),Object(n.b)("p",null,"For each topic, study links are recommended to help you master the topic. There is a list of recommended common questions to practice which in my opinion is highly valuable for mastering the core concepts for the topic."),Object(n.b)("p",null,"If you are interested in how data structures are implemented, check out ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/yangshun/lago"}),"Lago"),", a Data Structures and Algorithms library for JavaScript. It is pretty much still WIP but I intend to make it into a library that is able to be used in production and also a reference resource for revising Data Structures and Algorithms."),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"general-tips"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#general-tips"}),"#"),"General tips"),Object(n.b)("p",null,"Clarify any assumptions you made subconsciously. Many questions are under-specified on purpose."),Object(n.b)("p",null,"Always validate input first. Check for invalid/empty/negative/different type input. Never assume you are given the valid parameters. Alternatively, clarify with the interviewer whether you can assume valid input (usually yes), which can save you time from writing code that does input validation."),Object(n.b)("p",null,"Are there any time/space complexity requirements/constraints?"),Object(n.b)("p",null,"Check for off-by-one errors."),Object(n.b)("p",null,"In languages where there are no automatic type coercion, check that concatenation of values are of the same type: ",Object(n.b)("inlineCode",{parentName:"p"},"int"),"/",Object(n.b)("inlineCode",{parentName:"p"},"str"),"/",Object(n.b)("inlineCode",{parentName:"p"},"list"),"."),Object(n.b)("p",null,"After finishing your code, use a few example inputs to test your solution."),Object(n.b)("p",null,"Is the algorithm meant to be run multiple times, for example in a web server? If yes, the input is likely to be preprocess-able to improve the efficiency in each call."),Object(n.b)("p",null,"Use a mix of functional and imperative programming paradigms:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Write pure functions as much as possible."),Object(n.b)("li",{parentName:"ul"},"Pure functions are easier to reason about and can help to reduce bugs in your implementation."),Object(n.b)("li",{parentName:"ul"},"Avoid mutating the parameters passed into your function especially if they are passed by reference unless you are sure of what you are doing."),Object(n.b)("li",{parentName:"ul"},"However, functional programming is usually expensive in terms of space complexity because of non-mutation and the repeated allocation of new objects. On the other hand, imperative code is faster because you operate on existing objects. Hence you will need to achieve a balance between accuracy vs efficiency, by using the right amount of functional and imperative code where appropriate."),Object(n.b)("li",{parentName:"ul"},"Avoid relying on and mutating global variables. Global variables introduce state."),Object(n.b)("li",{parentName:"ul"},"If you have to rely on global variables, make sure that you do not mutate it by accident.")),Object(n.b)("p",null,"Generally, to improve the speed of a program, we can either: (1) choose a more appropriate data structure/algorithm; or (2) use more memory. The latter demonstrates a classic space vs. time tradeoff, but it is not necessarily the case that you can only achieve better speed at the expense of space. Also, note that there is often a theoretical limit to how fast your program can run (in terms of time complexity). For instance, a question that requires you to find the smallest/largest element in an unsorted array cannot run faster than O(N)."),Object(n.b)("p",null,"Data structures are your weapons. Choosing the right weapon for the right battle is the key to victory. Be very familiar about the strengths of each data structure and the time complexities for its various operations."),Object(n.b)("p",null,"Data structures can be augmented to achieve efficient time complexities across different operations. For example, a hash map can be used together with a doubly-linked list to achieve O(1) time complexity for both the ",Object(n.b)("inlineCode",{parentName:"p"},"get")," and ",Object(n.b)("inlineCode",{parentName:"p"},"put")," operation in an ",Object(n.b)("a",r({parentName:"p"},{href:"https://leetcode.com/problems/lru-cache/"}),"LRU cache"),"."),Object(n.b)("p",null,"Hashmaps are probably the most commonly used data structure for algorithm questions. If you are stuck on a question, your last resort can be to enumerate through the common possible data structures (thankfully there aren't that many of them) and consider whether each of them can be applied to the problem. This has worked for me sometimes."),Object(n.b)("p",null,"If you are cutting corners in your code, state that out loud to your interviewer and say what you would do in a non-interview setting (no time constraints). E.g., I would write a regex to parse this string rather than using ",Object(n.b)("inlineCode",{parentName:"p"},"split()")," which may not cover all cases."),Object(n.b)("h6",null,Object(n.b)("a",r({parentName:"h6"},{"aria-hidden":!0,className:"anchor",id:"references"})),Object(n.b)("a",r({parentName:"h6"},{"aria-hidden":!0,className:"hash-link",href:"#references"}),"#"),"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"http://blog.triplebyte.com/how-to-pass-a-programming-interview"}),"http://blog.triplebyte.com/how-to-pass-a-programming-interview")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://quip.com/q41AA3OmoZbC"}),"https://quip.com/q41AA3OmoZbC")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"http://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/"}),"http://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://medium.com/basecs"}),"https://medium.com/basecs"))))}u.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},u=function(e){var t=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(t);return r.a.createElement(c[o+"."+a]||c[a]||l[a]||n,t?Object.assign({},s,{components:t}):s)};function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);