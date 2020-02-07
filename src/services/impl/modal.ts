import { injectable } from 'inversify-props';
import IModalService from 'Interfaces/IModal';
import { VueConstructor } from 'vue';

@injectable()
export default class ModalService implements IModalService {
  // eslint-disable-next-line class-methods-use-this
  public openModal(parent: any, ModalForm: VueConstructor<Vue>): void {
    parent.$buefy.modal.open({
      parent,
      component: ModalForm,
      trapFocus: true,
    });
  }
}
