using WMU.Elearning.Database.Models;

namespace WMU.Elearning.Database.Data
{
    public class DatabaseInitializer
    {
        public static void Initialize(DatabaseContext context)
        {
            // Ensure that the database exists. If not, create it.
            context.Database.EnsureCreated();

            // Seed data if the database is empty
            if (!context.Courses.Any())
            {
                SeedCourses(context);
            }

            // Seed data if the database is empty
            if (!context.Assignments.Any())
            {
                SeedAssignments(context);
            }

        }

        #region Data Seed Methods

        /// <summary>
        /// Seeds some sample courses into the database
        /// </summary>
        /// <param name="context"></param>
        private static void SeedCourses(DatabaseContext context)
        {
            Course[] courses = new Course[]
            {
                new Course{Name="Datastructures and Algorithims" },
                new Course{Name="Computer Science 1"},
                new Course{Name="Computer Science 2"}
            };

            foreach (Course course in courses)
            {
                context.Courses.Add(course);
            }

            context.SaveChanges();
        }

        /// <summary>
        /// Seeds some sample assignments into the database
        /// </summary>
        /// <param name="context"></param>
        private static void SeedAssignments(DatabaseContext context)
        {
            Assignment[] assignments = new Assignment[]
            {
                new Assignment{Name="Branch and Bound Lab", Course = context.Courses.First(),  AvailibleAt = new DateTime() },
                new Assignment{Name="N-Queens Assignment", Course = context.Courses.First(),},
                new Assignment{Name="Minheaps and Binary Trees", Course = context.Courses.First(),}
            };

            foreach (Assignment assignment in assignments)
            {
                context.Assignments.Add(assignment);
            }

            context.SaveChanges();
        }

        #endregion
    }
}
