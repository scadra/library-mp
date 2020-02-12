import Component from 'vue-class-component';
import Vue from 'vue';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { MapModel } from 'Models/classes/map';

@Component({
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
})
export default class MapComponent extends Vue {
    private mapModel!: MapModel
    private zoom = 13;
    private center = L.latLng(49.611621, 6.1319346);
    private url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    private attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    private marker = L.latLng(49.611621, 6.1319346);

    constructor() {
        super();
        this.mapModel = new MapModel();
        console.log(this.mapModel);
    }
}
