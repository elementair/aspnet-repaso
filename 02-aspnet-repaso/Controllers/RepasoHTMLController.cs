using _02_aspnet_repaso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace _02_aspnet_repaso.Controllers
{
    public class RepasoHTMLController : Controller
    {
        // GET: RepasoHTML
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Tabla() 
        {
            return View();
        }
        public ActionResult ComboBox() 
        {
            return View();
        }
        public ActionResult TablaJS() 
        {
            return View();
        }
        public JsonResult listarPersonas()
        {
            List<Persona> listaPersona = new List<Persona>
            {
                new Persona { idPersona=1,nombre="Emanuel",apellidoPaterno="Arias" },
                new Persona { idPersona=2,nombre="Jose",apellidoPaterno="Arias" },
                new Persona { idPersona=3,nombre="Sebastian",apellidoPaterno="Arias" },

            };
            return Json(listaPersona,JsonRequestBehavior.AllowGet); 
        }
    }
}