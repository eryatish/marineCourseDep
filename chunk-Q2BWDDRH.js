import{Bb as E,Ca as $,Cb as V,Fa as p,Gb as y,Ja as x,Oa as a,Qa as m,Sa as C,Ta as F,Z as R,_ as T,aa as u,ba as P,da as f,fa as d,ga as l,na as N,oa as D,pa as k,tb as U,ub as z}from"./chunk-YXUJRLCC.js";var X=null;function w(){return X}function Je(n){X??=n}var j=class{};var L=new f(""),B=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>l(J),providedIn:"platform"})}}return n})(),Qe=new f(""),J=(()=>{class n extends B{constructor(){super(),this._doc=l(L),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return w().getBaseHref(this._doc)}onPopState(e){let t=w().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=w().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function O(n,r){if(n.length==0)return r;if(r.length==0)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?n+r.substring(1):e==1?n+r:n+"/"+r}function G(n){let r=n.match(/#|\?|$/),e=r&&r.index||n.length,t=e-(n[e-1]==="/"?1:0);return n.slice(0,t)+n.slice(e)}function c(n){return n&&n[0]!=="?"?"?"+n:n}var g=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>l(Q),providedIn:"root"})}}return n})(),q=new f(""),Q=(()=>{class n extends g{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(L).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return O(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+c(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(d(B),d(q,8))}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),et=(()=>{class n extends g{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=O(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(d(B),d(q,8))}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac})}}return n})(),ee=(()=>{class n{constructor(e){this._subject=new $,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=ie(G(H(t))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+c(t))}normalize(e){return n.stripTrailingSlash(ne(this._basePath,H(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t,complete:i})}static{this.normalizeQueryParams=c}static{this.joinWithSlash=O}static{this.stripTrailingSlash=G}static{this.\u0275fac=function(t){return new(t||n)(d(g))}}static{this.\u0275prov=u({token:n,factory:()=>te(),providedIn:"root"})}}return n})();function te(){return new ee(d(g))}function ne(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function H(n){return n.replace(/\/index.html$/,"")}function ie(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function tt(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,s]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var A=/\s+/,Y=[],nt=(()=>{class n{constructor(e,t){this._ngEl=e,this._renderer=t,this.initialClasses=Y,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(A):Y}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(A):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==t&&(i.changed=!0,i.enabled=t),i.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],i=e[1];i.changed?(this._toggleClass(t,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),i.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(A).forEach(i=>{t?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static{this.\u0275fac=function(t){return new(t||n)(a(p),a(C))}}static{this.\u0275dir=D({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return n})();var S=class{constructor(r,e,t,i){this.$implicit=r,this.ngForOf=e,this.index=t,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},it=(()=>{class n{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,t,i){this._viewContainer=e,this._template=t,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((i,s,o)=>{if(i.previousIndex==null)t.createEmbeddedView(this._template,new S(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)t.remove(s===null?void 0:s);else if(s!==null){let h=t.get(s);t.move(h,o),Z(h,i)}});for(let i=0,s=t.length;i<s;i++){let h=t.get(i).context;h.index=i,h.count=s,h.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let s=t.get(i.currentIndex);Z(s,i)})}static ngTemplateContextGuard(e,t){return!0}static{this.\u0275fac=function(t){return new(t||n)(a(F),a(m),a(V))}}static{this.\u0275dir=D({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return n})();function Z(n,r){n.context.$implicit=r.item}var rt=(()=>{class n{constructor(e,t){this._viewContainer=e,this._context=new b,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){W("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){W("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}static{this.\u0275fac=function(t){return new(t||n)(a(F),a(m))}}static{this.\u0275dir=D({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),b=class{constructor(){this.$implicit=null,this.ngIf=null}};function W(n,r){if(!!!(!r||r.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${T(r)}'.`)}function re(n,r){return new R(2100,!1)}var _=class{createSubscription(r,e){return y(()=>r.subscribe({next:e,error:t=>{throw t}}))}dispose(r){y(()=>r.unsubscribe())}},v=class{createSubscription(r,e){return r.then(e,t=>{throw t})}dispose(r){}},se=new v,oe=new _,st=(()=>{class n{constructor(e){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(e){if(U(e))return se;if(z(e))return oe;throw re(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static{this.\u0275fac=function(t){return new(t||n)(a(E,16))}}static{this.\u0275pipe=k({name:"async",type:n,pure:!1,standalone:!0})}}return n})();var ot=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=N({type:n})}static{this.\u0275inj=P({})}}return n})(),ue="browser",ae="server";function ce(n){return n===ue}function ut(n){return n===ae}var at=(()=>{class n{static{this.\u0275prov=u({token:n,providedIn:"root",factory:()=>ce(l(x))?new I(l(L),window):new M})}}return n})(),I=class{constructor(r,e){this.document=r,this.window=e,this.offset=()=>[0,0]}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r){this.window.scrollTo(r[0],r[1])}scrollToAnchor(r){let e=de(this.document,r);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(r){this.window.history.scrollRestoration=r}scrollToElement(r){let e=r.getBoundingClientRect(),t=e.left+this.window.pageXOffset,i=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(t-s[0],i-s[1])}};function de(n,r){let e=n.getElementById(r)||n.getElementsByName(r)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(r)||s.querySelector(`[name="${r}"]`);if(o)return o}i=t.nextNode()}}return null}var M=class{setOffset(r){}getScrollPosition(){return[0,0]}scrollToPosition(r){}scrollToAnchor(r){}setHistoryScrollRestoration(r){}},K=class{};export{w as a,Je as b,j as c,L as d,Qe as e,g as f,Q as g,et as h,ee as i,tt as j,nt as k,it as l,rt as m,st as n,ot as o,ue as p,ut as q,at as r,K as s};
