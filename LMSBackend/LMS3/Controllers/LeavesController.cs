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
    public class LeavesController : ControllerBase
    {
        private readonly LMS3Context _context;

        public LeavesController(LMS3Context context)
        {
            _context = context;
        }

        // GET: api/Leaves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Leave>>> GetLeave()
        {
            return await _context.Leave.ToListAsync();
        }

        [HttpGet("Employee/{empId}")]
        public ActionResult<IEnumerable<Leave>> GetLeaveByempId(int empId)
        {
            List<Leave> leaves = new List<Leave>();
            foreach (Leave item in _context.Leave)
            {
                if (item.EmpId == empId)
                {
                    leaves.Add(item);
                }
            }
            return leaves;
        }



        //[HttpGet("Employee/{empId}")]

        //public IQueryable<Leave> GetLeaveByEmpId(int empId)
        //{
        //    var l = from leave in _context.Leave
        //            select leave;
        //    return l.Where(l => l.EmpId == empId);



        //}

        // GET: api/Leaves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Leave>> GetLeave(int id)
        {
            var leave = await _context.Leave.FindAsync(id);

            if (leave == null)
            {
                return NotFound();
            }

            return leave;
        }

        // PUT: api/Leaves/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeave(int id, Leave leave)
        {
            if (id != leave.LeaveId)
            {
                return BadRequest();
            }

            _context.Entry(leave).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeaveExists(id))
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

        // POST: api/Leaves
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Leave>> Post(Leave leave)
        {
            _context.Leave.Add(leave);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeave", new { id = leave.LeaveId }, leave);
        }

        // DELETE: api/Leaves/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Leave>> DeleteLeave(int id)
        {
            var leave = await _context.Leave.FindAsync(id);
            if (leave == null)
            {
                return NotFound();
            }

            _context.Leave.Remove(leave);
            await _context.SaveChangesAsync();

            return leave;
        }

        private bool LeaveExists(int id)
        {
            return _context.Leave.Any(e => e.LeaveId == id);
        }
    }
}
