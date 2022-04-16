export interface Products {
    version: string,
    devices: Array<Product>
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
