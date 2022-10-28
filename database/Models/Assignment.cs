namespace WMU.Elearning.Database.Models
{
    public class Assignment : Entity
    {
        public Course Course { get; set; }
        public DateTime AvailibleAt { get; set; }
        public TimeSpan AllowedTime { get; set; }
    }
}
