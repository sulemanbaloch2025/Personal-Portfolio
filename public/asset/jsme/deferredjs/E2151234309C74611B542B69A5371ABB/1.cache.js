$wnd.jsme.runAsyncCallback1('var F6="Assignment of aromatic double bonds failed";function G6(a,b){var c;c=a.A[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function H6(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function I6(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function J6(){this.b=!0}y(24,1,{},J6);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function K6(a,b){var c,d,e;1==a.b.E[b]&&eo(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);or(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[go(a.b,c,e)]=!1}}function L6(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=go(a.b,d,g)&&a.a[go(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,K6(a,c))}}while(h)}function M6(){}y(29,1,{},M6);_.a=null;_.b=null;\nfunction N6(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction O6(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&Jr(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function P6(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(co,dn,-1,4,2),this.f=C(B,w,-1,4,1),this.k=C(B,w,-1,4,1),-1!=c&&1==d&&(N6(this,2147483647,e,!0),this.d=0))}y(30,1,{},P6);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction Q6(a){bo(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.K.c;++b)if(0==(a.K.s[b]&67108864)&&3==a.V[b]){var c=a.K;c.s[b]|=67108864;c.N&=3}for(b=0;b<a.K.d;++b)3==a.k[b]&&2==ko(a.K,b)&&eo(a.K,b,26)}}function R6(){this.e=1}y(33,1,{},R6);\nfunction S6(a){var b;if(null==a||0==a.length||0==is(a).length)return AX(new gN,m,!0);b=new ws;var c=new M6,d=tU(is(a)),e,f,g,h,j,l,n,q,r,u,x,v,t,F,G,s,O,ea,V,Z,na,Fa,Gb,mb,R,Qa,Nb,T,ya,ia,ja,hb,P,Xc,Ga,jc,uc;c.b=b;Yq(c.b);Gb=null;h=C(B,w,-1,64,1);h[0]=-1;Qa=C(B,w,-1,64,1);Nb=C(B,w,-1,64,1);for(t=0;64>t;++t)Qa[t]=-1;f=R=0;T=mb=ia=!1;l=0;ya=d.length;for(j=1;32>=d[R];)++R;for(;R<ya;)if(ja=d[R++]&65535,T6(ja)||42==ja){g=0;x=-1;F=Fa=G=!1;if(ia)82==ja&&gM(d[R]&65535)?(ea=null!=String.fromCharCode(d[R+1]&\n65535).match(/\\d/)?2:1,g=Ar(Zq(d,R-1,1+ea)),R+=ea):(s=String.fromCharCode(d[R]&65535).toLowerCase().charCodeAt(0)==(d[R]&65535)&&T6(d[R]&65535)?2:1,g=Ar(Zq(d,R-1,s)),R+=s-1,x=0),64==d[R]&&(++R,64==d[R]&&(F=!0,++R),Fa=!0),72==d[R]&&(++R,x=1,gM(d[R]&65535)&&(x=d[R]-48,++R));else if(42==ja)g=6,G=!0;else switch(String.fromCharCode(ja).toUpperCase().charCodeAt(0)){case 66:R<ya&&114==d[R]?(g=35,++R):g=5;break;case 67:R<ya&&108==d[R]?(g=17,++R):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=7;\nbreak;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new ep("SmilesParser: unknown element label found");e=Tq(c.b,g);G?(T=!0,rr(c.b,e,1)):or(c.b,e,String.fromCharCode(ja).toLowerCase().charCodeAt(0)==ja&&T6(ja));if(-1!=x&&1!=g){n=C(Fp,Zm,-1,1,1);n[0]=x<<24>>24;var Ka=c.b,Za=e,La=n;null!=La&&0==La.length&&(La=null);null==La?null!=Ka.r&&(Ka.r[Za]=null):(null==Ka.r&&(Ka.r=C(Rq,o,3,Ka.J,0)),Ka.r[Za]=La)}v=h[l];-1!=h[l]&&128!=j&&Xq(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(pr(c.b,e,f),f=0);(Z=!Gb?\nnull:Zr(Gb,LP(v)))&&N6(Z,e,R,1==g);Fa&&(!Gb&&(Gb=new qs),rs(Gb,LP(e),new P6(c,e,v,x,R,F)))}else if(46==ja)j=128;else if(61==ja)j=2;else if(35==ja)j=4;else if(gM(ja))if(V=ja-48,ia){for(;R<ya&&gM(d[R]&65535);)V=10*V+d[R]-48,++R;f=V}else{mb&&R<ya&&gM(d[R]&65535)&&(V=10*V+d[R]-48,++R);mb=!1;if(64<=V)throw new ep("SmilesParser: ringClosureAtom number out of range");if(-1==Qa[V])Qa[V]=h[l],Nb[V]=R-1;else{if(Qa[V]==h[l])throw new ep("SmilesParser: ring closure to same atom");Gb&&((Z=Zr(Gb,LP(Qa[V])))&&N6(Z,\nh[l],Nb[V],!1),(Z=Zr(Gb,LP(h[l])))&&N6(Z,Qa[V],R-1,!1));Xq(c.b,h[l],Qa[V],j);Qa[V]=-1}j=1}else if(43==ja){if(!ia)throw new ep("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[R];)++q,++R;1==q&&gM(d[R]&65535)&&(q=d[R]-48,++R);ir(c.b,h[l],q)}else if(45==ja){if(ia){for(q=-1;45==d[R];)--q,++R;-1==q&&gM(d[R]&65535)&&(q=48-d[R],++R);ir(c.b,h[l],q)}}else if(40==ja){if(-1==h[l])throw new ep("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==ja)--l;else if(91==ja){if(ia)throw new ep("SmilesParser: nested square brackets found");\nia=!0}else if(93==ja){if(!ia)throw new ep("SmilesParser: closing bracket without opening one");ia=!1}else if(37==ja)mb=!0;else if(58==ja)if(ia){for(O=0;gM(d[R]&65535);)O=10*O+d[R]-48,++R;c.b.u[h[l]]=O}else j=64;else if(47==ja)j=17;else if(92==ja)j=9;else throw new ep("SmilesParser: unexpected character found: \'"+String.fromCharCode(ja)+Pb);if(1!=j)throw new ep("SmilesParser: dangling open bond");for(t=0;64>t;++t)if(-1!=Qa[t])throw new ep("SmilesParser: dangling ring closure");var gb=c.b,Ja,da,ib,\nBa,U,cc;cc=C(B,w,-1,gb.o,1);Ba=C(co,dn,-1,gb.o,2);for(da=0;da<gb.p;++da)for(ib=0;2>ib;++ib)Jr(gb,gb.B[ib][da])&&!Jr(gb,gb.B[1-ib][da])&&(Ba[gb.B[ib][da]]=!0);for(U=gb.o-1;0<=U&&Ba[U];)cc[U]=U,--U;for(Ja=0;Ja<=U;++Ja)if(Ba[Ja]){cc[Ja]=U;cc[U]=Ja;for(--U;0<=U&&Ba[U];)cc[U]=U,--U}else cc[Ja]=Ja;c.b.M=!0;bo(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:Zq(b.r[e],0,b.r[e].length))&&!fr(c.b,e))if(u=(null==c.b.r?null:c.b.r[e])[0],c.b.A[e]<(ap(),Qq).length&&null!=Qq[c.b.A[e]]){r=!1;\nhb=Mp(c.b,e);hb-=Op(c.b,e,hb);for(Xc=Qq[c.b.A[e]],Ga=0,jc=Xc.length;Ga<jc;++Ga)if(P=Xc[Ga],hb<=P){r=!0;P!=hb+u&&hr(c.b,e,hb+u);break}r||hr(c.b,e,hb+u)}var X,S,Zb,Ob;for(X=0;X<c.b.c;++X)if(7==c.b.A[X]&&0==c.b.q[X]&&3<Mp(c.b,X)&&0<c.b.k[X])for(Ob=0;Ob<c.b.f[X];++Ob)if(S=ho(c.b,X,Ob),Zb=go(c.b,X,Ob),1<ko(c.b,Zb)&&Cr(c.b.A[S])){4==c.b.E[Zb]?eo(c.b,Zb,2):eo(c.b,Zb,1);ir(c.b,X,c.b.q[X]+1);ir(c.b,S,c.b.q[S]-1);break}var md,vd,ka,Tb,nc,qa,L,xa,fd,Yc,ie,Zc,Da,jb,cb,Hb;bo(c.b,1);c.a=C(co,dn,-1,c.b.d,2);for(ka=\n0;ka<c.b.d;++ka)64==c.b.E[ka]&&(eo(c.b,ka,1),c.a[ka]=!0);Hb=new fo(c.b,3);xa=C(co,dn,-1,Hb.i.c,2);for(Da=0;Da<Hb.i.c;++Da){jb=no(Hb.i,Da);xa[Da]=!0;for(L=0;L<jb.length;++L)if(!fr(c.b,jb[L])){xa[Da]=!1;break}if(xa[Da]){cb=no(Hb.j,Da);for(L=0;L<cb.length;++L)c.a[cb[L]]=!0}}for(ka=0;ka<c.b.d;++ka)if(!c.a[ka]&&0!=Hb.b[ka]&&fr(c.b,D(c.b,0,ka))&&fr(c.b,D(c.b,1,ka)))a:{var dc=c,Qc=ka,vc=void 0,J=void 0,Ib=void 0,wb=void 0,Ic=void 0,nb=void 0,Jb=void 0,ob=void 0,gd=void 0,wd=void 0,nd=void 0,oa=void 0,$b=\nvoid 0,ob=C(B,w,-1,dc.b.c,1),nb=C(B,w,-1,dc.b.c,1),Jb=C(B,w,-1,dc.b.c,1),gd=C(B,w,-1,dc.b.c,1),vc=D(dc.b,0,Qc),J=D(dc.b,1,Qc);nb[0]=vc;nb[1]=J;Jb[0]=-1;Jb[1]=Qc;ob[vc]=1;ob[J]=2;gd[vc]=-1;gd[J]=vc;for(wd=Ic=1;Ic<=wd&&15>ob[nb[Ic]];){$b=nb[Ic];for(nd=0;nd<dc.b.f[$b];++nd)if(Ib=ho(dc.b,$b,nd),Ib!=gd[$b]){wb=go(dc.b,$b,nd);if(Ib==vc){Jb[0]=wb;for(oa=0;oa<=wd;++oa)dc.a[Jb[nd]]=!0;break a}fr(dc.b,Ib)&&0==ob[Ib]&&(++wd,nb[wd]=Ib,Jb[wd]=wb,ob[Ib]=ob[$b]+1,gd[Ib]=$b)}++Ic}}bo(c.b,3);for(Da=0;Da<Hb.i.c;++Da)if(xa[Da]){jb=\nno(Hb.i,Da);for(L=0;L<jb.length;++L){var dd;var sb=c,db=jb[L],yb=void 0;16==sb.b.A[db]&&0>=sb.b.q[db]||6==sb.b.A[db]&&0!=sb.b.q[db]||!fr(sb.b,db)?dd=!1:(yb=null==Up(sb.b,db)?0:(null==sb.b.r?null:sb.b.r[db])[0],dd=1>dr(sb.b,db)-Mp(sb.b,db)-yb||5!=sb.b.A[db]&&6!=sb.b.A[db]&&7!=sb.b.A[db]&&8!=sb.b.A[db]&&15!=sb.b.A[db]&&16!=sb.b.A[db]&&33!=sb.b.A[db]&&34!=sb.b.A[db]?!1:!0);if(!dd){or(c.b,jb[L],!1);for(Yc=0;Yc<c.b.f[jb[L]];++Yc)c.a[go(c.b,jb[L],Yc)]=!1}}}L6(c);for(Da=0;Da<Hb.i.c;++Da)if(xa[Da]&&6==no(Hb.j,\nDa).length){cb=no(Hb.j,Da);fd=!0;for(Tb=0,nc=cb.length;Tb<nc;++Tb)if(ka=cb[Tb],!c.a[ka]){fd=!1;break}fd&&(K6(c,cb[0]),K6(c,cb[2]),K6(c,cb[4]),L6(c))}for(Zc=5;4<=Zc;--Zc){do{ie=!1;for(ka=0;ka<c.b.d;++ka)if(c.a[ka]){for(L=md=0;2>L;++L){qa=D(c.b,L,ka);for(Yc=0;Yc<c.b.f[qa];++Yc)c.a[go(c.b,qa,Yc)]&&++md}if(md==Zc){K6(c,ka);L6(c);ie=!0;break}}}while(ie)}for(ka=0;ka<c.b.d;++ka)if(c.a[ka])throw new ep(F6);for(vd=0;vd<c.b.c;++vd)if(fr(c.b,vd))throw new ep(F6);c.b.r=null;c.b.M=!1;var tb,oc,hc,ab,od,Dd,Cc,\nxd,wc,$a,Dc;bo(c.b,3);wc=!1;$a=C(B,w,-1,2,1);Dc=C(B,w,-1,2,1);xd=C(B,w,-1,2,1);for(oc=0;oc<c.b.d;++oc)if(!Qo(c.b,oc)&&2==c.b.E[oc]){for(ab=0;2>ab;++ab){$a[ab]=-1;xd[ab]=-1;tb=D(c.b,ab,oc);for(Cc=0;Cc<c.b.f[tb];++Cc)hc=go(c.b,tb,Cc),hc!=oc&&(17==c.b.E[hc]||9==c.b.E[hc]?($a[ab]=ho(c.b,tb,Cc),Dc[ab]=hc):xd[ab]=ho(c.b,tb,Cc));if(-1==$a[ab])break}if(-1!=$a[0]&&-1!=$a[1]){Dd=c.b.E[Dc[0]]!=c.b.E[Dc[1]];od=!1;for(ab=0;2>ab;++ab)-1!=xd[ab]&&xd[ab]<$a[ab]&&(od=!od);wr(c.b,oc,Dd^od?2:1,!1);wc=!0}}for(oc=0;oc<\nc.b.d;++oc)(17==c.b.E[oc]||9==c.b.E[oc])&&eo(c.b,oc,1);wc&&(c.b.N|=4);Rs(new R6,c.b);if(Gb){for(na=U6((uc=new vV(Gb),new V6(Gb,uc)));PU(na.a.a);)Z=(na.a.b=mq(na.a.a)).Ni(),qr(c.b,Z.a,O6(Z,cc),!1);c.b.N|=4}Kr(c.b);Q6(c.b);T&&yr(c.b,!0);return(new Tr(b)).a.a.a}function T6(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function U6(a){a=new yV(a.b.a);return new W6(a)}function V6(a,b){this.a=a;this.b=b}y(663,651,{},V6);\n_.Ki=function(a){a:{var b,c;for(c=new yV((new vV(this.a)).a);PU(c.a);)if(b=c.b=mq(c.a),b=b.Ni(),null==a?null==b:tw(a,b)){a=!0;break a}a=!1}return a};_.bf=function(){return U6(this)};_.wg=function(){return this.b.a.c};_.a=null;_.b=null;function W6(a){this.a=a}y(664,1,{},W6);_.Ce=function(){return PU(this.a.a)};_.De=function(){return(this.a.b=mq(this.a.a)).Ni()};_.Ee=function(){xV(this.a)};_.a=null;function X6(){cV();this.a=6122;this.b=12230397}y(680,1,{},X6);y(730,623,xn);\n_.ce=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(VP(),WP)&&this.b.i==(XP(),YP))try{var f=this.b.b,g,h,j;j=null;h=new ws;ds(new ts,h,new YK(new bL(f)))&&(g=new Tr(h),j=g.a.a.a);b=j;if(null==b)throw new ep("V3000 read failed.");a=Yk;this.a.Lc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=So(l),E(l,102))c=l,d=c.ae();else throw l;}else if(this.b.a==qW)try{var n=this.b.b,q,r,u,x,v,t,F;b=-1!=n.indexOf(de)?(q=rU(n,de),r=3<=q.length&&0<q[2].length,u=2<=q.length&&0<q[1].length,x=S6(q[0]),\nv=r?S6(q[2]):S6(m),t=u?S6(q[1]):S6(m),F=m,F+=Cb,F+=OQ(1,3)+OQ(1,3),u&&(F+=OQ(1,3)),F+=ba,F+=vb+x,F+=vb+v,u&&(F+=vb+t),F):S6(n);this.b.f==(SP(),aQ)?a="readSMIRKS":this.b.f==nW&&(a="readSMILES");this.a.Lc.a="SMILES conversion provided by OpenChemLib"}catch(G){if(G=So(G),E(G,102))c=G,d="SMILES parsing error:"+c.ae();else throw G;}else if(d="Invalid or unsupported input",this.a.bd&&!this.b.d)try{var s=new J6,O=is(this.b.b),ea;if(null==O||0==O.length)ea=null;else{var V=tU(O),Z,na,Fa,Gb,mb;if(null==V)ea=\nnull;else{H6(s,V,0);Z=$(s,4);Gb=$(s,4);8<Z&&(Z=Gb);na=$(s,Z);Fa=$(s,Gb);mb=new ks(na,Fa);var R=null,Qa,Nb,T,ya,ia,ja,hb,P,Xc,Ga,jc,uc,Ka,Za,La,gb,Ja,da,ib,Ba,U,cc,X,S,Zb,Ob,md,vd,ka,Tb,nc,qa,L,xa,fd,Yc,ie,Zc,Da,jb,cb,Hb,dc,Qc,vc,J,Ib,wb,Ic,nb,Jb,ob,gd,wd,nd,oa,$b,dd,sb,db,yb,tb,oc,hc,ab,od,Dd,Cc,xd,wc,$a,Dc;od=8;s.f=mb;Yq(s.f);if(!(null==V||0==V.length))if(null!=R&&0==R.length&&(R=null),H6(s,V,0),T=$(s,4),gb=$(s,4),8<T&&(od=T,T=gb),0==T)yr(s.f,1==$(s,1));else{ya=$(s,T);ia=$(s,gb);nd=$(s,T);sb=$(s,\nT);dd=$(s,T);Zb=$(s,T);for(P=0;P<ya;++P)Tq(s.f,6);for(J=0;J<nd;++J)Wq(s.f,$(s,T),7);for(J=0;J<sb;++J)Wq(s.f,$(s,T),8);for(J=0;J<dd;++J)Wq(s.f,$(s,T),$(s,8));for(J=0;J<Zb;++J)ir(s.f,$(s,T),$(s,4)-8);Ob=1+ia-ya;L=$(s,4);La=0;sr(s.f,0,0);tr(s.f,0,0);ur(s.f,0,0);xa=null!=R&&39<=R[0];Dc=wc=Cc=ab=0;Tb=ka=!1;xa&&(R.length>2*ya-2&&39==R[2*ya-2]||R.length>3*ya-3&&39==R[3*ya-3]?(Tb=!0,Ib=(ka=R.length==3*ya-3+9)?3*ya-3:2*ya-2,Za=86*(R[Ib+1]-40)+R[Ib+2]-40,ab=Math.pow(10,Za/2E3-1),Ib+=2,Dd=86*(R[Ib+1]-40)+R[Ib+\n2]-40,Cc=Math.pow(10,Dd/1500-1),Ib+=2,xd=86*(R[Ib+1]-40)+R[Ib+2]-40,wc=Math.pow(10,xd/1500-1),ka&&(Ib+=2,$a=86*(R[Ib+1]-40)+R[Ib+2]-40,Dc=Math.pow(10,$a/1500-1))):ka=R.length==3*ya-3);s.b&&ka&&(R=null,xa=!1);for(J=1;J<ya;++J)fd=$(s,L),0==fd?(xa&&(sr(s.f,J,s.f.G[0].a+8*(R[2*J-2]-83)),tr(s.f,J,s.f.G[0].b+8*(R[2*J-1]-83)),ka&&ur(s.f,J,s.f.G[0].c+8*(R[2*ya-3+J]-83))),++Ob):(La+=fd-1,xa&&(sr(s.f,J,zo(s.f,La)+R[2*J-2]-83),tr(s.f,J,Ao(s.f,La)+R[2*J-1]-83),ka&&ur(s.f,J,Bo(s.f,La)+(R[2*ya-3+J]-83))),Xq(s.f,\nLa,J,1));for(J=0;J<Ob;++J)Xq(s.f,$(s,T),$(s,T),1);Ic=C(co,dn,-1,ia,2);for(da=0;da<ia;++da)switch(U=$(s,2),U){case 0:G6(s.f,D(s.f,0,da))||G6(s.f,D(s.f,1,da))?eo(s.f,da,32):Ic[da]=!0;break;case 2:eo(s.f,da,2);break;case 3:eo(s.f,da,4)}Nb=$(s,T);for(J=0;J<Nb;++J)if(P=$(s,T),8==od)db=$(s,2),3==db?(kr(s.f,P,1,0),qr(s.f,P,1,!1)):qr(s.f,P,db,!1);else switch(db=$(s,3),db){case 4:qr(s.f,P,1,!1);kr(s.f,P,1,$(s,3));break;case 5:qr(s.f,P,2,!1);kr(s.f,P,1,$(s,3));break;case 6:qr(s.f,P,1,!1);kr(s.f,P,2,$(s,3));\nbreak;case 7:qr(s.f,P,2,!1);kr(s.f,P,2,$(s,3));break;default:qr(s.f,P,db,!1)}8==od&&0==$(s,1)&&(s.f.I=!0);Qa=$(s,gb);for(J=0;J<Qa;++J)if(da=$(s,gb),1==s.f.E[da])switch(db=$(s,3),db){case 4:wr(s.f,da,1,!1);vr(s.f,da,1,$(s,3));break;case 5:wr(s.f,da,2,!1);vr(s.f,da,1,$(s,3));break;case 6:wr(s.f,da,1,!1);vr(s.f,da,2,$(s,3));break;case 7:wr(s.f,da,2,!1);vr(s.f,da,2,$(s,3));break;default:wr(s.f,da,db,!1)}else wr(s.f,da,$(s,2),!1);yr(s.f,1==$(s,1));hb=null;for($b=0;1==$(s,1);)switch(qa=$b+$(s,4),qa){case 0:oa=\n$(s,T);for(J=0;J<oa;++J)P=$(s,T),rr(s.f,P,2048);break;case 1:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),gd=$(s,8),pr(s.f,P,gd);break;case 2:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),eo(s.f,da,64);break;case 3:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),rr(s.f,P,4096);break;case 4:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),hc=$(s,4)<<3,rr(s.f,P,hc);break;case 5:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),ja=$(s,2)<<1,rr(s.f,P,ja);break;case 6:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),rr(s.f,P,1);break;case 7:oa=$(s,T);for(J=0;J<oa;++J)P=\n$(s,T),Qc=$(s,4)<<7,rr(s.f,P,Qc);break;case 8:oa=$(s,T);for(J=0;J<oa;++J){P=$(s,T);jc=$(s,4);Xc=C(B,w,-1,jc,1);for(nb=0;nb<jc;++nb)Ga=$(s,8),Xc[nb]=Ga;var hd=s.f,je=P,Vb=Xc;null==hd.t&&(hd.t=C(Go,In,92,hd.J,0));null!=Vb&&op(Vb);hd.t[je]=Vb;hd.N=0;hd.H=!0}break;case 9:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),hc=$(s,2)<<4,xr(s.f,da,hc);break;case 10:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),cc=$(s,4),xr(s.f,da,cc);break;case 11:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),rr(s.f,P,8192);break;case 12:oa=$(s,gb);\nfor(J=0;J<oa;++J)da=$(s,gb),X=$(s,8)<<6,xr(s.f,da,X);break;case 13:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),yb=$(s,3)<<14,rr(s.f,P,yb);break;case 14:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),wd=$(s,5)<<17,rr(s.f,P,wd);break;case 15:$b=16;break;case 16:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),oc=$(s,3)<<22,rr(s.f,P,oc);break;case 17:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),hr(s.f,P,$(s,4));break;case 18:oa=$(s,T);ob=$(s,4);for(J=0;J<oa;++J){P=$(s,T);nc=$(s,ob);Jb=C(Fp,Zm,-1,nc,1);for(nb=0;nb<nc;++nb)Jb[nb]=$(s,7)<<24>>\n24;var ec=s.f,Pd=P,ac=Zq(Jb,0,Jb.length),Jd=void 0;if(null!=ac)if(0==ac.length)ac=null;else if(Jd=Ar(ac),0!=Jd&&M(ac,Nq[Jd])||M(ac,ee))Wq(ec,Pd,Jd),ac=null;null==ac?null!=ec.r&&(ec.r[Pd]=null):(null==ec.r&&(ec.r=C(Rq,o,3,ec.J,0)),ec.r[Pd]=tU(ac))}break;case 19:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),S=$(s,3)<<25,rr(s.f,P,S);break;case 20:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),oc=$(s,3)<<14,xr(s.f,da,oc);break;case 21:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),mr(s.f,P,$(s,2)<<4);break;case 22:oa=$(s,T);for(J=\n0;J<oa;++J)P=$(s,T),rr(s.f,P,268435456);break;case 23:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),xr(s.f,da,131072);break;case 24:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),ja=$(s,2)<<18,xr(s.f,da,ja);break;case 25:for(J=0;J<ya;++J)if(1==$(s,1)){var Rc=s.f;Rc.s[J]|=512}break;case 26:oa=$(s,gb);hb=C(B,w,-1,oa,1);for(J=0;J<oa;++J)hb[J]=$(s,gb);break;case 27:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),rr(s.f,P,536870912)}ao(new oo(s.f),Ic);if(null!=hb)for(ib=0,Ba=hb.length;ib<Ba;++ib)da=hb[ib],eo(s.f,da,2==s.f.E[da]?\n4:2);md=0;if(null==R&&V.length>s.d+1&&(32==V[s.d+1]||9==V[s.d+1]))R=V,md=s.d+2;if(null!=R)try{if(33==R[md]||35==R[md]){H6(s,R,md+1);ka=1==$(s,1);Tb=1==$(s,1);tb=2*$(s,4);Ja=1<<tb;da=0;for(P=1;P<ya;++P)da<ia&&D(s.f,1,da)==P?(Hb=D(s.f,0,da++),cb=1):(Hb=0,cb=8),sr(s.f,P,zo(s.f,Hb)+cb*($(s,tb)-~~(Ja/2))),tr(s.f,P,Ao(s.f,Hb)+cb*($(s,tb)-~~(Ja/2))),ka&&ur(s.f,P,Bo(s.f,Hb)+cb*($(s,tb)-~~(Ja/2)));Ka=ka?1.5:(ap(),24);uc=$q(s.f,ya,ia,Ka);if(35==R[md]){vc=0;dc=C(B,w,-1,ya,1);for(P=0;P<ya;++P)vc+=dc[P]=np(s.f,\nP);for(P=0;P<ya;++P)for(J=0;J<dc[P];++J)Qc=Tq(s.f,1),Xq(s.f,P,Qc,1),sr(s.f,Qc,zo(s.f,P)+($(s,tb)-~~(Ja/2))),tr(s.f,Qc,Ao(s.f,P)+($(s,tb)-~~(Ja/2))),ka&&ur(s.f,Qc,Bo(s.f,P)+($(s,tb)-~~(Ja/2)));ya+=vc}if(Tb){var Xf=$(s,tb),Jc=Math.log(2E3)*Math.LOG10E*Xf/(Ja-1)-1;ab=Math.pow(10,Jc);Cc=ab*I6($(s,tb),Ja);wc=ab*I6($(s,tb),Ja);ka&&(Dc=ab*I6($(s,tb),Ja));cb=ab/uc;for(P=0;P<ya;++P)sr(s.f,P,Cc+cb*zo(s.f,P)),tr(s.f,P,wc+cb*Ao(s.f,P)),ka&&ur(s.f,P,Dc+cb*Bo(s.f,P))}else{cb=1.5/uc;for(P=0;P<ya;++P)sr(s.f,P,cb*\nzo(s.f,P)),tr(s.f,P,cb*Ao(s.f,P)),ka&&ur(s.f,P,cb*Bo(s.f,P))}}else if(ka&&!Tb&&0==ab&&(ab=1.5),0!=ab&&0!=s.f.p){for(da=uc=0;da<s.f.p;++da)Yc=zo(s.f,D(s.f,0,da))-zo(s.f,D(s.f,1,da)),ie=Ao(s.f,D(s.f,0,da))-Ao(s.f,D(s.f,1,da)),Zc=ka?Bo(s.f,D(s.f,0,da))-Bo(s.f,D(s.f,1,da)):0,uc+=Math.sqrt(Yc*Yc+ie*ie+Zc*Zc);uc/=s.f.p;jb=ab/uc;for(P=0;P<s.f.o;++P)sr(s.f,P,zo(s.f,P)*jb+Cc),tr(s.f,P,Ao(s.f,P)*jb+wc),ka&&ur(s.f,P,Bo(s.f,P)*jb+Dc)}}catch(pc){if(pc=So(pc),E(pc,102))Da=pc,Da.ae(),R=null,ka=!1;else throw pc;\n}if((vd=null!=R&&!ka)||s.b){bo(s.f,3);for(da=0;da<s.f.d;++da)if(2==ko(s.f,da)&&!Qo(s.f,da)&&0==(s.f.C[da]&3)){var pb=s.f;pb.C[da]|=16777216}}!vd&&s.b&&(s.f.N|=4,wb=new R6,wb.i=new X6,Rs(wb,s.f),vd=!0);vd?(Kr(s.f),Q6(s.f)):ka||(s.f.N|=4)}ea=mb}}b=(new Tr(ea)).a.a.a;a="readOCLCode";d=null}catch(yd){if(yd=So(yd),!E(yd,102))throw yd;}e=!1;if(null!=b&&null==d)try{(e=ZP(this.a,b,!1))&&this.c&&NN(this.a,a,0,0,0,!0)}catch(Be){if(Be=So(Be),E(Be,102))d="Invalid converted molfile";else throw Be;}this.a.ic=e;\nthis.e?e?gQ(this.e):hQ(this.e,new ep(d)):null!=d&&a3(this.a,d);this.d&&EI(this.a)};Y(663);Y(664);Y(24);Y(29);Y(30);N(z_)(1);\n//@ sourceURL=1.js\n')
