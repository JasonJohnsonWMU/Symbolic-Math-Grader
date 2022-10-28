using Microsoft.EntityFrameworkCore;
using WMU.Elearning.Database.Models;

namespace WMU.Elearning.Database.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Assignment> Assignments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>().HasMany<Assignment>(g => g.Assignments);
        }
    }
}
