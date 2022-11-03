using Reinforced.Typings.Attributes;

namespace WMU.Elearning.Server.Models.Courses
{
    [TsInterface(IncludeNamespace = false)]
    public class CreateCourseRequest
    {
        public string Name { get; set; }
    }
}
