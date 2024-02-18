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
        ('Tina', 'Li', 4, 3),
        ('Emily', 'Smith', 1, 1),
        ('Jacob', 'Johnson', 2, 1),
        ('Olivia', 'Williams', 3, 3),
        ('Michael', 'Jones', 4, 3),
        ('Sophia', 'Brown', 1, 1),
        ('William', 'Davis', 2, 1),
        ('Ava', 'Miller', 3, 3),
        ('Alexander', 'Wilson', 4, 3),
        ('Isabella', 'Taylor', 1, 1),
        ('Daniel', 'Anderson', 2, 1),
        ('Mia', 'Thomas', 3, 3),
        ('Ethan', 'Martinez', 4, 3),
        ('Charlotte', 'Harris', 1, 1),
        ('Matthew', 'Clark', 2, 1),
        ('Amelia', 'Young', 3, 3),
        ('James', 'Walker', 4, 3),
        ('Liam', 'Hall', 1, 1),
        ('Harper', 'Allen', 2, 1);
