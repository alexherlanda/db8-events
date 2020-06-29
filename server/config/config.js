import { prodCredentials } from './prod.config'
import { testCredentials } from './test.config'
import { devCredentials } from './dev.config'

export const credentials = () => {
  switch (process.env.NODE_ENV) {
    case 'production': {
      return prodCredentials
    }
    case 'test': {
      return testCredentials
    }
    default: {
      return devCredentials
    }
  }
}
