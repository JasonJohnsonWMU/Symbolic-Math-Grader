using Microsoft.EntityFrameworkCore;
using WMU.Elearning.Server.Models;

namespace WMU.Elearning.Server.Data

{
    public class SchoolContext : DbContext
    {
        public SchoolContext(DbContextOptions<SchoolContext> options) : base(options)
        {
        }

        public DbSet<Class> Classes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Class>().ToTable("Class");
        }
    }
}


