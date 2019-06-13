[a,b,c].map(
    function(element){
        if (element==a){
        element=1;
        }
        else if (element==b){
         element=2;
        }
        else if (element==c){
            element=3;

        }
        else element=" ";
        console.log({element:element,index:index,arr:arr})
    }
)
