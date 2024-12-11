"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[37403,29263],{208121:(e,t,l)=>{l.d(t,{CB:()=>h,y9:()=>_});var o=l(667294),i=l(498490),r=l(883119),n=l(400416),s=l(758339),a=l(144326),d=l(785893);let c=({onConfirm:e})=>{let t=(0,a.ZP)(),[l,i]=(0,o.useState)(!1),c=()=>{i(!0),(0,n.Z)({url:"/v3/users/email/verify/resend/",method:"POST"})};return(0,d.jsx)(s.ZP,{accessibilityModalLabel:t.bt("Verifica tu correo electrónico", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,d.jsxs)(r.kC,{gap:{row:2,column:0},justifyContent:"end",children:[l?(0,d.jsx)(r.zx,{color:"gray",disabled:l,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Correo enviado", "Email sent", "Button text for verification email being sent", undefined, true)}):(0,d.jsx)(r.zx,{color:"gray",disabled:l,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Reenviar mensaje", "Resend email", "Button text for resending email verification email", undefined, true)}),(0,d.jsx)(r.zx,{color:"red",fullWidth:!0,onClick:e,size:"lg",text:t.bt("Entendido", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true)})]}),heading:t.bt("Verifica tu correo electrónico", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,role:"alertdialog",children:(0,d.jsx)(r.xu,{padding:8,children:(0,d.jsx)(r.xv,{align:"center",size:"300",children:t.bt("Verifica tu dirección de correo electrónico para proteger tu cuenta. Busca un correo electrónico nuestro en el buzón de entrada asociado con esta cuenta para seguir usando Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})},{Provider:u,useHook:_}=(0,i.Z)("EmailVerificationReminderModal");function h({children:e}){let[t,l]=(0,o.useState)(!1),i=(0,o.useMemo)(()=>({showEmailVerificationReminderModal:()=>{l(!0)}}),[]);return(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(u,{value:i,children:e}),t&&(0,d.jsx)(c,{onConfirm:()=>{l(!1)}})]})}},729263:(e,t,l)=>{l.d(t,{default:()=>n});var o=l(895739),i=l(635258),r=l(54473);function n(e,t,l){var n;let s;if(!o.Z[e])throw Error(`unknown url key: ${e}`);l||(l={});let a=o.Z[e](l),d=(s=null,(n=l)&&(s=n.advertiserId||null),!s&&t&&(s=t.id),s),c=!!l.absolutify;return"string"==typeof d&&(a="/advertiser/"+d+a),c&&(a=(0,r.Z)(a,void 0,i.KUo)),a}},656817:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(667294);function i(e){return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}function r(){return window.innerWidth}function n(){return window.innerHeight}function s(){return null}function a(){let e=(0,o.useSyncExternalStore)(i,n,s),t=(0,o.useSyncExternalStore)(i,r,s);return null!==e&&null!==t?{height:e,width:t}:null}},289762:(e,t,l)=>{l.d(t,{Z:()=>n});var o=l(167912),i=l(244311),r=l(286102);let n=function({strategy:e,query:t,variables:l,options:n,useGetLegacyResource:s,useGetLegacyPaginatedResource:a,useGetLegacyData:d}){if("GRAPHQL"===e){let e=(0,i.getRequest)(t);return(0,o.useLazyLoadQuery)(e,l,n)}if(null!=s&&null!=a&&null!=d)throw Error("Only pass one of those calls from the list: \n[useGetLegacyResource, useGetLegacyPaginatedResource, useGetLegacyData]\nto useLazyLoadQueryOrLegacy");if(null!=d){let e=d(l);if(!e)return null;let{selections:o}=(0,i.getRequest)(t).fragment;return(0,r.Z)(o,{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null})}if(null!=s){let{data:e,refresh:o}=s(l);if(null==e)return null;let{selections:n}=(0,i.getRequest)(t).fragment;return(0,r.Z)(n,{kind:"LegacyData",singularLegacyData:e,refetchInfo:{refetch:o},paginationInfo:null})}if(null!=a){let{data:e,refresh:o,isFetching:n,isAtEnd:s,fetchMore:d}=a(l);if(null==e)return null;let{selections:c}=(0,i.getRequest)(t).fragment;return(0,r.Z)(c,{kind:"PaginationLegacyData",paginationLegacyData:e,refetchInfo:{refetch:o},paginationInfo:{isLoadingNext:n,hasNext:!s,loadNext:d}},null)}throw Error("useGetLegacyData or useGetLegacyResource must be provided")}},453854:(e,t,l)=>{l.d(t,{Z:()=>n,q:()=>r});var o=l(667294);let i=()=>{let[e,t]=(0,o.useState)(!1),[l,i]=(0,o.useState)(!1),[r,n]=(0,o.useState)(!1);return{active:e,focused:l,hovered:r,onBlur:()=>{i(!1),t(!1)},onFocus:()=>i(!0),onMouseDown:()=>t(!0),onMouseEnter:()=>n(!0),onMouseLeave:()=>{n(!1),t(!1)},onMouseUp:()=>t(!1)}};function r({children:e}){return e(i())}let n=i},948938:(e,t,l)=>{l.d(t,{Z:()=>v});var o=l(667294),i=l(883119),r=l(559028),n=l(357013),s=l(144326),a=l(590338),d=l(240760),c=l(297728),u=l(730212),_=l(415384),h=l(715824),f=l(1006),p=l(228867),x=l(453854),g=l(115642),m=l(811093),b=l(701918),w=l(785893);let v=function(e){let t=(0,s.ZP)(),{locale:l,isAuthenticated:v}=(0,u.B)(),y=(0,a.Z)(),{checkExperiment:P}=(0,c.F)(),{isCloseupRelatedPinsAboveTheFoldEnabled:j}=(0,g.x4)(),{aggregatedSaves:z,boardName:A,boardUrl:k,followerCount:C,fullName:S,isVerifiedIdentity:E,imageUrl:L,isPromoted:Z,isVerifiedMerchant:T,profileUrl:B,sponsorName:I,sponsorshipStatus:F,sponsorUsername:M="",verified:N,color:U="default",onAvatarClick:D,onNavigateClick:R,onNavigateSponsorClick:q,openNewTab:O,isLeadPin:H=!1}=e,X=(0,c.F)().checkExperiment("mweb_web_android_ios_backend_clbc_display_controls").anyEnabled,G=!v&&P("unauth_show_aggregate_saves").anyEnabled,V=G&&P("unauth_show_aggregate_saves").group,W=(0,_.Z)(t.bt("Enlace del avatar de {{ fullName }}", "{{ fullName }} avatar link", "creatorCardProfile.avatar.accessibilityLabel", undefined, true),{fullName:S??""}),K=(0,w.jsx)(x.q,{children:({active:e,focused:t,hovered:l,onBlur:o,onFocus:n,onMouseEnter:s,onMouseLeave:a})=>(0,w.jsx)(i.xu,{onBlur:o,onFocus:n,onMouseDown:()=>{D&&D()},onMouseEnter:s,onMouseLeave:a,children:(0,w.jsx)(i.zd,{rounding:"circle",wash:l||e||t,children:(0,w.jsx)(r.qE,{accessibilityLabel:W,name:S??"",size:j?"xs":"md",src:L??"",verified:N})})})}),$=(0,h.ZP)(S,70),Q=(0,w.jsxs)(o.Fragment,{children:[Z&&(0,w.jsx)(i.xv,{lineClamp:1,size:"200",weight:"bold",children:t.bt("Promocionado por", "Promoted by", "indicating the username of the person who promoted the pin", undefined, true)}),(0,w.jsx)(i.xu,{"data-test-id":"creator-profile-name",children:(0,w.jsx)(i.xu,{maxWidth:270,children:(0,w.jsx)(i.xv,{color:U,size:"200",weight:H||j?"normal":"bold",children:E||T?(0,w.jsx)(i.xu,{"data-test-id":"verified-name",children:(0,w.jsx)(b.Z,{badgeSize:"xs",badgeSpacing:2,fullName:$,isVerifiedIdentity:E,isVerifiedMerchant:T})}):S})})})]}),Y=M&&I||m.j.includes(F)&&X,J=`/${M??""}/`,ee=(0,w.jsx)(i.xu,{marginBottom:1,paddingX:1,children:(0,w.jsx)(i.xv,{size:"300",children:z&&(0,d.nk)(t.bt("{{ saveCount }} personas guardaron Pines como este", "{{ saveCount }} people saved Pins like this", "closeup.pinAttribution.aggregateSaveCount", undefined, true),{saveCount:y(l,z,{shortform:!0,shortform_maximum_fraction_digits:0})})})}),et=B?(0,w.jsx)(i.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,w.jsx)(i.rU,{dataTestId:"creator-profile-link",href:B,onClick:R,rel:(0,p.Z)(B)?"none":"nofollow",target:O?"blank":null,underline:"none",children:Q})}):Q,el=A&&k&&(0,w.jsx)(i.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,w.jsx)(i.xv,{inline:!0,size:"enabled_show_board"!==V&&z?"200":"300",children:(0,d.XB)({text:t.bt("<a id=\"1\">{{pinnerName}}</a> guardó en <a id=\"2\">{{boardName}}</a>", "<a id=\"1\">{{pinnerName}}</a> saved to <a id=\"2\">{{boardName}}</a>", "unauth.userAttribution.board", undefined, true),markers:{pinnerName:$.toString(),boardName:A.toString()},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,w.jsx)(i.rU,{display:"inline",href:B??"",onClick:()=>(0,f.My)("unauth_aggregate_saves.username.click"),underline:"none",children:(0,w.jsx)(i.xv,{inline:!0,size:"enabled_show_board"!==V&&z?"200":"300",weight:"bold",children:E||T?(0,w.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{display:"inline"}},"data-test-id":"verified-name",children:(0,w.jsx)(b.Z,{badgeSize:"xs",badgeSpacing:G?0:2,fullName:$,isVerifiedIdentity:E,isVerifiedMerchant:T})}):e})},"pinner-name-attribution"),2:({innerHtmlStrings:e})=>(0,w.jsx)(i.rU,{display:"inline",href:k?.toLowerCase(),onClick:()=>(0,f.My)("unauth_aggregate_saves.board_name.click"),underline:"none",children:(0,w.jsx)(i.xv,{inline:!0,size:"enabled_show_board"!==V&&z?"200":"300",weight:"bold",children:e})},"board-name-attribution")}})})});return(0,w.jsxs)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},"data-test-id":"creator-card-profile",display:"flex",marginEnd:-1,marginStart:-1,children:[(0,w.jsx)(i.xu,{"data-test-id":"creator-avatar",flex:"none",paddingX:1,children:B?(0,w.jsx)(i.Tg,{dataTestId:"creator-avatar-link",href:B,onTap:R,rel:(0,p.Z)(B)?"none":"nofollow",target:O?"blank":null,children:K}):K}),(0,w.jsxs)(i.xu,{children:[(!G||"enabled_dweb_no_follow"===V)&&et,("enabled_all"===V||"enabled_save_count"===V)&&z&&z>1&&ee,"enabled_show_board"===V&&el,Y?(0,w.jsx)(i.xu,{"data-test-id":"sponsor-title",display:"flex",paddingX:1,children:(0,w.jsx)(m.Z,{href:J,isPromoted:Z,onNavigateSponsorClick:q,sponsorName:I,sponsorshipStatus:F,sponsorUsername:M})}):!!C&&(!G||"enabled_show_board"===V)&&!j&&(0,w.jsx)(i.xu,{"data-test-id":"follower-count",display:"flex",paddingX:1,children:(0,w.jsx)(i.xv,{color:U,size:"200",children:(0,d.nk)(t.nbt(["{{ followerCount }} seguidor", "{{ followerCount }} seguidores"], C, "closeup.creator.followerCount", true),{followerCount:(0,w.jsx)(n.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:C},C)})})}),"enabled_save_count"===V&&et,"enabled_all"===V&&el]})]})}},838486:(e,t,l)=>{l.d(t,{Z:()=>k});var o=l(667294),i=l(545007),r=l(883119),n=l(609326),s=l(573706),a=l(703454),d=l(803611),c=l(208121),u=l(194093),_=l(144326),h=l(240760),f=l(267005),p=l(864723),x=l(901450),g=l(969119),m=l(357013),b=l(785893);let w=({followText:e,followerCount:t,userFollowed:l})=>{let o=(0,_.ZP)();return(0,h.nk)(o.bt("{{ followCount }} {{ followText }}", "{{ followCount }} {{ followText }}", " - ", undefined, true),{followCount:(0,b.jsx)(r.xu,{"data-test-id":"followCount",opacity:l?void 0:.8,paddingX:1,children:(0,b.jsx)(r.xv,{color:l?"subtle":"inverse",children:(0,b.jsx)(m.Z,{shortform:!0,shortformMaximumFractionDigits:0,value:t})})},"followCount"),followText:(0,b.jsx)(r.xu,{"data-test-id":"followText",paddingX:1,children:(0,b.jsx)(r.xv,{color:l?"default":"inverse",weight:"bold",children:e})},"followText")})};var v=l(212443),y=l(402151),P=l(424583),j=l(310368);function z(e,t,l){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}class A extends o.PureComponent{constructor(...e){super(...e),z(this,"handleButtonClick",({event:e})=>{let{requireAuth:t,i18n:l,userFollowed:o}=this.props;if(t){e.stopPropagation(),t({loginModalHeader:(0,a.N4)({i18n:l,toFollow:!o})});return}let{shouldStopEventPropagation:i,loggingData:r}=this.props;i&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,clientTrackingParams:this.props.clientTrackingParams,...r||Object.freeze({})}),this.toggleFollowUnfollow()}),z(this,"handleClick",({event:e})=>{let{requireAuth:t}=this.props;if((t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t){t();return}this.toggleFollowUnfollow()}),z(this,"toggleFollowUnfollow",()=>{let{id:e,mostRecentPinId:t,loggingData:l,userFollowed:o,viewType:i,viewParameter:r,clientTrackingParams:n}=this.props;o?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:i,view_parameter:r,aux_data:{pin_id:t},clientTrackingParams:n,...l||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:i,view_parameter:r,aux_data:{pin_id:t},clientTrackingParams:n,...l||Object.freeze({})}),this.follow())}),z(this,"follow",()=>{let{follow:e,id:t,onUserFollow:l,mostRecentPinId:o,setMostRecentPinId:i,inviteCode:r,handleFollowSuccessFromInvite:n,loggingData:s,viewType:a,viewParameter:d}=this.props;e(t,o,()=>{r?(n?.(),this.props.logContextEvent({event_type:14858,object_id_str:t,view_type:a,view_parameter:d,...s||Object.freeze({})})):this.showConfirmation()},this.showError),l&&l(!0),i(null)}),z(this,"showToast",e=>{let{id:t,imageUrl:l,profileUrl:o,toastManagerContext:i,suppressToasts:r}=this.props;r||i.showOneToast(({hideToast:i})=>(0,b.jsx)(j.Z,{handleHide:i,href:o,imageUrl:l,text:e,userId:t}))}),z(this,"showConfirmation",()=>{let e=(0,b.jsx)(r.xv,{children:this.props.i18n.bt("¡Estás siguiendo a este usuario! Sus Pines aparecerán en tu feed de inicio.", "Following! Their created Pins will show up in your home feed!", "userFollowButton.informationalToastText2", undefined, true)});this.showToast(e)}),z(this,"showError",e=>{let{fullName:t,userFollowed:l,showEmailVerificationReminderModal:o,loggingData:i,inviteCode:n,id:s,viewParameter:a,viewType:d}=this.props,c=l?this.props.i18n.bt("Error al dejar de seguir a {{ usernameComponent }}.", "Error unfollowing {{ usernameComponent }}.", "UserFollowButton.error.unfollowing", undefined, true):this.props.i18n.bt("Error al seguir a {{ usernameComponent }}.", "Error following {{ usernameComponent }}.", "UserFollowButton.error.following", undefined, true);if((0,u.Z)(e,"api_error_code")===f.H9){o();return}let _=(0,b.jsx)(r.xv,{children:(0,h.nk)(c,{usernameComponent:(0,b.jsx)(r.xv,{inline:!0,weight:"bold",children:t})})});this.showToast(_),!l&&n&&this.props.logContextEvent({event_type:14859,object_id_str:s,view_type:d,view_parameter:a,...i||Object.freeze({})})}),z(this,"unfollow",()=>{let{id:e,onUserFollow:t,unfollow:l,mostRecentPinId:o,setMostRecentPinId:i}=this.props;l(e,o,()=>{},this.showError),t&&t(!1),i(null)})}renderButton(){let{button:e,followerCount:t,inline:l=!1,isOwnProfile:o,invertButtonColor:i,isSecondaryButton:n,size:s,showFollowerCount:a,userFollowed:d}=this.props,c=d?this.props.i18n.bt("Siguiendo", "Following", "User follow button", undefined, true):this.props.i18n.bt("Seguir", "Follow", "User follow button", undefined, true);if(e)return e({followText:c,onClick:this.handleButtonClick,userFollowed:d});if(o)return(0,b.jsx)(r.zx,{disabled:!0,fullWidth:!0,text:this.props.i18n.bt("Este eres tú", "This is you", "Button label to note that this is your Profile", undefined, true)});if(!a)return(0,b.jsx)(r.xu,{"data-test-id":`user-${d?"unfollow":"follow"}-button`,display:"inlineBlock",children:(0,b.jsx)(r.zx,{accessibilityLabel:d?this.props.i18n.bt("Dejar de seguir", "Unfollow", "userUnfollowButton.button.accessibilityLabel", undefined, true):this.props.i18n.bt("Seguir", "Follow", "userFollowButton.button.accessibilityLabel", undefined, true),color:n||d?"gray":"red",fullWidth:l,onClick:this.handleButtonClick,selected:i?!d:!!d,size:s??void 0,text:c})});{let e="number"==typeof t?(0,b.jsx)(w,{followerCount:t,followText:c,userFollowed:d}):c;return(0,b.jsx)(r.iP,{onTap:this.handleClick,children:(0,b.jsx)(r.xu,{color:d?"secondary":"primary",paddingX:3,paddingY:3,rounding:2,children:(0,b.jsx)(r.kC,{alignItems:"center",justifyContent:"start",children:e})})})}}render(){let{showPulsar:e,userFollowed:t}=this.props;return(0,b.jsxs)(r.xu,{display:"flex",position:"relative",children:[this.renderButton(),e&&(0,b.jsx)(r.iP,{onTap:this.handleClick,children:(0,b.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},display:"inlineBlock",position:"absolute",children:(0,b.jsx)(r.o3,{paused:t||!1})})})]})}}function k(e){let{logContextEvent:t}=(0,s.v)(),l=(0,_.ZP)(),{id:o,setMostRecentPinId:r}=(0,v.f)(),a=(0,d.Z)(),u=(0,i.I0)(),{showEmailVerificationReminderModal:h}=(0,c.y9)(),f=(0,P.mN)()(e.id),m=f?.follower_count,w=f?f.explicitly_followed_by_me:e.userFollowed;return(0,g.Z)(()=>{let{id:t}=e,l=(0,p.M0)().getItem(n.AG)||"";l&&l===t&&((0,p.M0)().removeItem(n.AG),u((0,y.ZN)(l,e.clientTrackingParams)))}),(0,b.jsx)(A,{...e,follow:(t,l,o,i)=>{u((0,y.yA)(t,l,e.clientTrackingParams,e.inviteCode)).then(o).catch(e=>{i(e)})},followerCount:m,i18n:l,logContextEvent:t,mostRecentPinId:o,requireAuth:a,setMostRecentPinId:r,showEmailVerificationReminderModal:h,toastManagerContext:(0,x.F9)(),unfollow:(t,l,o,i)=>{u((0,y.KF)(t,l,e.clientTrackingParams)).then(o,i)},userFollowed:w})}},212443:(e,t,l)=>{l.d(t,{C:()=>a,f:()=>s});var o=l(667294),i=l(498490),r=l(785893);let{Provider:n,useHook:s}=(0,i.Z)("MostRecentPin");function a({children:e}){let[t,l]=(0,o.useState)(),[i,s]=(0,o.useState)(),a=(0,o.useCallback)(e=>{s([e].concat((i?i.slice(0,10):[]).filter(t=>t!==e)))},[i]),d=(0,o.useMemo)(()=>({id:t,plpImageSignatures:i,setMostRecentPinId:l,setMostRecentPinImage:a}),[t,i,a]);return(0,r.jsx)(n,{value:d,children:e})}},811093:(e,t,l)=>{l.d(t,{Z:()=>c,j:()=>d});var o=l(883119),i=l(144326),r=l(240760),n=l(297728),s=l(730212),a=l(785893);let d=[0,2,3];function c({hasAffiliateProducts:e,hasAffiliateLink:t,href:l,isPromoted:c,onNavigateSponsorClick:u,sponsorName:_,sponsorUsername:h,sponsorshipStatus:f,textWeight:p="bold",isGrid:x}){let g,m,b,w,v;let y=(0,i.ZP)(),{isAuthenticated:P}=(0,s.B)(),{checkExperiment:j}=(0,n.F)(),z=j("mweb_web_android_ios_clbc_eu_ad_string").anyEnabled,A=j("web_remove_paid_partnership_in_rejected_state").anyEnabled,k=P&&(t||e)&&("enabled"===(m=j("closeup_affiliate_ui_label_web").group)||"employees"===m)||"enabled"===(b=j("mweb_closeup_affiliate_ui_label").group)||"employees"===b,C=!P&&(t||e)&&("enabled"===(w=j("closeup_unauth_affiliate_ui_label_web").group)||"employees"===w||"enabled"===(v=j("mweb_closeup_unauth_affiliate_ui_label").group)||"employees"===v),S=l||(h?`/${h}/`:null),E=S&&_?(0,a.jsx)(o.rU,{dataTestId:"sponsorship-text-link",href:S,onClick:u,children:(0,a.jsx)(o.xv,{size:"200",weight:p,children:_})},_):void 0;return c?g=(0,r.nk)(y.bt("Promocionado por {{ name }}", "Promoted by {{ name }}", "sponsorship.sponsorshipText.promotedByBrand", undefined, true),{name:E}):f||0===f?_&&!d.includes(f)?g=(0,r.nk)(y.bt("Colaboración pagada con {{ name }}", "Paid partnership with {{ name }}", "closeup.creator.sponsoredPinTitle", undefined, true),{name:E}):A&&2===f||(g=y.bt("Colaboración pagada", "Paid partnership", "closeup.creator.sponsoredPinTitle", undefined, true)):k||C?g=y.bt("Enlace pagado", "Paid link", "sponsorship.sponsorshipText.affiliatedProducts", undefined, true):x&&e&&(g=y.bt("Enlace pagado", "Paid link", "sponsorship.sponsorshipText.affiliatedProducts", undefined, true)),(0,a.jsxs)(o.xv,{color:"subtle",inline:!0,lineClamp:2,size:"200",children:[z&&!c&&"Ad • "||"",g]})}},508629:(e,t,l)=>{l.d(t,{Z:()=>i});var o=l(468808);function i(e,t){return l=>l((0,o.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/37403.es_419-94b42fdc7fe97bc2.mjs.map