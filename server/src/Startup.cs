using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using WMU.Elearning.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace WMU.Elearning.Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; set; }

        public void Configure(IApplicationBuilder app)
        {
#if DEBUG
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
#endif
            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();


            // Serve the react app if the request is not to an API
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                       Path.Combine(AppContext.BaseDirectory, @"..\..\..\..\..\client"))
            });

            app.UseRouting();
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SchoolContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddDatabaseDeveloperPageExceptionFilter();
            services.AddControllersWithViews();
        }
    }
}
