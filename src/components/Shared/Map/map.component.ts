import Component from 'vue-class-component';
import Vue from 'vue';
import L, { LatLng } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { MapModel } from 'Models/classes/map';
import { Inject } from 'inversify-props';
import ILocalisation from 'Interfaces/ILocalisation';

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
    private loading = false;

    @Inject()
    private localisationService!: ILocalisation

    constructor() {
        super();
        this.mapModel = new MapModel();
        this.localisationService.getLocation().then((value: any) => {
            this.loading = true;
            console.log(value);
            this.marker.lat = value.coords.latitude;
            this.marker.lng = value.coords.longitude;
            console.log(this.marker);
            this.loading = false;
        }).catch(() => {
            this.localisationService.errorToast(this);
        });
    }

    get markerUserPosition(): LatLng {
        return this.marker;
    }

    get centerPosition(): LatLng {
        return this.center;
    }
}
