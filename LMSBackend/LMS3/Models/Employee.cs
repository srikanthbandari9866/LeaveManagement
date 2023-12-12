using System;
using System.Collections.Generic;

namespace LMS3.Models
{
    public partial class Employee
    {
        public Employee()
        {
            InverseManager = new HashSet<Employee>();
        }

        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string EmpUname { get; set; }
        public string EmpPass { get; set; }
        public string EmpEmail { get; set; }
        public string EmpAddress { get; set; }
        public string EmpPhone { get; set; }
        public int? ManagerId { get; set; }
        public string Designation { get; set; }
        public DateTime? DateJoined { get; set; }
        public int? EmpSalary { get; set; }
        public int? LeaveBalance { get; set; }
        public int? ExtraLeave { get; set; }
        public int? Level { get; set; }

        public virtual Employee Manager { get; set; }
        public virtual ICollection<Employee> InverseManager { get; set; }
    }
}
