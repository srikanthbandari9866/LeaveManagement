using System.Collections.Generic;
using System.Linq;

namespace LMS3.Models
{
    public class ELRepo : IELRepo
    {
        private readonly LMS3Context _context = null;
        public ELRepo(LMS3Context context)
        {
               _context = context;
        }

        public void AddEmployee(Employee emp)
        {
           _context.Employee.Add(emp);
            _context.SaveChanges();
        }

        public void AddLeave(Leave l)
        {
            _context.Leave.Add(l);
            _context.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            Employee emp = _context.Employee.Find(id);
            _context.Employee.Remove(emp);
            _context.SaveChanges();

        }

        public void DeleteLeave(int id)
        {
            Leave leave = _context.Leave.Find(id);
            _context.Leave.Remove(leave);
            _context.SaveChanges();
        }

        public Employee GetEmployeeById(int id)
        {
            Employee emp = _context.Employee.Find(id);
            return emp;
        }

        public IEnumerable<Employee> GetEmployeeList()
        {
            return _context.Employee.ToList();
        }

        public Leave GetLeaveById(int id)
        {
            Leave l = _context.Leave.Find(id);
            return l;
        }

        public IEnumerable<Leave> GetLeaveList()
        {
            return _context.Leave.ToList();
        }

        public void UpdateEmployee(Employee emp)
        {
            Employee u = _context.Employee.Where(e => e.EmpId == emp.EmpId).FirstOrDefault();
            if (u != null)
            {

            }
            _context.SaveChanges();
        }

        public void UpdateLeave(Leave l)
        {
            Leave u = _context.Leave.Where(e => e.LeaveId == l.LeaveId).FirstOrDefault();
            if (u != null)
            {

            }
            _context.SaveChanges();
        }
    }
}
