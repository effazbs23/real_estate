# Models and Basic Fields in Odoo
## Models
**Models fields are defined as attributes on the model itself, thus I can't define a field and a method with the same name. Last one silently overwrites the former ones.**    
*Syntax*:
```
    field_name = fields.Data_type(string="label")
```    
**Here,** Data_type can be  
1. Boolean
2. Float
3. Char
4. Text
5. Date
6. Selection    
**Selection has a defined syntax**
```
fields.Selection(selection_name,string_to_be_returned_for_selection)
```    
**Default Value**  
*Syntax*
```
name = fields.Char(default="Value")
```    
## ORM Commands
1. Create : Insert a new record into the database
```
new_record = self.env['estate.property'].create(
    {
        'name': 'Name here',
        'price': 'Price here'
    }
)
```


