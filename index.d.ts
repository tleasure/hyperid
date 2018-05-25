declare function hyperid(opts?: boolean | hyperid.Options): hyperid.Instance

declare namespace hyperid {
  const decode: hyperid.decode

  interface Options {
    urlSafe?: boolean
    fixedLength?: boolean
  }

  interface Instance {
    (): string
    decode: hyperid.decode
    uuid: string
  }

  type decode = (id: string) => hyperid.IdObject

  interface IdObject {
    uuid: string
    count: number
  }
}

export default hyperid
