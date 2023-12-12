using System;
using System.Collections.Generic;

namespace LMS3.Models
{
    public partial class Leave
    {
        public int LeaveId { get; set; }
        public string LeaveType { get; set; }
        public string LeaveStatus { get; set; }
        public string LeaveReason { get; set; }
        public int? EmpId { get; set; }
        public int? ManagerId { get; set; }
        public DateTime? LeaveStartDate { get; set; }
        public DateTime? LeaveEndDate { get; set; }
        public int? LeaveBalanace { get; set; }
    }
}
