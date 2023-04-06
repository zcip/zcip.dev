export const IS_PRODUCTION = process.env.NODE_ENV === "production"
const PRODUCTION_HOST = "https://zcip.github.io/"
export const HOST = IS_PRODUCTION ? PRODUCTION_HOST : "http://localhost:3000"

export const meta = {
  host: HOST,
}
