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
          rut: '010052381-7',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0,
          longitud: 0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'MATULIC MORENO VESNA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '096942400-2',
          rutFormateado: null,
          email: null,
          direccion: '1 NVA. PROVIDENCIA N°  1920',
          latitud: -33.425156,
          longitud: -70.61335,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '6004256000 - 24317200',
          telefonoComercial1: '6004256000',
          telefonoComercial2: '24317200',
          id: 0,
          correlativo: 0,
          nombre: 'MEGASALUD',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 16920,
        bonificado: 13536,
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
          rut: '010052381-7',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0,
          longitud: 0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'MATULIC MORENO VESNA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '096942400-2',
          rutFormateado: null,
          email: null,
          direccion: '2- NVA. PROVIDENCIA N°  1920',
          latitud: -33.425156,
          longitud: -70.61335,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '6004256000 - 24317200',
          telefonoComercial1: '6004256000',
          telefonoComercial2: '24317200',
          id: 0,
          correlativo: 0,
          nombre: 'MEGASALUD',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 16920,
        bonificado: 13536,
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
      {
        codigoRetorno: 0,
        glosaRetorno: '',
        id: 0,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '010052381-7',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0,
          longitud: 0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'MATULIC MORENO VESNA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '096942400-2',
          rutFormateado: null,
          email: null,
          direccion: '3- NVA. PROVIDENCIA N°  1920',
          latitud: -33.425156,
          longitud: -70.61335,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '6004256000 - 24317200',
          telefonoComercial1: '6004256000',
          telefonoComercial2: '24317200',
          id: 0,
          correlativo: 0,
          nombre: 'MEGASALUD',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 16920,
        bonificado: 13536,
        copago: 3384,
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
        id: 1,
        folio: 0,
        medico: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '017087260-6',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0,
          longitud: 0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'SHERTZER BYRT CAMILA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '096942400-2',
          rutFormateado: null,
          email: null,
          direccion: 'NVA. PROVIDENCIA N°  1920',
          latitud: -33.425156,
          longitud: -70.61335,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '6004256000 - 24317200',
          telefonoComercial1: '6004256000',
          telefonoComercial2: '24317200',
          id: 0,
          correlativo: 0,
          nombre: 'MEGASALUD',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 16920,
        bonificado: 13536,
        copago: 3384,
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
          rut: '007463897-K',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0,
          longitud: 0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'CARRASCO ALARCON OLGA',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '096942400-2',
          rutFormateado: null,
          email: null,
          direccion: 'NVA. PROVIDENCIA N°  1920',
          latitud: -33.425156,
          longitud: -70.61335,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '6004256000 - 24317200',
          telefonoComercial1: '6004256000',
          telefonoComercial2: '24317200',
          id: 0,
          correlativo: 0,
          nombre: 'MEGASALUD',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 16920,
        bonificado: 13536,
        copago: 3384,
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
          rut: '018392973-9',
          rutFormateado: null,
          email: null,
          direccion: null,
          latitud: 0,
          longitud: 0,
          comuna: null,
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: null,
          telefonoComercial1: null,
          telefonoComercial2: null,
          nombre: 'OLEA MUÑOZ ANTONIA PAZ',
          especialidad: null,
        },
        prestador: {
          codigoRetorno: 0,
          glosaRetorno: '',
          rut: '096942400-2',
          rutFormateado: null,
          email: null,
          direccion: 'NVA. PROVIDENCIA N°  1920',
          latitud: -33.425156,
          longitud: -70.61335,
          comuna: {
            codigoRetorno: 0,
            id: 0,
            nombre: 'PROVIDENCIA',
          },
          ciudad: null,
          region: null,
          telefonoParticular: null,
          telefonoCelular: null,
          telefonoComercial: '6004256000 - 24317200',
          telefonoComercial1: '6004256000',
          telefonoComercial2: '24317200',
          id: 0,
          correlativo: 0,
          nombre: 'MEGASALUD',
          imed: 'S',
          bonoWeb: 'S',
          cantMedicos: 0,
        },
        beneficiario: null,
        prestacion: null,
        fechaEmision: null,
        cobrado: 70000,
        bonificado: 600,
        copago: 4000,
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
    console.log('original data', this.data);
  }
  ngOnInit() {
    // Aux de los elementos duplicado / Restantes del Reduce
    let restantes: any = [];
    // Recorremos la data que trae el servicio
    // Asignamos 2 llaves nuevas al servicio original dentro de medico => / Prestadores - Bono
    // Prestadores es un array con el valor por defecto de cada prestador
    // Bono tiene toda la data que esta en la raiz del objeto de vuelto por el servicio original
    this.data.forEach(function (item) {
      Object.assign(item.medico, {
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
      Object.assign(item.medico, { Prestadores: [item.prestador] });
      // console.log('item', item);
    });

    // extraemos todos los medicos del servicio original
    const medicos = this.data.map((x) => x.medico);
    // Reduce para obtener los elementos duplicados segun rut de medico
    const dataReduceMedicos = medicos.reduce((acc, current) => {
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
        acc[0].Prestadores.push(current.Prestadores[0]);
        return acc;
      }
    }, []);

    const dataReduce = [...dataReduceMedicos];
    console.log('this.data final', dataReduceMedicos);
  }
}
