$wnd.jsme.runAsyncCallback7('var x6="!a",y6=\'" fill="\',z6="M",A6="r";function B6(a){var b;b=a.N.c*C6(a.J);a.U=0.06*b;a.P=0.15*b;a.O=0.38*b;a.S=0.47*b;a.T=I(0.6*b*a.H+0.5);a.R=0.12*b;a.V=0.4*b;a.B=0.5*b+0.5}\nfunction D6(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new E6;F6(a.J,uq(a.J,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);G6(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;H6(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;H6(a,e);G6(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;H6(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;H6(a,e);G6(a,a.M)}\nfunction I6(a,b,c,d){if(F6(a.J,uq(a.J,c,d)))G6(a,-3),H6(a,b),G6(a,a.M);else if(a.r[c]!=a.r[d]){var e,f;e=new E6;f=new E6;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;J6(a,e)&&(G6(a,a.r[c]),H6(a,e));J6(a,f)&&(G6(a,a.r[d]),H6(a,f));G6(a,a.M)}else 0!=a.r[c]?(G6(a,a.r[c]),H6(a,b),G6(a,a.M)):H6(a,b)}\nfunction K6(a,b){var c;for(c=0;c<a.W.c;++c)a.w=L6(a.w,ko(a.W,c));var d,e,f,g,h;d=C($n,Um,-1,a.J.o,2);for(c=0;c<a.J.p;++c)0!=(a.J.C[c]&131072)&&(d[D(a.J,0,c)]=!0,d[D(a.J,1,c)]=!0);f=new IJ;for(c=0;c<a.J.o;++c)e=0!=(a.J.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=M6(a.N,wo(a.J,c)),h=N6(a.N,xo(a.J,c)),VI(f,g-e,h-e,2*e,2*e),a.w=L6(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction O6(a,b){var c,d;if(0!=(a.E&128))return a.r[b];d=P6(a,b);if(-1==d){c=a.J;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=P6(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction P6(a,b){var c,d,e;d=e=-1;if(0!=(a.E&128))return-1;0!=(a.J.s[b]&134217728)&&(e=Vp(a.J,b),d=Wp(a.J,b));c=vp(a.J,b);-1!=c&&(e=(a.J.C[c]&3072)>>10,d=Xp(a.J,c));-1!=e&&0!=e&&(e|=d<<8);return e}function Q6(a,b){var c;if(0==go(a.J,b))return!1;for(c=0;c<go(a.J,b);++c)if(!F6(a.J,co(a.J,b,c)))return!1;return!0}function R6(a){var b;a.s=C($n,Um,-1,a.J.o,2);for(b=0;b<a.J.p;++b)a.s[D(a.J,0,b)]=!0,a.s[D(a.J,1,b)]=!0}\nfunction S6(a,b,c,d,e){var f,g,h,j,l,m,q;m=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=Eo(a.J,b,c);for(j=0;j<a.J.f[b];++j)g=co(a.J,b,j),h=q,D(a.J,0,g)==b?l=D(a.J,1,g):l=D(a.J,0,g),l!=c&&(g=Eo(a.J,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(m=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.P*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(m=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.P*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return m}function T6(a,b,c,d){0==b?(0>c?d.a=a.P:d.a=-a.P,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.P*Math.sin(c)),d.b=a.P*Math.cos(c))}\nfunction U6(a,b,c,d){var e,f,g,h,j,l,m,q;e=new E6;h=new E6;l=new GJ;j=new GJ;f=D(a.J,0,c);g=D(a.J,1,c);d&&(m=b.a,b.a=b.b,b.b=m,m=b.c,b.c=b.d,b.d=m,m=f,f=g,g=m);if(J6(a,b))if(Ao(a.J,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-V6(a,c):V6(a,c);0==d&&(d=1);T6(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,S6(a,f,g,1,j)||1<a.J.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,S6(a,f,g,-1,j)||1<a.J.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.J.E[c]&&\nW6(e,h);J6(a,e)&&I6(a,e,f,g);64==a.J.E[c]?J6(a,h)&&D6(a,h,f,g):J6(a,h)&&I6(a,h,f,g)}else{T6(a,b.b-b.a,b.d-b.c,l);m=l.a/2;q=l.b/2;d=!1;e.a=b.a+m;e.c=b.c+q;e.b=b.b+m;e.d=b.d+q;if(1<a.J.f[f])if(S6(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.J.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new X6(e.a,e.c);h.a=b.a-m;h.c=b.c-q;h.b=b.b-m;h.d=b.d-q;if(1<a.J.f[f])if(S6(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.J.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new X6(h.a,h.c),d=!0;26==a.J.E[c]&&W6(e,h);64==\na.J.E[c]?d?(D6(a,e,f,g),I6(a,h,f,g)):(I6(a,e,f,g),D6(a,h,f,g)):(I6(a,e,f,g),I6(a,h,f,g))}}\nfunction Y6(a,b){var c,d,e,f,g,h,j,l,m,q,r,t;a.I||(r=N6(a.N,xo(a.J,b)),r=\'<circle id="\'+(null!=a.k?a.k:Zj+Z6)+":Atom:"+b+\'" class="event" cx="\'+I(100*M6(a.N,wo(a.J,b)))/100+Pa+I(100*r)/100+\'" r="8" fill-opacity="0"/>\',dq(a.b,r));h=null;0!=a.J.q[b]&&(r=1==kr(a.J.q[b])?n:n+kr(a.J.q[b]),h=0>a.J.q[b]?r+dc:r+Tb);g=null;r=a.J.w[b];0!=r&&(0!=(r&2)&&(g=Dh),0!=(r&4)&&(g=null==g?x6:g+",!a"),0!=(r&4096)&&(g=null==g?fl:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?ii:g+",c":8==e?g=null==g?A6:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+((r&29360128)>>\n22):g+",rs"+((r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.J.v[b]&&(g=null==g?n+a.J.v[b]:g+Xb+(n+a.J.v[b]));r=0;if(0!=(a.J.s[b]&48))switch(a.J.s[b]&48){case 16:h=null==h?km:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.E&64))if(0!=(a.J.s[b]&67108864))e=fe;else if(0!=(a.J.s[b]&98304)>>15)if(2==a.J.f[b])switch((a.J.s[b]&98304)>>15){case 2:e=0!=(a.J.s[b]&4)?Ck:Ag;break;case 1:e=0!=(a.J.s[b]&4)?Gj:z6;break;default:e=Sb}else switch((a.J.s[b]&98304)>>15){case 1:e=0!=\n(a.J.s[b]&4)?A6:Dg;break;case 2:e=0!=(a.J.s[b]&4)?fl:Wg;break;default:e=Sb}0!=(a.E&1792)&&(e=null==e?n+(null==a.J.b.d?-1:a.J.b.d[b]):e+Xb+(n+(null==a.J.b.d?-1:a.J.b.d[b])));m=null;0!=(a.E&16)&&0!=kr(a.J.u[b])&&(m=n+kr(a.J.u[b]));l=null;a:{j=a.J;Zn(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<go(j,j.e[b][d]);++c){if(Jq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(Jq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=P6(a,b),\n-1!=j&&(l=0==j?Eh:(1==(j&255)?Fb:zk)+(1+(j>>8))));j=0;a.J.H?((6!=a.J.A[b]||!a.s[b])&&0!=(a.J.w[b]&2048)&&0!=a.J.q[b]||0!=(a.J.s[b]&48))&&(j=kp(a.J,b)):(6!=a.J.A[b]||!a.s[b]||0!=(a.J.s[b]&48))&&(j=kp(a.J,b));c=Rp(a.J,b);if(null!=c)j=0;else if(null!=Gp(a.J,b)){d=0!=(a.J.w[b]&1)?"[!":sh;c=a.J;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?n:Kq[c.A[b]];else{t=n;for(q=0;q<c.t[b].length;++q)0<q&&(t+=Xb),f=c.t[b][q],t+=Kq[f];c=t}c=d+c+Ah;5<c.length&&(c=d+Gp(a.J,b).length+Ah);0!=(a.J.w[b]&2048)&&(j=-1)}else 0!=\n(a.J.w[b]&1)?(c=fe,0!=(a.J.w[b]&2048)&&(j=-1)):(6!=a.J.A[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=Kq[a.J.A[b]]);d=0;!Up(a.J,b)&0!=(a.J.w[b]&536870912)&&G6(a,-8);if(null!=c)d=$6(a,c),a7(a,M6(a.N,wo(a.J,b)),N6(a.N,xo(a.J,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.J.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.J.j[b][c]){c=!1;break a}c=!0}c&&(c=M6(a.N,wo(a.J,b)),f=N6(a.N,xo(a.J,b)),dq(a.W,new JJ(c-a.R,f-a.R,2*a.R,2*a.R)),a.I||dq(a.Q,new b7(c,f,Q6(a,b)?-3:a.r[b])))}null!=h&&(c7(a,~~((2*a.T+1)/3)),f=M6(a.N,wo(a.J,b))+\n((d+$6(a,h))/2+1),c=N6(a.N,xo(a.J,b))-~~((4*a.o-4)/8),a7(a,f,c,h,!0),c7(a,a.T));0!=(a.E&2)&&(g=n+b);null!=g&&(c7(a,~~((2*a.T+1)/3)),f=M6(a.N,wo(a.J,b))-(d+$6(a,g))/2,c=N6(a.N,xo(a.J,b))-~~((4*a.o-4)/8),a7(a,f,c,g,!0),c7(a,a.T));null!=e&&(c7(a,~~((2*a.T+1)/3)),f=M6(a.N,wo(a.J,b))-(d+$6(a,e))/2,c=N6(a.N,xo(a.J,b))+~~((4*a.o+4)/8),q=a.C,G6(a,448),a7(a,f,c,e,!1),G6(a,q),c7(a,a.T));null!=m&&(c7(a,~~((2*a.T+1)/3)),f=M6(a.N,wo(a.J,b))+((d+$6(a,m))/2+1),c=N6(a.N,xo(a.J,b))+~~((4*a.o+4)/8),q=a.C,G6(a,0>a.J.u[b]?\n384:448),a7(a,f,c,m,!0),G6(a,q),c7(a,a.T));if(null!=l){var y,u;c=C(vo,Lm,-1,go(a.J,b),1);for(f=0;f<go(a.J,b);++f)c[f]=Eo(a.J,b,eo(a.J,b,f));lp(c);q=d7(c,0);t=e7(c,0,q);for(f=1;f<c.length;++f)y=d7(c,f),u=e7(c,f,y),t<u&&(t=u,q=y);c=q;c7(a,~~((2*a.T+1)/3));f=M6(a.N,wo(a.J,b))+0.7*a.o*Math.sin(c);c=N6(a.N,xo(a.J,b))+0.7*a.o*Math.cos(c);q=a.C;G6(a,O6(a,b));a7(a,f,c,l,!1);G6(a,q);c7(a,a.T)}if(!(0==j&&0==r)){l=C(vo,Lm,-1,4,1);for(c=0;c<go(a.J,b);++c){f=co(a.J,b,c);for(q=0;2>q;++q)D(a.J,q,f)==b&&(t=Eo(a.J,\nD(a.J,q,f),D(a.J,1-q,f)),-1.5707963267948966>t?(l[0]-=t+1.5707963267948966,l[3]+=t+3.141592653589793):0>t?(l[2]+=t+1.5707963267948966,l[3]-=t):1.5707963267948966>t?(l[1]+=t,l[2]+=1.5707963267948966-t):(l[0]+=t-1.5707963267948966,l[1]+=3.141592653589793-t))}0==a.J.f[b]?zr(a.J.A[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=m)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=n;0!=j&&(f=$6(a,Af),m=0,-1==j?(e=jk,c7(a,~~((2*a.T+1)/3)),m=$6(a,e)):1<j&&(e=n+j,c7(a,~~((2*a.T+1)/3)),m=$6(a,e)),0.6>l[1]||0.6>\nl[3]?(h=N6(a.N,xo(a.J,b)),l[1]<=l[3]?(l[1]+=10,g=M6(a.N,wo(a.J,b))+(d+f)/2):(l[3]+=10,g=M6(a.N,wo(a.J,b))-(d+f)/2-m)):(g=M6(a.N,wo(a.J,b)),l[0]<l[2]?(l[0]+=10,h=N6(a.N,xo(a.J,b))-a.o):(l[2]+=10,h=N6(a.N,xo(a.J,b))+a.o)),0<m&&(c=h+~~((4*a.o+4)/8),a7(a,g+(f+m)/2,c,e,!0),c7(a,a.T)),a7(a,g,h,Af,!0));e=0;if(0!=r){m=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<m?(e=c,m=l[c],g=l[h]):l[c]==m&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=M6(a.N,wo(a.J,b));h=N6(a.N,xo(a.J,b))-a.R-d/2;break;case 1:g=M6(a.N,wo(a.J,b))+\na.R+d/2;h=N6(a.N,xo(a.J,b));break;case 2:g=M6(a.N,wo(a.J,b));h=N6(a.N,xo(a.J,b))+a.R+d/2;break;default:g=M6(a.N,wo(a.J,b))-a.R-d/2,h=N6(a.N,xo(a.J,b))}if(1==r)dq(a.W,new JJ(g-a.R,h-a.R,2*a.R,2*a.R)),a.I||dq(a.Q,new b7(g,h,Q6(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.R;e=0;g-=a.R;break;case 1:r=0;e=2*a.R;h-=a.R;break;default:r=0,e=2*a.R,h-=a.R}dq(a.W,new JJ(g-a.R,h-a.R,2*a.R,2*a.R));a.I||dq(a.Q,new b7(g,h,Q6(a,b)?-3:a.r[b]));dq(a.W,new JJ(g+r-a.R,h+e-a.R,2*a.R,2*a.R));a.I||dq(a.Q,new b7(g+\nr,h+e,Q6(a,b)?-3:a.r[b]))}}}-8==a.C&&G6(a,-9)}\nfunction f7(a,b){var c,d,e,f,g,h,j,l,m,q,r,t;m=new E6;c=new E6;f=new E6;j=new GJ;h=new GJ;d=D(a.J,0,b);e=D(a.J,1,b);var y=N6(a.N,xo(a.J,d)),u=M6(a.N,wo(a.J,e)),s=N6(a.N,xo(a.J,e)),y=\'<line id="\'+(null!=a.k?a.k:Zj+Z6)+":Bond:"+d+dc+e+\'" class="event" x1="\'+I(100*M6(a.N,wo(a.J,d)))/100+bb+I(100*y)/100+Za+I(100*u)/100+cb+I(100*s)/100+\'" stroke-width="8" stroke-opacity="0"/>\';dq(a.c,y);!Up(a.J,d)&&!Up(a.J,e)&&0!=((a.J.w[d]|a.J.w[e])&536870912)&&G6(a,-8);a.q[d]?(m.a=a.q[d].a,m.c=a.q[d].b):(m.a=M6(a.N,\nwo(a.J,d)),m.c=N6(a.N,xo(a.J,d)));a.q[e]?(m.b=a.q[e].a,m.d=a.q[e].b):(m.b=M6(a.N,wo(a.J,e)),m.d=N6(a.N,xo(a.J,e)));if(0!=(a.J.D[b]&16320))J6(a,m)&&(g=n+I(100*m.a)/100,l=n+I(100*m.b)/100,q=n+I(100*m.c)/100,r=n+I(100*m.d)/100,t=\'<line stroke-dasharray="3, 3" x1="\'+g+bb+q+Za+l+cb+r+Wa+a.e+\'" stroke-width:\'+I(100*a.n)/100+fb,g7(a,t)),G6(a,-9);else{g=64==a.J.E[b]?0:32==a.J.E[b]?1:ho(a.J,b);switch(g){case 1:switch(a.J.E[b]){case 1:J6(a,m)&&I6(a,m,d,e);break;case 17:h7(a,m,d,e);break;case 9:h=m.b-m.a;j=\nm.d-m.c;F6(a.J,uq(a.J,d,e))?f=e=-3:(e=a.r[d],f=O6(a,d),e==(a.J.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=m.a+d*h/17-d*j/128,c.c=m.c+d*j/17+d*h/128,c.b=m.a+d*h/17+d*j/128,c.d=m.c+d*j/17-d*h/128,J6(a,c)&&(G6(a,9>d?e:f),H6(a,c),G6(a,a.M));break;case 32:if(J6(a,m)){f=m.b-m.a;j=m.d-m.c;c=Math.sqrt(f*f+j*j);c=2*J(L(N(c/(4*a.U))));f/=c-1;j/=c-1;F6(a.J,uq(a.J,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=m.a-a.U/2;m=m.c-a.U/2;G6(a,d);for(d=0;d<~~(c/2);++d)i7(a,h,m,a.U),h+=f,m+=j;G6(a,e);for(d=0;d<~~(c/2);++d)i7(a,h,m,\na.U),h+=f,m+=j;G6(a,a.M)}}break;case 0:case 2:if((a.t[d]||2==a.J.k[d])&&(a.t[e]||2==a.J.k[e])&&!Ao(a.J,b)&&2==g){if(!J6(a,m))break;T6(a,m.b-m.a,m.d-m.c,j);h=j.a/2;j=j.b/2;c.a=m.a+h;c.c=m.c+j;c.b=m.b+h;c.d=m.d+j;f.a=m.a-h;f.c=m.c-j;f.b=m.b-h;f.d=m.d-j;26==a.J.E[b]&&W6(c,f);I6(a,c,d,e);I6(a,f,d,e)}else if((a.t[e]||2==a.J.k[e])&&2==g)U6(a,m,b,!1);else if((a.t[d]||2==a.J.k[d])&&2==g)U6(a,m,b,!0);else{l=V6(a,b);0==l&&(l=1);c.a=m.a;c.c=m.c;c.b=m.b;c.d=m.d;T6(a,m.b-m.a,m.d-m.c,j);if(0<l){f.a=m.a+j.a;f.c=\nm.c+j.b;f.b=m.b+j.a;f.d=m.d+j.b;if(S6(a,d,e,1,h)||1<a.J.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(S6(a,e,d,-1,h)||1<a.J.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=m.a-j.a;f.c=m.c-j.b;f.b=m.b-j.a;f.d=m.d-j.b;if(S6(a,d,e,-1,h)||1<a.J.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(S6(a,e,d,1,h)||1<a.J.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.J.E[b]&&W6(c,f);J6(a,c)&&I6(a,c,d,e);2==g?J6(a,f)&&I6(a,f,d,e):J6(a,f)&&D6(a,f,d,e)}break;case 3:J6(a,m)&&(I6(a,m,d,e),T6(a,m.b-m.a,m.d-m.c,j),c.a=m.a+j.a,c.c=m.c+j.b,c.b=m.b+j.a,c.d=m.d+j.b,\nI6(a,c,d,e),c.a=m.a-j.a,c.c=m.c-j.b,c.b=m.b-j.a,c.d=m.d-j.b,I6(a,c,d,e))}-8==a.C&&G6(a,-9)}}function a7(a,b,c,d,e){var f;e&&(e=$6(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Tb||d==dc)&&(f=2*f/3),dq(a.W,new JJ(b-e,c-f,2*e,2*f)));a.I||j7(a,d,b,c)}function k7(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction e7(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function l7(a){var b;b=new IJ;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function d7(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction h7(a,b,c,d){var e,f,g;g=new E6;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=l7(g);for(b=0;b<a.W.c;++b)if(e=ko(a.W,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(m7(a,g.a,g.c,b)){if(m7(a,g.b,g.d,b))return;n7(a,g,0,b);h7(a,g,c,d);return}if(m7(a,g.b,g.d,b)){n7(a,g,1,b);h7(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(vo,Lm,-1,3,1);e=C(vo,Lm,-1,3,1);f=C(vo,Lm,-1,4,1);h=C(vo,Lm,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];F6(a.J,uq(a.J,c,d))?g=d=-3:(d=a.r[c],g=O6(a,c),d==(a.J.s[c]&448)&&(d=g));G6(a,d);a.Gd(b,e,3);G6(a,g);a.Gd(f,h,4);G6(a,a.M)}}function m7(a,b,c,d){if(0!=(a.E&1))return!1;a=ko(a.W,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function W6(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction V6(a,b){var c,d,e,f,g,h,j,l,m,q;j=C($n,Um,-1,16,2);l=C($n,Um,-1,16,2);c=C(vo,Lm,-1,16,1);f=C(vo,Lm,-1,2,1);for(h=d=0;2>h;++h){e=D(a.J,h,b);for(m=0;m<a.J.f[e];++m)if(g=co(a.J,e,m),g!=b){if(4==d)return 0;j[d]=uo(a.J,g);l[d]=Ao(a.J,g);c[d++]=Eo(a.J,e,eo(a.J,e,m))}}f[0]=Eo(a.J,D(a.J,0,b),D(a.J,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction J6(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.W.c;++d)if(e=ko(a.W,d),TI(e,b.a,b.c))return!1;return!0}f=l7(b);c=!1;b.a>b.b&&(k7(b),c=!0);for(d=0;d<a.W.c;++d)if(e=ko(a.W,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(m7(a,b.a,b.c,d)){if(m7(a,b.b,b.d,d))return c&&k7(b),!1;n7(a,b,0,d);d=J6(a,b);c&&k7(b);return d}if(m7(a,b.b,b.d,d))return n7(a,b,1,d),d=J6(a,b),c&&k7(b),d}c&&k7(b);return!0}\nfunction n7(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=ko(a.W,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction o7(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.A.a=b.d+b.c/2;a.A.b=b.e+b.b-c;break}case 0:a.A.a=a.w.d+a.w.c/2;a.A.b=a.w.e+a.w.b+c;b&&a.A.b>b.e+b.b-c&&(a.A.b=b.e+b.b-c);break;case 524288:if(b){a.A.a=b.d+b.c/2;a.A.b=b.e+c;break}case 262144:a.A.a=a.w.d+a.w.c/2,a.A.b=a.w.e-c,b&&a.A.b<b.e+c&&(a.A.b=b.e+c)}}\nfunction G6(a,b){if(!a.I&&(-10==b&&(a.C=-999,b=a.M),!(b==a.C||-8==a.C&&-9!=b)))switch(-8==b&&(a.L=a.C),-9==b&&(b=a.L),a.C=b,b){case 0:a.Hd((NH(),VH));break;case -6:a.Hd(a.D);break;case -4:a.Hd(a.K);break;case -2:a.Hd(a.u);break;case -3:a.Hd(a.v);break;case -7:a.Hd(a.F);break;case -8:a.Hd(a.G);break;case 64:a.Hd(Rn);break;case 128:a.Hd(Sn);break;case 256:a.Hd(Un);break;case 192:a.Hd(Tn);break;case 320:a.Hd(Vn);break;case 384:a.Hd(Wn);break;case 448:a.Hd(Xn);break;case 1:a.Hd((NH(),SH));break;default:a.Hd((NH(),\nVH))}}function p7(a){var b,c,d,e,f;e=M6(a.N,a.J.G[0].a);c=M6(a.N,a.J.G[0].a);f=N6(a.N,a.J.G[0].b);d=N6(a.N,a.J.G[0].b);for(b=0;b<a.J.o;++b)e>M6(a.N,wo(a.J,b))&&(e=M6(a.N,wo(a.J,b))),c<M6(a.N,wo(a.J,b))&&(c=M6(a.N,wo(a.J,b))),f>N6(a.N,xo(a.J,b))&&(f=N6(a.N,xo(a.J,b))),d<N6(a.N,xo(a.J,b))&&(d=N6(a.N,xo(a.J,b)));a.w=new JJ(e,f,c-e,d-f)}x(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.A=null;_.B=0;_.C=0;_.D=null;_.E=0;_.F=null;_.G=null;_.H=0;_.I=!1;_.J=null;_.K=null;_.L=0;_.M=0;_.N=null;\n_.O=0;_.P=0;_.Q=null;_.R=0;_.S=0;_.T=0;_.U=0;_.V=0;_.W=null;function b7(a,b,c){this.b=a;this.c=b;this.a=c}x(4,1,{},b7);_.a=0;_.b=0;_.c=0;function E6(){}x(5,1,{},E6);_.a=0;_.b=0;_.c=0;_.d=0;function q7(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function r7(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function M6(a,b){return b*a.c+a.a}function N6(a,b){return b*a.c+a.b}function s7(){this.b=this.a=0;this.c=1}\nfunction t7(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}x(19,1,{},s7,t7);_.tS=function(){return"DepictorTransformation Offset: "+this.a+Xb+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function C6(a){return Xq(a,a.o,a.p,24)}function F6(a,b){return 0!=(a.C[b]&262144)}\nfunction H6(a,b){var c,d,e,f;c=n+I(100*b.a)/100;d=n+I(100*b.b)/100;e=n+I(100*b.c)/100;f=n+I(100*b.d)/100;c=Vd+c+bb+e+Za+d+cb+f+\'" style="stroke:\'+a.e+";stroke-width:"+I(100*a.n)/100+fb;g7(a,c)}function j7(a,b,c,d){$6(a,b);b=ce+I(100*c)/100+\'" text-anchor="middle" y="\'+I(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+y6+a.e+mb+b+Ud;g7(a,b)}function i7(a,b,c,d){b=\'<circle cx="\'+I(100*b)/100+Pa+I(100*c)/100+\'" r="\'+I(100*d)/100+y6+a.e+\'" />\';g7(a,b)}\nfunction $6(a,b){var c;c=qR();if(-1<c&&9>c)return!a.i&&(a.i=(MG(),new NG(a.f))),c=eJ(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=u7;e||(u7=e=$doc.createElement("canvas"));d=n+d.b+Ok+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new JJ(0,0,c.width,0)).c}function c7(a,b){a.o!=b&&(a.o=b,a.f=new AI(Cf,0,b))}\nfunction v7(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:Zj+Z6)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Ld(ha)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ha+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:Zj+Z6)+" {pointer-events:none; }  #"+(null!=a.k?a.k:Zj+Z6)+" .event  { pointer-events:all;}  <\/style>\\n";d+=ca;d+=b;for(c=new iq(a.c);c.b<c.d.sg();)b=jq(c),g7(a,b);for(c=new iq(a.b);c.b<c.d.sg();)b=jq(c),g7(a,b);return d+a.Kd(ca)+xx(a.d.a)+Rd}\nfunction g7(a,b){P(a.d,ca);P(a.d,b);P(a.d,ga)}x(28,3,{});_.Kd=kU;_.Ld=kU;_.Gd=function(a,b,c){var d,e;e=new hB(\'<polygon points="\');for(d=0;d<c;++d){var f=n+I(100*a[d])/100;fw(e.a,f);fw(e.a,Xb);f=n+I(100*b[d])/100;fw(e.a,f);fw(e.a,ha)}fw(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');g7(this,xx(e.a))};_.Hd=function(a){this.e=Yk+(a.d>>16&255)+Xb+(a.d>>8&255)+Xb+(a.d&255)+Ob};_.tS=function(){return v7(this)};_.e=$h;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var Z6=0;\nfunction w7(a){var b;Zn(a,15);b=a.F&65535;switch(a.F&-65536){case 65536:return null;case 131072:return 1==b?"meso":n+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":n+b+" stereo isomers"}}function x7(){x7=z;y7=A(iI,tn,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction z7(a,b){x7();var c,d,e,f,g,h;c=!b?1:(y7[0]*(b.d>>16&255)+y7[1]*(b.d>>8&255)+y7[2]*(b.d&255))/255;f=!a?1:(y7[0]*(a.d>>16&255)+y7[1]*(a.d>>8&255)+y7[2]*(a.d&255))/255;e=Gq(c-f);if(0.30000001192092896<e)return a;d=C(iI,tn,-1,3,1);A7(b.d>>16&255,b.d>>8&255,b.d&255,d);g=C(iI,tn,-1,3,1);A7(a.d>>16&255,a.d>>8&255,a.d&255,g);h=Gq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=Gq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;else if(e=(f>c?1<\nf+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(iI,tn,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(a.d>>24&255)/255,f=c,null==f&&(f=C(iI,tn,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(a.d>>8&255)/255,f[0]=(a.d>>16&255)/255),f=!a?1:(y7[0]*(a.d>>16&255)+y7[1]*(a.d>>8&255)+y7[2]*(a.d&255))/255,0==f)c=new hI(f,f,f,c[3]);else{d=e/(!a?1:(y7[0]*(a.d>>16&255)+y7[1]*(a.d>>8&255)+y7[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=y7[e]:(h+=(c[e]-1)*y7[e],c[e]=1);if(0!=h){for(e=\nd=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*y7[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/y7[e],1<c[e]&&(c[e]=1))}c=new hI(c[0],c[1],c[2],c[3])}return c}var y7;function B7(a){NH();this.d=a|-16777216}function A7(a,b,c,d){NH();var e,f,g,h,j,l;null==d&&(d=C(iI,tn,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}x(471,1,{58:1,67:1,71:1},B7);\nvar u7=null;function X6(a,b){this.a=a;this.b=b}x(523,494,{80:1,81:1},X6);function L6(a,b){var c;c=new IJ;UI(a,b,c);return c}\nfunction C7(a){var b,c;b=YL(a,!1,!0);c=null;a=new rs;if(Zr(new os,a,new RJ(new VJ(b)))){a=new D7(a,b);b=new JJ(0,0,400,300);var d;if(0!=a.J.o){a.p=I(b.c);a.j=I(b.b);0==a.J.o?c=null:(p7(a),c=a.N.c*C6(a.J),d=new t7(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(q7(d,a.N),r7(d,a.w)),o7(a,b,c,131072),c=d);Zn(a.J,0!=(a.E&256)?31:0!=(a.E&512)?47:0!=(a.E&1024)?79:15);R6(a);a.Q.Zg();a.W.Zg();B6(a);c7(a,a.T);a.I=!0;for(d=0;d<a.J.o;++d)Y6(a,d);a.I=!1;d=a.N.c*C6(a.J);K6(a,d);o7(a,b,d,131072);var e;if(!(e=!b)){var f=\na.w;e=f.d;var g=f.e,h=f.c,f=f.b,j,l,m,q;b.hg()||0>=h||0>=f?e=!1:(j=b.d,m=b.e,l=j+b.c,q=m+b.b,e=j<=e&&e+h<=l&&m<=g&&g+f<=q)}e||(b=new t7(a.w,b,d),q7(b,a.N),r7(b,a.w),d=a.A,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&q7(b,c))}if(0!=a.J.o){Zn(a.J,0!=(a.E&256)?31:0!=(a.E&512)?47:0!=(a.E&1024)?79:15);B6(a);b=!1;a.r=C(B,w,-1,a.J.o,1);for(c=0;c<a.J.o;++c)a.r[c]=a.J.s[c]&448,0!=a.r[c]&&(b=!0),Up(a.J,c)&&(a.r[c]=128),0!=(a.J.s[c]&131072)&&0==(a.E&4096)&&(a.r[c]=256);G6(a,-10);if(a.J.H){d=a.S;G6(a,-7);for(c=0;c<a.J.c;++c)0!=\n(a.J.w[c]&536870912)&&i7(a,M6(a.N,wo(a.J,c))-d,N6(a.N,xo(a.J,c))-d,2*d);a.n=2*a.S;g=new E6;for(e=0;e<a.J.p;++e)c=D(a.J,0,e),d=D(a.J,1,e),0!=(a.J.w[c]&a.J.w[d]&536870912)&&(g.a=M6(a.N,wo(a.J,c)),g.c=N6(a.N,xo(a.J,c)),g.b=M6(a.N,wo(a.J,d)),g.d=N6(a.N,xo(a.J,d)),H6(a,g))}a.n=2*a.O;g=new E6;for(e=0;e<a.J.p;++e)c=D(a.J,0,e),d=D(a.J,1,e),0!=(a.J.C[e]&131072)&&(g.a=M6(a.N,wo(a.J,c)),g.c=N6(a.N,xo(a.J,c)),g.b=M6(a.N,wo(a.J,d)),g.d=N6(a.N,xo(a.J,d)),G6(a,-2),H6(a,g));if(a.J.H){G6(a,320);if(0!=(a.E&8))for(c=\n0;c<a.J.c;++c)0!=(a.J.w[c]&-536870913)&&i7(a,M6(a.N,wo(a.J,c))-a.V/2,N6(a.N,xo(a.J,c))-a.V/2,a.V);for(e=0;e<a.J.d;++e)0!=a.J.D[e]&&(c=D(a.J,0,e),d=D(a.J,1,e),i7(a,(M6(a.N,wo(a.J,c))+M6(a.N,wo(a.J,d))-a.V)/2,(N6(a.N,xo(a.J,c))+N6(a.N,xo(a.J,d))-a.V)/2,a.V))}0==(a.E&32)&&(d=w7(a.J),null!=d&&(0==a.A.a&&0==a.A.b&&(c=a.N.c*C6(a.J),p7(a),K6(a,c),o7(a,null,c,0)),c7(a,I(a.B)),G6(a,448),j7(a,d,a.A.a,a.A.b+0.30000001192092896*a.B)));c7(a,a.T);a.n=a.U;G6(a,a.M);R6(a);a.Q.Zg();a.W.Zg();for(c=0;c<a.J.o;++c)Q6(a,\nc)?(G6(a,-3),Y6(a,c),G6(a,a.M)):0!=a.r[c]?(G6(a,a.r[c]),Y6(a,c),G6(a,a.M)):!b&&1!=a.J.A[c]&&6!=a.J.A[c]&&0==(a.E&2048)&&null==Gp(a.J,c)&&a.J.A[c]<Ln.length?(d=a,e=Ln[a.J.A[c]],h=g=void 0,g=(NH(),OH),h=new B7(e),e=z7(h,g),d.C=-5,d.e=Yk+(e.d>>16&255)+Xb+(e.d>>8&255)+Xb+(e.d&255)+Ob,Y6(a,c),G6(a,a.M)):Y6(a,c);for(c=new iq(a.Q);c.b<c.d.sg();)b=jq(c),G6(a,b.a),i7(a,b.b-a.R/2,b.c-a.R/2,a.R);G6(a,a.M);c=!1;for(b=0;b<a.J.d;++b)d=null,0!=(a.J.D[b]&16320)?(e=(a.J.D[b]&960)>>6,d=((a.J.D[b]&960)>>6)+((a.J.D[b]&\n15360)>>10),d=e==d?sh+e+Ah:sh+e+Jd+d+Ah):0!=(a.J.D[b]&786432)?d=262144==(a.J.D[b]&786432)?Dh:32==(a.J.D[b]&48)?"r!a":x6:0!=(a.J.D[b]&48)&&(d=32==(a.J.D[b]&48)?A6:"!r"),e=(a.J.D[b]&114688)>>14,0!=e&&(d=(null==d?n:d)+e),null!=d&&(f=D(a.J,0,b),j=D(a.J,1,b),c||(c7(a,~~((2*a.T+1)/3)),c=!0),g=(M6(a.N,wo(a.J,f))+M6(a.N,wo(a.J,j)))/2,h=(N6(a.N,xo(a.J,f))+N6(a.N,xo(a.J,j)))/2,e=M6(a.N,wo(a.J,j))-M6(a.N,wo(a.J,f)),j=N6(a.N,xo(a.J,j))-N6(a.N,xo(a.J,f)),f=Math.sqrt(e*e+j*j),m=0.6*$6(a,d),l=0.55*a.o,0!=f&&(0<\ne?a7(a,g+m*j/f,h-l*e/f,d,!0):a7(a,g-m*j/f,h+l*e/f,d,!0)));c&&c7(a,a.T);a.q=C(E7,o,81,a.J.o,0);for(b=0;b<a.J.p;++b)(2==a.J.E[b]||26==a.J.E[b]||64==a.J.E[b])&&f7(a,b);for(b=0;b<a.J.p;++b)2!=a.J.E[b]&&26!=a.J.E[b]&&64!=a.J.E[b]&&f7(a,b);if(0==(a.E&64))for(b=0;b<a.J.p;++b)if(0!=(a.J.C[b]&48)>>4){switch((a.J.C[b]&48)>>4){case 1:h=2==ho(a.J,b)?mf:0!=(a.J.C[b]&4)?Ck:Ag;break;case 2:h=2==ho(a.J,b)?"Z":0!=(a.J.C[b]&4)?Gj:z6;break;default:h=fe}c7(a,~~((2*a.T+1)/3));G6(a,F6(a.J,b)?-3:448);e=D(a.J,0,b);g=D(a.J,\n1,b);c=(M6(a.N,wo(a.J,e))+M6(a.N,wo(a.J,g)))/2;d=(N6(a.N,xo(a.J,e))+N6(a.N,xo(a.J,g)))/2;f=(M6(a.N,wo(a.J,e))-M6(a.N,wo(a.J,g)))/3;e=(N6(a.N,xo(a.J,e))-N6(a.N,xo(a.J,g)))/3;a7(a,c+e,d-f,h,!0);G6(a,a.M);c7(a,a.T)}if(0!=(a.E&4)){c7(a,~~((2*a.T+1)/3));G6(a,384);for(b=0;b<a.J.p;++b)e=D(a.J,0,b),g=D(a.J,1,b),h=0!=(a.J.C[b]&512)?"d":uo(a.J,b)?Dh:n,c=(M6(a.N,wo(a.J,e))+M6(a.N,wo(a.J,g)))/2,d=(N6(a.N,xo(a.J,e))+N6(a.N,xo(a.J,g)))/2,a7(a,c,d,h+n+b,!0);G6(a,a.M);c7(a,a.T)}}c=v7(a)}return c}x(699,601,zn);\n_.ce=function(){gO(this.b,C7(this.a))};x(702,601,zn);_.ce=function(){VL(C7(this.a))};\nfunction D7(a,b){var c;Kn();this.w=new IJ;this.J=a;this.E=0;this.H=1;this.N=new s7;this.W=new $p;this.Q=new $p;this.t=C($n,Um,-1,this.J.o,2);this.A=new GJ;this.M=0;this.C=-1;c=(NH(),OH);var d=On;x7();this.u=new Nn(I((c.d>>16&255)+0.30000001192092896*((d.d>>16&255)-(c.d>>16&255))),I((c.d>>8&255)+0.30000001192092896*((d.d>>8&255)-(c.d>>8&255))),I((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=z7(Mn,c);this.F=Qn;this.G=Pn;this.c=new $p;this.b=new $p;this.d=new ew;this.f=new AI(Cf,0,12);\nnew AI(Cf,0,120);this.k=n;++Z6;this.a=b}x(735,28,{},D7);_.Kd=function(a){var b;b=n;null!=this.a&&0<this.a.length&&(b=sR(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",xh),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Ld=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Z(3);Z(28);Z(735);var E7=LS(971,HJ);Z(4);Z(5);Z(19);U(hZ)(7);function kU(){return n};\n//@ sourceURL=7.js\n')
