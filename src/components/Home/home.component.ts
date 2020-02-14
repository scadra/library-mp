/* eslint-disable indent */
import Component from 'vue-class-component';
import Vue from 'vue';
import Map from 'Components/Shared/Map/map.vue';
import { Inject } from 'inversify-props';
import ILocalisation from 'Interfaces/ILocalisation';
import { ToastProgrammatic as Toast } from 'buefy';

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
        this.localisationService.getLocation().then((value: any) => {
            console.log('resolve');
            console.log(value);
        }).catch(() => {
            this.localisationService.errorToast(this);
        });
    }
}
