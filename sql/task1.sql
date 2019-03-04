-- 1
SELECT w.id, w.name, w.salary
FROM `employee` AS w
JOIN `employee` AS b ON w.chief_id=b.id
WHERE w.salary > b.salary

-- 2
SELECT d.name, MAX(w.salary)
FROM department d
LEFT OUTER JOIN employee w ON (w.department_id = d.id)
GROUP BY d.id

-- 3
SELECT b.name, COUNT(*) count
FROM employee b
JOIN employee w ON b.id=w.chief_id
GROUP BY b.id, b.name
HAVING count = 1

-- 4
SELECT d.id, d.name, res.total_amt
FROM department as d,
(SELECT employee.department_id, SUM(employee.salary) total_amt FROM employee GROUP BY department_id) res
WHERE res.department_id = d.id;