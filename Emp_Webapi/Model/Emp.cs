using System.ComponentModel.DataAnnotations;

namespace Emp_Webapi.Model
{
    public class Emp
    {
        [Key]
        public int Eid { get; set; }
        public string? Ename { get; set; }
        public decimal Esal { get; set; }
    }
}
