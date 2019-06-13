print('Escribe un mes: ')
var mes = Number(readline());

switch (mes) {
  case 1: {print('enero'); break;}
  case 2: {print('febrero'); break;}
  case 3: {print('marzo'); break;}
  case 4: {print('abril'); break;}
  case 5: {print('mayo'); break;}
  case 6: {print('junio'); break;}
  case 7: {print('julio'); break;}
  case 8: {print('agosto'); break;}
  case 9: {print('septiembre'); break;}
  case 10: {print('octubre'); break;}
  case 11: {print('noviembre'); break;}
  case 12: {print('diciembre'); break;}
  default: {print('error de entrada: ' + mes)};
}
print('Escribe el dia de la semana: ')
var dia = Number(readline());

switch (dia) {
  case 1: {print('lunes'); break;}
  case 2: {print('martes'); break;}
  case 3: {print('miercoles'); break;}
  case 4: {print('jueves'); break;}
  case 5: {print('viernes'); break;}
  case 6: {print('sabado'); break;}
  case 7: {print('domingo'); break;}
  default: {print('error de entrada: ' + dia)};
}
