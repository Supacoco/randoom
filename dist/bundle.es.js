var CLib=function(e){this.seed=e};CLib.prototype.generate=function(){return this.seed=(1103515245*this.seed+12345)/65536%32768,this.seed/32767};var Hoole=function(e){this.seed=e};Hoole.prototype.generate=function(){return this.seed=(9301*this.seed+49297)%233280,this.seed/233280};var Randu=function(e){this.seed=e};Randu.prototype.generate=function(){return this.seed=65539*this.seed%2147483648,this.seed/2147483648};var Windows=function(e){this.seed=e};Windows.prototype.generate=function(){return this.seed=(214013*this.seed+2531011)/65536%32768,this.seed/32767};var XKCD=function(){return 4},Xorshift=function(e){this.x=123456789,this.y=362436069,this.z=521288629,this.seed=e};Xorshift.prototype.generate=function(){return this.t=2147483647&(this.x^this.x<<11),this.seed=this.seed^this.seed>>19^this.t^this.t>>8,this.x=this.y,this.y=this.z,this.z=this.seed,this.seed/2147483648};export{CLib,Hoole,Randu,Windows,XKCD,Xorshift};
//# sourceMappingURL=bundle.es.js.map
