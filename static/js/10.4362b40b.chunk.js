(window.webpackJsonpwheeloflife=window.webpackJsonpwheeloflife||[]).push([[10],{451:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(10),c=n(36),s=n(37),i=n(39),l=n(38),p=n(40),u=n(0),h=n.n(u),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),p=0;p<r;p++)s[p]=arguments[p];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).componentDidMount=Object(a.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=localStorage.getItem("token"))&&null!==t){e.next=4;break}return n.props.history.push("/login"),e.abrupt("return");case 4:try{r=""}catch(o){localStorage.removeItem("token"),n.props.history.push("/login")}r?(a=r.data.refreshToken,localStorage.setItem("token",a),n.props.history.push("/dashboard")):n.props.history.push("/login");case 6:case"end":return e.stop()}}),e)}))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return h.a.createElement("div",null,"loading...")}}]),t}(u.Component);t.default=f}}]);
//# sourceMappingURL=10.4362b40b.chunk.js.map