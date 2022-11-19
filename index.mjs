import {chain} from "@svalit/core/utils.mjs";
import {Router as LitRouter} from '@lit-labs/router'

export class Router extends LitRouter {
    serverPath = '/'

    constructor(host, routes, options, ...args) {
        super(...arguments)
        if (options?.serverPath) this.serverPath = options?.serverPath
    }

    outlet() {
        const serverNavigate = typeof process === "object" ? this.goto(this.serverPath) : true
        return chain(serverNavigate, super.outlet.bind(this))
    }
}
