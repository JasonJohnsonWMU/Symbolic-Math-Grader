using Reinforced.Typings.Attributes;
using System.ComponentModel.DataAnnotations;

namespace WMU.Elearning.Database.Models
{
    [TsInterface(IncludeNamespace = false)]
    public abstract class Entity
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
