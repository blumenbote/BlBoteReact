(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[3],{567:function(e,n,t){"use strict";t.r(n),t.d(n,"applyDestinationMiddleware",(function(){return o})),t.d(n,"sourceMiddlewarePlugin",(function(){return u}));var r=t(3),i=t(21),a=t(94),c=t(173);function o(e,n,t){return Object(r.b)(this,void 0,void 0,(function(){function i(n,t){return Object(r.b)(this,void 0,void 0,(function(){var i,o,u;return Object(r.d)(this,(function(l){switch(l.label){case 0:return i=!1,o=null,[4,Object(a.a)(t({payload:Object(c.a)(n,{clone:!0,traverse:!1}),integration:e,next:function(e){i=!0,null===e&&(o=null),e&&(o=e.obj)}}))];case 1:return l.sent(),i||null===o||(o.integrations=Object(r.a)(Object(r.a)({},n.integrations),((u={})[e]=!1,u))),[2,o]}}))}))}var o,u,l,s;return Object(r.d)(this,(function(e){switch(e.label){case 0:o=0,u=t,e.label=1;case 1:return o<u.length?(l=u[o],[4,i(n,l)]):[3,4];case 2:if(null===(s=e.sent()))return[2,null];n=s,e.label=3;case 3:return o++,[3,1];case 4:return[2,n]}}))}))}function u(e,n){function t(t){return Object(r.b)(this,void 0,void 0,(function(){var o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return o=!1,[4,Object(a.a)(e({payload:Object(c.a)(t.event,{clone:!0,traverse:!1}),integrations:null!=n?n:{},next:function(e){o=!0,e&&(t.event=e.obj)}}))];case 1:if(r.sent(),!o)throw new i.b({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,t]}}))}))}return{name:"Source Middleware ".concat(e.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(e){return Promise.resolve(e)},track:t,page:t,identify:t,alias:t,group:t}}}}]);