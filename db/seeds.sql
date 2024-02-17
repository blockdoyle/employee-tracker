INSERT INTO department (name)
VALUES  ('Engineering'), 
        ('Finance'), 
        ('Legal'), 
        ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES  ('Software Engineer', 100000, 1), 
        ('Accountant', 80000, 2), 
        ('Lawyer', 120000, 3), 
        ('Sales Lead', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('John', 'Doe', 1, NULL), 
        ('Mike', 'Chan', 2, 1), 
        ('Ashley', 'Rodriguez', 3, NULL), 
        ('Kevin', 'Tupik', 4, 3), 
        ('Kunal', 'Singh', 1, 1), 
        ('Malia', 'Brown', 2, 1), 
        ('Tom', 'Allen', 3, 3), 
        ('Tina', 'Li', 4, 3);