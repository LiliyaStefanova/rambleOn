String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if(this.length === 0) return hash;
    for(i = 0; i < this.length; i++){
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) +chr;
        hash |= 0; //Convert to 32 bit integer
    }
    return hash;
};

export const createGuid = () =>{
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
};

const S4 = () => (((1+ Math.random())*0x10000)|0).toString(16).substring(1);