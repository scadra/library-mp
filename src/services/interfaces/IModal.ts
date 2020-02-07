import { VueConstructor } from 'vue';

/* eslint-disable semi */
export default interface IModalService {
    openModal(instance: any, ModalForm: VueConstructor<Vue>): void
};
