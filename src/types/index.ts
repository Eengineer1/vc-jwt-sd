
import { Hash } from 'crypto'
import { CompactJWSHeaderParameters } from "jose"


export type PublicKeyJwk = Record<any, unknown> & { alg?: string }
export type PrivateKeyJwk = PublicKeyJwk & { d?: string }

export type Claimset = Record<any, unknown>

export type RequestIssuance = {
  claims: Claimset | any
  iat?: number
  exp?: number
  holder?: PublicKeyJwk
}

export type SignParams = {
  protectedHeader: CompactJWSHeaderParameters
  claimset: Claimset
}

export type CompactSign = { sign: ({protectedHeader, claimset}: SignParams) => Promise<string> }
export type CompactVerify = { verify: (jws: string) => Promise<SignParams> }

export type Digest = { name: 'sha-256',  digest: (json: string) => string }

export type Salter = () => string 

export type IssuerCtx = {
  iss?: string,
  _sd_alg ?: string
  alg: string,
  digester: Digest,
  signer: CompactSign
  salter: Salter
}

export type Settings = {
  identifiers: {
    issuer: string
    verifier: string
  },
  key_settings: {
    key_size: number
    kty: string
    issuer_key: PrivateKeyJwk
    holder_key: PrivateKeyJwk
  }
  key_binding_nonce: string
  expiry_seconds: number
  random_seed: number
  iat: number
  exp: number
}

export type Spec = {
  user_claims: any
  holder_disclosed_claims: any
  key_binding: boolean
}

export type SdState = {
  issuer: DisclosureIssuer
  ii_disclosures: any[]
}

export type DisclosureIssuer = {
  _generate_salt: () => string
  _b64hash: (raw:string) => string
}

export type DisclosureCtx = {
  issuer: DisclosureIssuer
  key: any
  value: any
}

export type HolderCtx = {
  alg: string
  digester: Digest
  signer?: CompactSign
}

export type RequestPresentation = {
  credential: string
  disclosure: any
  aud?: string | string[]
  nonce?: string | number
}

export type SdHolderState = {
  hs_disclosures: any[]
  _hash_to_disclosure: any
  _hash_to_decoded_disclosure: any
  
}

export type VerifierCtx = {
  alg: string
  digester: Digest
  verifier: CompactVerify
}

export type ParsedSdJwt = {
   jwt: string
   kbt?:string
   disclosures?: string[]
}

export type RequestPresentationVerify = {
  presentation: string
  aud ?: string
  nonce ?: string
}