using Reinforced.Typings.Attributes;

namespace WMU.Elearning.Database.Models
{
    [TsInterface(IncludeNamespace = false)]
    public class Course : Entity
    {
        public ICollection<Assignment>? Assignments { get; set; }
    }
}
