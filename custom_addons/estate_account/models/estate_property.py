
from odoo import fields, models
from odoo.exceptions import UserError


class EstateProperty(models.Model):
    _inherit = "estate.property"

    def action_sell(self):
        act = super().action_sell()
        print("--------------Sell Confirmed!!!----------------")
        return act
