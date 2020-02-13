import { VueConstructor } from 'vue';

/* eslint-disable semi */
export default interface ILocationService {
    options: Object;
    getLocation(): void;
    displayLocationInfo(position: Object): Object;
    handleLocationError(error: Object): void;
};
