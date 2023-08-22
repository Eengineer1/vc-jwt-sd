

import Issuer from './Issuer.js'
import Holder from './Holder.js'
import Verifier from './Verifier.js'
import digester from './digester.js'
import JWK from './JWK.js'
import JWS from './JWS.js'
import Parse from './Parse.js'

import YAML from './YAML-SD/index.js'

const SD = { YAML, JWK, JWS, digester, Issuer, Holder, Verifier, Parse }

export default SD