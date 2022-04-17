export interface Products {
  devices: Array<Product>
}

export interface SelectedOption {
  value: string
  label: string
}

export interface Product {
  icon: {
    resolutions: Array<string>,
    id: string
  },
  line: {
    name: string,
    id: string,
  },
  guids: Array<string>,
  product: {
    abbrev: string,
    name: string
  },
  shortnames: string,
  unifi: {
    adoptability: string
    network: {
      radios: {
        na: {
          gain: number,
          maxPower: number,
          maxSpeedMegabitsPerSecond: number,
        }
      }
      numberOfPorts: number;
    }
  }

}
