import { LucidModel } from '@adonisjs/lucid/types/model'

export interface Permissions {
  tables: Object
}

export interface AclModelInterface {
  getModelId(): number
}

export type AclModel = LucidModel & AclModelInterface

export interface AclModelQuery {
  modelType: string
  modelId: number
}

export interface ModelPermissionsQuery extends AclModelQuery {
  permissionSlugs: string[]
  permissionIds: number[]
  directPermissions: boolean
  includeForbiddens: boolean
}

export interface MorphMapInterface {
  [key: string]: any
}
