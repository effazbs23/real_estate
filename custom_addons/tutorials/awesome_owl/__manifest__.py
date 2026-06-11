# -*- coding: utf-8 -*-
{
    'name': "Awesome Owl",
    'author': "BRAIN STATION 23",
    'category': 'Tutorials',
    'version': '1.0.0',
    'depends': ['base', 'web'],
    'application': True,
    'installable': True,
    'data': [
        'views/views.xml',
        'views/templates.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'awesome_owl/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}
