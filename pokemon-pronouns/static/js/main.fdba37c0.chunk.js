(this.webpackJsonpiyouheshe=this.webpackJsonpiyouheshe||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(15),s=a.n(o),r=(a(28),a(16)),l=a(17),i=a(21),m=a(18),p=a(3),h=a(22),u=a(9),b=a(6),j=[{subject:"I",object:"me",possAdj:"my",possPro:"mine",reflexive:"myself",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/pikachu.png"},{subject:"you",object:"you",possAdj:"your",possPro:"yours",reflexive:"yourself",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/charizard.png"},{subject:"he",object:"him",possAdj:"his",possPro:"his",reflexive:"himself",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/ash.jpg"},{subject:"she",object:"her",possAdj:"her",possPro:"hers",reflexive:"herself",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/misty.png"},{subject:"it",object:"it",possAdj:"its",possPro:null,reflexive:"itself",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/pokeball.png"},{subject:"we",object:"us",possAdj:"our",possPro:"ours",reflexive:"ourselves",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/we.jpg"},{subject:"they",object:"them",possAdj:"their",possPro:"theirs",reflexive:"themselves",image:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/they.png"}],g=function(e){var t=[];return j.forEach((function(a){t.push(c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pronoun",onClick:function(){return e.changePronoun(a)}},c.a.createElement("img",{className:"image",src:a.image,alt:"pronoun"}))))})),t},d={like:{I:"like",you:"like",he:"likes",she:"likes",it:"likes",we:"like",they:"like"},eat:{I:"eat",you:"eat",he:"eats",she:"eats",it:"eats",we:"eat",they:"eat"},play:{I:"play",you:"play",he:"plays",she:"plays",it:"plays",we:"play",they:"play"},speak:{I:"speak",you:"speak",he:"speaks",she:"speaks",it:"speaks",we:"speak",they:"speak"}},w=Object.keys(d),v={cat:"cats",shoe:"shoes",dog:"dogs",cheese:"cheeses",baseball:"baseballs",hat:"hats",English:"English"},E=function(e){var t=e.changeObject,a=e.changeVerb,n=e.verbIndex,o=e.objectIndex,s=e.verbChoices,r=e.objectPlurals;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"verb word example",onClick:function(){return a()}},s[n]),c.a.createElement("div",{className:"object word example",onClick:function(){return t()}},Object.keys(r)[o]))},f=function(e){var t=e.subject,a=e.lowerSubject,n=e.lowerVerb,o=e.lowerObject,s=e.changeVerbForm,r=e.changeObjectForm,l=e.capitalize;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"lowersentence word subject",onClick:function(){return l(t.subject)}},a),c.a.createElement("div",{className:"lowersentence word verb",onClick:function(){return s()}},n),c.a.createElement("div",{className:"lowersentence word object",onClick:function(){return r()}},o))},k=function(e){var t={fontSize:"3em"};return e.help&&(t={fontSize:"1em"}),c.a.createElement("div",{className:"upperleft"},c.a.createElement("div",{className:"uppersentence",style:t},c.a.createElement("ol",null,c.a.createElement("div",{className:"upperhelp"},c.a.createElement("h1",{className:"upperlefthelp"},"Above Sentence"),c.a.createElement("div",{className:"upperrighthelp"},c.a.createElement("li",null,"Click\xa0",c.a.createElement("span",{className:"helpverb"},"verb"),"\xa0and\xa0",c.a.createElement("span",{className:"helpobject"},"object"),"\xa0to cycle them."),c.a.createElement("li",null,"Click the buttons on the right to change\xa0",c.a.createElement("span",{className:"helpsubject"},"subject"),"\xa0."))),c.a.createElement("div",{className:"lowerhelp"},c.a.createElement("h1",{className:"lowerlefthelp"},"Below Sentence"),c.a.createElement("div",{className:"lowerrighthelp"},c.a.createElement("li",null,"The\xa0",c.a.createElement("span",{className:"helpsubject"},"subject"),"\xa0and\xa0",c.a.createElement("span",{className:"helpverb"},"verb"),"\xa0only go to the correct answer when clicked."),c.a.createElement("li",null,"The\xa0",c.a.createElement("span",{className:"helpobject"},"object"),"\xa0 cycles through a few options."),c.a.createElement("li",null,"It is up to the teacher to know the correct use of the \xa0",c.a.createElement("span",{className:"helpobject"},"object"),"\xa0."))))))},O=(a(29),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changePronoun=function(e){console.log("changePronoun: ",e),a.setState((function(){return{subject:e}}))},a.changeVerb=function(){var e=a.state.verbIndex<w.length-1?a.state.verbIndex+1:0;a.setState((function(){return{verbIndex:e}}))},a.changeVerbForm=function(e){var t=a.state.subject.subject,n=d[w[a.state.verbIndex]];a.setState((function(){return{lowerVerb:n[t]}}))},a.changeObject=function(){var e=Object.keys(v).length,t=a.state.objectIndex<e-1?a.state.objectIndex+1:0;a.setState((function(e){return{objectIndex:t}}))},a.changeObjectForm=function(e){var t=Object.keys(v)[a.state.objectIndex],n=["a ".concat(t,".")," ".concat(t,"."),"".concat(a.pluralize(t),".")],c=a.state.lowerObjectOptionIndex<n.length-1?a.state.lowerObjectOptionIndex+1:0,o=n[c];console.log("sentenceEnd: ",o),a.setState((function(){return{lowerObject:o,lowerObjectOptionIndex:c}}))},a.capitalize=function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);a.setState((function(){return{lowerSubject:t}}))},a.pluralize=function(e){return e+"s"},a.presentSimple=function(e){return e+"s"},a.toggleHelp=function(){a.setState((function(){return{help:!a.state.help}}))},a.state={subject:j[0],speaker:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/speaker.png",verbIndex:0,objectIndex:0,lowerObjectOptionIndex:0,upperVerb:"like",upperObject:"cat",lowerSubject:"I",lowerVerb:"like",lowerObject:"cat",help:!1},a.changePronoun=a.changePronoun.bind(Object(p.a)(a)),a.changeVerb=a.changeVerb.bind(Object(p.a)(a)),a.changeObject=a.changeObject.bind(Object(p.a)(a)),a.changeVerbForm=a.changeVerbForm.bind(Object(p.a)(a)),a.changeObjectForm=a.changeObjectForm.bind(Object(p.a)(a)),a.pluralize=a.pluralize.bind(Object(p.a)(a)),a.presentSimple=a.presentSimple.bind(Object(p.a)(a)),a.capitalize=a.capitalize.bind(Object(p.a)(a)),a.toggleHelp=a.toggleHelp.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"upper"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/help"},c.a.createElement(k,this.state)),c.a.createElement(b.a,{path:"/"},c.a.createElement("div",{className:"upperleft"},c.a.createElement("div",{className:"uppersentence"},c.a.createElement("img",{className:"subjectpic subject example",src:this.state.subject.image,alt:"main"}),c.a.createElement(E,Object.assign({changeVerb:this.changeVerb,changeObject:this.changeObject,verbChoices:w,objectPlurals:v},this.state)))))),c.a.createElement("div",{className:"upperright"},c.a.createElement("div",{className:"buttons"},c.a.createElement(g,{changePronoun:this.changePronoun})))),c.a.createElement("div",{className:"lower"},c.a.createElement("div",{className:"lowerleft"},c.a.createElement("img",{className:"speaker",src:this.state.speaker,alt:"speaker"}),c.a.createElement("img",{src:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/speechbubble.png",className:"speechbubble",alt:"speech bubble"}),c.a.createElement("img",{className:"listener",src:"https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/charizardsface.png",alt:"listener"}),c.a.createElement(f,Object.assign({capitalize:this.capitalize,changeObjectForm:this.changeObjectForm,changeVerbForm:this.changeVerbForm},this.state))),c.a.createElement("div",{className:"help"},this.state.help?c.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},to:"/"},c.a.createElement("div",{onClick:function(){return e.toggleHelp()},className:"helptext"},"Return")):c.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},to:"/help"},c.a.createElement("div",{onClick:function(){return e.toggleHelp()},className:"helptext"},"Help"))))))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.fdba37c0.chunk.js.map