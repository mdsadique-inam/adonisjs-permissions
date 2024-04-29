import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import config from '@adonisjs/core/services/config'
import { PermissionInterface } from '../types.js'

export default class Permission extends BaseModel implements PermissionInterface {
  static get table() {
    return config.get('permissions.permissionsConfig.tables.permissions') as string
  }

  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(permission: Permission) {
    permission.id = uuidv4()
  }

  getModelId(): string {
    return String(this.id)
  }

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare slug: string

  @column()
  declare title: string | null

  @column()
  declare entityType: string

  @column()
  declare entityId: string | null

  @column()
  declare allowed: boolean

  @column()
  declare scope: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
