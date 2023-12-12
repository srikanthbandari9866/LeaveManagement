using System.Collections.Generic;

namespace LMS3.Models
{
    public interface IELRepo
    {
        IEnumerable<Employee> GetEmployeeList();
        Employee GetEmployeeById(int id);
        void UpdateEmployee(Employee emp);
        void AddEmployee(Employee emp);
        void DeleteEmployee(int id);

        IEnumerable<Leave> GetLeaveList();
        Leave GetLeaveById(int id);
        void UpdateLeave(Leave l);
        void AddLeave(Leave l);
        void DeleteLeave(int id);

    }
}
