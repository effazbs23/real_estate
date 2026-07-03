# -*- coding: utf-8 -*-
{
    'name': "Awesome Gallery",
    
    'version': '18.0.1.0.0',
    'application': True,
    'category': 'Tutorials',
    'installable': True,
    'depends': ['web', 'contacts'],
    'data': [
        'views/awesome_gallery_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'awesome_gallery/static/src/gallery_arch_parser.js',
            'awesome_gallery/static/src/gallery_controller.js',
            'awesome_gallery/static/src/gallery_controller.xml',
            'awesome_gallery/static/src/gallery_model.js',
            'awesome_gallery/static/src/gallery_renderer.js',
            'awesome_gallery/static/src/gallery_renderer.xml',
            'awesome_gallery/static/src/gallery_view.js',
        ],
    },
    'author': 'BRAIN STATION 23',
    'license': 'AGPL-3'
}
