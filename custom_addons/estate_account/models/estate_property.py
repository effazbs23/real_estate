
from odoo import fields, models
from odoo.exceptions import UserError


class EstateProperty(models.Model):
    _inherit = "estate.property"

    def action_sell(self):
        act = super().action_sell()
        self.env["account.move"].create({
            'partner_id':self.buyer_id.id,
            'move_type':'out_invoice'
        })
        print("--------------Sell Confirmed!!!----------------")
        return act
