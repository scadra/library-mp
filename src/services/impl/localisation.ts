import { injectable } from 'inversify-props';
import ILocalisationService from 'Interfaces/ILocalisation';
import HomeComponent from '@/components/Home/home.component';

@injectable()
export default class LocalisationService implements ILocalisationService {
    options: Object = { timeout: 60000 };

    async getLocation(): Promise<Geolocation | null> {
        if (navigator.geolocation) {
            const position = await this.getCoordinates() as Promise<Geolocation>;
            return position;
        }
        return null;
    }

    getCoordinates(): Promise<unknown> {
        return new Promise(((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
            console.log('ici');
        }));
    }

    errorToast(instance: HomeComponent): void {
        instance.$buefy.toast.open({
            message: 'Something happened correctly!',
            type: 'is-danger',
            position: 'is-top-right',
            duration: 5000,
        });
    }
}
