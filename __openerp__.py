# -*- coding: utf-8 -*-
{
    'name': 'Ace Editor',
    'version': '1.0',
    'author': 'Ivan Burlutskiy <ivan.burlutskiy@progforce.com>',
    "category": "Tools",
    "description": """
Ace Editor.
======================================================

This Module adds a new widget "ace_editor" which allow you edit text with Ace editor.
Ace is a embeddable code editor written in JavaScript (http://ace.c9.io/#nav=about).

You can use this editor inside ERP. Just use widjet "ace_editor" for field what you want to edit.

Settings:
------------------
You can specify default theme, mode and keyboard for field.
F.ex. if you want write python code, use "monokai" theme and "vim" keyboard then just add following attributes to your field:
attrs="{'editor_modifiers': {'mode': 'python', 'theme': 'monokai', 'keyboard': 'vim'}}"

But you can change this and even much more other settings in any time.
Just press "Ctrl-," (Windows/Linux) or "Command-," (Mac) and configure the editor for yourself.
(To see other Shortcusts please visit https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts)
    """,
    'depends': [
        "base",
        "web",
    ],
    "css": [
        "static/lib/ace/*.css",
    ],
    "js": [
        "static/lib/require.js/*.js",
        "static/scr/js/ace_require.js",
        "static/lib/ace/snippets/*.js",
        "static/lib/ace/*.js",
        "static/src/js/ace_editor.js",
    ],
    'qweb': [
        "static/src/xml/*.xml",
    ],
    "application": True,
    "active": False,
    "installable": True,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
