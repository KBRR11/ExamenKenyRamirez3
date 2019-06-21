package pe.edu.upeu.KenyRamirez.DaoImp;

import pe.edu.upeu.KenyRamirez.Dao.CalcularDao;

public class Calcular implements CalcularDao{

	@Override
	public double calcular(String nombre,int horas) {
		double x;
		x=horas*50;
		return x;
	}
	
}
