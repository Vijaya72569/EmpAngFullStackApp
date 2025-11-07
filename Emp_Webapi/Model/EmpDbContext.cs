using Microsoft.EntityFrameworkCore;
namespace Emp_Webapi.Model
{
    public class EmpDbContext: DbContext
    {
        public EmpDbContext(DbContextOptions<EmpDbContext> options) : base(options)
        {
        }
        public DbSet<Emp> Emps { get; set; }
    }
}
