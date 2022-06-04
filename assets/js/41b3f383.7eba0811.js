"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[479],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),i=n(2389),l=n(9548),o=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),N=k.tabGroupChoices,g=k.setTabGroupChoices,w=(0,a.useState)(h),C=w[0],O=w[1],T=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==C&&y.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==C&&(S(t),O(r),null!=m&&g(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},6241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(9877),o=n(8215),s=["components"],u={title:"service-discovery"},c=void 0,d={unversionedId:"middlewares/service-discovery",id:"middlewares/service-discovery",title:"service-discovery",description:"Fetches Service Discovery instances to be used when connecting to other AWS services.",source:"@site/docs/middlewares/service-discovery.md",sourceDirName:"middlewares",slug:"/middlewares/service-discovery",permalink:"/docs/middlewares/service-discovery",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/service-discovery.md",tags:[],version:"current",lastUpdatedAt:1654381206,formattedLastUpdatedAt:"6/4/2022",frontMatter:{title:"service-discovery"},sidebar:"tutorialSidebar",previous:{title:"secrets-manager",permalink:"/docs/middlewares/secrets-manager"},next:{title:"sqs-partial-batch-failure",permalink:"/docs/middlewares/sqs-partial-batch-failure"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2},{value:"Bundling",id:"bundling",children:[],level:2}],m={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fetches Service Discovery instances to be used when connecting to other AWS services."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install this middleware you can use NPM:"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/service-discovery\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/service-discovery\n")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS.STS"),"): AWS.STS class constructor (e.g. that has been instrumented with AWS XRay). Must be from ",(0,i.kt)("inlineCode",{parentName:"li"},"aws-sdk")," v2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"): Options to pass to AWS.STS class constructor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"): Internal key where secrets are stored. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"): Enable XRay by passing ",(0,i.kt)("inlineCode",{parentName:"li"},"captureAWSClient")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchData")," (object) (required): Mapping of internal key name to API request parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cacheKey")," (string) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"sts"),"): Cache key for the fetched data responses. Must be unique across all middleware."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cacheExpiry")," (number) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),"): How long fetch data responses should be cached for. ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),": cache forever, ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),": never cache, ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),": cache for n ms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setToContext")," (boolean) (default ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"): Store credentials to ",(0,i.kt)("inlineCode",{parentName:"li"},"request.context"),".")),(0,i.kt)("p",null,"NOTES:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,i.kt)("inlineCode",{parentName:"li"},"servicediscovery:DiscoverInstances"))),(0,i.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport serviceDiscovery from '@middy/service-discovery'\n\nconst handler = middy((event, context) => {\n  const response = {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  };\n\n  return response\n})\n\nhandler\n  .use(serviceDiscovery({\n    fetchData: {\n      instances: {\n        NamespaceName: '...',\n        ServiceName:'...'\n      }\n    }\n  }))\n")),(0,i.kt)("h2",{id:"bundling"},"Bundling"),(0,i.kt)("p",null,"To exclude ",(0,i.kt)("inlineCode",{parentName:"p"},"aws-sdk")," add ",(0,i.kt)("inlineCode",{parentName:"p"},"aws-sdk/clients/servicediscovery.js")," to the exclude list."))}v.isMDXComponent=!0}}]);