"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"How It Works",sidebar_position:2,slug:"/how-it-works"},i=void 0,s={unversionedId:"Control-Panel/how-it-works",id:"Control-Panel/how-it-works",title:"How It Works",description:"This explanation is high-level and non-technical. It is meant to give you a broad understanding of the steps necessary to create and run an iPhone or Android application using Buzztouch.",source:"@site/docs/Control-Panel/how-it-works.md",sourceDirName:"Control-Panel",slug:"/how-it-works",permalink:"/how-it-works",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How It Works",sidebar_position:2,slug:"/how-it-works"},sidebar:"defaultSidebar",previous:{title:"Quickstart",permalink:"/control-panel-quickstart"},next:{title:"Quickstart",permalink:"/ios-quickstart"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This explanation is high-level and non-technical. It is meant to give you a broad understanding of the steps necessary to create and run an iPhone or Android application using Buzztouch."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1) Create Application")),(0,r.kt)("p",null,"Apps are created by entering a unique name for the app in the Buzztouch control panel. The new app will show in the control panel where it is accessed to manage it's individual screens, features, and menus."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2) Install the SDK")),(0,r.kt)("p",null,"Installing the appropriate SDK on your machine can get tricky but thousands of folks have figured it out, you can too! The\xa0iOS SDK\xa0is for iPhone, iPod Touch and iPad apps. The\xa0Android SDK\xa0is for, you guessed it, Android apps."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3) Download Source Code")),(0,r.kt)("p",null,"The Buzztouch control panel creates an archived (zipped) download containing the source-code for the mobile app. Download the archived folder then open the project in Xcode (iOS) or Eclipse (Android)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4) Compile Source Code")),(0,r.kt)("p",null,"Compiling the source-code for an app creates the actual software that runs on a simulator or an actual device. For iOS, this is a file with a .app extension. For Android, this is a file with a .apk exstension."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5) Running the Application")),(0,r.kt)("p",null,'Selecting "Build and Run" (Xcode) or "Run \u2018App\u2019" (Android Studio) will install the app on a simulator or a device connected to the computer. The app may need internet access when launches, it depends on some options in the app\'s\xa0',(0,r.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/configData.php"},"main configuration file.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6) Add Menus and Screens")),(0,r.kt)("p",null,"Connecting a series of menus and screens allows for flexibility. Connect menu items to create navigational depth. Menus, screens, and content are added, removed, or updated by making changes to the applications\xa0",(0,r.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/configData.php"},"main configuration file"),". This file can be modified using the Buzztouch control panel or it can be edited manually using a text editor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7) Distributing the App")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"App owners are encouraged"),"\xa0to explore lots and lots of mobile application distribution options. Apple's App Store and Google's Android Market are the most popular and each maintains a unique set of guidelines, rules, and processes associated with getting an app \"listed.\" The applications you create are yours to keep and you decide what distribution method is best."))}u.isMDXComponent=!0}}]);