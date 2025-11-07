using Emp_Webapi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emp_Webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    { 
        EmpDbContext _dbContext;
        public EmployeeController(EmpDbContext empDbContext) {
        
         _dbContext= empDbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var employees = _dbContext.Emps.ToList();
            return Ok(employees);
        }
        [HttpPost]
        public IActionResult Post(Emp emp)
        {
            _dbContext.Emps.Add(emp);
            _dbContext.SaveChanges();
            return Ok(emp);
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, Emp emp)
        {
            var existingEmp = _dbContext.Emps.Find(id);
            if (existingEmp == null)
            {
                return NotFound();
            }
            existingEmp.Ename = emp.Ename;
           
            existingEmp.Esal = emp.Esal;
            _dbContext.SaveChanges();
            return Ok(existingEmp);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var emp = _dbContext.Emps.Find(id);
            if (emp == null)
            {
                return NotFound();
            }
            _dbContext.Emps.Remove(emp);
            _dbContext.SaveChanges();
            return Ok();
        }

    }
}
