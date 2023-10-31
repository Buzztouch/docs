"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[50],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(a),g=r,c=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return a?n.createElement(c,o(o({ref:e},d),{},{components:a})):n.createElement(c,o({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9798:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"Global Theme",sidebar_position:4,slug:"/global-theme"},o=void 0,i={unversionedId:"Developers/global-theme",id:"Developers/global-theme",title:"Global Theme",description:"The applications Global Theme does two things. First, it sets the applications splash screen. Second, it applies styles and other options to all\xa0[Problem Internal Link]\xa0within the application. An individual screen can over-write the global theme for most styles or options. Example: Your global theme uses a background color and all screens within the application show this background color. However, on one screen you want to use a different background. In this case, that screen would over-write the global background with it's own unique background.",source:"@site/docs/Developers/global-theme.md",sourceDirName:"Developers",slug:"/global-theme",permalink:"/global-theme",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Global Theme",sidebar_position:4,slug:"/global-theme"},sidebar:"defaultSidebar",previous:{title:"Tabs & Layout",permalink:"/tabs-and-layout"},next:{title:"Creating Plugins",permalink:"/creating-plugins"}},p={},s=[{value:"<strong>Splash Screen</strong>",id:"1592e7f938084dd68fcadb4293869228",level:2},{value:"<strong>Theme Properties</strong>",id:"eeebebf95aaa4a45adf6ce5f22b8af3a",level:2}],d={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The applications Global Theme does two things. First, it sets the applications splash screen. Second, it applies styles and other options to all\xa0",(0,r.kt)("strong",{parentName:"p"},"[Problem Internal Link]"),"\xa0within the application. An individual screen can over-write the global theme for most styles or options. Example: Your global theme uses a background color and all screens within the application show this background color. However, on one screen you want to use a different background. In this case, that screen would over-write the global background with it's own unique background."),(0,r.kt)("h2",{id:"1592e7f938084dd68fcadb4293869228"},(0,r.kt)("strong",{parentName:"h2"},"Splash Screen")),(0,r.kt)("p",null,"Not all applications use splash screens. When a splash screen is used, it's a two-step process to setup. First, you create the splash screen in the apps list of\xa0",(0,r.kt)("strong",{parentName:"p"},"[Problem Internal Link]"),". Next, the Splash Screen is set in the Global Theme."),(0,r.kt)("h2",{id:"eeebebf95aaa4a45adf6ce5f22b8af3a"},(0,r.kt)("strong",{parentName:"h2"},"Theme Properties")),(0,r.kt)("p",null,"Most themes only use a few properties and rely on the app defaults for the remaining properties. Do not include properties that you don't need. The order of the properties in the configuration data is not important. However, property names and values are case sensitive. Both of these sample themes are OK. One sets no properties and the other sets several properties. The itemId, itemNickname and itemType properties are required."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample theme with only the required properties:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "itemId": "9994884929",\n    "itemType": "BT_theme",\n    "itemNickname": "My Empty Theme"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample theme with some additional properties:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "itemId": "99594848382",\n    "itemType": "BT_theme",\n    "itemNickname": "White on Black Theme",\n    "navBarStyle": "transparent",\n    "toolbarStyle": "transparent",\n    "navBarBackgroundColor": "#000000",\n    "backgroundColor": "#000000",\n    "listStyle": "round",\n    "listBackgroundColor": "#000000",\n    "listTitleFontColor": "#FFFFFF",\n    "listRowSelectionStyle": "gray"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Global Theme Properties")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Item Id\xa0*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"itemId":"a unique id"'),(0,r.kt)("br",null),"A unique number or string identifying this item from all other items in the configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Item Nickname\xa0*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"itemNickname":"a unique nickname"'),(0,r.kt)("br",null),"The nickname of the item in the Buzztouch control panel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Item Type\xa0*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"itemType":"BT_theme"'),(0,r.kt)("br",null),"Identifies this type of item as a BT_theme item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Splash Screen Item Id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"splashScreenItemId":"itemId of splash screen"'),(0,r.kt)("br",null),"The unique itemId of the Splash Screen from the app's list of screens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Status Bar, Navigation Bar, Bottom Bar")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Status Bar Style")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"statusBarStyle":"default"'),(0,r.kt)("br",null),"Options: default, solid, transparent, hidden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Navigation Bar Style")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"navBarStyle":"solid"'),(0,r.kt)("br",null),"Options: solid, transparent, hidden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Navigation Bar Color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"navBarBackgroundColor":"#000000"'),(0,r.kt)("br",null),"Hexidecimal color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Bottom Tool Bar Style")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"toolbarStyle":"solid"'),(0,r.kt)("br",null),"Options: solid, transparent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tab Bar Color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tabBarColor":"#000000"'),(0,r.kt)("br",null),"Hexidecimal color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Prevent Scrolling")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"preventAllScrolling":"0"'),(0,r.kt)("br",null),'Numeric: 0 or 1. Zero is "no, do not prevent scrolling." This property applies to any screen that uses scrolling.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Color, Image")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundColor":"#000000"'),(0,r.kt)("br",null),'Hexidecimal color or a keyword: "clear" or "stripes" (do not enter quotes).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Color Transparency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundColorOpacity":"100"'),(0,r.kt)("br",null),"Numeric Value: 1 - 100, 1 is totally transparent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Color Gradient Top")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundColorGradientTop":"#000000"'),(0,r.kt)("br",null),'Hexidecimal color. Background gradients flow top-to-bottom and are placed "on-top" of a possible background color.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Color Gradient Bottom")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundColorGradientTop":"#FFFFFF"'),(0,r.kt)("br",null),'Hexidecimal color. Background gradients flow top-to-bottom and are placed "on-top" of a possible background color.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Image Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundImageNameSmallDevice":"background-small.png"')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundImageURLSmallDevice":"URL to background-small.png"'),(0,r.kt)("br",null),'The file name of the image added to the project or the URL to the image. Background images are placed "on-top" of possible background colors. Use an image name OR a URL, not both.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Image Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundImageNameLargeDevice":"background-large.png"')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundImageURLLargeDevice":"URL to background-large.png"'),(0,r.kt)("br",null),'The file name of the image added to the project or the URL to the image. Background images are placed "on-top" of possible background colors. Use an image name OR a URL, not both.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Image Transparency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"backgroundImageOpacity":"100"'),(0,r.kt)("br",null),"Number: 1 - 100, 1 is totally transparent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Image Scale")),(0,r.kt)("td",{parentName:"tr",align:null},'"backgroundImageScale":"center"Options: center, fullScreen, fullScreenPreserve, top, bottom, topLeft, topRight, bottomLeft, bottomRight.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Menu, List Items")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Style")),(0,r.kt)("td",{parentName:"tr",align:null},'"listStyle":"plain"Options: plain or round. Round creates rounded corners and margins around the list exposing the background color.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"listBackgroundColor":"clear"Hexidecimal color or a keyword: "clear" or "stripes" (do not enter quotes).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Rows Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"listRowBackgroundColor":"#FFFFFF"Hexidecimal color or "clear" (do not enter quotes).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Title Text Font Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"listTitleFontColor":"#000000"Hexidecimal color. Title is line 1 of text.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Description Text Font Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"listDescriptionFontColor":"#000000"Hexidecimal color. Description is line 2 or more of text.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Row Seperator Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"listRowSeparatorColor":"#000000"Hexidecimal color or "clear" (do not enter quotes).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Row Selection Style")),(0,r.kt)("td",{parentName:"tr",align:null},'"listRowSelectionStyle":"blue"Options: blue, gray, none.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Row Height Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listRowHeightSmallDevice":"50"Numeric: The height of the list rows on small devices. Default is 50.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Row Height Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listRowHeightLargeDevice":"50"Numeric: The height of the list rows on large devices. Defaults is 50.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Title Height Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listTitleHeightSmallDevice":"30"Numeric: The height of the title in the row. If a description is used, the description height is the difference between the title height and the row height. Default is 30.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Title Height Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listTitleHeightLargeDevice":"30"Numeric: The height of the title in the row. If a description is used, the description height is the difference between the title height and the row height. Default is 30.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Title Font Size Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listTitleFontSizeSmallDevice":"20"Numeric: The font size of the title. Default is 20.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Title Font Size Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listTitleFontSizeLargeDevice":"20"Numeric: The font size of the title. Default is 20.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Description Font Size Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listDescriptionFontSizeSmallDevice":"15"Numeric: The font size of the description. Default is 15.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Description Font Size Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listDescriptionFontSizeLargeDevice":"15"Numeric: The font size of the description. Default is 15.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Header Height Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listHeaderHeightSmallDevice":"10"Numeric: The amount of space between the top of the list and the top of the screen. Default is 10.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Header Height Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listHeaderHeightLargeDevice":"10"Numeric: The amount of space between the top of the list and the top of the screen. Default is 10.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Footer Height Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listFooterHeightSmallDevice":"50"Numeric: The amount of space between the bottom of the list and the bottom of the screen. Default is 50.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Footer Height Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listFooterHeightLargeDevice":"50"Numeric: The amount of space between the bottom of the list and the bottom of the screen. Default is 50.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Prevent Scrolling")),(0,r.kt)("td",{parentName:"tr",align:null},'"preventAllScrolling":"0"Options: 0 or 1 where 1 = yes.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List Menu Icons, Images")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Icon Size Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listIconSizeSmallDevice":"30"Ignored if the\xa0',(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/child_menuListItems.php"},"List Items"),"\xa0in the menu do not use icons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Icon Size Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listIconSizeLargeDevice":"50"Ignored if the\xa0',(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/child_menuListItems.php"},"List Items"),"\xa0in the menu do not use icons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Icon Size Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"listIconScale":"center"Options: center or scale. If the icons (or images) are larger then the row-height, use scale. If the icons are smaller than the row-height, use center.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Apply Shiny Effect")),(0,r.kt)("td",{parentName:"tr",align:null},'"listIconApplyShinyEffect":"0"Options: 0 or 1 where 1 = yes. Applies a shiny-effect to the image. Use this to dress-up bland square thumbnails.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Corner Radius")),(0,r.kt)("td",{parentName:"tr",align:null},'"listIconCornerRadius":"8"Number. Use this to dress-up blank square thumbnails.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Button Menu, Button Items")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Layout Style")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonLayoutStyle":"grid"Options: grid, verticalLeft, verticalRight, horizontalTop, horizontalBottom. Default is grid.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Label Layout Style")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonLabelLayoutStyle":"bottom"Options: above, top, middle, bottom, below. Default is below. Set to "middle" to prevent extra space needed for button labels.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Label Font Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonLabelFontColor":"#000000"Hexidecimal color.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonBackgroundColor":"#000000"Hexidecimal color.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Apply Drop Shadow")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonDropShadow":"0"Options: 0 or 1. Zero is "no, do not use apply drop shadow." Default is 0.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Drop Shadow Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonShadowColor":"#000000"Hexidecimal color.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Transparency")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonOpacity":"100"Numeric 1 - 100. 1 is totally transparent.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Corner Radius Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonCornerRadiusSmallDevice":"5"Numeric. Default is 5.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Corner Radius Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonCornerRadiusLargeDevice":"10"Numeric. Default is 10.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Icon Color")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonsUseWhiteIcons":"0"Numeric. 0 or 1. Icons in project have a matching white version. Settings this to 1 allows you to use white icons on dark background colors.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Size Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonSizeSmallDevice":"60"Numeric. Buttons are square with this height / width. Default is 60.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Size Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonSizeLargeDevice":"60"Numeric. Buttons are square with this height / width. Default is 60.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Padding Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonPaddingSmallDevice":"15"Numeric. The amount of space between each button. Default is 15.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Padding Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonPaddingLargeDevice":"15"Numeric. The amount of space between each button. Default is 15.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Label Font Size Small Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonLabelFontSizeSmallDevice":"13"Numeric. The size of the font if a label is used. Default is 13.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buttons Label Font Size Large Device")),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonLabelFontSizeLargeDevice":"13"Numeric. The size of the font if a label is used. Default is 13.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Prevent Scrolling")),(0,r.kt)("td",{parentName:"tr",align:null},'"preventAllScrolling":"0"Options: 0 or 1 where 1 = yes.')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*")," Required"))}m.isMDXComponent=!0}}]);