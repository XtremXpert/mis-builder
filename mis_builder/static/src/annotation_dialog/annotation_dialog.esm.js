/** @odoo-module **/
// Portage Odoo 20 / Owl 3 : props via useProps, état via proxy.
import {Component, proxy, t, useProps} from "@odoo/owl";
import {Dialog} from "@web/core/dialog/dialog";

export class AnnotationDialog extends Component {
    static components = {Dialog};
    static template = "mis_builder.AnnotationDialog";
    props = useProps({
        close: t.function(),
        annotationText: t.string(),
        confirm: t.function(),
        title: t.string(),
        remove: t.function(),
        canRemove: t.boolean(),
    });

    setup() {
        this.state = proxy({
            annotationText: this.props.annotationText,
        });
    }

    confirm() {
        this.props.confirm(this.state.annotationText);
        this.props.close();
    }

    remove() {
        this.props.remove();
        this.props.close();
    }
}
