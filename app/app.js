class Puntoxy{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.info=function(){
            return '<div> ( '+this.x+', '+this.y+' )<div>';
        }
    }
}

let Grupoxy=function(){
    this.datos=new Array();

    this.agregar=function(nuevo){
        this.datos.push(nuevo);
    }

    this.listar=function(){
        let res="";
        for(let i=0;i<this.datos.length;i++)
        {
          res+=this.datos[i].info()+'<br>';
        }
        return res

    }

    this.formula=function(){
        let res=""
        let X1,Y1,X2,Y2,p1,p2,distancia,distanciaf=0;
        for(let i=0;i<this.datos.length;i++){
            if(this.datos[i+1]!=null){
                X1=this.datos[i].x;
                Y1=this.datos[i].y;
                X2=this.datos[i+1].x;
                Y2=this.datos[i+1].y;
                p1=(X2-X1)**2;
                p2=(Y2-Y1)**2;
                distancia=Math.sqrt(p1+p2);
                distanciaf+=distancia;
            }
        }
        res=distanciaf;
        return res;
    }

}

let Grupo= new Grupoxy();

let guardar=document.getElementById('btnAgregar');
guardar.addEventListener('click',()=>{
    let x,y;
    let registro=document.getElementById('resultados');
    x=Math.floor(document.getElementById('X').value);
    y=Math.floor(document.getElementById('Y').value);
    let Punto=new Puntoxy(x,y);
    Grupo.agregar(Punto);
    alert('Se agrego exitosamente');
    registro.innerHTML='<h1>Listado</h1>'+Grupo.listar();
});

let Distancia=document.getElementById('btnDistancia');
Distancia.addEventListener('click',()=>{
let resultados2=document.getElementById('resultados2');
resultados2.innerHTML='<h1>Distancia Total</h1>'+Grupo.formula();
});
