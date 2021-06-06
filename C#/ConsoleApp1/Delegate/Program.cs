using System;
using System.IO;

namespace Delegate
{
    class Program
    {
        static void Main(string[] args)
        {
            Button b1 = new Button();
            Button b2 = new Button();
            Button b3 = new Button();
            b1.OnClick = Boolean;

            DirectoryInfo di = new DirectoryInfo(@"C:\Users\Chimco26\Documents\git\");
            Console.WriteLine(di.FullName);
            long size = CalculateSize(di);
            Console.WriteLine(size);
            
        }

        static long CalculateSize(DirectoryInfo directory)
        {
            long size = 0;
            foreach (var file in directory.GetFiles())
            {
                size += file.Length;
            }
            foreach (var dir in directory.GetDirectories())
            {
                size += CalculateSize(dir);
            }
            return size;
        }

        static bool Boolean(int id)
        {
            return true;
        }


    }
}
