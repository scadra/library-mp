import { injectable } from 'inversify-props';
import IModalService from 'Interfaces/IModal';

@injectable()
export default class ModalService implements IModalService {
  // eslint-disable-next-line class-methods-use-this
  public openModal(parent: any, ModalForm: string): void {
    console.log(parent);
    console.log(ModalForm);
    console.log(parent.$buefy);

    parent.$buefy.modal.open({
      parent,
      component: ModalForm,
      trapFocus: true,
    });
  }
}
