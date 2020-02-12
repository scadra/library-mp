/* eslint-disable indent */
import Component from 'vue-class-component';
import Vue from 'vue';
import {
    LMap, LTileLayer, LMarker, LPopup, LTooltip,
} from 'vue2-leaflet';
import { MapModel } from 'Models/classes/map';

@Component({
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        LTooltip,
    },
})
export default class HomeComponent extends Vue {
    private mapModel!: MapModel

    constructor() {
        super();
        this.mapModel = new MapModel();
        console.log(this.mapModel);
    }
}
