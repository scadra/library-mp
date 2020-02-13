import { injectable } from 'inversify-props';
import ILocalisationService from 'Interfaces/ILocalisation';

@injectable()
export default class LocalisationService implements ILocalisationService {
    options: Object = { timeout: 60000 };

    getLocation(): void {
        if (navigator.geolocation) {
            const position = navigator.geolocation.getCurrentPosition(this.displayLocationInfo,
                this.handleLocationError, this.options).then((result) => {
                    console.log(result);
                });
        } else {
            alert('Sorry, browser does not support geolocation!');
        }
    }

    async displayLocationInfo(position: Object): Promise<Object> {
        return position;
    }

    handleLocationError(error: Object): void {
        console.log('sdqd');
    }
}
