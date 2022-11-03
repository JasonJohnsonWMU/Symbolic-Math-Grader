using Reinforced.Typings.Attributes;
using WMU.Elearning.Database.Models;

namespace WMU.Elearning.Server.Models.Courses
{
    [TsInterface(IncludeNamespace = false)]
    public class EditCourseRequest
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        public ICollection<Assignment>? Assignments { get; set; }

    }
}
