const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["felix-vita-images.ams3.digitaloceanspaces.com", "localhost"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
