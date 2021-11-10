import { Component, OnInit, VERSION } from '@angular/core';

class Response {
  medico: Medico = new Medico();
}
class Medico {
  codigoRetorno: number;
  glosaRetorno: string;
  rut: string;
  rutFormateado: string;
  email: string;
  direccion: string;
  latitud: number;
  longitud: number;
  comuna: string;
  ciudad: string;
  region: string;
  telefonoParticular: string;
  telefonoCelular: string;
  telefonoComercial: string;
  telefonoComercial1: string;
  telefonoComercial2: string;
  nombre: string;
  especialidad: string;
  prestadores: Array<Prestador>;
}
class Prestador {
  codigoRetorno: number;
  glosaRetorno: string;
  rut: string;
  rutFormateado: string;
  email: string;
  direccion: string;
  latitud: number;
  longitud: number;
  comuna: object;
  ciudad: string;
  region: string;
  telefonoParticular: string;
  telefonoCelular: string;
  telefonoComercial: string;
  telefonoComercial1: string;
  telefonoComercial2: string;
  id: number;
  correlativo: number;
  nombre: string;
  imed: string;
  bonoWeb: string;
  cantMedicos: number;
  beneficiario: string;
  prestacion: string;
  fechaEmision: string;
  cobrado: number;
  bonificado: number;
  copago: number;
  favorito: number;
  relacion: number;
  user: null;
  origen: number;
  excedentes: null;
  convenioPago: null;
  transaccion: null;
  excedentesMonto: number;
  tipoBono: null;
}

