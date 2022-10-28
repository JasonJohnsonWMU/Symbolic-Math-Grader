namespace WMU.Elearning.Database.Models
{
    public class Course : Entity
    {
        public ICollection<Assignment> Assignments { get; set; }
    }
}
