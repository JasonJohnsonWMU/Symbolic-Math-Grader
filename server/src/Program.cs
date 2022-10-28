using WMU.Elearning.Database.Data;

namespace WMU.Elearning.Server
{

    public class Program
    {

        public static void Main(string[] args)
        {
            // Create a hosting environment
            IHost host = CreateHostBuilder(args).Build();

            // Create the database if it doesn't already exist
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<DatabaseContext>();
                    DatabaseInitializer.Initialize(context);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                    // if you got here, you may need to update the database by running:
                    //    add-migration "what you added"
                    //    update-database
                    throw;
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}