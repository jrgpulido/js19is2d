class Point{

    constructor(x,y){
        this.x = x
        this.y = y

        if(typeof(x)==="undefined") this.x = 0
        if(typeof(y)==="undefined") this.y = 0
    }

    toString(){
        return this.x + ',' + this.y
    }
    clone(){
        return new Point(this.x,this.y)
    }
}