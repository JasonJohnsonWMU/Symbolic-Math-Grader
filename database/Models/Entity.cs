using System.ComponentModel.DataAnnotations;

namespace WMU.Elearning.Database.Models
{
    public abstract class Entity
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
