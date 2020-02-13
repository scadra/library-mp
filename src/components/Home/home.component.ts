/* eslint-disable indent */
import Component from 'vue-class-component';
import Vue from 'vue';
import Map from 'Components/Shared/Map/map.vue';
import { Inject } from 'inversify-props';
import ILocalisation from 'Interfaces/ILocalisation';

@Component({
    components: {
        Map,
    },
})
export default class HomeComponent extends Vue {
    @Inject()
    private localisationService!: ILocalisation

    constructor() {
        super();
        const startAsync = new Promise<string>((resolve, reject) => {
            console.log(this.localisationService.getLocation());
            console.log(result);
        });
    }
}
