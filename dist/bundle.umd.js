!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.randoom=e.randoom||{})}(this,function(e){"use strict";var t=function(e){this.seed=e};t.prototype.generate=function(){return this.seed=(1103515245*this.seed+12345)/65536%32768,this.seed/32767};var s=function(e){this.seed=e};s.prototype.generate=function(){return this.seed=(9301*this.seed+49297)%233280,this.seed/233280};var i=function(e){this.seed=e};i.prototype.generate=function(){return this.seed=65539*this.seed%2147483648,this.seed/2147483648};var n=function(e){this.seed=e};n.prototype.generate=function(){return this.seed=(214013*this.seed+2531011)/65536%32768,this.seed/32767};var o=function(){};o.prototype.generate=function(){return 4};var r=function(e){this.x=123456789,this.y=362436069,this.z=521288629,this.seed=e};r.prototype.generate=function(){return this.t=2147483647&(this.x^this.x<<11),this.seed=this.seed^this.seed>>19^this.t^this.t>>8,this.x=this.y,this.y=this.z,this.z=this.seed,this.seed/2147483648},e.CLib=t,e.Hoole=s,e.Randu=i,e.Windows=n,e.XKCD=o,e.Xorshift=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
