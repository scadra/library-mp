import { container } from 'inversify-props';
import ModalService from 'Services/modal';
import IModalService from 'Interfaces/IModal';
import LocalisationService from 'Services/localisation';
import ILocalisationService from 'Interfaces/ILocalisation';

export default function buildDependencyContainer(): void {
  container.addTransient<IModalService>(ModalService);
  container.addTransient<ILocalisationService>(LocalisationService);
}
