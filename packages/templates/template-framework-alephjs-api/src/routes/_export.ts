// Pre-imports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.

import * as $0 from './index.js'
import * as $1 from './users/index.js'
import * as $2 from './users/$uid.js'

export default {
  '/': $0,
  '/users/index': $1,
  '/users/:uid': $2,
}