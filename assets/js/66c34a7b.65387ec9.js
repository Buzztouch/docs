"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Screens, Menus, Features",sidebar_position:7,slug:"/screens"},s=void 0,i={unversionedId:"Developers/screens",id:"Developers/screens",title:"Screens, Menus, Features",description:"Every mobile app is a collection of screens, menus, and features. Menus can lead to other menus allowing for an unlimited amount of navigational depth. The best applications are easy to navigate and offer end-users efficient ways to reach content and features within the app.",source:"@site/docs/Developers/screens.md",sourceDirName:"Developers",slug:"/screens",permalink:"/screens",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Screens, Menus, Features",sidebar_position:7,slug:"/screens"},sidebar:"defaultSidebar",previous:{title:"Artwork & Graphics",permalink:"/5ce7a2e5-483c-46c3-b01c-01c51389e4bb"},next:{title:"Global Theme",permalink:"/global-theme"}},p={},l=[{value:"<strong>Screen Types</strong>",id:"7edc6f8e7cc84126b154b4ab6cc74b2c",level:3}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every mobile app is a collection of screens, menus, and features. Menus can lead to other menus allowing for an unlimited amount of navigational depth. The best applications are easy to navigate and offer end-users efficient ways to reach content and features within the app."),(0,r.kt)("p",null,"The apps\xa0",(0,r.kt)("a",{parentName:"p",href:"/configuration-data"},"configuration file"),'\xa0lists each screen, menu, or feature in an organized, plain-text structure. Each item in this list has an "item type" and this item type is what describes that screen or features behavior. Item types are things like BT_screen_call, BT_screen_images, BT_screen_splash and so on.'),(0,r.kt)("h3",{id:"7edc6f8e7cc84126b154b4ab6cc74b2c"},(0,r.kt)("strong",{parentName:"h3"},"Screen Types")),(0,r.kt)("p",null,"This list represents the standard types of screens and features available in the control panel. Each screen, menu, or feature is customized using individual properties. If one of the standard Buzztouch screens is not appropriate, ",(0,r.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/screen_plugIn.php"},"custom plugins")," are used to extend the functionality even further."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Menu Screens")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_menuList.php"},(0,r.kt)("strong",{parentName:"a"},"Menu List"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_menuList"This navigational screen is used to display a list of choices. Choosing an item in the list loads a new screen or menu or feature.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_menuButtons.php"},(0,r.kt)("strong",{parentName:"a"},"Menu Buttons"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_menuButtons"This navigational screen is used to display a list of buttons. Choosing an item in the list loads a new screen or menu or feature.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_menuSearch.php"},(0,r.kt)("strong",{parentName:"a"},"Menu Search"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_menuSearch"This screen allows users to search for other screens within the application. Choosing an item in the list loads that screen or feature.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Content Screens")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_quiz.php"},(0,r.kt)("strong",{parentName:"a"},"Multiple Choice Quiz"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_quiz"This screen is used to create a quiz. Quizzes can be fun, educational, entertaining, or enlightenting.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_customURL.php"},(0,r.kt)("strong",{parentName:"a"},"Custom URL, Webpage"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen is used to display a web page. For best results, only include web-pages optimized for mobile devices.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_customHTML.php"},(0,r.kt)("strong",{parentName:"a"},"Custom HTML, TEXT"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_customHTML"This screen is used to display HTML or TEXT content. This is similiar to a Custom URL page differs in that the\xa0',(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/controlPanel.php"},"control panel"),"\xa0is used to create the HTML instead of pointing to a web-page online.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_youTube.php"},(0,r.kt)("strong",{parentName:"a"},"YouTube\u2122 Video"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen behaves exactly like a Custom URL page. It\'s listed in the\xa0',(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/controlPanel.php"},"control panel"),"\xa0because it's a popular option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_html.php"},(0,r.kt)("strong",{parentName:"a"},"HTML Document"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen is used to display an HTML document that is included in the Xcode or Eclipse project, or hosted online.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_pdf.php"},(0,r.kt)("strong",{parentName:"a"},"PDF\u2122 Document"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen is used to display an PDF\u2122 document that is included in the Xcode or Eclipse project, or hosted online.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_word.php"},(0,r.kt)("strong",{parentName:"a"},"Word\u2122 Document"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen is used to display an Word\u2122 document that is included in the Xcode or Eclipse project, or hosted online.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_excel.php"},(0,r.kt)("strong",{parentName:"a"},"Excel\u2122 Document"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen is used to display an Excel\u2122 document that is included in the Xcode or Eclipse project, or hosted online.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_powerPoint.php"},(0,r.kt)("strong",{parentName:"a"},"PowerPoint\u2122 Document"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_webView"This screen is used to display an PowerPoint\u2122 document that is included in the Xcode or Eclipse project, or hosted online.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_map.php"},(0,r.kt)("strong",{parentName:"a"},"Location Map"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_map"This screen is used to display a location map. Maps can have multiple locaitons. Selecting an item on the map can load another screen or show driving directions. Locations can be included in the Xcode or Eclipse project or can come from a remote file.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_rss.php"},(0,r.kt)("strong",{parentName:"a"},"RSS Feed"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_rssReader"This screen is used to display a list of RSS stories from a remote URL. Selecting an item loads the story in a BT_screen_webView.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_images.php"},(0,r.kt)("strong",{parentName:"a"},"Image Gallery"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_images"This screen is used to display a list of images. Images can be included in the Xcode or Eclipse project or come from a remote file.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_imageUploader.php"},(0,r.kt)("strong",{parentName:"a"},"Image Uploader"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_imageUpload"This screen is used to allow users to upload images to your website or your buzztouch control panel. Users can take a new image or select an existing image from their gallery.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_imageEmailer.php"},(0,r.kt)("strong",{parentName:"a"},"Image Emailer"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_imageEmail"This screen allows end users to send an email to a pre-configured address.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_streamingAudio.php"},(0,r.kt)("strong",{parentName:"a"},"Streaming Audio"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_audio"This screen is used to play streaming audio. The audio file be included in the Xcode or Eclipse project or it can come from a remote location.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_streamingVideo.php"},(0,r.kt)("strong",{parentName:"a"},"Streaming Video"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_video"This screen is used to play streaming video. The video file be included in the Xcode or Eclipse project or it can come from a remote location.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Settings Screens")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_settingsDeviceInfo.php"},(0,r.kt)("strong",{parentName:"a"},"Show Device Info"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_settingsDevice"This screen is used to display important information about the device such as it\'s ability to take videos or report it\'s location.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_settingsGps.php"},(0,r.kt)("strong",{parentName:"a"},"Allow / Prevent GPS"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_settingsLocation"This screen is used to allow end users to opt-out of location reporting features and prevent their device from turning on the GPS.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_settingsLogin.php"},(0,r.kt)("strong",{parentName:"a"},"Login Screen"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_settingsLogIn"This screen is used to allow end users to log into the app. All screens and features can be login protected.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Splash Screens")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_splash.php"},(0,r.kt)("strong",{parentName:"a"},"Image Splash Screen"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_splash"This screen is used to introduce the application. Multiple options are used to control the screens animation.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Other Actions and Features")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_launchNativeApp.php"},(0,r.kt)("strong",{parentName:"a"},"Launch a Native App"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_launchNativeApp"This feature is used to launch other native applications on the device such as the music player.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_shareFacebook.php"},(0,r.kt)("strong",{parentName:"a"},"Share via Facebook\u2122"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_shareFacebook"This screen is used to allow end users to post to their Facebook\u2122 walls. It can be configured with a standard message.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_shareTwitter.php"},(0,r.kt)("strong",{parentName:"a"},"Share via Twitter\u2122"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_shareTwitter"This screen is used to allow end users to post tweets from within the app. It can be pre-configured with a standard message.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_shareEmail.php"},(0,r.kt)("strong",{parentName:"a"},"Share via Email"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_shareEmail"This feature is used to launch the devices native email compose sheet showing a pre-configured message. Users send to an email address they enter or choose from their list of contacts.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_shareSms.php"},(0,r.kt)("strong",{parentName:"a"},"Share via Text (SMS)"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_shareSms"This feature is used to launch the devices native Text Message compose sheet showing a pre-configured message. Users send to a phone number of they enter or choose from their list of contacts.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_email.php"},(0,r.kt)("strong",{parentName:"a"},"Email Us"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_email"This feature is used to launch the devices native email compose sheet with a pre-configured email address and message.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_call.php"},(0,r.kt)("strong",{parentName:"a"},"Call Us"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_call"This feature is used to launch the devices native dialer with a pre-configured telephone number.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_sms.php"},(0,r.kt)("strong",{parentName:"a"},"Text Us (SMS)"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_sms"This feature is used to launch the devices native Text Message compose sheet showing a pre-configured number and message.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screen_plugIn.php"},(0,r.kt)("strong",{parentName:"a"},"Custom Plug-in"))),(0,r.kt)("td",{parentName:"tr",align:null},'"itemType":"BT_screen_plugIn"This feature allows you to load a custom UIViewController (iOS) or a custom Activity (Android) that you create or somebody else creates for you. Refer to the plugin documents for details about it\'s configuration options.')))))}m.isMDXComponent=!0}}]);