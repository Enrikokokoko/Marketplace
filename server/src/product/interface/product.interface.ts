export interface Characteristics {
  [key: string] : {
    [key: string] : (string | number)
  }
}

export interface Characteristic {
  [key: string] : [(string | number)]
}