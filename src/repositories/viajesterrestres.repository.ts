import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PruebaDataSource} from '../datasources';
import {Viajesterrestres, ViajesterrestresRelations} from '../models';

export class ViajesterrestresRepository extends DefaultCrudRepository<
  Viajesterrestres,
  typeof Viajesterrestres.prototype.id,
  ViajesterrestresRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(Viajesterrestres, dataSource);
  }
}
