(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{361:function(e,o,a){"use strict";a.r(o);var t={name:"TabsDemo",data:function(){return{radioProps:[{prop:"align-none",value:!0},{prop:"align-start",value:!1},{prop:"align-center",value:!1},{prop:"align-end",value:!1}],checkboxProps:[{prop:"focusOnActivate",value:!0},{prop:"useAutomaticActivation",value:!0},{prop:"spanningOnlyContent",value:!1},{prop:"stacked",value:!1},{prop:"minWidth",value:!1},{prop:"fade",value:!1}],active:[!0,!1,!1]}},computed:{align:function(){var e=this.radioProps.filter((function(e){return e.value}))[0].prop.substring(6);return"none"===e?"":e}}},c=a(0),n=Object(c.a)(t,(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("ComponentSection",[a("m-tab-bar",{attrs:{"activate-tab":0,"focus-on-activate":e.checkboxProps[0].value,"use-automatic-activation":e.checkboxProps[1].value,align:e.align}},[a("m-tab",{attrs:{"min-width":e.checkboxProps[4].value,"spanning-only-content":e.checkboxProps[2].value,stacked:e.checkboxProps[3].value,fade:e.checkboxProps[5].value},model:{value:e.active[0],callback:function(o){e.$set(e.active,0,o)},expression:"active[0]"}},[a("m-icon",{attrs:{slot:"icon",icon:"access_time"},slot:"icon"}),e._v("Recents\n      ")],1),e._v(" "),a("m-tab",{attrs:{"min-width":e.checkboxProps[4].value,"spanning-only-content":e.checkboxProps[2].value,stacked:e.checkboxProps[3].value,fade:e.checkboxProps[5].value},model:{value:e.active[1],callback:function(o){e.$set(e.active,1,o)},expression:"active[1]"}},[a("m-icon",{attrs:{slot:"icon",icon:"near_me"},slot:"icon"}),e._v("Nearby\n      ")],1),e._v(" "),a("m-tab",{attrs:{"min-width":e.checkboxProps[4].value,"spanning-only-content":e.checkboxProps[2].value,stacked:e.checkboxProps[3].value,fade:e.checkboxProps[5].value},model:{value:e.active[2],callback:function(o){e.$set(e.active,2,o)},expression:"active[2]"}},[a("m-icon",{attrs:{slot:"icon",icon:"favorite"},slot:"icon"}),e._v("Favorite\n        "),a("m-tab-indicator",{attrs:{slot:"indicator",fade:e.checkboxProps[5].value,icon:"favorite"},slot:"indicator"})],1)],1)],1),e._v(" "),a("ComponentProps",{attrs:{checkboxProps:e.checkboxProps,radioProps:e.radioProps}})],1)}),[],!1,null,"3ecb54e0",null);o.default=n.exports}}]);