import {Person} from "./types/Person";

declare module "kotlin-domained-rn-domain" {
    module application {
        export class Service {
            hello(): string;
            iam(): Person;
        }
    }
}