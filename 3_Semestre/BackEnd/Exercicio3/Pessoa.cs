using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio3
{
    public class Pessoa
    {
        public string Nome = "";
        private int idade ;

        public int Idade
        {
            get{return idade;}
            set
            {
               if (value > 0)
               {
                idade = value;

                
               }
                else
                {
                      Console.WriteLine("Não foi possivel completar a ação tente mais tarde chefe");

                }
            }
        }
        


       

        public void Exibirdados()
        {
            Console.WriteLine($"Nome: {Nome}") ;
            Console.WriteLine($"Idade: {Idade}");
        }

    }
}

