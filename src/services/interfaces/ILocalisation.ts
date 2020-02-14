
/* eslint-disable semi */
export default interface ILocationService {
    options: Object;
    getLocation(): Promise<Geolocation | null>;
    getCoordinates(): Promise<any>;
    errorToast(instance: any): void
};
