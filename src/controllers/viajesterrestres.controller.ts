import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Viajesterrestres} from '../models';
import {ViajesterrestresRepository} from '../repositories';

export class ViajesterrestresController {
  constructor(
    @repository(ViajesterrestresRepository)
    public viajesterrestresRepository : ViajesterrestresRepository,
  ) {}

  @post('/viajesterrestres')
  @response(200, {
    description: 'Viajesterrestres model instance',
    content: {'application/json': {schema: getModelSchemaRef(Viajesterrestres)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viajesterrestres, {
            title: 'NewViajesterrestres',
            exclude: ['id'],
          }),
        },
      },
    })
    viajesterrestres: Omit<Viajesterrestres, 'id'>,
  ): Promise<Viajesterrestres> {
    return this.viajesterrestresRepository.create(viajesterrestres);
  }

  @get('/viajesterrestres/count')
  @response(200, {
    description: 'Viajesterrestres model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Viajesterrestres) where?: Where<Viajesterrestres>,
  ): Promise<Count> {
    return this.viajesterrestresRepository.count(where);
  }

  @get('/viajesterrestres')
  @response(200, {
    description: 'Array of Viajesterrestres model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Viajesterrestres, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Viajesterrestres) filter?: Filter<Viajesterrestres>,
  ): Promise<Viajesterrestres[]> {
    return this.viajesterrestresRepository.find(filter);
  }

  @patch('/viajesterrestres')
  @response(200, {
    description: 'Viajesterrestres PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viajesterrestres, {partial: true}),
        },
      },
    })
    viajesterrestres: Viajesterrestres,
    @param.where(Viajesterrestres) where?: Where<Viajesterrestres>,
  ): Promise<Count> {
    return this.viajesterrestresRepository.updateAll(viajesterrestres, where);
  }

  @get('/viajesterrestres/{id}')
  @response(200, {
    description: 'Viajesterrestres model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Viajesterrestres, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Viajesterrestres, {exclude: 'where'}) filter?: FilterExcludingWhere<Viajesterrestres>
  ): Promise<Viajesterrestres> {
    return this.viajesterrestresRepository.findById(id, filter);
  }

  @patch('/viajesterrestres/{id}')
  @response(204, {
    description: 'Viajesterrestres PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viajesterrestres, {partial: true}),
        },
      },
    })
    viajesterrestres: Viajesterrestres,
  ): Promise<void> {
    await this.viajesterrestresRepository.updateById(id, viajesterrestres);
  }

  @put('/viajesterrestres/{id}')
  @response(204, {
    description: 'Viajesterrestres PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() viajesterrestres: Viajesterrestres,
  ): Promise<void> {
    await this.viajesterrestresRepository.replaceById(id, viajesterrestres);
  }

  @del('/viajesterrestres/{id}')
  @response(204, {
    description: 'Viajesterrestres DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.viajesterrestresRepository.deleteById(id);
  }
}
