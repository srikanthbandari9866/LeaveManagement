using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS3.Models;

namespace LMS3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly LMS3Context _context;

        public EmployeesController(LMS3Context context)
        {
            _context = context;
        }
        [HttpGet("login/{name}/{pass}")]
        public Employee Validate(string name, string pass)
        {
            Employee emp = _context.Employee.Where(l => l.EmpUname == name && l.EmpPass == pass).FirstOrDefault();
            if (!(string.IsNullOrEmpty(name) && string.IsNullOrEmpty(pass)))
            {
                return emp;
            }
            return null;
        }
        //GET:api/Employees/empname/{name}
        [HttpGet("empname/{name}")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmpByName(string name)
        {

            List<Employee> emp = await _context.Employee.Where(data => data.EmpName == name).ToListAsync();
            if (emp == null)
            {
                return NotFound();
            }
            return emp;
        }

        [HttpGet("level/{level}")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmpByLevel(int level)
        {

            List<Employee> emp = await _context.Employee.Where(data => data.Level == level).ToListAsync();
            if (emp == null)
            {
                return NotFound("No employees found with such records");
            }
            return emp;
        }



        [HttpGet("manager/{managerId}")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployeeByManagerId(int managerId)
        {
            var employee = await _context.Employee.FindAsync(managerId);
            if (employee == null)
            {
                return NotFound();
            }

            return await _context.Employee.Where(data => data.ManagerId == managerId).ToListAsync();
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployee()
        {
            return await _context.Employee.ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("PostLeave")]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employee.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.EmpId }, employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employee.Any(e => e.EmpId == id);
        }
    }
}
