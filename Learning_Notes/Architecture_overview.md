# Architecture Overview of Odoo
## The Multi-tier architecture
**Odoo uses a three-tier architecture which has these layers**
1. Presentation Layer - HTML, CSS, JS
2. Logic Layer - Python
3. Data layer - PostgreSQL
---
---
## Odoo Modules
**Odoo is basically a stream of modules**
* Modules are usually made out of 2 things - Data and Functions
* Modules are usually loaded in the database
* One can create or extend modules according to their business or accounting needs
### Composition of a module
**An odoo module is made up using certain elements**
1. **Business Object** - Often a python class which are automatically mapped to the database columns
2. **Object Views** - The UI
3. **Data Files** - XML or CSV files which usually contain the model data
4. **Web Controllers** - Handles request from the web 
5. **Static Web Data** - Images or static contents provided by the web
## Module Structure
**Modules follow a defined structure**
*Each module is a directory within a module directory*
*When a module includes business logics, it is treated as a python package with __init__.py*
*Models are .py files and data are .xml files*
