# -*- coding: utf-8 -*-
import logging
import os

from lxml import etree

from odoo import fields, models
from odoo.loglevels import ustr
from odoo.tools import misc, view_validation

_logger = logging.getLogger(__name__)

_gallery_validator = None


@view_validation.validate('gallery')
def schema_gallery(arch, **kwargs):
    global _gallery_validator

    if _gallery_validator is None:
        with misc.file_open(os.path.join('awesome_gallery', 'rng', 'gallery_view.rng')) as f:
            _gallery_validator = etree.RelaxNG(etree.parse(f))

    if _gallery_validator.validate(arch):
        return True

    for error in _gallery_validator.error_log:
        _logger.error(ustr(error))
    return False


class View(models.Model):
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=[('gallery', "Awesome Gallery")])

    def _get_view_info(self):
        return {'gallery': {'icon': 'oi oi-apps'}} | super()._get_view_info()

    def _validate_tag_gallery(self, node, name_manager, node_info):
        for attr_name in ('image_field', 'tooltip_field'):
            if field_name := node.get(attr_name):
                name_manager.has_field(node, field_name, node_info)
