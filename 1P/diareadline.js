print('Escribe el dia de la semana: ')
var dia =(readline());

switch (dia) {
  case ('lunes'): {print('lunes'); break;}
  case ('martes'): {print('martes'); break;}
  case ('miercoles'): {print('miercoles'); break;}
  case ('jueves'): {print('jueves'); break;}
  case ('viernes'): {print('viernes'); break;}
  case ('sabado'): {print('sabado'); break;}
  case ('domingo'): {print('domingo'); break;}
  default: {print('error de entrada: ' + dia)};
}
