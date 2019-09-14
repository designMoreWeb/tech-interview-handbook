(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{131:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},d=function(e){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),o=b(t);return r.a.createElement(o[l+"."+a]||o[a]||c[a]||n,t?Object.assign({},i,{components:t}):i)};function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[o]="string"==typeof e?e:n,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return b}),a.d(t,"rightToc",function(){return i}),a.d(t,"default",function(){return d});a(0);var n=a(131);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b={id:"cheatsheet",title:"Cheatsheet"},i=[{value:"Before interview",id:"before-interview",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Upon receiving the question",id:"upon-receiving-the-question",children:[]},{value:"During coding",id:"during-coding",children:[]},{value:"After coding",id:"after-coding",children:[]},{value:"Wrap up",id:"wrap-up",children:[]},{value:"Post interview",id:"post-interview",children:[]}],o={rightToc:i},c="wrapper";function d(e){var t=e.components,a=l(e,["components"]);return Object(n.b)(c,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This is a straight-to-the-point, distilled list of technical interview Do's and Don'ts, mainly for algorithmic interviews. Some of these may apply to only phone screens or whiteboard interviews, but most will apply to both. I revise this list before each of my interviews to remind myself of them and eventually internalized all of them to the point I do not have to rely on it anymore."),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"legend"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#legend"}),"#"),"Legend"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"✅ = Do"),Object(n.b)("li",{parentName:"ul"},"❌ = Don't"),Object(n.b)("li",{parentName:"ul"},"⚠️ = Situational")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"before-interview"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#before-interview"}),"#"),"Before interview"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Prepare pen, paper and earphones/headphones.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Find a quiet environment with good Internet connection.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Ensure webcam and audio are working. There were times I had to restart Chrome to get Hangouts to work again.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Request for the option to interview over Hangouts/Skype instead of a phone call; it is easier to send links or text across.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Decide on and be familiar with a programming language.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Familiarize yourself with the coding environment (CoderPad/CodePen). Set up the coding shortcuts, turn on autocompletion, tab spacing, etc.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Prepare answers to the ",Object(n.b)("a",r({parentName:"td"},{href:"/tech-interview-handbook/behavioral-questions"}),"frequently-asked behaioral questions")," in an interview.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Prepare some ",Object(n.b)("a",r({parentName:"td"},{href:"/tech-interview-handbook/questions-to-ask"}),"questions to ask")," at the end of the interview.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Dress comfortably. Usually you do not need to wear smart clothes, casual should be fine. T-shirts and jeans are acceptable at most places.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Stay calm and composed.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"⚠️"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Turn off the webcam if possible. Most remote interviews will not require video chat and leaving it on only serves as a distraction.")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"introduction"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#introduction"}),"#"),"Introduction"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Introduce yourself in a few sentences under a minute or two.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Mention interesting points that are relevant to the role you are applying for.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sound enthusiastic! Speak with a smile and you will naturally sound more engaging.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Spend too long introducing yourself. The more time you spend talking the less time you have to code.")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"upon-receiving-the-question"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#upon-receiving-the-question"}),"#"),"Upon receiving the question"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Repeat the question back at the interviewer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Clarify any assumptions you made subconsciously. Many questions are under-specified on purpose. E.g. a tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Clarify input format and range. Ask whether input can be assumed to be well-formed and non-null.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Work through a small example to ensure you understood the question.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Explain a high level approach even if it is a brute force one.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Improve upon the approach and optimize. Reduce duplicated work and cache repeated computations.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Think carefully, then state and explain the time and space complexity of your approaches.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"If stuck, think about related problems you have seen before and how they were solved. Check out the ",Object(n.b)("a",r({parentName:"td"},{href:"/tech-interview-handbook/algorithms/algorithms-introduction"}),"tips")," in this section.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Ignore information given to you. Every piece is important.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Jump into coding straightaway.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Start coding without interviewer's green light.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Appear too unsure about your approach or analysis.")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"during-coding"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#during-coding"}),"#"),"During coding"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Explain what you are coding/typing to the interviewer, what you are trying to achieve.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Practice good coding style. Clear variable names, consistent operator spacing, proper indentation, etc.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Type/write at a reasonable speed.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"As much as possible, write actual compilable code, not pseudocode.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Write in a modular fashion. Extract out chunks of repeated code into functions.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Ask for permission to use trivial functions without having to implement them; saves you some time.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Use the hints given by the interviewer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Demonstrate mastery of your chosen programming language.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Demonstrate technical knowledge in data structures and algorithms.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),'If you are cutting corners in your code, state that out loud to your interviewer and say what you would do in a non-interview setting (no time constraints). E.g., "Under non-interview settings, I would write a regex to parse this string rather than using ',Object(n.b)("inlineCode",{parentName:"td"},"split()"),' which may not cover all cases."')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Practice whiteboard space-management skills.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"⚠️"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Reasonable defensive coding. Check for nulls, empty collections, etc. Can omit if input validity has been clarified with the interviewer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Remain quiet the whole time.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Spend too much time writing comments.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Use extremely verbose or single-character (unless they're common like ",Object(n.b)("inlineCode",{parentName:"td"},"i"),", ",Object(n.b)("inlineCode",{parentName:"td"},"n"),") variable names.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Copy and paste code without checking (e.g. variables need to be renamed).")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Interrupt your interviewer when they are talking. Usually if they speak, they are trying to give you hints or steer you in the right direction.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Write too big (takes up too much space) or too small (illegible) if on a whiteboard.")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"after-coding"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#after-coding"}),"#"),"After coding"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Scan through your code for mistakes as if it was your first time seeing code written by someone else.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Check for off-by-one errors.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Come up with more test cases. Try extreme test cases.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Step through your code with those test cases.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Look out for places where you can refactor.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Reiterate the time and space complexity of your code.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Explain trade-offs and how the code/approach can be improved if given more time.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Immediately announce that you are done coding. Do the above first!")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Argue with the interviewer. They may be wrong but that is very unlikely given that they are familiar with the question.")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"wrap-up"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#wrap-up"}),"#"),"Wrap up"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Ask questions. More importantly, ask good and engaging questions that are tailored to the company! Pick some questions from ",Object(n.b)("a",r({parentName:"td"},{href:"/tech-interview-handbook/questions-to-ask"}),"this list"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Thank the interviewer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"⚠️"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Ask about your interview performance. It can get awkward.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"❌"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"End the interview without asking any questions.")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"post-interview"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#post-interview"}),"#"),"Post interview"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null})),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Things"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"✅"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Record the interview questions and answers down as these can be useful for future reference.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"⚠️"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Send a follow up email to your interviewer(s) thanking them for their time and the opportunity to interview with them.")))))}d.isMDXComponent=!0}}]);