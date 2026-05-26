using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio4
{
    public class Pessoa
    {
        public string Nome = "";
    

        public int Idade;

        public Pessoa(string nome, int idade)
        {
            Nome = nome;
            if (idade > 0)

            {
             idade = idade;

            }
            else
            {
                Idade = 0;
            }
        }

      
        


        public void Exibirdados()
        {
            Console.WriteLine($"Nome: {Nome}") ;
            Console.WriteLine($"Idade: {Idade}");
        }

    }
}