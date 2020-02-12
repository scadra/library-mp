import { latLng, LatLng } from 'leaflet';


export class MapModel {
    private _zoom: Number = 13;
    private _center = latLng(49.611621, 6.1319346);
    private _url: String = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    private _attribution: String = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    private _withPopup?: LatLng = latLng(49.611621, 6.1319346);
    private _withTooltip?: LatLng = latLng(49.611621, 6.1319346);
    private _currentZoom?: Number = 11.5;
    private _currentCenter = latLng(49.611621, 6.1319346);
    private _showParagraph: Boolean = false
    private _mapOptions: mapOptions;
    private _showMap: Boolean = true;

    constructor() {
        this._mapOptions = { zoomSnap: 0.5 };
    }

    public get zoom(): Number {
        return this._zoom;
    }

    public get url(): String {
        return this._url;
    }

    public get attribution(): String {
        return this._attribution;
    }

    public get showParagraph(): Boolean {
        return this._showParagraph;
    }

    public get mapOptions(): mapOptions {
        return this._mapOptions;
    }

    public get showMap(): Boolean {
        return this._showMap;
    }

    public set zoom(value: Number) {
        this._zoom = value;
    }

    public set url(value: String) {
        this._url = value;
    }

    public set attribution(value: String) {
        this._attribution = value;
    }

    public set showParagraph(value: Boolean) {
        this._showParagraph = value;
    }

    public set mapOptions(value: mapOptions) {
        this._mapOptions = value;
    }

    public set showMap(value: Boolean) {
        this._showMap = value;
    }

    zoomUpdate(zoom: Number): void {
        this._currentZoom = zoom;
    }

    centerUpdate(center: any): void {
        this._currentCenter = center;
    }

    showLongText(): void {
        this._showParagraph = !this._showParagraph;
    }

    innerClick(): void {
        throw new Error('Method not implemented.');
    }
}

export interface mapOptions {
    zoomSnap: Number
}
