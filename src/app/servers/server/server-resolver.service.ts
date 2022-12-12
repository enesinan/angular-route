import { Injectable } from "@angular/core";
import { ActivatedRoute, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";

interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {

    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRoute, state: RouterStateSnapshot): Obervable<Server> | Promise<Server> | Server{
        return this.serversService.getServer(+route.params['id']);
    }
}
