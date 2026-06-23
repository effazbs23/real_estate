# -*- coding: utf-8 -*-
{
    'name': "Awesome Kanban",
    'summary': """
        Starting module for "Master the Odoo web framework, chapter 4: Customize a kanban view"
    """,

    'description': """
        Starting module for "Master the Odoo web framework, chapter 4: Customize a kanban view.
    """,

    'version': '18.0.1.0.0',
    'application': True,
    'category': 'Tutorials',
    'installable': True,
    'depends': ['web', 'crm'],
    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'awesome_kanban/static/src/**/*',
        ],
    },
    'author': 'Brain Station 23',
    'license': 'AGPL-3'
}
