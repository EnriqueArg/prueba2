import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Viajesterrestres extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  puntoinicial: string;

  @property({
    type: 'string',
    required: true,
  })
  puntofinal: string;

  @property({
    type: 'number',
    required: true,
  })
  distancia: number;

  @property({
    type: 'boolean',
    required: true,
  })
  finalizado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Viajesterrestres>) {
    super(data);
  }
}

export interface ViajesterrestresRelations {
  // describe navigational properties here
}

export type ViajesterrestresWithRelations = Viajesterrestres & ViajesterrestresRelations;
