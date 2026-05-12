import datetime as dt

from odoo import fields, models,api


class EstatePropertyOffer(models.Model):
    _name = 'estate.property.offer'
    _description = 'Estate Property Offers Model'

    price = fields.Float()
    status = fields.Selection(selection=[
        ('accepted', 'Accepted'),
        ('refused', 'Refused')]
        ,copy=False)
    validity = fields.Integer(default=7)
    partner_id = fields.Many2one('res.partner', required=True, string="Partner ID")
    property_id = fields.Many2one('estate.property', required=True, string="Property ID")
    date_deadline = fields.Date(string="Deadline", compute="_compute_deadline",inverse="_compute_deadline_inverse")
    @api.depends("validity", "create_date")
    def _compute_deadline(self):
        for record in self:
            base_date = record.create_date.date() if record.create_date else fields.Date.today()
            record.date_deadline = base_date + dt.timedelta(days=record.validity)

    @api.depends("validity","create_date")
    def _compute_deadline_inverse(self):
        for record in self:
            base_date = record.create_date.date() if record.create_date else fields.Date.today()
            record.validity = (record.date_deadline - base_date).days
