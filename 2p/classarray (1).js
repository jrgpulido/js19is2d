/*
Un escalar es un número

hacer inicializador
*/
class Vector{
        
    constructor(a){
        this.a = a
        this.t = this.a[0]
    }
    initialize(r,val){
        this.r = r
        this.val = val
        for(this.i=0;this.i<this.r;this.i++){
            this.a[this.i] = this.val
        }
    }
    
    min(){
        
        for(let x of this.a){
            if(this.t>x){
            this.t=x
            }
        }
        return this.t
    }

    max(){

        for(let x of this.a){
            if(this.t<x){
            this.t=x
            }
        }
        return this.t
    }

    sum(){
        this.s = 0
        for(let x of this.a){
            this.s +=x
        }
        return this.s
    }
    
    avg(){
        this.s = 0
        for(let x of this.a){
            this.s +=x
        }
        this.div = this.s / this.a.length
        return this.div
    }

    vectorize(start,end,divs){

        this.distancia = end-start
        this.divisions = this.distancia/divs
        this.counter = start
        for(this.i =0;this.i<divs;this.i++){
            this.counter += this.divisions
            this.a[this.i] = this.counter
        }
    }
    getData(){
        return this.a
    }
}
var vector = new Vector([.3,.9,300])