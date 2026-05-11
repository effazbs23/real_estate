## res.users vs res.partner
* res.partner: everyone I am interacting with eg. clients, vendors, leads
* res.users: People who can log into the system eg. Employees

## default=lambda self: self.env.user
* self.env is the environment
* self.env.user is the record of the user currently logged in
* Use of lambda ensures that the calculation appears at the moment I click 'new'

## copy=False
* By default, odoo copies every field when I click action->duplicate
* when I set it to false, we're not duplicating the field when cloning the object.
