Ace Editor
==========

Module for Opener ERP


This Module adds a new widget "ace_editor" which allow you edit text with Ace editor.
[Ace](http://ace.c9.io/#nav=about) is a embeddable code editor written in JavaScript.

You can use this editor inside ERP. Just use widget "ace_editor" for field what you want to edit.

Settings:
------------------
You can specify default theme, mode and keyboard for field.
F.ex. if you want write python code, use "monokai" theme and "vim" keyboard then just add following attributes to your field:

```xml
<field name="you_field" widget="ace_editor" attrs="{'editor_modifiers': {'mode': 'python', 'theme': 'monokai', 'keyboard': 'vim'}}"/>
```

But you can change this and even much more other settings in any time.
Just press "Ctrl-," (Windows/Linux) or "Command-," (Mac) and configure the editor for yourself. ([Default Keyboard Shortcuts](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts))
