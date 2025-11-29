export interface IResponse {
  code: number
  statusCode: string
  typePayload: string
  payload: unknown
}

interface IDataStore {
  burks: string
  correo_electronico: string
  cve_usuario: string
  cve_empleado: string
  estatus: string
  grupo: string
  id_usuario: string
  nombre_usuario: string
  numero_telefono: string
  rol: string
  centros: string[]
}

interface IResponseStore {
  code: number
  statusCode: string
  message: string
  data: IDataStore
}

export interface IResponseCacheData {
  sha: string
  data: IResponseStore
}

export interface AzureGroup {
  "@odata.type": string
  id: string
  description: string | null
  displayName: string | null
}
