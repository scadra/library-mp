import { container } from 'inversify-props';
import ModalService from 'Services/modal';
import IModalService from 'Interfaces/IModal';

export default function buildDependencyContainer(): void {
  container.addTransient<IModalService>(ModalService);
}
