from odoo import fields, models
class EstateProperty(models.Model):
    _name = 'estate.property'
    _description = 'Estate Property'
    name = fields.Char(required=True)
    description = fields.Text()
    postcode = fields.Char()
    date_availability = fields.Date(string="Available From", copy=False)
    expected_price = fields.Float(required=True)
    selling_price = fields.Float(string="Selling Price", copy=False, readonly=True)
    bedrooms = fields.Integer()
    living_area = fields.Integer()
    facades = fields.Integer()
    garage = fields.Boolean()
    garden = fields.Boolean()
    garden_area = fields.Integer()
    garden_orientation = fields.Selection(
        selection=[('north', 'North'), ('south', 'South'), ('east', 'East'), ('west', 'West')],
        string="Orientation"
    )