openerp.ace_editor = function(openerp) {
    var _t = openerp.web._t,
        _lt = openerp.web._lt,
        QWeb = openerp.web.qweb;

    openerp.ace_editor.widgets = {};
    openerp.ace_editor.widgets.AceEditor = openerp.web.form.Field.extend({
        template: 'FieldAceEditor',
        init: function(view, node) {
            this._super(view, node);
        },
        start: function() {
            var self = this;
            this._super.apply(this, arguments);

            var $root_div = this.$element.find('> div');
            var modifiers = this.modifiers || {};
            var editor_modifiers = modifiers.editor_modifiers || {};
            var editor = ace.edit(this.element_id);

            $root_div.resizable();
            $root_div.resize(function() {
                editor.resize(true);
            });

            if (editor_modifiers.theme) {
                editor.setTheme("ace/theme/" + editor_modifiers.theme)
            }

            if (editor_modifiers.mode) {
                editor.getSession().setMode("ace/mode/" + editor_modifiers.mode);
            }

            if(editor_modifiers.keyboard) {
                require(["ace/keyboard/" + editor_modifiers.keyboard], function (editor_keyboard) {
                    editor.setKeyboardHandler(editor_keyboard.handler);
                });
            }

            editor.on("change", this.on_ui_change);
            this.editor = editor;
            this.update_dom();
        },
        set_value: function(value) {
            this.value = value;
            var show_value = openerp.web.format_value(this.value, this, '');
            this.editor.setValue(show_value);
            this.update_dom();
            this.on_value_changed();
        },
        get_value: function() {
            return this.value;
        },
        set_readonly: function(readonly) {
            this.readonly = readonly;
            this.update_dom();
        },
        update_dom: function(show_invalid) {
            this._super.apply(this, arguments);
            this.editor.setReadOnly(this.readonly);
        },
        set_value_from_ui: function() {
            var value = openerp.web.parse_value(this.editor.getValue(), this);
            this.value = value;
        },
        focus: function($element) {
            this.editor.focus();
        },
        validate: function() {
            this.invalid = false;
            try {
                var value = openerp.web.parse_value(this.editor.getValue(), this);
                this.invalid = this.required && value === '';
            } catch(e) {
                this.invalid = true;
            }
        },
        is_valid: function() {
            return !this.invalid;
        },
        on_ui_change: function() {
            this.dirty = true;
            this.validate();
            if (this.is_valid()) {
                this.set_value_from_ui();
                this.view.do_onchange(this);
                this.view.on_form_changed(true);
                this.view.do_notify_change();
            } else {
                this.update_dom(true);
            }
        }
    });
    openerp.web.form.widgets.add('ace_editor', 'openerp.ace_editor.widgets.AceEditor');


    openerp.ace_editor.widgets.AceEditorReadOnly = openerp.ace_editor.widgets.AceEditor.extend({
        start: function() {
            var self = this;
            this._super.apply(this, arguments);
            this.readonly = true;
        }
    });
    openerp.web.page.readonly.add('ace_editor', 'openerp.ace_editor.widgets.AceEditorReadOnly');

};
