package pe.edu.upeu.KenyRamirez.DaoImp;

import java.util.ArrayList;
import java.util.List;

import pe.edu.upeu.KenyRamirez.Dao.UsuarioDao;
import pe.edu.upeu.KenyRamirez.Entity.Usuario;

public class UsuarioDaoImp implements UsuarioDao {
	List<Usuario> lista=new ArrayList<>();
	public void naUsuarioDaoImpme() {
		
	}
	@Override
	public String agregar(Usuario u) {
		Usuario asd = new Usuario("ana", "123");
		lista.add(asd);
		for (Usuario usuario : lista) {
		if (u.getNombre()==usuario.getNombre()) {
			
			return "Usuario Existe";
			}
		}
		return "Usuario No Existe";
	}

}
