﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WMU.Elearning.Database.Data;
using WMU.Elearning.Database.Models;
using WMU.Elearning.Server.Models.Courses;

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

        // POST: /api/courses/create
        [HttpPost]
        [ActionName("Create")]
        public async Task<IActionResult> Create([FromForm] CreateCourseRequest createCourseRequest)
        {
            if (_context == null)
            {
                return BadRequest();
            }

            Course course = new Course() { Name = createCourseRequest.Name };

            await _context.AddAsync(course);
            await _context.SaveChangesAsync();
            return Ok(course);
        }

        // GET: /api/courses/getbyid?id=1
        [HttpGet]
        [ActionName("GetById")]
        public async Task<IActionResult> GetById(int? id)
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

        // GET: /api/courses/getall
        [HttpGet]
        [ActionName("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            if (_context.Courses == null)
            {
                return NotFound();
            }

            List<Course>? courses = await _context.Courses.ToListAsync();

            if (courses == null)
            {
                return NotFound();
            }

            return Ok(courses);
        }


        // POST: /api/courses/edit?id=1
        [HttpPut]
        [ActionName("Edit")]
        public async Task<IActionResult> Edit([FromForm] EditCourseRequest editCourseRequest)
        {
            Course? currentCourse = await _context.Courses.FindAsync(editCourseRequest.ID);

            if (currentCourse != null)
            {
                currentCourse.Name = editCourseRequest.Name;
                currentCourse.Assignments = editCourseRequest.Assignments;
                await _context.SaveChangesAsync();
                return Ok(currentCourse);
            }
            return NotFound();
        }


        // DELETE: /api/courses/delete?id=5
        [HttpDelete]
        [ActionName("Delete")]
        public async Task<IActionResult> Delete(int id)
        {
            Course? course = await _context.Courses.FindAsync(id);

            if (course != null)
            {
                _context.Remove(course);
                await _context.SaveChangesAsync();
                return Ok(course);
            }

            return NotFound();
        }
        #endregion
    }
}
