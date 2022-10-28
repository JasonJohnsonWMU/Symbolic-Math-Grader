using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WMU.Elearning.Database.Data;
using WMU.Elearning.Database.Models;

namespace WMU.Elearning.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CoursesController : ControllerBase
    {
        #region Dependency Injection
        private readonly DatabaseContext _context;
        private readonly ILogger<CoursesController> _logger;
        #endregion

        #region Constructor
        public CoursesController(ILogger<CoursesController> logger, DatabaseContext context)
        {
            _context = context;
            _logger = logger;
        }
        #endregion

        #region CRUD API

        // GET: /api/courses
        [HttpGet]
        [ActionName("")]
        public async Task<IActionResult> Get()
        {
            //if (id == null || _context.Courses == null)
            //{
            //    return NotFound();
            //}

            //Course? course = await _context.Courses.FirstOrDefaultAsync(course => course.ID == id);

            //if (course == null)
            //{
            //    return NotFound();
            //}

            //return Ok(course);
            return Ok();
        }

        // GET: /api/courses/details?id=5
        [HttpGet]
        [ActionName("Details")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Courses == null)
            {
                return NotFound();
            }

            Course? course = await _context.Courses.FirstOrDefaultAsync(course => course.ID == id);

            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }


        // POST: /api/courses/create
        [HttpPost]
        [ActionName("Create")]
        public async Task<IActionResult> Create([Bind("ID,Name")] Course course)
        {
            // TODO: Implement this
            throw new NotImplementedException();
        }


        // POST: /api/courses/edit?id=5
        [HttpPost]
        [ActionName("Edit")]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Name")] Course course)
        {
            // TODO: Implement this
            throw new NotImplementedException();
        }


        // DELETE: /api/courses/delete?id=5
        [HttpDelete]
        [ActionName("Delete")]
        public async Task<IActionResult> Delete(int id)
        {
            // TODO: Implement this
            throw new NotImplementedException();
        }
        #endregion

        #region Helper Methods
        private bool CourseExists(int id)
        {
            return _context.Courses.Any(e => e.ID == id);
        }
        #endregion
    }
}
