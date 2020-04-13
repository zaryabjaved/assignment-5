using json.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace json.Controllers
{
    public class HomeController : Controller
    {
        public static Student[] empList = new Student[]

            {
                new Student(){Name="zaryab",Regno="bse173014",Cgpa="4"},
                new Student(){Name="ali",Regno="bse173022",Cgpa="3"},
                new Student(){Name="warisha",Regno="bse173022",Cgpa="2.2"},
                new Student(){Name="usama",Regno="bse173012",Cgpa="1.2"},
            };

        public  JsonResult GetEmpData()
        {
            return Json(empList);
        }

    }