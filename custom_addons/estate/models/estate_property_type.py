from odoo import models, fields


class EstatePropertyType(models.Model):
    _name='estate.property.type'
    _description='Real Estate Property Type'
    _inherit = "estate.property"

    name=fields.Char(required=True, string="Name")
