/*diseñar clase fecha F. tendrá 3 propiedades
dia, mes y año
constructo recibe propiedades
metodos get set para recibir
final, tener un metodo que que aumente 1 dia
y al aumentar un dia, puede cambiar mes y año
incrementaDia*/

class Fecha{

    constructor(dia, mes, year){        
        this._dia=dia;
        this._mes=mes;
        this._year=year;

        if(typeof(dia)!='number' || typeof(mes)!= 'number' || typeof(year)!='number'){
            throw("Escribe sólo números");
        }//if

    }//constructor
        

    incrementarDia(){

        this._dia=this._dia+1;
        if(this._dia>=32){
            this._dia=1;            

            if(this._mes>=12){
                this._mes=1;
                this._year=this._year+1;
            }//if mes            
        }//if dia                     

    } //incrementarDia

    get dia(){return this._dia}
    set dia(x){this._dia=dia;}

    get mes(){return this._mes}
    set mes(x){this._mes=mes;}

    get year(){return this._year}
    set year(x){this._year=year;}
    


}//class Fecha
