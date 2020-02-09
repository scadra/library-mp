import { Component, Prop, PropSync } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class InputComponent extends Vue {
    @Prop(String) type!: String;
    @Prop(String) model!: String;
    @Prop(Boolean) isValid!: Boolean;
    @Prop(String) placeholder!: String;
    @Prop(String) label!: String;
    @Prop(String) icon!: String;
    @Prop(String) errorMessage!: String;

    set syncModel(model: String) {
      console.log(model);
      this.$emit('update:model', model);
    }

    get syncModel(): String {
      return this.model;
    }
}
