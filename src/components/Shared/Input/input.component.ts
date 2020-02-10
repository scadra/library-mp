import { Component, Prop, PropSync } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class InputComponent extends Vue {
    private firstFocus = false;

    @Prop(String) type!: String;
    @PropSync('model', { type: String }) syncModel!: String;
    @Prop(Boolean) isValid!: Boolean;
    @Prop(String) placeholder!: String;
    @Prop(String) label!: String;
    @Prop(String) icon!: String;
    @Prop(String) errorMessage!: String;
}
