import {Domain} from './domain';

export class DomainList {
    domain_list: Array<Domain>;

    getOneDomain(id: number) {
        return this.domain_list[id];
    }
}