class GroupData {}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  data: any = [];
  medicos: any = [];
  resultReduceMedicos: any = [];
  dataReduceMedicos: any = [];
  duplicados: any = [];
  constructor() {
    this.data = [
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '023201643-4',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0.0,
          longitud: 0.0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'PEREZ PEREZ ROIDEL',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '076702540-8',
          rutFormateado: null,
          email: null,
          direccion: 'MARCHANT PEREIRA 38112312',
          latitud: 0.0,
          longitud: 0.0,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '24268500 -',
          telefonoComercial1: '24268500',
          telefonoComercial2: null,
          id: 0,
          correlativo: 0,
          nombre: 'INMUNOMEDICA SALUD S.A.',
          imed: 'N',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 12670,
        bonificado: 10136,
        copago: 1,
        favorito: 0,
        relacion: 0,
        user: null,
        origen: 0,
        excedentes: null,
        convenioPago: null,
        transaccion: null,
        excedentesMonto: 0,
        tipoBono: null,
      },
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '023201643-4',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0.0,
          longitud: 0.0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'PEREZ PEREZ ROIDEL',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '076702540-8',
          rutFormateado: null,
          email: null,
          direccion: 'MARCHANT PEREIRA 381',
          latitud: 0.0,
          longitud: 0.0,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '24268500 -',
          telefonoComercial1: '24268500',
          telefonoComercial2: null,
          id: 0,
          correlativo: 0,
          nombre: 'INMUNOMEDICA SALUD S.A.',
          imed: 'N',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 12670,
        bonificado: 10136,
        copago: 2534,
        favorito: 0,
        relacion: 0,
        user: null,
        origen: 0,
        excedentes: null,
        convenioPago: null,
        transaccion: null,
        excedentesMonto: 0,
        tipoBono: null,
      },
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '012936728-8',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0.0,
          longitud: 0.0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'LAGUNA DORSON ANA VERONICA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '076702540-8',
          rutFormateado: null,
          email: null,
          direccion: 'MARCHANT PEREIRA 381',
          latitud: 0.0,
          longitud: 0.0,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '24268500 -',
          telefonoComercial1: '24268500',
          telefonoComercial2: null,
          id: 0,
          correlativo: 0,
          nombre: 'INMUNOMEDICA SALUD S.A.',
          imed: 'N',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 12670,
        bonificado: 10136,
        copago: 2534,
        favorito: 0,
        relacion: 0,
        user: null,
        origen: 0,
        excedentes: null,
        convenioPago: null,
        transaccion: null,
        excedentesMonto: 0,
        tipoBono: null,
      },
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '009897273-0',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0.0,
          longitud: 0.0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'OLAVE GARRIDO VILMA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '076499660-7',
          rutFormateado: null,
          email: null,
          direccion: 'MANUEL MONTT 163',
          latitud: 0.0,
          longitud: 0.0,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '24130320 -',
          telefonoComercial1: '24130320',
          telefonoComercial2: null,
          id: 0,
          correlativo: 0,
          nombre: 'DARSALUD LTDA.',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 1,
        bonificado: 1,
        copago: 1,
        favorito: 0,
        relacion: 0,
        user: null,
        origen: 0,
        excedentes: null,
        convenioPago: null,
        transaccion: null,
        excedentesMonto: 0,
        tipoBono: null,
      },
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '026198061-4',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0.0,
          longitud: 0.0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'SOTO SALAZAR CAROLINA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '076499660-7',
          rutFormateado: null,
          email: null,
          direccion: 'MANUEL MONTT 163',
          latitud: 0.0,
          longitud: 0.0,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '24130320 -',
          telefonoComercial1: '24130320',
          telefonoComercial2: null,
          id: 0,
          correlativo: 0,
          nombre: 'DARSALUD LTDA.',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 12803,
        bonificado: 10242,
        copago: 2561,
        favorito: 0,
        relacion: 0,
        user: null,
        origen: 0,
        excedentes: null,
        convenioPago: null,
        transaccion: null,
        excedentesMonto: 0,
        tipoBono: null,
      },
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '009897273-0',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0.0,
          longitud: 0.0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'OLAVE GARRIDO VILMA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '076499660-7',
          rutFormateado: null,
          email: null,
          direccion: '2MANUEL MONTT 163',
          latitud: 0.0,
          longitud: 0.0,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '24130320 -',
          telefonoComercial1: '24130320',
          telefonoComercial2: null,
          id: 0,
          correlativo: 0,
          nombre: 'DARSALUD LTDA.',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 2,
        bonificado: 2,
        copago: 2,
        favorito: 0,
        relacion: 0,
        user: null,
        origen: 0,
        excedentes: null,
        convenioPago: null,
        transaccion: null,
        excedentesMonto: 0,
        tipoBono: null,
      },
    ];
    // console.log('original data', this.data);
  }
  ngOnInit() {
    // Aux de los elementos duplicado / Restantes del Reduce
    let restantes: any = [];
    // Recorremos la data que trae el servicio
    // Asignamos 2 llaves nuevas al servicio original dentro de medico => / Prestadores - Bono
    // Prestadores es un array con el valor por defecto de cada prestador
    // Bono tiene toda la data que esta en la raiz del objeto de vuelto por el servicio original
    this.data.forEach(function (item) {
      Object.assign(item.medico, { Prestadores: [item.prestador] });
      Object.assign(item.medico.Prestadores[0], {
        Bono: {
          beneficiario: item.beneficiario,
          bonificado: item.bonificado,
          cobrado: item.cobrado,
          codigoRetorno: item.codigoRetorno,
          convenioPago: item.convenioPago,
          copago: item.copago,
          excedentes: item.excedentes,
          excedentesMonto: item.excedentesMonto,
          favorito: item.favorito,
          fechaEmision: item.fechaEmision,
          folio: item.folio,
          glosaRetorno: item.glosaRetorno,
          id: item.id,
          origen: item.origen,
          prestacion: item.prestacion,
          relacion: item.relacion,
          tipoBono: item.tipoBono,
          transaccion: item.transaccion,
          user: item.user,
        },
      });
      //Object.assign(item.medico.Prestadores[0], { Bono: item.medico.Bono });
      // console.log('item.medico.Prestadores', item.medico.Prestadores[0]);
    });
    // console.log('this.data', this.data);

    // extraemos todos los medicos del servicio original
    const medicos = this.data.map((x) => x.medico);
    // Reduce para obtener los elementos duplicados segun rut de medico
    this.dataReduceMedicos = medicos.reduce((acc, current, index) => {
      // filtramos por el rut del medico
      this.resultReduceMedicos = acc.find((item) => item.rut === current.rut);
      // Validamos si realmente el item pasado/actual son distintos
      if (!this.resultReduceMedicos) {
        // concatenamos los arrays
        return acc.concat([current]);
      } else {
        // obtenemos los elementos que duplicados
        // los guardamos en el elemento pasado dentro de los Prestadores
        // Aqui deberiamos crear una funcion para ordenar antes de guardar
        this.duplicados.push(current);
        //console.log('acc[0].Prestadores', acc);
        //console.log('current.Prestadores[0]', current.Prestadores[0]);
        // acc[0].Prestadores.push(current.Prestadores[0]);
        return acc;
      }
    }, []);

    const dataReduce = [...this.dataReduceMedicos];

    console.log('this.duplicados', this.duplicados);

    this.duplicados.forEach((findMatch) => {
      const match = this.dataReduceMedicos.find(
        (item) => item.rut === findMatch.rut
      );
      console.log('match', match.Prestadores);

      match.Prestadores.push(findMatch.Prestadores[0]);
    });

    // console.log('this.data original', this.data);
    console.log('this.data final', this.dataReduceMedicos);
  }
}
