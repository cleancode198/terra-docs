(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{418:function(e,t,a){"use strict";a.r(t);var s=a(5),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configure-general-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-general-settings"}},[e._v("#")]),e._v(" Configure general settings")]),e._v(" "),a("p",[e._v("The following information describes the most important node configuration settings, which are found in the "),a("code",[e._v("~/.terra/config/")]),e._v(" directory. We recommend that you update these settings with your own information.")]),e._v(" "),a("p",[e._v("For more detailed descriptions about your configuration settings, including settings for WASM, explore each configuration file.")]),e._v(" "),a("h2",{attrs:{id:"update-your-node-s-name-and-p2p-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-your-node-s-name-and-p2p-settings"}},[e._v("#")]),e._v(" Update your node's name and P2P settings")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open "),a("code",[e._v("~/.terra/config/config.toml")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Modify the "),a("code",[e._v("moniker")]),e._v(" to name your node.")])])]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A custom human readable name for this node")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("moniker")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cx-mbp-will.local"')]),e._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Modify "),a("code",[e._v("seed_mode")]),e._v(". In seed mode, a node continuously crawls the network for peers, and upon incoming connection shares some peers and disconnects.")])]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Seed mode, in which node constantly crawls the network and looks for")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# peers. If another node asks it for addresses, it responds and disconnects.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Does not work if the peer-exchange reactor is disabled.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("seed_mode")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Modify "),a("code",[e._v("seeds")]),e._v(". When more peers are needed, the seed nodes you specify are dialed and a list of peers is returned. If enough peers are already in the address book, the "),a("code",[e._v("seeds")]),e._v(" setting might never be used.")])]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of seed nodes to connect to")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("seeds")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:4444"')]),e._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Modify "),a("code",[e._v("persistent_peers")]),e._v(". The nodes you specify are the trusted persistent peers that can help anchor your node in the P2P network. If the connection fails, they are dialed and automatically redialed for 24 hours. The automatic redial function uses exponential backoff and stops after 24 hours of trying to connect.")])]),e._v(" "),a("p",[e._v("If the value of "),a("code",[e._v("persistent_peers_max_dial_period")]),e._v(" is more than zero, the pause between each call to each persistent peer will not exceed "),a("code",[e._v("persistent_peers_max_dial_period")]),e._v(" during exponential backoff, and the automatic redial process continues.")]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of nodes to keep persistent connections to")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("persistent_peers")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:26656"')]),e._v("\n")])])]),a("h2",{attrs:{id:"update-minimum-gas-prices-and-enable-the-rest-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-minimum-gas-prices-and-enable-the-rest-api"}},[e._v("#")]),e._v(" Update minimum gas prices and enable the REST API")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open "),a("code",[e._v("~/.terra/config/app.toml")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Modify "),a("code",[e._v("minimum-gas-prices")]),e._v(" to set the minimum price of gas a validator will accept to validate a transaction and to prevent spam.")])])]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The minimum gas prices a validator is willing to accept for processing a")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# transaction. A transaction's fees must meet the minimum of any denomination")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# specified in this config (e.g. 0.25token1;0.0001token2).")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("minimum-gas-prices")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.01133uluna,0.15uusd,0.104938usdr,169.77ukrw,428.571umnt,0.125ueur,0.98ucny,16.37ujpy,0.11ugbp,10.88uinr,0.19ucad,0.14uchf,0.19uaud,0.2usgd,4.62uthb,1.25usek,1.25unok,0.9udkk,2180.0uidr,7.6uphp"')]),e._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Enable the REST API, a set of guidelines for internet data transfer that allows lightweight, scalable integrations. Rest API allows you to perform standard database functions, CRUD, using rest architecture.")])]),e._v(" "),a("li",[a("p",[e._v("Integrate Terra with Coinbase via the Rosetta API. Rosetta is an open source API that organizes blockchain data into a standardized format, making it easy for developers to build cross-chain applications. Instead of creating specific code for each chain, Rosetta allows different blockchains to integrate into any exchange that uses Rosetta API.")])])]),e._v(" "),a("p",[e._v("For more information, checkout the official "),a("a",{attrs:{href:"https://www.rosetta-api.org/docs/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rosetta docs"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);