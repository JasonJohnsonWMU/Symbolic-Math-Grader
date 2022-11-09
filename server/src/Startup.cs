using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using WMU.Elearning.Database.Data;

namespace WMU.Elearning.Server
{
    public class Startup
    {
        #region Dependency Injection
        public IConfiguration Configuration { get; set; }
        #endregion

        #region Constructor
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        #endregion

        public void ConfigureServices(IServiceCollection services)
        {
            // Connect to the database specified in appsettings.json
            services.AddDbContext<DatabaseContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });
#if DEBUG
            // If we are in debug mode, show the user database failures
            services.AddDatabaseDeveloperPageExceptionFilter();
#endif
            services.AddControllers(options =>
            {
#if !DEBUG
                // Validate the CSRF token to prevent XSS
                // more details: https://learn.microsoft.com/en-us/aspnet/core/security/anti-request-forgery?view=aspnetcore-6.0
                options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
#endif
            });
        }

        /// <summary>
        /// Configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        public void Configure(IApplicationBuilder app)
        {

#if DEBUG
            // Check if the database has any pending migrations, and apply them
            app.UseMigrationsEndPoint();
#else
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
#endif
            // Redirect all HTTP traffic to HTTPS if our webserver didn't already
            app.UseHttpsRedirection();


            // Serve the react app if the request is not to an API
            app.UseStaticFiles(new StaticFileOptions
            {
                // TODO: change this to better path discovery
                FileProvider = new PhysicalFileProvider(
                       Path.Combine(AppContext.BaseDirectory, @"..\..\..\..\..\client"))
            });

            // For now, allow any request from any origin at any method.
            // TODO: in production change this to only allow requests from same origin
            app.UseCors(options =>
            {
                options.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
            });

            // Configure how endpoints map
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


        }
    }
}
