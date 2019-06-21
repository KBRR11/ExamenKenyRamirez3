package pe.edu.upeu.KenyRamirez.Controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import pe.edu.upeu.KenyRamirez.Dao.CalcularDao;
import pe.edu.upeu.KenyRamirez.Dao.UsuarioDao;
import pe.edu.upeu.KenyRamirez.DaoImp.Calcular;
import pe.edu.upeu.KenyRamirez.DaoImp.UsuarioDaoImp;
import pe.edu.upeu.KenyRamirez.Entity.Usuario;

/**
 * Servlet implementation class HorasTrabajo
 */
@WebServlet("/ht")
public class HorasTrabajo extends HttpServlet {
	UsuarioDao ud= new UsuarioDaoImp();
	CalcularDao c = new Calcular();
	private static final long serialVersionUID = 1L;
	Gson g = new Gson();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HorasTrabajo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		int op=Integer.parseInt(request.getParameter("op"));
		System.out.println(op);
		switch (op) {
		case 1:System.out.println(request.getParameter("nom")+" "+Integer.parseInt(request.getParameter("horas")));
			out.println(g.toJson(c.calcular(request.getParameter("nom"),Integer.parseInt(request.getParameter("horas")))));
			
			break;

		case 2:Usuario u= new Usuario(request.getParameter("nombres"), request.getParameter("pass"));
			out.println(g.toJson(ud.agregar(u)));
		
		break;
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
